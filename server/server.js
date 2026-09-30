// Small Node server for the VPS: runs the same handler as the Vercel
// functions in /api (send-lead, telegram-webhook), so the code stays in one place.
// No dependencies — only built-in Node modules.
import http from "node:http";
import sendLead from "../api/send-lead.js";
import telegramWebhook from "../api/telegram-webhook.js";

const routes = {
  "/api/send-lead": sendLead,
  "/api/telegram-webhook": telegramWebhook,
};

const PORT = Number(process.env.PORT) || 3001;
const MAX_BODY_SIZE = 20 * 1024; // 20 KB is plenty for a lead form

// Adds the Vercel-style response helpers the handler uses: status() and json()
function withHelpers(response) {
  response.status = (code) => {
    response.statusCode = code;
    return response;
  };

  response.json = (data) => {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(data));
    return response;
  };

  return response;
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > MAX_BODY_SIZE) {
        reject(new Error("Body too large"));
        request.destroy();
      }
    });

    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });

    request.on("error", reject);
  });
}

const server = http.createServer(async (request, response) => {
  withHelpers(response);

  const route = routes[request.url.split("?")[0]];

  if (!route) {
    return response.status(404).json({ message: "Not found" });
  }

  try {
    request.body = request.method === "POST" ? await readJsonBody(request) : {};
  } catch {
    return response.status(400).json({ message: "Invalid request body" });
  }

  return route(request, response);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Lead API listening on http://127.0.0.1:${PORT}`);
});

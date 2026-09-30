// Telegram calls this URL when someone presses a status button under a lead.
// We rewrite the status line in the lead message and keep the buttons.
import {
  LEAD_STATUSES,
  STATUS_PREFIX,
  leadStatusKeyboard,
} from "./lead-statuses.js";

const STATUS_MARKER = "\n\n📌 Status:";

async function telegram(token, method, body) {
  const response = await fetch(
    `https://api.telegram.org/bot${token}/${method}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    console.error(`Telegram ${method} failed`, await response.text());
  }
}

function whoAndWhen(user) {
  const name =
    [user?.first_name, user?.last_name].filter(Boolean).join(" ") ||
    (user?.username ? `@${user.username}` : "Someone");

  const time = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/New_York",
  });

  return `${name} · ${time}`;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;

  // only Telegram knows the secret (set in setWebhook) — reject everything else
  if (
    !secret ||
    request.headers["x-telegram-bot-api-secret-token"] !== secret
  ) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  const query = request.body?.callback_query;

  // not a button press (e.g. a regular message to the bot) — nothing to do
  if (!query?.data?.startsWith(STATUS_PREFIX) || !query.message?.text) {
    return response.status(200).json({ ok: true });
  }

  const statusId = query.data.slice(STATUS_PREFIX.length);
  const status = LEAD_STATUSES.find((item) => item.id === statusId);

  if (!status) {
    return response.status(200).json({ ok: true });
  }

  // drop the previous status block (if any) and add the new one
  const leadText = query.message.text.split(STATUS_MARKER)[0];
  const newText = `${leadText}${STATUS_MARKER} ${status.label}\n👤 ${whoAndWhen(query.from)}`;

  try {
    await telegram(token, "editMessageText", {
      chat_id: query.message.chat.id,
      message_id: query.message.message_id,
      text: newText,
      reply_markup: leadStatusKeyboard(),
    });

    await telegram(token, "answerCallbackQuery", {
      callback_query_id: query.id,
      text: `Status: ${status.label}`,
    });
  } catch (error) {
    console.error("Telegram webhook error:", error);
  }

  // always 200, otherwise Telegram keeps re-sending the same update
  return response.status(200).json({ ok: true });
}

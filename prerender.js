import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render } = await import("./dist-server/entry-server.js");

const routesToPrerender = ["/"];

for (const url of routesToPrerender) {
  const { html } = render(url);

  const filled = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
  );

  const filePath = url === "/" ? "dist/index.html" : `dist${url}/index.html`;

  fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true });
  fs.writeFileSync(toAbsolute(filePath), filled);

  console.log("pre-rendered:", filePath);
}

fs.rmSync(toAbsolute("dist-server"), { recursive: true, force: true });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function preloadCriticalFonts() {
  return {
    name: "preload-critical-fonts",
    enforce: "post",
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) {
        return html;
      }

      const fonts = Object.keys(ctx.bundle).filter((file) =>
        /(Cygre-ExtraBold|inter-medium)[^/]*\.woff2$/.test(file),
      );

      if (fonts.length === 0) {
        return html;
      }

      const links = fonts
        .map(
          (file) =>
            `<link rel="preload" as="font" type="font/woff2" href="/${file}" crossorigin>`,
        )
        .join("\n    ");

      return html.replace("</head>", `  ${links}\n  </head>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), preloadCriticalFonts()],
});

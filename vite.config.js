import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    sourcemap: false,

    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react-vendor",
              test: /node_modules\/(react|react-dom)\//,
            },
            {
              name: "router-vendor",
              test: /node_modules\/react-router/,
            },
            {
              name: "leaflet-vendor",
              test: /node_modules\/(leaflet|react-leaflet)\//,
            },
            {
              name: "helmet-vendor",
              test: /node_modules\/react-helmet-async\//,
            },
          ],
        },
      },
    },
  },
});

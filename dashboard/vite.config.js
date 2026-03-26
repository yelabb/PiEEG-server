import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/ws": {
        target: "ws://localhost:1616",
        ws: true,
        rewriteWsPath: true,
      },
    },
  },
  build: {
    outDir: "../pieeg_server/static/dashboard",
    emptyOutDir: true,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import { resolve } from "path";

// Read version from pyproject.toml so the dashboard always knows the build version
const pyproject = readFileSync(resolve(__dirname, "../pyproject.toml"), "utf-8");
const versionMatch = pyproject.match(/^version\s*=\s*"(.+)"/m);
const APP_VERSION = versionMatch ? versionMatch[1] : "0.0.0";

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(APP_VERSION),
  },
  assetsInclude: ["**/*.obj"],
  server: {
    port: 3000,
    proxy: {
      "/ws": {
        target: "ws://localhost:1616",
        ws: true,
        rewriteWsPath: true,
      },
      "/auth": {
        target: "http://localhost:1617",
        changeOrigin: true,
      },
      "/api": {
        target: "http://localhost:1617",
        changeOrigin: true,
      },
      "/recordings": {
        target: "http://localhost:1617",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "../pieeg_server/static/dashboard",
    emptyOutDir: true,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePWA from "./vitePWA.config";

let faviconURL = "/favicon.svg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePWA],
  base: "/network-first-pwa-boilerplate/",
});

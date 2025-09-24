import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [svgr({ exportAsDefault: true }), react(), tailwindcss()],
    server: {
        port: 8080,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src"),
        },
    },
});

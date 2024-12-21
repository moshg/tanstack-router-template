import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({}),
		react(),
		checker({
			typescript: true,
		}),
	],
});

import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			$db: "./src/db",
			$server: "./src/server",
		},
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
	},
	preprocess: vitePreprocess(),
};

export default config;

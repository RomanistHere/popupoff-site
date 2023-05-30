/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				logo: ["Monkstead"],
			},
			colors: {
				"dark": "#222831",
				"bright": "#F9FFEE",
				"accent": "#EFBB35",
			}
		},
	},
	plugins: [],
};

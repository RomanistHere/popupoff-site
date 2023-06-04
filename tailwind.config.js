const plugin = require("tailwindcss/plugin");

// reference: https://stackoverflow.com/a/67458852/11698825
const hoverPlugin = plugin(function ({ addVariant, e, postcss }) {
	addVariant("hover", ({ container, separator }) => {
		const hoverRule = postcss.atRule({
			name: "media",
			params: "(hover: hover) and (pointer: fine)",
		});
		hoverRule.append(container.nodes);
		container.append(hoverRule);
		hoverRule.walkRules(rule => {
			rule.selector = `.${e(`hover${separator}${rule.selector.slice(1)}`)}:hover`;
		});
	});
});

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				logo: ["Monkstead"],
			},
			colors: {
				dark: "#222831",
				bright: "#F9FFEE",
				accent: "#EFBB35",
			},
			screens: {
				"-2xl": { max: "1535px" },
				"-xl": { max: "1279px" },
				"-lg": { max: "1023px" },
				"-md": { max: "767px" },
				"-sm": { max: "639px" },
				"@md": { min: "640px", max: "767px" },
				"@lg": { min: "768px", max: "1023px" },
				"@xl": { min: "1024px", max: "1279px" },
				"@2xl": { min: "1280px", max: "1535px" },
			},
		},
	},
	plugins: [hoverPlugin],
};

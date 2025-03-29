import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			animation: {
				aurora: "aurora 60s linear infinite",
				spotlight: "spotlight 2s ease .75s 1 forwards",
			},
			keyframes: {
				spotlight: {
					"0%": {
						opacity: "0",
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: "1",
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
				aurora: {
					from: {
						backgroundPosition: "50% 50%, 50% 50%",
					},
					to: {
						backgroundPosition: "350% 50%, 350% 50%",
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...fontFamily.sans],
				spaceMono: ["var(--font-spaceMono)", ...fontFamily.mono],
			},
		},
	},
	plugins: [addVariablesForColors],
} satisfies Config;

// biome-ignore lint/suspicious/noExplicitAny: aceternity is a bitch
function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	);

	addBase({
		":root": newVars,
	});
}

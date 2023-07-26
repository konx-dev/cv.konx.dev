/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			playfair: ["Playfair Display", "serif"],
			opensans: ["Open Sans", "sans-serif"],
		},
		colors: {
			brand: {
				navy: "#0A192F",
				teal: "#5BE8C9",
				grey: "#8892B0",
				white: "#CCD6F6",
			},
		},
		extend: {},
	},
	plugins: [],
};

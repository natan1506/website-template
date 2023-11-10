/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				palette: {
					red: "#E92A49",
					gray: "#213037",
					darkblue: "#181D35",
					blue: "#61778E",
					white: "#F3F0EF"
				}
			}
		},
	},
	plugins: [],
};

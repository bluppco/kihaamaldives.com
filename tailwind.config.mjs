/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		screens: {

			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'mac': '1440px',
			'2xl': '1536px'

		},

		extend: {

			fontFamily: {

				"josefin": [ "Josefin Sans", "sans-serif" ],

			},

			colors: {

				"kmr_green": "#51c2b9",

			}

		},
	},
	plugins: [],
}

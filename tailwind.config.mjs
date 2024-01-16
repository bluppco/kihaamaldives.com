/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {

			screens: {

				'mac': '1440px'
			},

			fontFamily: {

				"josefin": [ "Josefin Sans", "sans-serif" ],
				"montserrat": [ "Montserrat", "sans-serif" ]

			},

			colors: {

				"kmr_green": "#51c2b9",
				"kmr_dim_gray": "#696969",

			},
			animation: {
				'ping': 'ping 3s cubic-bezier(0,0,.2,1) infinite',
			}

		},
	},
	plugins: [],
}

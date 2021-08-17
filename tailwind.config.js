module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './styles/**/*.css'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				testimonial: '32rem',
			},
			removeArrow: ['group-hover'],
			colors: {
				primary: {
					default: '#acb7c1',
					darker: '#9ba5ae',
					dark: '#8a929a',
					lighter: '#b4bec7',
					lightest: '#c5cdd4',
				},

				secondary: '#fff',

				navColors: {
					first: 'rgba(24, 26, 29, 0)',
					second: 'rgba(24, 26, 29, 0.3)',
				},
				darkCol: {
					default: 'rgb(24, 26, 29)',
				},
				jubRed: '#d00c2a',
				testGrey: '#090A0C',
			},

			fontFamily: {
				trade: ['trade-gothic-next-condensed'],
			},

			backgroundImage: (theme) => ({
				'hero-image': "url('/bruno-nascimento-PHIgYUGQPvU-unsplash.jpg')",
				'men-image': "url('/andrew-donovan-valdivia-zlY2woZT_RA-unsplash.jpg')",
				'women-image': "url('/caley-vanular-NGxd0beBLps-unsplash.jpg')",
				'group-image': "url('/gabin-vallet-J154nEkpzlQ-unsplash.jpg')",
				'testimonial-image': "url('/scott-webb-gWerBZuKM9c-unsplash.jpg')",
				'testBg': "url('/bg-test.png')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

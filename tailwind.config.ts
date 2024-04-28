import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		container: undefined,
		// container: {
		// 	padding: {
		// 		DEFAULT: '1rem',
		// 		sm: '2rem',
		// 		md: '3rem',
		// 		lg: '4rem',
		// 		xl: '5rem',
		// 		'2xl': '6.25rem'
		// 	},
		// },
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1440px',

			'2xl-max': { max: '1439.98px' },
			'xl-max': { max: '1199.98px' },
			'lg-max': { max: '991.98px' },
			'md-max': { max: '767.98px' },
			'sm-max': { max: '575.98px' }
		},
		extend: {
			colors: {
				background: '#000000',
				words: '#FFFFFF',
				link: '#0075FF',
				accent: '#780C0E',
				'accent-sup': '#E41E1E',
				input: '#FFFFFF',
				'input-text': '#000000',
				'input-placeholder': '#000000',
				'modal-overlay': '#ffffff',
				border: '#FFFFFF'
			},
			spacing: {
				'18': '4.5rem'
			},
			transitionDuration: {
				DEFAULT: '266ms'
			},
			fontSize: {
				'2xs': ['14px', '1.4'],
				'2xs-sm': ['16px', '1.4'],
				'2xs-md': ['18px', '1.4'],
				'2xs-lg': ['20px', '1.4'],
				'2xs-xl': ['22px', '1.4'],
				'2xs-2xl': ['24px', '1.4'],

				xs: ['16px', '1.4'],
				'xs-sm': ['18px', '1.4'],
				'xs-md': ['22px', '1.4'],
				'xs-lg': ['26px', '1.4'],
				'xs-xl': ['28px', '1.4'],
				'xs-2xl': ['32px', '1.4'],

				sm: ['20px', '1.4'],
				'sm-sm': ['25px', '1.4'],
				'sm-md': ['30px', '1.4'],
				'sm-lg': ['36px', '1.4'],
				'sm-xl': ['42px', '1.4'],
				'sm-2xl': ['48px', '1.4'],

				md: ['28px', '1.1'],
				'md-sm': ['40px', '1.1'],
				'md-md': ['50px', '1.1'],
				'md-lg': ['60px', '1.1'],
				'md-xl': ['70px', '1.1'],
				'md-2xl': ['80px', '1.1']
			},
			lineHeight: {
				tight: '1.1',
				snug: '1.25',
				normal: '1.4'
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans]
			},
			textShadow: {
				DEFAULT:
					'-2px -2px 10px var(--tw-shadow-color), 2px 2px 10px var(--tw-shadow-color)',
				border: '0 0 2px var(--tw-shadow-color)'
			},
			boxShadow: {
				sm: '0px 2px 30px 0px, 0px -2px 20px 0px',
				md: '2px 2px 20px 0, -2px -2px 20px 0',
				lg: '-4px -4px 20px 0px, 4px 4px 20px 0px'
			},
			backgroundImage: {
				'accent-radial-gradient':
					'radial-gradient(50% 50% at 50% 50%, rgb(120, 12, 14) 28.64583432674408%, rgb(120, 12, 14, 0.36) 83.85416865348816%, rgb(120, 12, 14, 0) 100%)				'
			}
		}
	},
	plugins: [
		require('tailwindcss-animate'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'shade-text': value => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			)
		}),
		plugin(function ({ addComponents }) {
			addComponents({
				'.container': {
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingRight: '1rem',
					paddingLeft: '1rem',
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '576px',
						paddingRight: '2rem',
						paddingLeft: '2rem'
					},
					'@screen md': {
						maxWidth: '768px',
						paddingRight: '3rem',
						paddingLeft: '3rem'
					},
					'@screen lg': {
						maxWidth: '992px',
						paddingRight: '4rem',
						paddingLeft: '4rem'
					},
					'@screen xl': {
						maxWidth: '1200px',
						paddingRight: '5rem',
						paddingLeft: '5rem'
					},
					'@screen 2xl': {
						maxWidth: '1440px',
						paddingRight: '6.25rem',
						paddingLeft: '6.25rem'
					}
				}
			})
		})
	]
} satisfies Config

export default config

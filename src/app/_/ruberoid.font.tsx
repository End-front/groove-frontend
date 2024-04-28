import localFont from 'next/font/local'

const RuberoidFont = localFont({
	display: 'swap',
	fallback: ['system-ui', 'Arial'],
	variable: '--font-sans',
	src: [
		{
			path: './assets/fonts/Ruberoid-Light.woff',
			weight: '300',
			style: 'normal'
		},
		{
			path: './assets/fonts/Ruberoid-Light.woff2',
			weight: '300',
			style: 'normal'
		},
		{
			path: './assets/fonts/Ruberoid-Regular.woff',
			weight: '400',
			style: 'normal'
		},
		{
			path: './assets/fonts/Ruberoid-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: './assets/fonts/Ruberoid-Medium.woff',
			weight: '500',
			style: 'normal'
		},
		{
			path: './assets/fonts/Ruberoid-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: './assets/fonts/Ruberoid-SemiBold.woff',
			weight: '600',
			style: 'normal'
		},
		{
			path: './assets/fonts/Ruberoid-SemiBold.woff2',
			weight: '600',
			style: 'normal'
		},
		{
			path: './assets/fonts/Ruberoid-Bold.woff',
			weight: '700',
			style: 'normal'
		},
		{
			path: './assets/fonts/Ruberoid-Bold.woff2',
			weight: '700',
			style: 'normal'
		}
	]
})

export { RuberoidFont }

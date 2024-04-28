/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'sbis.perm.ru',
				port: ''
				// pathname: '/image/upload/**'
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000'
				// pathname: '/image/upload/**'
			}
		]
	}
}

export default nextConfig

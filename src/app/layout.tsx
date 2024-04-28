import type { Metadata } from 'next'

import { RootLayout } from '@/widgets/root-layout'

import { cn } from '@/shared/lib/class-name'

import { AppProviders } from './_/app-providers'
import { SITE_NAME, STANDARD_DESCRIPTION } from './_/constants.seo'
import { SvgGlobalDefs } from './_/global-svg-defs'
import { RuberoidFont } from './_/ruberoid.font'
import './globals.css'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: STANDARD_DESCRIPTION
}

export default function RootLayoutNext({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={cn(
					'bg-background',
					'font-sans text-words antialiased',
					RuberoidFont.variable
				)}
			>
				<AppProviders>
					<RootLayout>{children}</RootLayout>
				</AppProviders>
				<SvgGlobalDefs />
			</body>
		</html>
	)
}

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
				<script
					type='text/javascript'
					dangerouslySetInnerHTML={{
						__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
						m[i].l=1*new Date();
						for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
						k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
						(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

						ym(94501748, "init", {
								clickmap:true,
								trackLinks:true,
								accurateTrackBounce:true,
								webvisor:true
						});`
					}}
				></script>
				<noscript>
					<div>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src='https://mc.yandex.ru/watch/94501748'
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>
				<AppProviders>
					<RootLayout>{children}</RootLayout>
				</AppProviders>
				<SvgGlobalDefs />
			</body>
		</html>
	)
}

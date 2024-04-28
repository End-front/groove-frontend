'use client'

import { usePathname } from 'next/navigation'

import { ROUTER_PATHS } from '@/shared/constant/routes'
import { useScrollPosition } from '@/shared/lib/react'
import { UiFooter } from '@/shared/ui/ui-footer'
import {
	CLASSNAMES_FOR_PADDING_TO_HEADER,
	UiHeader
} from '@/shared/ui/ui-header'

export function RootLayout({
	logoColorAccent,
	children
}: {
	logoColorAccent?: boolean
	children?: React.ReactNode
}) {
	const pathname = usePathname()
	const scroll = useScrollPosition()
	return (
		<div className='flex min-h-screen flex-col'>
			<UiHeader
				isScrolled={scroll.Y > 0}
				classNameLogo={
					pathname === ROUTER_PATHS.MAIN || pathname === ROUTER_PATHS.RENT
						? ''
						: 'text-accent'
				}
			/>
			<main className={CLASSNAMES_FOR_PADDING_TO_HEADER}>{children}</main>
			<UiFooter className='mt-auto' />
		</div>
	)
}

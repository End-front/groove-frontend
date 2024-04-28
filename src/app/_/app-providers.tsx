'use client'

import { ComposeChildren } from '@/shared/lib/react'
import { SmoothScrollProvider } from '@/shared/ui/ui-smooth-scroll'

export function AppProviders({ children }: { children?: React.ReactNode }) {
	return (
		<ComposeChildren>
			<SmoothScrollProvider />
			{children}
		</ComposeChildren>
	)
}

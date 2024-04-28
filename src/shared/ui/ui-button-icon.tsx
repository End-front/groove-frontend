import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/class-name'

const uiButtonIconVariants = cva(
	'aspect-square w-[48px] sm:w-[60px] md:w-[72px] lg:w-[84px] xl:w-[100px] 2xl:w-[112px] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-current bg-accent p-2 sm:p-3 md:p-4 lg:p-5 xl:p-5 2xl:p-6 text-[20px] font-medium uppercase leading-[1.4] text-words transition-colors disabled:pointer-events-none hover:bg-words hover:text-accent shadow-accent',
	{
		variants: {
			shadow: {
				none: '',
				accent: 'shadow-md shadow-accent/50'
			}
		},
		defaultVariants: {
			shadow: 'none'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof uiButtonIconVariants> {
	asChild?: boolean
}

const UiButtonIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, shadow, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(uiButtonIconVariants({ shadow, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
UiButtonIcon.displayName = 'Button'

export { UiButtonIcon, uiButtonIconVariants }

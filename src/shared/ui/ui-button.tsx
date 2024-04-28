import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/class-name'

const uiButtonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-full border lg:border-2 border-current bg-accent  font-medium uppercase  text-words transition-colors focus-visible:outline-none disabled:pointer-events-none hover:bg-words hover:text-accent',
	{
		variants: {
			size: {
				sm: 'py-1.5 px-3 lg:py-2 lg:px-4 text-[16px] leading-[1.4] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]',
				md: 'px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10 py-1 lg:py-1.5 2xl:py-2 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] leading-tight'
			},
			minSize: {
				none: '',
				sm: 'min-w-[132px] sm:min-w-[144px] md:min-w-[156px] lg:min-w-[170px] xl:min-w-[180px] 2xl:min-w-[190px]',
				md: 'min-w-[200px] sm:min-w-[290px] md:min-w-[380px] lg:min-w-[480px] xl:min-w-[580px] 2xl:min-w-[680px]'
			}
		},
		defaultVariants: {
			size: 'md',
			minSize: 'none'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof uiButtonVariants> {
	asChild?: boolean
}

const UiButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, size, minSize, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(uiButtonVariants({ size, minSize, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
UiButton.displayName = 'Button'

export { UiButton, uiButtonVariants }

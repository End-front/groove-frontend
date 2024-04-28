import * as React from 'react'

import { cn } from '../lib/class-name'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const UiInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'2xl:h-18 md:lg-6 h-9 w-full rounded-[8px] border border-accent bg-input/80 px-3 py-0 text-[16px] leading-[auto] text-input-text shadow-[inset_4px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-input-placeholder/60 focus-visible:outline-none sm:h-11 sm:rounded-[10px] sm:px-4 sm:text-[22px] md:h-12 md:rounded-[12px] md:text-[28px] lg:h-14 lg:rounded-[16px] lg:border-2 lg:px-8 lg:text-[32px] xl:h-16 xl:rounded-[20px] xl:px-10 xl:text-[38px] 2xl:rounded-[24px] 2xl:px-12 2xl:text-[42px]',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
UiInput.displayName = 'Input'

export { UiInput }

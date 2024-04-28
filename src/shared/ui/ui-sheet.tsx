'use client'

import * as SheetPrimitive from '@radix-ui/react-dialog'
import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '../lib/class-name'

const UiSheet = SheetPrimitive.Root

const UiSheetTrigger = SheetPrimitive.Trigger

const UiSheetClose = SheetPrimitive.Close

const UiSheetPortal = SheetPrimitive.Portal

const UiSheetOverlay = forwardRef<
	React.ElementRef<typeof SheetPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn('fixed inset-0 z-40 bg-transparent', className)}
		{...props}
		ref={ref}
	/>
))
UiSheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
	'fixed z-40 bg-background/80 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out',
	{
		variants: {
			side: {
				top: 'inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
				bottom:
					'inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
				left: 'inset-y-0 left-0 h-full w-full data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
				right:
					'inset-y-0 right-0 h-full w-full data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'
			}
		},
		defaultVariants: {
			side: 'right'
		}
	}
)

interface UiSheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
		VariantProps<typeof sheetVariants> {}

const UiSheetContent = forwardRef<
	React.ElementRef<typeof SheetPrimitive.Content>,
	UiSheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
	<UiSheetPortal>
		<UiSheetOverlay />
		<SheetPrimitive.Content
			ref={ref}
			className={cn(sheetVariants({ side }), className)}
			{...props}
		>
			{children}
		</SheetPrimitive.Content>
	</UiSheetPortal>
))
UiSheetContent.displayName = SheetPrimitive.Content.displayName

export {
	UiSheet,
	UiSheetPortal,
	UiSheetOverlay,
	UiSheetTrigger,
	UiSheetClose,
	UiSheetContent
}

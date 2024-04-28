'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/class-name'

const UiDialog = DialogPrimitive.Root

const UiDialogTrigger = DialogPrimitive.Trigger

const UiDialogPortal = DialogPrimitive.Portal

const UiDialogClose = DialogPrimitive.Close

const UiDialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			'fixed inset-0 z-50 flex overflow-y-auto overflow-x-hidden bg-modal-overlay/50 px-3 py-6 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
	/>
))
UiDialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const dialogContentVariants = cva(
	'grid items-start grid-cols-[1fr_40px] *:col-span-2 shadow-lg shadow-background/50 z-50 m-auto max-w-full rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
	{
		variants: {
			type: {
				accent: 'border border-words bg-accent',
				gray: 'border border-words bg-[#262626]',
				background: 'border border-words bg-background'
			}
		},
		defaultVariants: {
			type: 'background'
		}
	}
)

export interface dialogContentProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
		VariantProps<typeof dialogContentVariants> {
	classNameClose?: string
}

const UiDialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	dialogContentProps
>(({ className, classNameClose, children, type, ...props }, ref) => (
	<UiDialogPortal>
		<UiDialogOverlay>
			<DialogPrimitive.Content
				ref={ref}
				className={cn(dialogContentVariants({ type, className }))}
				{...props}
			>
				<DialogPrimitive.Close
					className={cn(
						'relative z-[1] !col-start-2 !col-end-3 flex focus-within:outline-none',
						classNameClose
					)}
				>
					<div className='relative mr-2 mt-2 h-[32px] w-[32px]'>
						<span className='absolute left-1/2 top-1/2 block h-[4px] w-[30px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[4px] bg-current'></span>
						<span className='my-[4px] block h-[4px] w-[30px] rounded-[4px] bg-transparent'></span>
						<span className='absolute left-1/2 top-1/2 block h-[4px] w-[30px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[4px] bg-current'></span>
					</div>
					<span className='sr-only'>Close</span>
				</DialogPrimitive.Close>
				{children}
			</DialogPrimitive.Content>
		</UiDialogOverlay>
	</UiDialogPortal>
))
UiDialogContent.displayName = DialogPrimitive.Content.displayName

const UiDialogHeader = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	{ className?: string; children?: React.ReactNode }
>(({ className, ...props }, ref) => (
	<div
		className={cn(
			'-order-1 !col-start-1 !col-end-2 -mr-[40px] px-[40px] text-center',
			className
		)}
		ref={ref}
		{...props}
	></div>
))
UiDialogHeader.displayName = 'DialogHeader'

export {
	UiDialog,
	UiDialogPortal,
	UiDialogOverlay,
	UiDialogClose,
	UiDialogTrigger,
	UiDialogContent,
	UiDialogHeader
}

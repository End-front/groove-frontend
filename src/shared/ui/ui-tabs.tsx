'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

import { cn } from '../lib/class-name'

const UiTabs = TabsPrimitive.Root

const UiTabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn('grid grid-cols-2 pb-2', className)}
		{...props}
	/>
))
UiTabsList.displayName = TabsPrimitive.List.displayName

const UiTabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn('data-[state=active]:bg-accent-radial-gradient', className)}
		{...props}
	/>
))
UiTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const UiTabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn('flex justify-center', className)}
		{...props}
	/>
))
UiTabsContent.displayName = TabsPrimitive.Content.displayName

export { UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent }

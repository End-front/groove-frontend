'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

import { cn } from '@/shared/lib/class-name'

const ScheduleTabs = TabsPrimitive.Root

const ScheduleTabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			'grid grid-cols-2 pb-2 sm:pb-3 md:pb-4 lg:pb-5 xl:pb-6 2xl:pb-8',
			className
		)}
		{...props}
	/>
))
ScheduleTabsList.displayName = TabsPrimitive.List.displayName

const ScheduleTabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			'flex items-center justify-center text-[20px] font-semibold !leading-snug *:data-[state=active]:bg-accent-radial-gradient sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[54px] 2xl:text-[70px]',
			className
		)}
		{...props}
	>
		<div className='min-w-[80%] px-[0.5em]'>{children}</div>
	</TabsPrimitive.Trigger>
))
ScheduleTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const ScheduleTabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn('flex justify-center', className)}
		{...props}
	/>
))
ScheduleTabsContent.displayName = TabsPrimitive.Content.displayName

export {
	ScheduleTabs,
	ScheduleTabsList,
	ScheduleTabsTrigger,
	ScheduleTabsContent
}

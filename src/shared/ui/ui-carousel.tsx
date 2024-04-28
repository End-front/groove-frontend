'use client'

import useEmblaCarousel, {
	type UseEmblaCarouselType
} from 'embla-carousel-react'
import * as React from 'react'

import { cn } from '../lib/class-name'

type UiCarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
	opts?: CarouselOptions
	plugins?: CarouselPlugin
	orientation?: 'horizontal' | 'vertical'
	setApi?: (api: UiCarouselApi) => void
}

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	api: ReturnType<typeof useEmblaCarousel>[1]
	scrollPrev: () => void
	scrollNext: () => void
	canScrollPrev: boolean
	canScrollNext: boolean
} & CarouselProps

const UiCarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
	const context = React.useContext(UiCarouselContext)

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />')
	}

	return context
}

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)

const UiCarousel = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
	(
		{
			orientation = 'horizontal',
			opts,
			setApi,
			plugins,
			className,
			children,
			...props
		},
		ref
	) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === 'horizontal' ? 'x' : 'y'
			},
			plugins
		)
		const [canScrollPrev, setCanScrollPrev] = React.useState(false)
		const [canScrollNext, setCanScrollNext] = React.useState(false)

		const [isInit, setIsInit] = React.useState(false)

		const onSelect = React.useCallback((api: UiCarouselApi) => {
			if (!api) {
				return
			}

			setCanScrollPrev(api.canScrollPrev())
			setCanScrollNext(api.canScrollNext())
		}, [])

		const scrollPrev = React.useCallback(() => {
			api?.scrollPrev()
		}, [api])

		const scrollNext = React.useCallback(() => {
			api?.scrollNext()
		}, [api])

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === 'ArrowLeft') {
					event.preventDefault()
					scrollPrev()
				} else if (event.key === 'ArrowRight') {
					event.preventDefault()
					scrollNext()
				}
			},
			[scrollPrev, scrollNext]
		)

		React.useEffect(() => {
			if (!api || !setApi) {
				return
			}

			setApi(api)
		}, [api, setApi])

		React.useEffect(() => {
			if (!api) {
				return
			}

			setIsInit(true)
			onSelect(api)
			api.on('reInit', onSelect)
			api.on('select', onSelect)

			return () => {
				api?.off('select', onSelect)
			}
		}, [api, onSelect])

		return (
			<UiCarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					opts,
					orientation:
						orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
					scrollPrev,
					scrollNext,
					canScrollPrev,
					canScrollNext
				}}
			>
				<div
					ref={ref}
					onKeyDownCapture={handleKeyDown}
					className={cn(
						'relative transition-opacity',
						!isInit && 'opacity-0',
						className
					)}
					role='region'
					aria-roledescription='carousel'
					{...props}
				>
					{children}
				</div>
			</UiCarouselContext.Provider>
		)
	}
)
UiCarousel.displayName = 'Carousel'

const UiCarouselContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel()

	return (
		<div ref={carouselRef}>
			<div
				ref={ref}
				className={cn(
					'flex',
					orientation === 'horizontal' ? '' : 'flex-col',
					className
				)}
				{...props}
			/>
		</div>
	)
})
UiCarouselContent.displayName = 'CarouselContent'

const UiCarouselItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { orientation } = useCarousel()

	return (
		<div
			ref={ref}
			role='group'
			aria-roledescription='slide'
			className={cn('min-w-0 shrink-0 grow-0 basis-1/2', className)}
			{...props}
		/>
	)
})
UiCarouselItem.displayName = 'CarouselItem'

export { type UiCarouselApi, UiCarousel, UiCarouselContent, UiCarouselItem }

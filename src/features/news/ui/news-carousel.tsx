'use client'

import useEmblaCarousel, {
	type UseEmblaCarouselType
} from 'embla-carousel-react'
import {
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react'

import { cn } from '@/shared/lib/class-name'

type NewsCarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
	opts?: CarouselOptions
	plugins?: CarouselPlugin
	orientation?: 'horizontal' | 'vertical'
	setApi?: (api: NewsCarouselApi) => void
}

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	api: ReturnType<typeof useEmblaCarousel>[1]
} & CarouselProps

const NewsCarouselContext = createContext<CarouselContextProps | null>(null)

function useCarousel() {
	const context = useContext(NewsCarouselContext)

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />')
	}

	return context
}

const TWEEN_FACTOR_BASE = 0.3
const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)

const NewsCarousel = forwardRef<
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
		const [isInit, setIsInit] = useState(false)
		const [emblaRef, emblaApi] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === 'horizontal' ? 'x' : 'y'
			},
			plugins
		)
		const tweenFactor = useRef(0)
		const tweenNodes = useRef<HTMLElement[]>([])

		const setTweenNodes = useCallback((emblaApi: NewsCarouselApi): void => {
			if (!emblaApi) return
			tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
				return slideNode.querySelector('div') as HTMLElement
			})
		}, [])

		// Make tween factor slide count agnostic
		const setTweenFactor = useCallback((emblaApi: NewsCarouselApi) => {
			if (!emblaApi) return
			tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
		}, [])

		const tweenScale = useCallback(
			(emblaApi: NewsCarouselApi, eventName?: string) => {
				if (!emblaApi) return
				const engine = emblaApi.internalEngine()
				const scrollProgress = emblaApi.scrollProgress()
				const slidesInView = emblaApi.slidesInView()
				const isScrollEvent = eventName === 'scroll'

				emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
					let diffToTarget = scrollSnap - scrollProgress
					const slidesInSnap = engine.slideRegistry[snapIndex]

					// Include all slides when tweening
					slidesInSnap.forEach(slideIndex => {
						if (isScrollEvent && !slidesInView.includes(slideIndex)) return

						if (engine.options.loop) {
							engine.slideLooper.loopPoints.forEach(loopItem => {
								const target = loopItem.target()

								if (slideIndex === loopItem.index && target !== 0) {
									const sign = Math.sign(target)

									if (sign === -1) {
										diffToTarget = scrollSnap - (1 + scrollProgress)
									}
									if (sign === 1) {
										diffToTarget = scrollSnap + (1 - scrollProgress)
									}
								}
							})
						}

						const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
						const scale = numberWithinRange(tweenValue, 0, 1).toString()
						const tweenNode = tweenNodes.current[slideIndex]
						tweenNode.style.transform = `scale(${scale})`
					})
				})
			},
			[]
		)

		useEffect(() => {
			if (!emblaApi) return

			setIsInit(true)
			setTweenNodes(emblaApi)
			setTweenFactor(emblaApi)
			tweenScale(emblaApi)

			emblaApi
				.on('reInit', setTweenNodes)
				.on('reInit', setTweenFactor)
				.on('reInit', tweenScale)
				.on('scroll', tweenScale)
		}, [emblaApi, tweenScale, setTweenFactor, setTweenNodes])

		return (
			<NewsCarouselContext.Provider
				value={{
					carouselRef: emblaRef,
					api: emblaApi,
					opts,
					orientation:
						orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal')
				}}
			>
				<div
					ref={ref}
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
			</NewsCarouselContext.Provider>
		)
	}
)
NewsCarousel.displayName = 'Carousel'

const NewsCarouselContent = forwardRef<
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
NewsCarouselContent.displayName = 'CarouselContent'

const NewsCarouselItem = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { orientation } = useCarousel()

	return (
		<div
			ref={ref}
			role='group'
			aria-roledescription='slide'
			className={cn(
				'min-w-0 max-w-[400px] shrink-0 grow-0 basis-1/2 select-none',
				className
			)}
			{...props}
		/>
	)
})
NewsCarouselItem.displayName = 'CarouselItem'

export {
	type NewsCarouselApi,
	NewsCarousel,
	NewsCarouselContent,
	NewsCarouselItem
}

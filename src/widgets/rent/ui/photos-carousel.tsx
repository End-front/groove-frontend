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

type PhotosCarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
	opts?: CarouselOptions
	plugins?: CarouselPlugin
	orientation?: 'horizontal' | 'vertical'
	setApi?: (api: PhotosCarouselApi) => void
}

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	api: ReturnType<typeof useEmblaCarousel>[1]
} & CarouselProps

const PhotosCarouselContext = createContext<CarouselContextProps | null>(null)

function useCarousel() {
	const context = useContext(PhotosCarouselContext)

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />')
	}

	return context
}

const PhotosCarousel = forwardRef<
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
				loop: true,

				...opts,
				axis: orientation === 'horizontal' ? 'x' : 'y'
			},
			plugins
		)

		useEffect(() => {
			if (!emblaApi) return

			setIsInit(true)
		}, [emblaApi])

		return (
			<PhotosCarouselContext.Provider
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
			</PhotosCarouselContext.Provider>
		)
	}
)
PhotosCarousel.displayName = 'Carousel'

const PhotosCarouselContent = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel()

	return (
		<div
			ref={carouselRef}
			className='h-full w-full overflow-hidden'
		>
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
PhotosCarouselContent.displayName = 'CarouselContent'

const PhotosCarouselItem = forwardRef<
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
				'relative shrink-0 grow-0 basis-full select-none',
				className
			)}
			{...props}
		/>
	)
})
PhotosCarouselItem.displayName = 'CarouselItem'

export {
	type PhotosCarouselApi,
	PhotosCarousel,
	PhotosCarouselContent,
	PhotosCarouselItem
}

import Image from 'next/image'

import { ROUTER_IDS_SECTIONS } from '@/shared/constant/routes'
import { cn } from '@/shared/lib/class-name'
import { UiButton } from '@/shared/ui/ui-button'
import {
	UiDialog,
	UiDialogContent,
	UiDialogHeader,
	UiDialogTrigger
} from '@/shared/ui/ui-dialog'
import { UiSection } from '@/shared/ui/ui-section'
import { VideoTag } from '@/shared/ui/ui-video-tag'

import { NEWS } from '../constant'
import {
	NewsCarousel,
	NewsCarouselContent,
	NewsCarouselItem
} from '../ui/news-carousel'

export function SectionNews() {
	return (
		<UiSection.Section
			className='overflow-hidden'
			id={ROUTER_IDS_SECTIONS.NEWS}
		>
			<div className='container'>
				<UiSection.Title>Что происходит:</UiSection.Title>
			</div>
			<NewsCarousel
				opts={{
					loop: true,
					containScroll: false
				}}
				className='px-4'
			>
				<NewsCarouselContent>
					{NEWS.map(item => (
						<UiDialog key={item.id}>
							<NewsCarouselItem>
								<UiDialogTrigger asChild>
									<div className='relative aspect-[1/1.75] cursor-pointer overflow-hidden rounded-xl border border-border shadow-lg shadow-accent-sup/30'>
										<Image
											src={item.image}
											alt=''
											fill
											className='object-cover'
										/>
									</div>
								</UiDialogTrigger>
							</NewsCarouselItem>
							<UiDialogContent className='relative w-full max-w-[500px] overflow-hidden lg:max-w-[720px]'>
								<UiDialogHeader className='text-md-adaptive pt-4 text-md font-semibold uppercase'>
									Новости
								</UiDialogHeader>
								<SVGLogo className='absolute left-1/2 top-1/2 -z-[1] h-[97%] w-[97%] -translate-x-1/2 -translate-y-1/2' />
								<div className='grid grid-cols-2 items-start gap-4 px-3 pb-5 pt-4 lg:gap-8 lg:px-6'>
									<div className='relative aspect-[1/1.75] cursor-pointer overflow-hidden rounded-xl border border-border shadow-lg shadow-accent-sup/30'>
										{item.video ? (
											<VideoTag
												playsInline
												controls
												muted
												className='h-full w-full object-cover'
												sources={[
													{
														src: item.video,
														type: 'video/mp4'
													}
												]}
											/>
										) : (
											<Image
												src={item.image}
												alt=''
												fill
												className='object-cover'
											/>
										)}
									</div>
									<div
										className='text-2xs-adaptive [&>a]:text-link self-stretch rounded-xl border border-border px-2 py-4 text-[12px] !leading-snug'
										dangerouslySetInnerHTML={{
											__html: item.description.replaceAll('\n', '<br />')
										}}
									/>
								</div>
								<div className='px-3 pb-5 text-center'>
									<UiButton minSize='md'>Больше</UiButton>
								</div>
							</UiDialogContent>
						</UiDialog>
					))}
				</NewsCarouselContent>
			</NewsCarousel>
		</UiSection.Section>
	)
}

function SVGLogo({ className }: { className?: string }) {
	return (
		<svg
			className={cn(className)}
			width='342'
			height='186'
			viewBox='0 0 342 186'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#section-logo-news-blur)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M120.119 176.468V163.334C134.739 172.057 152.526 177.108 171.374 177.108C190.058 177.108 207.444 172.239 221.987 163.654V176.468C222.557 176.282 223.129 176.119 223.699 175.956L223.7 175.956L223.701 175.956H223.701C224.523 175.722 225.344 175.488 226.152 175.186C238.203 170.689 248.962 163.956 258.185 155.646C267.214 147.512 274.348 138.082 279.328 127.504V163.013C280.833 161.813 282.387 160.454 283.813 159.169C293.037 150.859 300.283 141.196 305.275 130.339C310.267 119.481 312.963 107.815 312.963 96.0626C312.963 84.3106 310.267 72.6439 305.275 61.7863C300.283 50.9288 293.037 40.9457 283.813 32.6356C282.91 31.8228 281.957 31.1082 280.996 30.3887C280.439 29.9715 279.88 29.5526 279.328 29.1119V57.5739C274.348 46.9828 267.214 37.2458 258.185 29.1119C248.962 20.8019 238.203 14.3889 226.152 9.89155C225.622 9.69399 225.088 9.47774 224.551 9.26051C223.698 8.91582 222.84 8.56865 221.987 8.28986V23.9864C207.444 15.4021 190.058 10.5322 171.374 10.5322C152.526 10.5322 134.739 15.5842 120.119 24.3068V8.28986C119.344 8.54317 118.664 8.85294 117.977 9.16604C117.432 9.41465 116.882 9.66535 116.275 9.89155C104.224 14.3889 93.1453 20.8019 83.9212 29.1119C74.7281 37.3939 67.4497 47.1279 62.4585 57.9423V29.1119C61.9062 29.5525 61.3472 29.9713 60.7905 30.3884L60.7901 30.3885C59.8298 31.1081 58.8761 31.8227 57.9737 32.6356C48.7496 40.9457 41.5035 50.9288 36.5111 61.7863C31.5192 72.6439 28.823 84.3106 28.823 96.0626C28.823 107.815 31.5192 119.481 36.5111 130.339C41.5035 141.196 48.7496 150.859 57.9737 159.169C59.3992 160.454 60.9529 161.813 62.4585 163.013V126.815C67.4497 137.629 74.7281 147.364 83.9212 155.646C93.1453 163.956 104.224 170.689 116.275 175.186C117.258 175.553 118.094 175.819 119.001 176.108L119.002 176.109L119.005 176.109C119.361 176.223 119.728 176.34 120.119 176.468ZM21.7755 51.8558C18.8236 55.8357 16.1304 59.9056 14.0874 64.349C10.0022 73.2343 8.00095 82.9217 8.00095 92.5389C8.00095 102.156 10.0022 111.523 14.0874 120.408C16.1304 124.852 18.8236 129.242 21.7755 133.222V51.8558ZM327.699 64.349C325.656 59.9056 322.963 55.8357 320.011 51.8558V133.222C322.963 129.242 325.656 124.852 327.699 120.408C331.785 111.523 333.784 102.156 333.784 92.5389C333.784 82.9217 331.785 73.2343 327.699 64.349Z'
					fill='#780C0E'
					fillOpacity='0.5'
				/>
			</g>
		</svg>
	)
}

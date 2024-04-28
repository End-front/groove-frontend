'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { ROUTER_IDS_SECTIONS, ROUTER_PATHS } from '@/shared/constant/routes'
import { cn } from '@/shared/lib/class-name'
import { UiButton } from '@/shared/ui/ui-button'
import {
	UiDialog,
	UiDialogContent,
	UiDialogHeader
} from '@/shared/ui/ui-dialog'
import { UiSection } from '@/shared/ui/ui-section'

import {
	PhotosCarousel,
	PhotosCarouselContent,
	PhotosCarouselItem
} from './ui/photos-carousel'

export function SectionRent() {
	const [isOpenRules, setIsOpenRules] = useState(false)
	const [isOpenPrice, setIsOpenPrice] = useState(false)

	return (
		<>
			<UiSection.Section className='relative flex min-h-screen pb-4 sm:pb-7 md:pb-10 lg:pb-14 xl:pb-16 2xl:pb-20'>
				<div className='absolute left-0 top-0 -z-[1] h-full w-full'>
					<PhotosCarousel
						className='h-full w-full'
						plugins={[Autoplay({ playOnInit: true, delay: 3000 })]}
					>
						<PhotosCarouselContent className='h-full w-full'>
							<PhotosCarouselItem>
								<Image
									src='/assets/rooms/room-1-1.jpg'
									alt=''
									fill
									className='object-cover'
								/>
							</PhotosCarouselItem>
							<PhotosCarouselItem>
								<Image
									src='/assets/rooms/room-1-2.jpg'
									alt=''
									fill
									className='object-cover'
								/>
							</PhotosCarouselItem>
							<PhotosCarouselItem>
								<Image
									src='/assets/rooms/room-2-1.jpg'
									alt=''
									fill
									className='object-cover'
								/>
							</PhotosCarouselItem>
							<PhotosCarouselItem>
								<Image
									src='/assets/rooms/room-2-3.jpg'
									alt=''
									fill
									className='object-cover'
								/>
							</PhotosCarouselItem>
							<PhotosCarouselItem>
								<Image
									src='/assets/rooms/room-2-4.jpg'
									alt=''
									fill
									className='object-cover'
								/>
							</PhotosCarouselItem>
						</PhotosCarouselContent>
					</PhotosCarousel>
				</div>
				<div className='container flex  flex-col'>
					<h1 className='my-auto text-center text-md font-bold uppercase shadow-background/50 shade-text md:text-md-sm lg:text-md-md xl:text-md-lg 2xl:text-md-xl'>
						Аренда залов
					</h1>
					<div className='text-xs-adaptive grid grid-cols-2 whitespace-nowrap text-[12px] leading-normal shadow-background/50 shade-text even:*:text-right'>
						<div>Площадь 50 кв м</div>
						<div>Кулер с водой</div>
						<div>Музыкальная аппаратура</div>
						<div>Вентилятор</div>
						<div>Большие зеркала</div>
						<div>Предметы гигиены</div>
						<div>Цветное освещение</div>
						<div>Большие окна</div>
					</div>
				</div>
			</UiSection.Section>
			<UiSection.Section className='!pt-0'>
				<div className='grid grid-cols-2'>
					<button
						onClick={setIsOpenRules.bind(null, true)}
						className='relative border-b py-[0.5em] text-center text-xs uppercase sm:text-[24px] md:text-md lg:text-md-sm xl:text-md-md 2xl:text-md-lg'
					>
						<div
							className={cn(
								'absolute left-1/2 top-[5%] -z-[1] h-[90%] w-[90%] max-w-[400px] -translate-x-1/2 bg-accent-radial-gradient'
							)}
						></div>
						<div className='[&>span]:text-[0.7em]'>Правила</div>
					</button>
					<button
						onClick={setIsOpenPrice.bind(null, true)}
						className='relative border-b border-l py-[0.5em] text-center text-xs uppercase sm:text-[24px] md:text-md lg:text-md-sm xl:text-md-md 2xl:text-md-lg'
					>
						<div
							className={cn(
								'absolute left-1/2 top-[5%] -z-[1] h-[90%] w-[90%] max-w-[400px] -translate-x-1/2 bg-accent-radial-gradient'
							)}
						></div>
						<div className='[&>span]:text-[0.7em]'>Стоимость</div>
					</button>
					<Link
						href={`${ROUTER_PATHS.SCHEDULE}/#${ROUTER_IDS_SECTIONS.SCHEDULE_RENT}`}
						scroll={false}
						className='relative border-b py-[0.5em] text-center text-xs uppercase sm:text-[24px] md:text-md lg:text-md-sm xl:text-md-md 2xl:text-md-lg'
					>
						<div className='absolute left-1/2 top-[5%] -z-[1] h-[90%] w-[90%] max-w-[400px] -translate-x-1/2'></div>
						<div className='[&>span]:text-[0.7em]'>
							Зал №1 <span>(каб. 318)</span>
						</div>
					</Link>
					<Link
						href={`${ROUTER_PATHS.SCHEDULE}/#${ROUTER_IDS_SECTIONS.SCHEDULE_RENT}`}
						scroll={false}
						className='relative border-b border-l py-[0.5em] text-center text-xs uppercase sm:text-[24px] md:text-md lg:text-md-sm xl:text-md-md 2xl:text-md-lg'
					>
						<div className='absolute left-1/2 top-[5%] -z-[1] h-[90%] w-[90%] max-w-[400px] -translate-x-1/2'></div>
						<div className='[&>span]:text-[0.7em]'>
							Зал №2 <span>(каб. 320)</span>
						</div>
					</Link>
				</div>
				<UiDialog
					open={isOpenRules}
					onOpenChange={setIsOpenRules}
				>
					<UiDialogContent
						type='gray'
						className='w-[270px] sm:w-[296px] md:w-[342px] lg:w-[368px] xl:w-[394px] 2xl:w-[420px]'
					>
						<UiDialogHeader className='pt-5 text-xs-sm uppercase text-accent-sup md:text-xs-md lg:text-xs-lg xl:text-xs-xl 2xl:text-xs-2xl'>
							Правила
						</UiDialogHeader>
						<div className='px-3 text-[12px] leading-normal md:text-[14px] lg:text-[16px] 2xl:text-[18px]'>
							<div className='border-t border-words/50 pt-2'>
								в зале сохраняем чистоту:
								<ul className='list-disc pl-[1em]'>
									<li>кулер/помпу выключаем</li>
									<li>воду в стаканах не оставляем</li>
									<li>стаканы и мусор выбрасываем в мусорку!</li>
									<li>курить паровые или табачные ЗАПРЕЩЕНО!</li>
								</ul>
							</div>
							<div className='mt-2 border-t border-words/50 pt-2 text-center'>
								<strong>в зале круглосуточно работает камера!</strong>
							</div>
							<div className='mt-2 border-t border-words/50 pt-2'>
								<strong>обязательно: сменная обувь!</strong>
								<br /> (давайте уважать всех, кто тренируется в зале, во многих
								направлениях есть элементы на полу) <br />
								<strong>
									запрещено: трогать зеркала руками и передвигать их.
								</strong>
								<br /> в случае, если зеркало повредиться по вашей вине - вас
								ждут санкции на аренду в студиях города или материальное
								возмещение ущерба!
							</div>
							<div className='mt-2 border-t border-words/50 pb-4 pt-2'>
								<strong>предоплата:</strong> как только вы внесли 100% суммы, за
								вами закрепляется время. <br />{' '}
								<strong>
									в случае отмены аренды, предоплата не возвращается.
								</strong>
							</div>
						</div>
					</UiDialogContent>
				</UiDialog>
				<UiDialog
					open={isOpenPrice}
					onOpenChange={setIsOpenPrice}
				>
					<UiDialogContent
						type='gray'
						className='w-[270px] sm:w-[296px] md:w-[342px] lg:w-[368px] xl:w-[394px] 2xl:w-[420px]'
					>
						<UiDialogHeader className='pt-5 text-xs-sm uppercase md:text-xs-md lg:text-xs-lg xl:text-xs-xl 2xl:text-xs-2xl'>
							Стоимость
						</UiDialogHeader>
						<div className='mt-2'>
							<PhotosCarousel
								className='aspect-video h-full w-full border-b border-t'
								plugins={[Autoplay({ playOnInit: true, delay: 3000 })]}
							>
								<PhotosCarouselContent className='h-full w-full'>
									<PhotosCarouselItem>
										<Image
											src='/assets/rooms/room-1-1.jpg'
											alt=''
											fill
											className='object-cover'
										/>
									</PhotosCarouselItem>
									<PhotosCarouselItem>
										<Image
											src='/assets/rooms/room-1-2.jpg'
											alt=''
											fill
											className='object-cover'
										/>
									</PhotosCarouselItem>
								</PhotosCarouselContent>
							</PhotosCarousel>
							<div className='text-xs-adaptive flex items-center bg-background text-center text-sm uppercase'>
								<div className='grow'>
									зал #1 <span className='text-[0.7em]'>(каб. 318)</span>
								</div>
								<div className='self-stretch border-l px-2 py-1 lg:px-4 lg:py-2'>
									400 Р
								</div>
							</div>
							<UiButton
								asChild
								className='mb-5 w-full rounded-none !border-x-0'
							>
								<Link
									href={`${ROUTER_PATHS.SCHEDULE}/#${ROUTER_IDS_SECTIONS.SCHEDULE_RENT}`}
									scroll={false}
								>
									Расписание
								</Link>
							</UiButton>
							<PhotosCarousel
								className='aspect-video h-full w-full border-b border-t'
								plugins={[Autoplay({ playOnInit: true, delay: 3000 })]}
							>
								<PhotosCarouselContent className='h-full w-full'>
									<PhotosCarouselItem>
										<Image
											src='/assets/rooms/room-2-1.jpg'
											alt=''
											fill
											className='object-cover'
										/>
									</PhotosCarouselItem>
									<PhotosCarouselItem>
										<Image
											src='/assets/rooms/room-2-2.jpg'
											alt=''
											fill
											className='object-cover'
										/>
									</PhotosCarouselItem>
									<PhotosCarouselItem>
										<Image
											src='/assets/rooms/room-2-3.jpg'
											alt=''
											fill
											className='object-cover'
										/>
									</PhotosCarouselItem>
									<PhotosCarouselItem>
										<Image
											src='/assets/rooms/room-2-4.jpg'
											alt=''
											fill
											className='object-cover'
										/>
									</PhotosCarouselItem>
								</PhotosCarouselContent>
							</PhotosCarousel>
							<div className='text-xs-adaptive flex items-center bg-background text-center text-sm uppercase'>
								<div className='grow'>
									зал #2 <span className='text-[0.7em]'>(каб. 320)</span>
								</div>
								<div className='self-stretch border-l px-2 py-1 lg:px-4 lg:py-2'>
									550 Р
								</div>
							</div>
							<UiButton
								asChild
								className='mb-5 w-full rounded-none !border-x-0'
							>
								<Link
									href={`${ROUTER_PATHS.SCHEDULE}/#${ROUTER_IDS_SECTIONS.SCHEDULE_RENT}`}
									scroll={false}
								>
									Расписание
								</Link>
							</UiButton>
						</div>
					</UiDialogContent>
				</UiDialog>
			</UiSection.Section>
		</>
	)
}

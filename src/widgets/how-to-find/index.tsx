import Image from 'next/image'

import { UiSection } from '@/shared/ui/ui-section'

export function SectionHowToFind() {
	return (
		<UiSection.Section className='lg:mb-4 2xl:mb-8'>
			<div className='container'>
				<UiSection.Title className='mb-1'>Как нас найти</UiSection.Title>
				<div className='text-xs-adaptive mb-4 text-center text-2xs font-light sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10'>
					г.Казань, П.Лумумбы 4, 3 этаж
				</div>
			</div>
			<div className='container grid lg:grid-cols-[56%_44%] lg:gap-10 xl:gap-12 2xl:gap-14'>
				<div>
					<video
						muted
						controls
						playsInline
						className='w-full rounded-xl shadow-lg shadow-accent-sup/30'
					>
						<source
							src='/assets/videos/how-to-find.mp4'
							type='video/mp4'
						/>
					</video>
				</div>
				<div>
					<UiSection.Title className='mb-3 mt-6 sm:mt-7 md:mt-8 lg:mt-0 lg:text-md-sm xl:text-md-md 2xl:text-md-lg'>
						Ориентиры
					</UiSection.Title>
					<div className='grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-1 lg:gap-10 xl:gap-12 2xl:gap-14'>
						<div className='relative aspect-square overflow-hidden rounded-xl shadow-sm shadow-accent-sup/30'>
							<Image
								src='/assets/images/how-to-find-1.png'
								alt=''
								fill
								sizes='(min-width: 768px): 550px, 260px'
								className='object-cover'
							/>
						</div>
						<div className='relative aspect-square overflow-hidden rounded-xl shadow-sm shadow-accent-sup/30'>
							<Image
								src='/assets/images/how-to-find-2.png'
								alt=''
								fill
								sizes='(min-width: 768px): 550px, 260px'
								className='object-cover'
							/>
						</div>
					</div>
				</div>
			</div>
		</UiSection.Section>
	)
}

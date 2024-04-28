import Image from 'next/image'
import Link from 'next/link'

import { ROUTER_IDS_SECTIONS, ROUTER_PATHS } from '@/shared/constant/routes'
import { UiButton } from '@/shared/ui/ui-button'
import {
	UiDialog,
	UiDialogClose,
	UiDialogContent,
	UiDialogHeader,
	UiDialogTrigger
} from '@/shared/ui/ui-dialog'
import { UiSection } from '@/shared/ui/ui-section'
import { VideoTag } from '@/shared/ui/ui-video-tag'

import { DANCE_STYLES } from '../constant'

export function SectionDanceStyles() {
	return (
		<UiSection.Section id={ROUTER_IDS_SECTIONS.DANCE_STYLES}>
			<div className='container'>
				<UiSection.Title>Направления</UiSection.Title>
				<div className='grid grid-cols-2 gap-4 px-1 sm:gap-6 md:gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-11 2xl:gap-12'>
					{DANCE_STYLES.map(dance => {
						return (
							<UiDialog key={dance.id}>
								<UiDialogTrigger className='relative flex aspect-square cursor-pointer items-end justify-center overflow-hidden rounded-xl pb-5 text-center shadow-sm shadow-accent-sup/30'>
									<Image
										src={dance.preview}
										alt=''
										fill
										className='-z-[1] object-cover'
									/>
									<div className='text-sm-adaptive text-sm font-bold uppercase shadow-background/30 shade-text-border'>
										{dance.previewName}
									</div>
								</UiDialogTrigger>
								<UiDialogContent className='w-full max-w-[500px] md:max-w-[720px]'>
									<UiDialogHeader className='text-md-adaptive pt-4 text-[24px] font-medium uppercase leading-tight'>
										{dance.previewName}
									</UiDialogHeader>
									<div className='mb-3 mt-2'>
										<VideoTag
											loop
											autoPlay
											muted
											playsInline
											sources={[{ src: dance.video, type: 'video/mp4' }]}
											className='h-auto w-full'
										/>
									</div>
									<div className='mb-4 px-5'>
										<div className='text-2xs-adaptive mx-auto max-w-[23em] whitespace-pre-wrap text-2xs font-light'>
											{dance.description}
										</div>
									</div>
									<div className='pb-7 text-center'>
										<UiDialogClose asChild>
											<UiButton asChild>
												<Link
													href={`${ROUTER_PATHS.MAIN}#${ROUTER_IDS_SECTIONS.OFFER}`}
													scroll={false}
												>
													Записаться
												</Link>
											</UiButton>
										</UiDialogClose>
									</div>
								</UiDialogContent>
							</UiDialog>
						)
					})}
				</div>
				<div className='mt-6 text-center md:mt-8  xl:mt-10'>
					<UiButton
						minSize='md'
						asChild
					>
						<Link href={ROUTER_PATHS.SCHEDULE}>Расписание</Link>
					</UiButton>
				</div>
			</div>
		</UiSection.Section>
	)
}

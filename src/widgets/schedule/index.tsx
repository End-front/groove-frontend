import Link from 'next/link'

import { ROUTER_IDS_SECTIONS, ROUTER_PATHS } from '@/shared/constant/routes'
import { UiButton } from '@/shared/ui/ui-button'
import { UiSection } from '@/shared/ui/ui-section'

import { SCHEDULE_ROOM_1, SCHEDULE_ROOM_2 } from './constants'
import { ScheduleTable } from './ui/schedule-table'
import {
	ScheduleTabs,
	ScheduleTabsContent,
	ScheduleTabsList,
	ScheduleTabsTrigger
} from './ui/schedule-tabs'

export function ScheduleSection() {
	return (
		<>
			<UiSection.Section id={ROUTER_IDS_SECTIONS.SCHEDULE_DANCE}>
				<div className='container'>
					<UiSection.Title>Расписание</UiSection.Title>
					<ScheduleTabs defaultValue='room-1'>
						<ScheduleTabsList>
							<ScheduleTabsTrigger value='room-1'>
								Зал №1 <span className='text-[0.5em]'>(318 каб)</span>
							</ScheduleTabsTrigger>
							<ScheduleTabsTrigger value='room-2'>
								Зал №2 <span className='text-[0.5em]'>(320 каб)</span>
							</ScheduleTabsTrigger>
						</ScheduleTabsList>
						<ScheduleTabsContent value='room-1'>
							<ScheduleTable schedule={SCHEDULE_ROOM_1} />
						</ScheduleTabsContent>
						<ScheduleTabsContent value='room-2'>
							<ScheduleTable schedule={SCHEDULE_ROOM_2} />
						</ScheduleTabsContent>
					</ScheduleTabs>
					<div className='pt-3 text-center sm:pt-6 md:pb-2 md:pt-8 lg:pb-4 lg:pt-11 xl:mb-6 xl:pt-14 2xl:pb-10 2xl:pt-16'>
						<UiButton
							minSize='md'
							asChild
						>
							<Link
								href={`${ROUTER_PATHS.MAIN}#${ROUTER_IDS_SECTIONS.OFFER}`}
								scroll={false}
							>
								Записаться
							</Link>
						</UiButton>
					</div>
				</div>
			</UiSection.Section>
			<UiSection.Section id={ROUTER_IDS_SECTIONS.SCHEDULE_RENT}>
				<div className='container'>
					<UiSection.Title>Аренда зала</UiSection.Title>
					<ScheduleTabs defaultValue='room-1'>
						<ScheduleTabsList>
							<ScheduleTabsTrigger value='room-1'>
								Зал №1 <span className='text-[0.5em]'>(318 каб)</span>
							</ScheduleTabsTrigger>
							<ScheduleTabsTrigger value='room-2'>
								Зал №2 <span className='text-[0.5em]'>(320 каб)</span>
							</ScheduleTabsTrigger>
						</ScheduleTabsList>
						<ScheduleTabsContent value='room-1'>
							<iframe
								className='bg-white'
								src='https://calendar.google.com/calendar/embed?height=800&amp;wkst=2&amp;ctz=Europe%2FMoscow&amp;bgcolor=%23ffffff&amp;mode=WEEK&amp;src=Z3Jvb3ZlZG9tbUBnbWFpbC5jb20&amp;color=%23039BE5'
								scrolling='no'
								width='1000'
								height='800'
							></iframe>
						</ScheduleTabsContent>
						<ScheduleTabsContent value='room-2'>
							<iframe
								className='bg-white'
								src='https://calendar.google.com/calendar/embed?height=800&amp;wkst=2&amp;ctz=Europe%2FMoscow&amp;bgcolor=%23ffffff&amp;mode=WEEK&amp;src=MDY1NjViY2VlYWNiYjM4NGZiYjQ5MzQ2NDg5YjYyYTExNjJjNTY0ODZjNTkwMzQ3NTAwOThkY2VmZjljZjFiN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23F09300'
								scrolling='no'
								width='1000'
								height='800'
							></iframe>
						</ScheduleTabsContent>
					</ScheduleTabs>
				</div>
			</UiSection.Section>
		</>
	)
}

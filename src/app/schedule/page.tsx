import { Metadata } from 'next'

import { ScheduleSection } from '@/widgets/schedule'

export const metadata: Metadata = {
	title: 'Расписание'
}

export default function SchedulePage() {
	return <ScheduleSection />
}

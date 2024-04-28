import { Metadata } from 'next'

import { SectionHowToFind } from '@/widgets/how-to-find'

export const metadata: Metadata = {
	title: 'Как нас найти'
}

export default function HowToFindPage() {
	return <SectionHowToFind />
}

import { Metadata } from 'next'

import { HeroSectionMain } from '@/widgets/hero-section-main'

import { SectionDanceStyles } from '@/features/dance-styles/pub/section-dance-styles'
import { SectionFormOffer } from '@/features/form-offer/pub/section-form-offer'
import { SectionNews } from '@/features/news/pub/section-news'

import { SITE_NAME } from './_/constants.seo'
import { actionSendToTelegram } from './actions'

export const metadata: Metadata = {
	title: `Главная | ${SITE_NAME}`
}

export default function Home() {
	return (
		<>
			<HeroSectionMain />
			<SectionFormOffer actionOnSubmit={actionSendToTelegram} />
			<SectionDanceStyles />
			<SectionNews />
		</>
	)
}

import { Metadata } from 'next'

import { SectionPrices } from '@/widgets/prices'

export const metadata: Metadata = {
	title: 'Стоимость'
}

export default function PricesPage() {
	return <SectionPrices />
}

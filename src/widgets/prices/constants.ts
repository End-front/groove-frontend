export const PRICES: {
	title: string
	description?: string
	price: number
	oldPrice?: number
	buttonText?: string
}[] = [
	{
		title: 'Пробная тренировка',
		price: 200,
		buttonText: 'Получить'
	},
	{
		title: '1 тренировка',
		price: 600
	},
	{
		title: '4 тренировка',
		description: '( 1 направление )',
		oldPrice: 2400,
		price: 2000
	},
	{
		title: '4 тренировка',
		description: '( все направление )',
		oldPrice: 2400,
		price: 2000
	},
	{
		title: '8 тренировка',
		description: '( 1 направление )',
		oldPrice: 4800,
		price: 4000
	},
	{
		title: '8 тренировка',
		description: '( все направление )',
		oldPrice: 4800,
		price: 4000
	},
	{
		title: 'VIP абонемент',
		description: '( все направление )',
		oldPrice: 12000,
		price: 6000
	},
	{
		title: 'Индивидуально',
		price: 1500
	}
]

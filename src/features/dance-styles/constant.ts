export const DANCE_STYLES: {
	id: number
	fullName: string
	previewName: string
	preview: string
	video: string
	description?: string
}[] = [
	{
		id: 0,
		fullName: 'Hip-hop',
		previewName: 'Hip-hop',
		preview: `/assets/dance/dance-hip-hop.jpg`,
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/dance/dance-hip-hop.mp4`,
		description:
			'HIP-HOP - уличный стиль, динамичный и амплитудный. Вы прокачаете пластику и подтянете фигуру. \nЕсли вы поклонник хип-хоп музыки, это направление именно для вас!'
	},
	{
		id: 1,
		fullName: 'Jazz-Funk',
		previewName: 'Jazz-Funk',
		preview: `/assets/dance/dance-jaz-funk.jpg`,
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/dance/dance-jaz-funk.mp4`,
		description:
			'JAZZ-FUNK - яркий женственный стиль.\nЭто импульсивность, это энергия и большое разнообразие движений. Танцуем под яркие поп-треки.'
	},
	{
		id: 2,
		fullName: 'Contemporary',
		previewName: 'Contemp.',
		preview: `/assets/dance/dance-contemp.jpg`,
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/dance/dance-contemp.mp4`,
		description:
			'CONTEMPORARY - можно описать, как современный балет, балет без правил. Это танец ДУШИ. Пластика и эмоции. \nПередаем чувства, свою историю через танец.'
	},
	{
		id: 3,
		fullName: 'K-pop',
		previewName: 'K-pop',
		preview: `/assets/dance/dance-k-pop.jpg`,
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/dance/dance-k-pop.mp4`,
		description:
			'K-POP - это исполнение хореографии корейских поп-артистов. Совмещает в себе практически все современные стили. Эффективно развивает уверенность в себе и артистизм.'
	},
	{
		id: 4,
		fullName: 'Dance-mix',
		previewName: 'Dance-mix',
		preview: `/assets/dance/dance-mix.jpg`,
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/dance/dance-mix.mp4`,
		description:
			'DANCE-MIX - это смесь самых различных современных направлений в одном танце. \nРазвивает пластику и запоминание, а ещё это мощная кардио-тренировка!'
	},
	{
		id: 5,
		fullName: 'Strip',
		previewName: 'Strip',
		preview: `/assets/dance/dance-strip.jpg`,
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/dance/dance-strip.mp4`,
		description:
			'STRIP PLASTIC - смелые изящные и чувственные хореографии. Исполняем в основном в партере, то есть на полу. Физическая нагрузка на различные группы мышц. Обретаем уверенность в собственной красоте с нуля.'
	},
	// {
	// 	id: 6,
	// 	fullName: 'High heels',
	// 	previewName: 'High heels',
	// 	preview: 'https://sbis.perm.ru/wp-content/uploads/2019/09/placeholder.png',
	// 	video: '',
	// 	description:
	// 		'HIGH HEELS - буквально танец на каблуках. Это очень женственное и грациозное направление. Танец настоящих леди. Помимо развития танцевальных навыков, вы улучшаете осанку и учитесь уверенно ходить на каблуках.'
	// },
	{
		id: 7,
		fullName: 'Kids',
		previewName: 'Kids',
		preview: `/assets/dance/dance-kids.jpg`,
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/dance/dance-kids.mp4`,
		description:
			'Кавер-направление совмещает в себе практически все современные стили. Эффективно развивает уверенность в себе и артистизм. \n\nРебята разучивают связки, делают упражнения на пластичность и ритмику, развивают работу на камеру и актерское мастерство.'
	}
]

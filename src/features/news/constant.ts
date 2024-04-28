type NewsData = {
	id: number
	image: string
	video?: string
	description: string
}

export const NEWS: NewsData[] = [
	{
		id: 6,
		image: '/assets/news/news-7.jpeg',
		description:
			'Дата отчетного концерта: 29 мая, 19:00\n\nХотите станцевать с любимым тренером на одной сцене?\nЗаписывайтесь в группу прямо сейчас, ведь уже скоро набор закроется, чтобы ученика успели подготовиться к своим номерам!'
	},
	{
		id: 5,
		image: '/assets/news/news-6.jpg',
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/news/news-6.mp4`,
		description:
			'Импровизационный сейшн под музыку Ильдара Камалова с участием всех желающих. Можно было делать абсолютно всё, стоял открытый микрофон.\nНаш тренер Алёна и её ученицы вышли в импровизацию и остались до самого завершения. Действо длилось час.'
	},
	{
		id: 4,
		image: '/assets/news/news-5.jpg',
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/news/news-5.mp4`,
		description:
			'Как и зачем танцору развивать актерское мастерство с помощью съемок на камеру?\n\nРассказываем здесь:\n<a href="https://t.me/kazandancestudio/1571" target="_blank">https://t.me/kazandancestudio/1571</a>\n\n14 апреля мы как раз занимались съёмками на их учеников!'
	},
	{
		id: 3,
		image: '/assets/news/news-4.jpg',
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/news/news-4.mp4`,
		description:
			'Закрытая группа Jazz-Funk забрали 2 место на фестивале Сияние Творчества.\n\nЯркое мощное выступление - ПОЗДРАВЛЯЕМ девушек!\n\nКак это было - смотрите на видео слева)'
	},
	{
		id: 2,
		image: '/assets/news/news-3.jpg',
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/news/news-3.mp4`,
		description:
			'Команда от направления Contemporary “Обо всём” забрала 1 место на фестивале Сияние Творчества.\n\nОчень нежное и чарующие выступление - Песнь Дриад!\n\nКак это было - смотрите на видео слева)'
	},
	{
		id: 1,
		image: '/assets/news/news-2.jpg',
		video: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/news/news-2.mp4`,
		description:
			'3 марта у нас прошли бесплатные открытые классы по самым разным направлениям!\n\nУ каждого была возможность попробовать что-то новое и получить абонемент по специальной скидке.\n\nЭто был мощный атмосферный день!'
	},
	{
		id: 0,
		image: '/assets/news/news-1.png',
		description:
			'23 декабря мы провели домашний баттл для соло и дуэтов.\nНоминации: авторская и к-поп хореография.\n\nВаша поддержка, выходы учеников и гостей - всё это было невероятно атмосферно!'
	}
]

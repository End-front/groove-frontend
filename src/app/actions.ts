'use server'
export async function actionSendToTelegram(data: {
	firstName: string
	lastName: string
	phone: string
	social?: string
}) {
	const token = '6600247203:AAGqtoGLDlJX4_WECtI4AFEaMVhnzVnISZA'
	const chatId = '-913777934'
	const textTg = `
        <b>Имя и Фамилия:</b> ${data.firstName} ${data.lastName} %0A<b>Телефон:</b> ${data.phone} %0A${data.social ? `<b>Соц сеть:</b> ${data.social} %0A` : ''}
    `

	const res = await fetch(
		`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${textTg}`
	).then(data => data.json())

	return res.ok
}

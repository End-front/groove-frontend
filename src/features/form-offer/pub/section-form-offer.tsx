'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ROUTER_IDS_SECTIONS } from '@/shared/constant/routes'
import { cn } from '@/shared/lib/class-name'
import { UiButton } from '@/shared/ui/ui-button'
import {
	UiDialog,
	UiDialogContent,
	UiDialogHeader
} from '@/shared/ui/ui-dialog'
import { UiInput } from '@/shared/ui/ui-input'
import { UiSection } from '@/shared/ui/ui-section'

type OfferFormData = {
	firstName: string
	lastName: string
	phone: string
	social: string
}

export function SectionFormOffer({
	actionOnSubmit
}: {
	actionOnSubmit?: (data: OfferFormData) => Promise<boolean>
}) {
	const [open, setOpen] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<OfferFormData>({
		reValidateMode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<OfferFormData> = async data => {
		if (actionOnSubmit) {
			if (await actionOnSubmit(data)) {
				setOpen(true)
			}
		}
	}

	return (
		<UiSection.Section
			id={ROUTER_IDS_SECTIONS.OFFER}
			className='relative'
		>
			<SVGLogo className='absolute right-0 top-[44%] -z-[1] h-[80%] w-[66%] -translate-y-1/2' />
			<div className='container'>
				<UiSection.Title className='text-left'>
					Тренировка <br /> за&nbsp;<span className='text-accent'>200</span>
					&nbsp;рублей?
				</UiSection.Title>
				<form
					className='mb-3 flex flex-col items-center'
					onSubmit={handleSubmit(onSubmit)}
				>
					<UiInput
						className='mb-2 md:mb-3 xl:mb-4'
						placeholder='имя*'
						type='text'
						{...register('firstName', {
							required: {
								value: true,
								message: 'Поле является обязательным'
							},
							pattern: {
								value: /^[а-яА-Я0-9ёЁ \-]{2,}$/,
								message: 'Введите пожалуйста настоящее имя'
							}
						})}
					/>
					{errors.firstName && (
						<div className='text-2xs-adaptive xL:mb-4 -mt-1 mb-3 text-2xs md:-mt-2 xl:-mt-3'>
							{errors.firstName.message}
						</div>
					)}
					<UiInput
						className='mb-2 md:mb-3 xl:mb-4'
						placeholder='фамилия*'
						{...register('lastName', {
							required: {
								value: true,
								message: 'Поле является обязательным'
							},
							pattern: {
								value: /^[а-яА-Я0-9ёЁ \-]{2,}$/,
								message: 'Введите пожалуйста настоящую фамилию'
							}
						})}
					/>
					{errors.lastName && (
						<div className='text-2xs-adaptive xL:mb-4 -mt-1 mb-3 text-2xs md:-mt-2 xl:-mt-3'>
							{errors.lastName.message}
						</div>
					)}
					<UiInput
						className='mb-2 md:mb-3 xl:mb-4'
						placeholder='телефон*'
						{...register('phone', {
							required: {
								value: true,
								message: 'Поле является обязательным'
							},

							validate: {
								isPhone: v => {
									const formatV = v.replace(/[ \-\(\)\+]/g, '')
									if (!formatV.match(/^[\d]{10,13}$/)) {
										return 'Введите настоящий номер телефона'
									}

									return true
								}
							}
						})}
					/>
					{errors.phone && (
						<div className='text-2xs-adaptive xL:mb-4 -mt-1 mb-3 text-2xs md:-mt-2 xl:-mt-3'>
							{errors.phone.message}
						</div>
					)}
					<UiInput
						className='mb-3 xl:mb-4'
						placeholder='ссылка на соц сеть*'
						{...register('social', {
							required: {
								value: true,
								message: 'Поле является обязательным'
							}
						})}
					/>
					{errors.social && (
						<div className='text-2xs-adaptive xL:mb-4 -mt-1 mb-3 text-2xs md:-mt-2 xl:-mt-3'>
							{errors.social.message}
						</div>
					)}
					<UiButton
						type='submit'
						minSize='md'
					>
						Получить
					</UiButton>
				</form>
				<div className='text-2xs-adaptive text-[12px] font-light leading-normal md:text-center'>
					Мы знаем, как сложно выбрать СВОЮ школу танцев. Поэтому зовём вас
					попробовать тренировку с нами по смешной цене. Погрузитесь в атмосферу
					ГРУВА, познакомьтесь с нашими тренерами и СДЕЛАЙТЕ СВОЙ ВЫБОР!
					<br />
					Стоимость актуальна 1 раз на каждое направление на 1 персону.
				</div>
			</div>
			<UiDialog
				open={open}
				onOpenChange={setOpen}
			>
				<UiDialogContent
					className='relative w-[300px] overflow-hidden sm:w-[356px] md:w-[412px] lg:w-[468px] xl:w-[540px] 2xl:w-[580px]'
					// classNameClose='mr'
					type='accent'
				>
					<UiDialogHeader className='pl-5 pt-3 text-left text-sm font-semibold uppercase sm:text-sm-sm md:text-sm-md lg:text-sm-lg xl:text-sm-xl'>
						Записали вас:
					</UiDialogHeader>
					<SVGLogoBlur className='absolute right-0 top-1/2 -z-[1] h-[90%] w-[90%] -translate-y-1/2' />
					<div className='text-xs-adaptive mb-2 mt-2 px-5 text-xs font-light'>
						<div className='mb-2'>заказ: 1 тренировка</div>
						<div className='mb-2'>стоимость: 200 Р</div>
						<div className='mb-2'>направление: по выбору</div>
						<div>адрес: Казань, П.Лумумбы 4</div>
					</div>
					<div className='px-5 pb-4 text-center text-sm font-semibold uppercase sm:text-sm-sm md:text-sm-md lg:text-sm-lg xl:text-sm-xl'>
						совсем скоро свяжемся с вами!
					</div>
				</UiDialogContent>
			</UiDialog>
		</UiSection.Section>
	)
}

function SVGLogo({ className }: { className?: string }) {
	return (
		<svg
			className={cn(className)}
			width='241'
			height='140'
			viewBox='0 0 241 140'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			preserveAspectRatio='xMaxYMid'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M93.8436 138.87V128.072C105.957 135.243 120.695 139.396 136.312 139.396C151.794 139.396 166.2 135.393 178.25 128.335V138.87C178.722 138.717 179.196 138.583 179.669 138.449L179.67 138.449C180.351 138.256 181.031 138.064 181.701 137.816C191.687 134.119 200.601 128.583 208.244 121.751C215.725 115.064 221.636 107.311 225.762 98.6145V127.808C227.01 126.821 228.297 125.704 229.478 124.648C233.876 120.717 237.731 116.418 241 111.775C241 106.077 241 104.145 241 98.6145C241 87.8737 241 82.3763 241 72.7143C241 63.0525 241 53.1841 241 44.5853C241 41.122 241 38.1166 241 33.6538C237.731 28.937 233.876 24.5504 229.478 20.6192C228.731 19.9509 227.941 19.3635 227.145 18.772C226.683 18.429 226.22 18.0845 225.762 17.7222V41.122C221.636 32.4147 215.725 24.4095 208.244 17.7222C200.601 10.8902 191.687 5.61781 181.701 1.92034C181.262 1.75791 180.819 1.58012 180.374 1.40153C179.668 1.11814 178.957 0.832726 178.25 0.603516V13.5084C166.2 6.4508 151.794 2.44707 136.312 2.44707C120.695 2.44707 105.957 6.6005 93.8436 13.7717V0.603516C93.2013 0.811778 92.6381 1.06645 92.0687 1.32386C91.6167 1.52826 91.1609 1.73437 90.6585 1.92034C80.6725 5.61781 71.4931 10.8902 63.8501 17.7222C56.2328 24.5312 50.202 32.534 46.0663 41.4249V17.7222C45.6087 18.0844 45.1455 18.4287 44.6842 18.7717C43.8885 19.3633 43.098 19.9509 42.3503 20.6192C34.7073 27.4513 28.7033 35.6588 24.5666 44.5853C20.4304 53.5118 18.1963 63.1035 18.1963 72.7653C18.1963 82.4273 20.4304 92.0188 24.5666 100.945C28.7033 109.872 34.7073 117.816 42.3503 124.648C43.5315 125.704 44.8188 126.821 46.0663 127.808V98.0483C50.202 106.939 56.2328 114.942 63.8501 121.751C71.4931 128.583 80.673 134.119 90.6585 137.816C91.4728 138.118 92.1651 138.337 92.9168 138.574L92.9181 138.575L92.9202 138.575C93.2151 138.669 93.5193 138.765 93.8436 138.87ZM12.3568 36.421C9.91086 39.693 7.67935 43.0391 5.98652 46.6922C2.60158 53.9971 0.94336 61.9616 0.943359 69.8683C0.943359 77.7753 2.60158 85.476 5.98652 92.781C7.67935 96.4344 9.91086 100.044 12.3568 103.316V36.421Z'
				fill='#780C0E'
			/>
		</svg>
	)
}

function SVGLogoBlur({ className }: { className?: string }) {
	return (
		<svg
			className={cn(className)}
			width='267'
			height='207'
			viewBox='0 0 267 207'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			preserveAspectRatio='xMaxYMid'
		>
			<g filter='url(#section-logo-offer-blur)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M134.905 197.76V182.946C151.394 192.784 171.456 198.482 192.715 198.482C213.789 198.482 233.399 192.99 249.801 183.307V197.76C250.444 197.55 251.089 197.366 251.733 197.183L251.733 197.183L251.734 197.182H251.734C252.662 196.918 253.587 196.655 254.498 196.314C268.092 191.242 280.226 183.648 290.629 174.275C300.813 165.101 308.859 154.464 314.476 142.533V182.585C316.174 181.23 317.926 179.697 319.534 178.249C329.938 168.876 338.112 157.977 343.742 145.731C349.373 133.485 352.413 120.326 352.413 107.071C352.413 93.816 349.373 80.6571 343.742 68.4108C338.112 56.1646 329.938 44.9048 319.534 35.5318C318.517 34.615 317.441 33.8091 316.358 32.9976C315.73 32.527 315.099 32.0544 314.476 31.5574V63.6596C308.859 51.714 300.813 40.7317 290.629 31.5574C280.226 22.1845 268.092 14.9514 254.498 9.87881C253.902 9.65599 253.299 9.41207 252.693 9.16706C251.732 8.77828 250.764 8.38672 249.801 8.07227V25.7764C233.399 16.0942 213.789 10.6014 192.715 10.6014C171.456 10.6014 151.394 16.2995 134.905 26.1377V8.07227C134.031 8.35798 133.264 8.70737 132.489 9.06051C131.874 9.34092 131.253 9.62369 130.569 9.87881C116.976 14.9514 104.481 22.1845 94.077 31.5574C83.7082 40.8987 75.4989 51.8777 69.8693 64.0751V31.5574C69.2464 32.0543 68.6159 32.5267 67.9879 32.9972L67.9876 32.9973C66.9044 33.8089 65.8288 34.6149 64.811 35.5318C54.407 44.9048 46.2342 56.1646 40.6033 68.4108C34.973 80.6571 31.9319 93.816 31.9319 107.071C31.9319 120.326 34.973 133.485 40.6033 145.731C46.2342 157.977 54.407 168.876 64.811 178.249C66.4188 179.697 68.1711 181.23 69.8693 182.585V141.757C75.4989 153.954 83.7082 164.933 94.077 174.275C104.481 183.648 116.977 191.242 130.569 196.314C131.678 196.728 132.62 197.028 133.643 197.354L133.645 197.355L133.648 197.356C134.049 197.484 134.463 197.615 134.905 197.76ZM23.983 57.2102C20.6535 61.6992 17.6159 66.2896 15.3116 71.3013C10.704 81.323 8.44675 92.2493 8.44675 103.097C8.44675 113.944 10.704 124.509 15.3116 134.53C17.6159 139.543 20.6535 144.494 23.983 148.983V57.2102ZM369.034 71.3013C366.729 66.2896 363.692 61.6992 360.362 57.2102V148.983C363.692 144.494 366.729 139.543 369.034 134.53C373.642 124.509 375.897 113.944 375.897 103.097C375.897 92.2493 373.642 81.323 369.034 71.3013Z'
					fill='black'
					fillOpacity='0.5'
				/>
			</g>
		</svg>
	)
}

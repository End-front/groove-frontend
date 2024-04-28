import Link from 'next/link'

import { ROUTER_IDS_SECTIONS } from '@/shared/constant/routes'
import { cn } from '@/shared/lib/class-name'
import { UiButton } from '@/shared/ui/ui-button'
import { UiSection } from '@/shared/ui/ui-section'

import { PRICES } from './constants'

export function SectionPrices() {
	return (
		<UiSection.Section>
			<div className='grid grid-cols-2 border-b text-center text-[32px] uppercase leading-normal'>
				<Link
					className='grow basis-0 py-1.5'
					href={`#${ROUTER_IDS_SECTIONS.PRICES_COST}`}
					scroll={false}
				>
					Цены
				</Link>
				<Link
					className='grow basis-0 border-l py-1.5'
					href={`#${ROUTER_IDS_SECTIONS.PRICES_PROMO}`}
					scroll={false}
				>
					Акции
				</Link>
			</div>
			<div
				className='grid lg:grid-cols-2'
				id={ROUTER_IDS_SECTIONS.PRICES_COST}
			>
				{PRICES.map((price, index) => (
					<div
						key={index}
						className={cn(
							'flex items-center justify-between overflow-hidden border-b border-current px-6 py-2 sm:px-[calc(2rem+50%-288px)] md:px-[calc(3rem+50%-384px)]',
							(index + 1) % 2 === 0
								? 'lg:border-l lg:pl-6 lg:pr-[calc(4rem+100%-496px)] xl:pl-8 xl:pr-[calc(5rem+100%-600px)] 2xl:pl-10 2xl:pr-[calc(6.25rem+100%-720px)]'
								: 'lg:pl-[calc(4rem+100%-496px)] lg:pr-6 xl:pl-[calc(5rem+100%-600px)] xl:pr-8 2xl:pl-[calc(6.25rem+100%-720px)] 2xl:pr-10'
						)}
					>
						<div>
							<div className='text-2xs sm:text-2xs-sm md:text-2xs-md lg:text-2xs-lg 2xl:text-xs-xl'>
								{price.title}
							</div>
							{price.description && (
								<div className='text-[12px] leading-normal sm:text-2xs lg:text-2xs-sm 2xl:text-2xs-md '>
									{price.description}
								</div>
							)}
							<div className='flex items-start gap-2 whitespace-nowrap'>
								<div className='text-sm font-medium sm:text-sm-sm md:text-xs-md lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>
									{price.price} Р
								</div>
								{price.oldPrice && (
									<div className='relative text-2xs italic sm:text-xs-sm md:text-xs-md lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>
										{price.oldPrice} Р
										<div className='absolute left-0 right-0 top-1/2 border-t'></div>
									</div>
								)}
							</div>
						</div>
						<UiButton
							size='sm'
							minSize='sm'
						>
							{price.buttonText || 'Купить'}
						</UiButton>
					</div>
				))}
			</div>
			<div className='relative pb-3 sm:pb-4 md:pb-5 lg:pb-6 2xl:pb-7'>
				<SVGLogo className='absolute bottom-0 right-0 -z-[1] h-[120%] w-[60%] translate-y-[15%]' />
				<div className='container'>
					<ul className='text-2xs-adaptive px-2 pt-3 text-2xs *:relative *:pl-5 before:*:absolute before:*:left-0 before:*:top-[0.6em] before:*:block before:*:h-[4px] before:*:w-[4px] before:*:rounded-full before:*:bg-current'>
						<li>Срок действия абонемента - 30 дней с момента покупки</li>
						<li>Абонемент становится неактивным по истечении 30 дней</li>
						<li>
							Средства за неистраченные занятия по истечении 30 дней не
							возвращаются
						</li>
						<li>Абонемент нельзя передавать третьим лицам</li>
						<li>Абонемент продлевается по справке о болезни</li>
					</ul>
				</div>
			</div>
			<div
				className='container'
				id={ROUTER_IDS_SECTIONS.PRICES_PROMO}
			>
				<UiSection.Title>Акции</UiSection.Title>
				<div className='text-xs-adaptive mb-4 text-2xs md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8'>
					<span className='uppercase underline'>ПОСТОЯННЫМ КЛИЕНТАМ</span> - при
					предъявлении 5 последних потраченных абонементов скидка от 400 до 600
					руб. <br />
					(между каждым из них должно пройти не более 2-х недель)
				</div>
				<div className='text-center md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14'>
					<UiButton
						size='md'
						minSize='md'
					>
						Получить
					</UiButton>
				</div>
			</div>
		</UiSection.Section>
	)
}

function SVGLogo({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			width='282'
			height='207'
			viewBox='0 0 282 207'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			preserveAspectRatio='xMaxYMid'
		>
			<g filter='url(#section-logo-prices-blur)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M134.958 198.061V183.248C151.448 193.086 171.509 198.784 192.768 198.784C213.842 198.784 233.452 193.291 249.855 183.609V198.061C250.497 197.851 251.142 197.668 251.786 197.485L251.787 197.484L251.787 197.484H251.788C252.715 197.22 253.64 196.957 254.552 196.616C268.145 191.544 280.279 183.949 290.683 174.576C300.866 165.402 308.913 154.766 314.529 142.835V182.886C316.227 181.532 317.98 179.999 319.587 178.551C329.991 169.178 338.165 158.279 343.795 146.033C349.426 133.787 352.467 120.628 352.467 107.373C352.467 94.1177 349.426 80.9588 343.795 68.7126C338.165 56.4664 329.991 45.2065 319.587 35.8335C318.57 34.9167 317.494 34.1108 316.411 33.2993C315.783 32.8287 315.152 32.3562 314.529 31.8591V63.9614C308.913 52.0158 300.866 41.0334 290.683 31.8591C280.279 22.4863 268.145 15.2531 254.552 10.1806C253.955 9.95774 253.352 9.71383 252.746 9.46882C251.785 9.08004 250.817 8.68848 249.855 8.37402V26.0782C233.452 16.3959 213.842 10.9032 192.768 10.9032C171.509 10.9032 151.448 16.6013 134.958 26.4395V8.37402C134.084 8.65974 133.317 9.00913 132.542 9.36227C131.927 9.64267 131.307 9.92545 130.623 10.1806C117.029 15.2531 104.534 22.4863 94.1303 31.8591C83.7614 41.2004 75.5521 52.1794 69.9225 64.3769V31.8591C69.2996 32.3561 68.6692 32.8284 68.0412 33.2989L68.0408 33.299C66.9576 34.1107 65.882 34.9167 64.8642 35.8335C54.4603 45.2065 46.2875 56.4664 40.6565 68.7126C35.0262 80.9588 31.9851 94.1177 31.9851 107.373C31.9851 120.628 35.0262 133.787 40.6565 146.033C46.2875 158.279 54.4603 169.178 64.8642 178.551C66.472 179.999 68.2244 181.532 69.9225 182.886V142.058C75.5521 154.256 83.7614 165.235 94.1303 174.576C104.534 183.949 117.03 191.544 130.623 196.616C131.731 197.03 132.673 197.33 133.697 197.656L133.698 197.656L133.701 197.657C134.103 197.785 134.517 197.917 134.958 198.061ZM24.0363 57.512C20.7068 62.0009 17.6692 66.5913 15.3649 71.6031C10.7572 81.6247 8.5 92.5511 8.5 103.398C8.5 114.246 10.7572 124.811 15.3649 134.832C17.6692 139.844 20.7068 144.796 24.0363 149.285V57.512ZM369.087 71.6031C366.783 66.5913 363.745 62.0009 360.415 57.512V149.285C363.745 144.796 366.783 139.844 369.087 134.832C373.696 124.811 375.95 114.246 375.95 103.398C375.95 92.5511 373.696 81.6247 369.087 71.6031Z'
					fill='#780C0E'
					fillOpacity='0.5'
				/>
			</g>
		</svg>
	)
}

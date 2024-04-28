'use client'

import Link from 'next/link'
import { useState } from 'react'

import { ROUTER_IDS_SECTIONS, ROUTER_PATHS } from '../constant/routes'
import { cn } from '../lib/class-name'

import { UiSheet, UiSheetContent } from './ui-sheet'

const HEADER_LINKS = [
	{
		href: ROUTER_PATHS.MAIN,
		title: 'Главная'
	},
	{
		href: `${ROUTER_PATHS.MAIN}#${ROUTER_IDS_SECTIONS.OFFER}`,
		title: 'Урок за 200 Р'
	},
	{
		href: `${ROUTER_PATHS.MAIN}#${ROUTER_IDS_SECTIONS.DANCE_STYLES}`,
		title: 'Стили танцев'
	},
	{
		href: `${ROUTER_PATHS.SCHEDULE}`,
		title: 'Расписание'
	},
	{
		href: `${ROUTER_PATHS.PRICES}`,
		title: 'Стоимость'
	},
	{
		href: `${ROUTER_PATHS.MAIN}#${ROUTER_IDS_SECTIONS.NEWS}`,
		title: 'Новости'
	},
	{
		href: `${ROUTER_PATHS.HOW_FIND}`,
		title: 'Как найти'
	},
	{
		href: `${ROUTER_PATHS.RENT}`,
		title: 'Аренда'
	}
]

export const CLASSNAMES_FOR_MARGIN_TO_HEADER =
	'first:*:-mt-[48px] sm:first:*:-mt-[50px] md:first:*:-mt-[54px] lg:first:*:-mt-[65px] xl:first:*:-mt-[78px] 2xl:first:*:-mt-[97px]'

export const CLASSNAMES_FOR_PADDING_TO_HEADER =
	'first:*:pt-[48px] sm:first:*:pt-[50px] md:first:*:pt-[54px] lg:first:*:pt-[65px] xl:first:*:pt-[78px] 2xl:first:*:pt-[97px]'

export function UiHeader({
	isScrolled,
	className,
	classNameLogo
}: {
	isScrolled?: boolean
	className?: string
	classNameLogo?: string
}) {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean | undefined>()

	const scrolledClassName = 'lg-max:overflow-hidden lg-max:bg-background/80'
	return (
		<header
			className={cn(
				'fixed inset-x-0 top-0 z-40 py-2 transition ease-in-out lg:absolute lg:py-3 xl:py-4 2xl:py-6',
				className,
				isScrolled && scrolledClassName,
				isOpenMenu && 'lg-max:opacity-0'
			)}
		>
			<div className='container flex items-center justify-between'>
				<Link href={ROUTER_PATHS.MAIN}>
					<SVGLogo className={classNameLogo} />
				</Link>
				<div
					className={cn(
						'w-[60px] transition lg:fixed lg:inset-y-0 lg:right-0 lg:z-50 lg:flex lg:items-start lg:justify-center lg:bg-background/80 lg:pt-6 lg:ease-in-out lg:fill-mode-both',
						'lg:data-[state=closed]:animate-in lg:data-[state=open]:animate-out lg:data-[state=closed]:slide-in-from-right-[-480px] lg:data-[state=open]:slide-out-to-left-[480px]'
					)}
					data-state={
						isOpenMenu === undefined ? 'init' : isOpenMenu ? 'open' : 'closed'
					}
				>
					<button
						onClick={setIsOpenMenu.bind(null, prev => !prev)}
						className='relative -my-1 -mr-2 h-[36px] w-[46px] p-2 lg:mr-0'
					>
						<span
							className='absolute left-2 top-2 block h-[4px] w-[30px] rounded-[4px] bg-current transition lg:data-[state=open]:translate-y-[8px] lg:data-[state=open]:rotate-45'
							data-state={
								isOpenMenu === undefined
									? 'init'
									: isOpenMenu
										? 'open'
										: 'closed'
							}
						></span>
						<span
							className='absolute left-2 top-1/2 -mt-[2px] block h-[4px] w-[30px] rounded-[4px] bg-current transition lg:data-[state=open]:opacity-0'
							data-state={
								isOpenMenu === undefined
									? 'init'
									: isOpenMenu
										? 'open'
										: 'closed'
							}
						></span>
						<span
							className='absolute bottom-2 left-2 block h-[4px] w-[30px] rounded-[4px] bg-current transition lg:data-[state=open]:-translate-y-[7.5px] lg:data-[state=open]:-rotate-45'
							data-state={
								isOpenMenu === undefined
									? 'init'
									: isOpenMenu
										? 'open'
										: 'closed'
							}
						></span>
					</button>
				</div>
			</div>
			<UiSheet
				open={isOpenMenu}
				onOpenChange={setIsOpenMenu}
			>
				<UiSheetContent className='flex w-[calc(100%-1rem)] flex-col overflow-y-auto px-4 py-2 sm:w-[calc(100%-2rem)] md:w-[480px] md:px-6 md:py-6'>
					<div className='flex items-start justify-between lg:hidden'>
						<SVGLogo />
						<div></div>
						<button
							onClick={setIsOpenMenu.bind(null, false)}
							className='relative -my-1 -mr-2 h-[36px] p-2'
						>
							<span className='absolute left-1/2 top-1/2 block h-[4px] w-[30px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[4px] bg-current'></span>
							<span className='my-[4px] block h-[4px] w-[30px] rounded-[4px] bg-transparent'></span>
							<span className='absolute left-1/2 top-1/2 block h-[4px] w-[30px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[4px] bg-current'></span>
						</button>
					</div>
					<div className='flex grow flex-col justify-center gap-3'>
						{HEADER_LINKS.map(link => {
							return (
								<Link
									key={link.href}
									className='block py-1 text-center text-md font-medium uppercase !leading-none transition-colors hover:text-accent'
									onClick={setIsOpenMenu.bind(null, false)}
									href={link.href}
									scroll={link.href.indexOf('#') === -1}
								>
									{link.title}
								</Link>
							)
						})}
					</div>
				</UiSheetContent>
			</UiSheet>
		</header>
	)
}

function SVGLogo({ className }: { className?: string }) {
	return (
		<svg
			className={cn(
				'pointer-events-none -mb-[14px] -ml-[15px] -mt-[10px] h-[53px] w-[150px] sm:-mb-[16px] sm:-ml-[23px] sm:-mt-[11px] sm:h-[61px] sm:w-[182px] md:-mb-[18px] md:-ml-[31px] md:-mt-[13px] md:h-[69px] md:w-[214px] lg:-mb-[21px] lg:-ml-[39px] lg:-mt-[15px] lg:h-[77px] lg:w-[246px] xl:-mb-[23px] xl:-ml-[47px] xl:-mt-[16px] xl:h-[85px] xl:w-[278px] 2xl:-mb-[26px] 2xl:-ml-[54px] 2xl:-mt-[18px] 2xl:h-[93px] 2xl:w-[314px]',
				className
			)}
			width='150'
			height='53'
			viewBox='0 0 150 53'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#standard-logo-box-shadow)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M70.3763 35.9199V34.0378C72.069 35.2778 74.0988 36 76.2811 36C78.4444 36 80.4581 35.2903 82.1418 34.0699V35.9199C82.3032 35.8553 82.4627 35.7866 82.6216 35.714C84.0168 35.0746 85.285 34.1374 86.3526 32.9561C87.3903 31.8083 88.2197 30.4517 88.796 28.9598V33.9944C88.9701 33.8237 89.14 33.647 89.305 33.4644C90.3733 32.283 91.2204 30.8805 91.7985 29.3369C92.376 27.7933 92.6737 26.139 92.6737 24.4683C92.6737 22.7975 92.376 21.1431 91.7985 19.5996C91.2204 18.056 90.3733 16.6535 89.305 15.4721C89.14 15.2895 88.9701 15.1128 88.796 14.9421V18.9601C88.2197 17.4682 87.3903 16.1116 86.3526 14.9638C85.285 13.7824 84.0168 12.8453 82.6216 12.2059C82.4627 12.1333 82.3032 12.0646 82.1418 12V14.2399C80.4581 13.0196 78.4444 12.3099 76.2811 12.3099C74.0988 12.3099 72.069 13.032 70.3763 14.2721V12C70.2152 12.0646 70.0554 12.1333 69.8968 12.2059C68.5015 12.8453 67.2335 13.7824 66.1656 14.9638C65.1011 16.1412 64.2561 17.5383 63.6782 19.0757V14.9421C63.5039 15.1128 63.3341 15.2895 63.169 15.4721C62.101 16.6535 61.2539 18.056 60.6759 19.5995C60.0979 21.1431 59.8004 22.7975 59.8004 24.4682C59.8004 26.1389 60.0979 27.7933 60.6759 29.3369C61.2539 30.8805 62.101 32.283 63.169 33.4644C63.3341 33.6469 63.5039 33.8237 63.6782 33.9944V28.8442C64.2561 30.3816 65.1011 31.7787 66.1656 32.9561C67.2335 34.1374 68.5015 35.0746 69.8968 35.714C70.0554 35.7866 70.2152 35.8553 70.3763 35.9199ZM58.9632 18.1718C58.6214 18.7375 58.3298 19.3404 58.0932 19.9721C57.6202 21.2353 57.3767 22.5892 57.3767 23.9564C57.3767 25.3236 57.6202 26.6775 58.0932 27.9407C58.3298 28.5724 58.6214 29.1752 58.9632 29.741V18.1718ZM94.3812 19.9721C94.1447 19.3404 93.8526 18.7375 93.5109 18.1718V29.741C93.8526 29.1752 94.1447 28.5724 94.3812 27.9407C94.8542 26.6775 95.0975 25.3236 95.0975 23.9564C95.0975 22.5892 94.8542 21.2353 94.3812 19.9721ZM69.0489 22.5289C67.7704 22.5289 66.734 23.5655 66.734 24.8443C66.734 26.123 67.7704 27.1596 69.0489 27.1596H69.195C70.4736 27.1596 71.5099 26.123 71.5099 24.8443C71.5099 23.5655 70.4736 22.5289 69.195 22.5289H69.0489ZM80.7698 24.5519C80.7698 23.2732 81.8063 22.2366 83.0848 22.2366H83.2309C84.5094 22.2366 85.5459 23.2732 85.5459 24.5519C85.5459 25.8307 84.5094 26.8674 83.2309 26.8674H83.0848C81.8063 26.8674 80.7698 25.8307 80.7698 24.5519ZM17.0003 24.6331C17.0161 27.8391 17.7738 30.1593 19.2734 31.5938C20.7729 33.0283 23.2271 33.7371 26.636 33.7203C29.57 33.7058 31.7044 33.1863 33.0392 32.1619C34.3738 31.1205 35.0356 29.4718 35.0245 27.2157L35.0064 23.5771L25.9501 23.6219L25.9657 26.777L31.4351 26.75L31.4375 27.2334C31.4429 28.319 31.0652 29.1097 30.3044 29.6054C29.5607 30.101 28.3492 30.353 26.6703 30.3613C24.4825 30.3721 22.92 29.9303 21.9828 29.0359C21.0455 28.1245 20.5718 26.651 20.5618 24.6155C20.5518 22.5969 20.9855 21.1274 21.8628 20.207C22.7401 19.2696 24.1539 18.7962 26.1043 18.7865C28.8517 18.7729 30.5779 19.7398 31.2829 21.6871L35.0224 21.6686C34.6386 19.4992 33.7235 17.9176 32.2769 16.9239C30.8304 15.9302 28.7674 15.44 26.0878 15.4533C22.8824 15.4691 20.5626 16.2016 19.1281 17.6505C17.6937 19.0995 16.9844 21.4271 17.0003 24.6331ZM38.0994 33.4345L41.6864 33.4168L41.6558 27.2338L47.3796 27.2055C48.3294 27.2008 49.017 27.3585 49.4426 27.6787C49.8851 27.9989 50.1082 28.5151 50.1117 29.2276L50.1322 33.3751L53.6937 33.3574L53.6724 29.0573C53.6637 27.2931 53.0133 26.0919 51.7212 25.4537C53.1416 24.6155 53.8464 23.0853 53.8354 20.8631C53.8262 18.9972 53.3192 17.6511 52.3145 16.8248C51.3267 15.9815 49.7389 15.5653 47.5511 15.5761L38.0114 15.6233L38.0994 33.4345ZM47.3632 23.8722L41.6393 23.9005L41.6149 18.9642L47.3387 18.9359C48.3733 18.9309 49.1204 19.1223 49.5803 19.5101C50.04 19.881 50.272 20.4991 50.2763 21.3642C50.2806 22.2293 50.0548 22.8665 49.5989 23.2759C49.1429 23.6684 48.3976 23.8671 47.3632 23.8722ZM99.8797 15.3173L96.0894 15.3361L104.064 33.1083L108.083 33.0884L115.881 15.2382L112.065 15.2571L106.055 29.3326L99.8797 15.3173ZM118.144 33.0387L133 32.9652L132.984 29.6065L121.714 29.6623L121.694 25.6929L131.692 25.6434L131.676 22.4883L121.679 22.5377L121.659 18.5684L132.928 18.5126L132.912 15.154L118.056 15.2274L118.144 33.0387Z'
					fill='currentColor'
				/>
			</g>
		</svg>
	)
}

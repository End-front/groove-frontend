import { cn } from '@/shared/lib/class-name'

import { VideoBackground } from './ui/video-background'

export function HeroSectionMain({ className }: { className?: string }) {
	return (
		<section
			className={cn(
				'relative z-0 flex min-h-screen flex-col text-words',
				className
			)}
		>
			<VideoBackground />
			<div className='my-auto hidden lg:block'></div>
			<div className='container my-auto flex justify-center'>
				<div>
					<div className='text-[12px] font-medium leading-normal shadow-background/30 shade-text sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>
						г. Казань, П.Лумумбы, 4
					</div>
					<div className='text-[20px] font-bold uppercase leading-normal shadow-background/30 shade-text  sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[68px]'>
						Студия танцев GROOVE
					</div>
				</div>
			</div>
		</section>
	)
}

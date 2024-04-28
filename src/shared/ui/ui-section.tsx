import { cn } from '../lib/class-name'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
	children?: React.ReactNode
}

function Section({ className, children, ...props }: SectionProps) {
	return (
		<section
			className={cn('py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8', className)}
			{...props}
		>
			{children}
		</section>
	)
}

function Title({
	className,
	children
}: {
	className?: string
	children?: React.ReactNode
}) {
	return (
		<h2
			className={cn(
				'text-md-adaptive mb-3 text-center text-md font-medium uppercase md:mb-4 xl:mb-5',
				className
			)}
		>
			{children}
		</h2>
	)
}

export const UiSection = {
	Section,
	Title
}

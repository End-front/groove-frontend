import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { scroller } from 'react-scroll'

import { createStrictContext } from '../lib/react'

const scrollContext = createStrictContext<any>()

export function SmoothScrollProvider({
	children
}: {
	children?: React.ReactNode
}) {
	// useParams обновляется при изменении hash, в отличии usePathname
	const params = useParams()

	useEffect(() => {
		if (window.location.hash) {
			scroller.scrollTo(window.location.hash.replace('#', ''), {
				duration: 1000,
				smooth: 'easeInOutQuint',
				offset: -100
			})
		}
	}, [params])

	return (
		<scrollContext.Provider value={false}>{children}</scrollContext.Provider>
	)
}

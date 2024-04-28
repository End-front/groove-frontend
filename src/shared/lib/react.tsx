import {
	Children,
	Context,
	ReactNode,
	createContext,
	createElement,
	isValidElement,
	startTransition,
	useContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState
} from 'react'

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState({ Y: 0, X: 0 })

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition({ Y: window.scrollY, X: window.scrollX })
		}

		updatePosition()
		window.addEventListener('scroll', updatePosition)
		return () => window.removeEventListener('scroll', updatePosition)
	}, [])

	return scrollPosition
}

export function useStrictContext<T>(context: Context<T | null>) {
	const value = useContext(context)
	if (value === null) throw new Error('Strict context not passed')
	return value as T
}

export function createStrictContext<T>() {
	return createContext<T | null>(null)
}

export function ComposeChildren({ children }: { children: ReactNode }) {
	const array = Children.toArray(children)
	const last = array.pop()
	return (
		<>
			{array.reduceRight(
				(child, element) =>
					isValidElement(element)
						? createElement(element.type, element.props, child)
						: child,
				last
			)}
		</>
	)
}

type Fn<ARGS extends any[], R> = (...args: ARGS) => R

export function useEventCallback<A extends any[], R>(fn: Fn<A, R>): Fn<A, R> {
	const ref = useRef<Fn<A, R>>(fn)
	useLayoutEffect(() => {
		ref.current = fn
	})
	return useMemo(
		() =>
			(...args: A): R => {
				const { current } = ref
				return current(...args)
			},
		[]
	)
}

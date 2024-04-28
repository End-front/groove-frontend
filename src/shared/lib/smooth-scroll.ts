type scrollOptions = { x: number; y: number; scrollElement: HTMLElement }

function scroll({ x = 0, y = 0, scrollElement }: scrollOptions) {
	const start = performance.now()
	const data = {
		idAnimateFrame: 0
	}

	const tick = () => {
		scrollElement.scrollTo(x, y)
		data.idAnimateFrame = requestAnimationFrame(tick)
	}

	data.idAnimateFrame = requestAnimationFrame(tick)

	return data
}

// document.getElementById('button')?.addEventListener('click', () => {
// 	scroll({ x: 0, y: 100, scrollElement: document.documentElement })
// })

const data = scroll({ x: 0, y: 100, scrollElement: document.documentElement })

document.getElementById('delete')?.addEventListener('click', () => {
	cancelAnimationFrame(data.idAnimateFrame)
})

'use client'

import { useEffect, useRef, useState } from 'react'

type VideoSourceTagOwnProps = {
	poster?: string
}

type VideoSourceTagProps = Omit<
	React.SourceHTMLAttributes<HTMLSourceElement>,
	'srcSet'
> &
	VideoSourceTagOwnProps

type VideoTagProps = Omit<
	React.VideoHTMLAttributes<HTMLVideoElement>,
	'src'
> & {
	sources?: VideoSourceTagProps[]
}

export function VideoTag({ sources, children, ...props }: VideoTagProps) {
	const [sourcesElement, setSourcesElement] = useState<
		JSX.Element | undefined
	>()
	const [videoSetting, setVideoSetting] = useState<
		| {
				poster?: string
		  }
		| undefined
	>()

	useEffect(() => {
		if (!sources) return

		new Promise(async (res, rej) => {
			let resSourceTag
			let resPoster

			for (let index = 0; index < sources.length; index++) {
				const { src, media, poster, ...data } = sources[index]
				if (media) {
					if (!window.matchMedia(media).matches) continue
				} else {
					if (resSourceTag) continue
				}

				let resSrc = src
				if (src) {
					const URL = window.URL || window.webkitURL
					const blob = await fetch(src).then(res => res.blob())
					resSrc = URL.createObjectURL(blob)
				}

				resPoster = poster
				resSourceTag = (
					<source
						key={index}
						src={resSrc}
						{...data}
					/>
				)
			}

			setSourcesElement(resSourceTag)
		})
	}, [sources])

	return (
		<video
			{...props}
			{...videoSetting}
		>
			{sourcesElement}
			{children}
		</video>
	)
}

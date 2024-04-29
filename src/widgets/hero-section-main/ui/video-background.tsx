'use client'

import { useEffect, useRef, useState } from 'react'

export function VideoBackground() {
	const videoRef = useRef<HTMLVideoElement>(null)

	// IOS power save mode - fix autoplay video
	const [shouldUseImage, setShouldUseImage] = useState<boolean>(false)
	useEffect(() => {
		const video = videoRef.current
		if (video) {
			setTimeout(() => {
				video.play().catch(err => {
					setShouldUseImage(true)
				})
			}, 0)
		}
	}, [])
	if (shouldUseImage) {
		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img
				src='/assets/videos/main-video-mob.mp4'
				className='pointer-events-none absolute inset-0 -z-[1] h-full w-full object-cover'
				alt='Muted video'
			/>
		)
	}

	return (
		<video
			ref={videoRef}
			muted
			loop
			playsInline
			autoPlay
			className='pointer-events-none absolute inset-0 -z-[1] h-full w-full object-cover'
			poster='/assets/videos/main-video.jpg'
		>
			<source
				src='/assets/videos/main-video.mp4'
				media='(min-width: 992px)'
				type='video/mp4'
			/>
			<source
				src='/assets/videos/main-video-mob.mp4'
				type='video/mp4'
			/>
		</video>
	)
}

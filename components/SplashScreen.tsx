'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { media } from '@/lib/site'

const PROGRESS_MS = 3600
const EXIT_DELAY = PROGRESS_MS + 150
const UNMOUNT_DELAY = EXIT_DELAY + 900

export default function SplashScreen() {
	const [visible, setVisible] = useState(false)
	const [progressActive, setProgressActive] = useState(false)
	const [leaving, setLeaving] = useState(false)

	useEffect(() => {
		if (sessionStorage.getItem('splash-seen')) return

		setVisible(true)

		const t1 = setTimeout(() => setProgressActive(true), 80)
		const t2 = setTimeout(() => setLeaving(true), EXIT_DELAY)
		const t3 = setTimeout(() => {
			setVisible(false)
			sessionStorage.setItem('splash-seen', '1')
		}, UNMOUNT_DELAY)

		return () => {
			clearTimeout(t1)
			clearTimeout(t2)
			clearTimeout(t3)
		}
	}, [])

	function skip() {
		if (leaving) return
		setLeaving(true)
		setTimeout(() => {
			setVisible(false)
			sessionStorage.setItem('splash-seen', '1')
		}, 900)
	}

	if (!visible) return null

	const panelTransition = 'transform 900ms cubic-bezier(0.76, 0, 0.24, 1)'

	return (
		<div className='fixed inset-0 z-[200] flex overflow-hidden'>
			{/* Left panel — video / photo */}
			<div
				className='relative hidden overflow-hidden lg:block lg:w-1/2'
				style={{
					transform: leaving ? 'translateX(-100%)' : 'translateX(0)',
					transition: panelTransition
				}}
			>
				{/* Video element — plays when file exists in /public/media */}
				<video
					autoPlay
					muted
					playsInline
					loop
					poster={media.hero}
					className='absolute inset-0 z-10 h-full w-full object-cover'
				>
					<source src={media.intro} type='video/mp4' />
					<source src={media.intro} type='video/quicktime' />
				</video>

				{/* Photo fallback behind video */}
				<Image
					src={media.editorial}
					alt=''
					fill
					sizes='50vw'
					className='object-cover object-[35%_20%]'
					priority
				/>

				{/* Subtle dark veil */}
				<div className='absolute inset-0 z-20 bg-stone-950/30' />
			</div>

			{/* Right panel — dark content */}
			<div
				className='relative flex w-full flex-col bg-stone-950 lg:w-1/2'
				style={{
					transform: leaving ? 'translateX(100%)' : 'translateX(0)',
					transition: panelTransition
				}}
			>
				{/* Mobile: photo bleeds behind dark panel */}
				<div className='absolute inset-0 lg:hidden'>
					<Image
						src={media.hero}
						alt=''
						fill
						sizes='100vw'
						className='object-cover object-[58%_20%] opacity-20'
						priority
					/>
				</div>

				{/* Centered content */}
				<div className='relative flex flex-1 flex-col items-center justify-center text-center'>
					<p className='mb-10 text-[9px] font-light uppercase tracking-[0.26em] text-stone-500'>
						Ведущий мероприятий
					</p>

					<h1 className='font-heading text-[48px] font-light leading-none tracking-[-0.01em] text-white sm:text-[96px] lg:text-[84px] xl:text-[100px]'>
						Nursultan
					</h1>

					{/* Vertical progress line */}
					<div className='relative mt-16 h-24 w-px bg-stone-800'>
						<div
							className='absolute left-0 top-0 w-full bg-[#9a6a25]'
							style={{
								height: progressActive ? '100%' : '0%',
								transition: progressActive
									? `height ${PROGRESS_MS}ms linear`
									: 'none'
							}}
						/>
					</div>
				</div>

				{/* Skip */}
				<button
					onClick={skip}
					className='absolute bottom-8 right-8 text-[9px] font-light uppercase tracking-[0.22em] text-stone-600 transition-colors duration-200 hover:text-stone-400'
				>
					Skip →
				</button>

				{/* Year — bottom left */}
				<span className='absolute bottom-8 left-8 text-[9px] font-light uppercase tracking-[0.2em] text-stone-700'>
					© {new Date().getFullYear()}
				</span>
			</div>
		</div>
	)
}

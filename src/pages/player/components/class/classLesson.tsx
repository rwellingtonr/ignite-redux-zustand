'use client'

import { Icon } from '@/components/Icon'
import { ComponentProps, forwardRef } from 'react'

type ClassLessonProps = ComponentProps<'button'> & {
	title: string
	duration: string
	isCurrentLesson?: boolean
	onPlay: () => void
}

export const ClassLesson = forwardRef<HTMLButtonElement, ClassLessonProps>((props, ref) => {
	const { duration, title, onPlay, isCurrentLesson = false, ...rest } = props

	return (
		<button
			type="button"
			onClick={onPlay}
			disabled={isCurrentLesson}
			ref={ref}
			{...rest}
			className="flex items-center gap-3 text-sm text-zinc-400 enabled:hover:text-zinc-100 disabled:text-emerald-400"
		>
			{isCurrentLesson ? (
				<Icon name="play-circle" className="h-4 w-4 text-emerald-400" />
			) : (
				<Icon name="video" className="h-4 w-4 text-zinc-500" />
			)}

			<span>{title}</span>
			<span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
		</button>
	)
})

ClassLesson.displayName = 'ClassLesson'

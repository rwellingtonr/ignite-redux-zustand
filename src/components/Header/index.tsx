'use client'

/* eslint-disable react/no-unescaped-entities */
import { useLesson } from '@/hooks/useLesson'
import { Button } from '../Button'
import { Icon } from '../Icon'

export function Header() {
	const { lesson, module } = useLesson()

	return (
		<header className="flex items-center justify-between">
			{/* Header */}
			<div className="flex flex-col gap-1 ">
				<h1 className="text-2xl font-bold">{lesson.title}</h1>
				<span className="text-sm text-zinc-400">Módulo "{module.title}"</span>
			</div>

			<Button>
				<Icon name="message-circle" className="h-4 w-4" />
				Deixar o feedback
			</Button>
		</header>
	)
}

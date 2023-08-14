'use client'

import { useAppSelector } from '@/store'
import { Class } from './components/class'
import { Video } from './components/video'
import { useDispatch } from 'react-redux'
import { play } from '@/store/slices/player'

export function Player() {
	const modules = useAppSelector(({ player }) => player.course.modules)
	const currentClass = useAppSelector(({ player }) => {
		const { currentLessonIndex, currentModuleIndex } = player.course

		return { currentLessonIndex, currentModuleIndex }
	})
	const dispatch = useDispatch()

	const handlePlayVideo = (moduleIndex: number, lessonIndex: number) => {
		dispatch(play([moduleIndex, lessonIndex]))
	}

	return (
		<main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 pr-80 shadow">
			{/* Video */}
			<Video url="https://www.youtube.com/watch?v=UdKX_6_Y43A" />

			{/* Classes */}
			<Class.Root>
				{modules.map((module, moduleIndex) => (
					<Class.Section key={`section-${module.id}`}>
						<Class.Heading index={module.id} title={module.title} />
						<Class.Classes>
							{module.lessons.map((lesson, lessonIndex) => {
								const isCurrentLesson =
									currentClass.currentLessonIndex === lessonIndex &&
									currentClass.currentModuleIndex === moduleIndex

								return (
									<Class.Lesson
										key={lesson.id}
										onPlay={() => handlePlayVideo(moduleIndex, lessonIndex)}
										duration={lesson.duration}
										title={lesson.title}
										isCurrentLesson={isCurrentLesson}
									/>
								)
							})}
						</Class.Classes>
					</Class.Section>
				))}
			</Class.Root>
		</main>
	)
}

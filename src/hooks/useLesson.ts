import { useAppSelector } from '@/store'

export function useLesson() {
	const classes = useAppSelector(({ player }) => {
		const { modules, currentLessonIndex, currentModuleIndex } = player.course
		const currentModule = modules[currentModuleIndex]
		const currentLesson = currentModule.lessons[currentLessonIndex]

		return { currentLesson, currentModule }
	})

	return {
		lesson: classes.currentLesson,
		module: classes.currentModule,
	}
}

import { Icon } from '@/components/Icon'
import { ComponentProps, forwardRef } from 'react'

type ClassLessonProps = ComponentProps<'button'> & {
	title: string
	duration: string
}

export const ClassLesson = forwardRef<HTMLButtonElement, ClassLessonProps>((props, ref) => {
	const { duration, title, ...rest } = props

	return (
		<button className="flex items-center gap-3 text-sm text-zinc-400" ref={ref} {...rest}>
			<Icon name="video" className="w-4 h-4 text-zinc-500" />
			<span>{title}</span>
			<span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
		</button>
	)
})

ClassLesson.displayName = 'ClassLesson'

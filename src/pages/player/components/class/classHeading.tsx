import { Icon } from '@/components/Icon'
import { ComponentProps, forwardRef } from 'react'

type ClassHeadingProps = ComponentProps<'button'> & {
	index: number
	title: string
	subtitle: string
}

export const ClassHeading = forwardRef<HTMLButtonElement, ClassHeadingProps>((props, ref) => {
	const { index, subtitle, title, ...rest } = props

	return (
		<button
			className="flex w-full items-center gap-3 bg-zinc-800 p-4 hover:bg-zinc-900"
			ref={ref}
			{...rest}
		>
			<span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
				{index}
			</span>
			<div className="flex flex-col gap-1 text-left">
				<strong className="text-sm">{title}</strong>
				<span className="text-xs text-zinc-400">{subtitle}</span>
			</div>

			<Icon name="chevron-down" className="w-4 h-4 ml-auto text-zinc-400" />
		</button>
	)
})
ClassHeading.displayName = 'ClassHeading'

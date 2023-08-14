'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Icon } from '@/components/Icon'

type ClassHeadingProps = Collapsible.CollapsibleTriggerProps & {
	index: number | string
	title: string
	subtitle?: string
}

export const ClassHeading: React.FC<ClassHeadingProps> = ({ index, subtitle, title, ...props }) => {
	return (
		<Collapsible.Trigger
			className="flex w-full items-center gap-3 bg-zinc-800 p-4 hover:bg-zinc-900"
			{...props}
		>
			<span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
				{index}
			</span>
			<div className="flex flex-col gap-1 text-left">
				<strong className="text-sm">{title}</strong>
				<span className="text-xs text-zinc-400">{subtitle}</span>
			</div>

			<Icon
				name="chevron-down"
				className="ml-auto h-4 w-4 text-zinc-400 transition-transform group-data-[state=open]:rotate-180"
			/>
		</Collapsible.Trigger>
	)
}

import { ComponentProps } from 'react'

type ClassRootProps = ComponentProps<'aside'>

export function ClassRoot(props: ClassRootProps) {
	return (
		<aside
			className="absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800"
			{...props}
		/>
	)
}

import { ComponentProps } from 'react'

type ClassRootProps = ComponentProps<'aside'>

export function ClassRoot(props: ClassRootProps) {
	return (
		<aside
			className="w-80 absolute bottom-0 right-0 top-0 border-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900"
			{...props}
		/>
	)
}

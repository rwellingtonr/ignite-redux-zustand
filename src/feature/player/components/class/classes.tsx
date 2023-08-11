import { ComponentProps } from 'react'

type ClassesProps = ComponentProps<'nav'>

export function Classes(props: ClassesProps) {
	return <nav className="relative flex flex-col gap-4 p-6" {...props} />
}

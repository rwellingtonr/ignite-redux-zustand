import { ComponentProps } from 'react'

type ClassSectionProps = ComponentProps<'section'>

export function ClassSection(props: ClassSectionProps) {
	return <section {...props} />
}

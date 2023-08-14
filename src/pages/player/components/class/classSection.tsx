'use client'

import * as Collapsible from '@radix-ui/react-collapsible'

type ClassSectionProps = Collapsible.CollapsibleProps

export function ClassSection(props: ClassSectionProps) {
	return <Collapsible.Root {...props} className="group" />
}

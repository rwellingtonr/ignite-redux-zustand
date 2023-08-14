'use client'

import * as Collapsible from '@radix-ui/react-collapsible'

type ClassesProps = Collapsible.CollapsibleContentProps

export function Classes({ children, ...props }: ClassesProps) {
	return (
		<Collapsible.Content {...props}>
			<nav className="relative flex flex-col gap-4 p-6" {...props}>
				{children}
			</nav>
		</Collapsible.Content>
	)
}

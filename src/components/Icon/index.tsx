import dynamic from 'next/dynamic'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { LucideProps } from 'lucide-react'

interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports
}

export function Icon({ name, ...props }: IconProps) {
	const LucideIcon = dynamic(dynamicIconImports[name], {
		loading: () => <div className="h-4 w-4 animate-pulse rounded-full bg-zinc-800" />,
	})
	return <LucideIcon {...props} />
}

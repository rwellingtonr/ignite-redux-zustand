/* eslint-disable react/no-unescaped-entities */
import { Button } from '../Button'
import { Icon } from '../Icon'

export function Header() {
	return (
		<header className="flex justify-between items-center">
			{/* Header */}
			<div className="flex flex-col gap-1 ">
				<h1 className="text-2xl font-bold">Fundamento do Redux</h1>
				<span className="text-zinc-400 text-sm">Módulo "Desvendando o Redux"</span>
			</div>

			<Button>
				<Icon name="message-circle" className="h-4 w-4" />
				Deixar o feedback
			</Button>
		</header>
	)
}

import { Header } from '@/components/Header'
import { Icon } from '@/components/Icon'
import { Player } from '@/feature/player'

export default function Home() {
	return (
		<div className="bg-zinc-950 text-zinc-50 h-screen m-0 p-0 grid place-content-center">
			<div className="flex w-[1100px] flex-col gap-6">
				<Header />
				<Player />
			</div>
		</div>
	)
}

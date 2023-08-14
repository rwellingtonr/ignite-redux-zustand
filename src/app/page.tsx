import { Header } from '@/components/Header'
import { Player } from '@/pages/player'

export default function Home() {
	return (
		<div className="m-0 grid h-screen place-content-center bg-zinc-950 p-0 text-zinc-50">
			<div className="flex w-[1100px] flex-col gap-6">
				<Header />
				<Player />
			</div>
		</div>
	)
}

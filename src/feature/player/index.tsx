import { Class } from './components/class'
import { Video } from './components/video'

export function Player() {
	return (
		<main
			style={{
				paddingRight: '20rem',
			}}
			className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80"
		>
			{/* Video */}
			<Video url="https://www.youtube.com/watch?v=UdKX_6_Y43A" />

			{/* Classes */}
			<Class.Root>
				{Array.from({ length: 2 }).map((_, i) => (
					<Class.Section key={`section-${i}`}>
						<Class.Heading index={1} subtitle="12 aulas" title="Desvendando o Redux" />
						<Class.Classes>
							{Array.from({ length: 4 }).map((__, index) => (
								<Class.Lesson key={index} duration="09:19" title="Fundamentos do Redux" />
							))}
						</Class.Classes>
					</Class.Section>
				))}
			</Class.Root>
		</main>
	)
}

'use client'
import { useAppSelector } from '@/store'
import { LoadingVideo } from './LoadingVideo'
import dynamic from 'next/dynamic'
import { useLesson } from '@/hooks/useLesson'

type VideoProps = {
	url: string
}

const DynamicPlayer = dynamic(() => import('react-player'), {
	loading: () => <LoadingVideo />,
})

export function Video(props: VideoProps) {
	const { lesson } = useLesson()

	return (
		<section className="flex-1">
			<div className="aspect-video w-full bg-zinc-950">
				<DynamicPlayer
					fallback={<LoadingVideo />}
					url={`https://www.youtube.com/watch?v=${lesson.id}`}
					height="100%"
					width="100%"
				/>
			</div>
		</section>
	)
}

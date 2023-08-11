'use client'

import ReactPlayer from 'react-player'

type VideoProps = {
	url: string
}

export function Video(props: VideoProps) {
	return (
		<section className="flex-1">
			<div className="w-full aspect-video bg-zinc-950">
				<ReactPlayer width="100%" height="100%" controls url={props.url} />
			</div>
		</section>
	)
}

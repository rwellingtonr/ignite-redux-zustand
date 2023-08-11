'use client'

import { store } from '@/store'
import { Provider as ReduxProvider } from 'react-redux'

type ProviderProps = {
	children: React.ReactNode
}

export function Provider(props: ProviderProps) {
	return <ReduxProvider store={store}>{props.children}</ReduxProvider>
}

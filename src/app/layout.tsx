import './globals.css'
import { Provider } from '@/provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

type RootLayoutProps = {
	children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Redux + Zustang',
	description: 'Video player',
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}

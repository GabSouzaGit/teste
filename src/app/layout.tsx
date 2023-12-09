import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CRUD com Prisma',
  description: 'Primeiro site utilizando Prisma',
}

interface Page {
  children : React.ReactNode
}

export default function RootLayout({ children } : Page){
  return (
    <html lang="pt-br">
      <body className={inter.className}> { children } </body>
    </html>
  )
}

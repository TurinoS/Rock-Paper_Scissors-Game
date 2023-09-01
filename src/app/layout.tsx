import './globals.css'
import type { Metadata } from 'next'
import { Barlow_Semi_Condensed } from 'next/font/google'

const barlow = Barlow_Semi_Condensed({ 
  weight: "600",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rock, Paper, Scissor',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'InsurAI - AI-Powered Insurance Solutions',
  description: 'Transform your brokerage with intelligent, purpose-built tools designed specifically for the insurance industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
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
    <html lang="en" className={`${inter.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

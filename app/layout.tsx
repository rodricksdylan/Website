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

const siteUrl = 'https://insurai.com.au'
const siteDescription =
  'InsurAI is an AI orchestration platform purpose-built for insurance brokerages. Give your brokers an AI assistant that reads every policy — instant answers, fewer tabs, and better advice for your clients.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'InsurAI — AI-Powered Insurance Solutions for Insurance Brokers',
    template: '%s | InsurAI',
  },
  description: siteDescription,
  applicationName: 'InsurAI',
  creator: 'InsurAI Pty Ltd',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteUrl,
    siteName: 'InsurAI',
    title: 'InsurAI — AI-Powered Insurance Solutions for Insurance Brokers',
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InsurAI — AI-Powered Insurance Solutions for Insurance Brokers',
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'InsurAI',
      legalName: 'InsurAI Pty Ltd',
      url: siteUrl,
      email: 'contact@insurai.com.au',
      description: siteDescription,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hobart',
        addressRegion: 'TAS',
        addressCountry: 'AU',
      },
      sameAs: ['https://www.linkedin.com/company/insur-ai'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'InsurAI',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Adeena Ramzan | AI/ML Engineer',
  description:
    'AI/ML Engineer specializing in Generative AI, RAG systems, and LLM fine-tuning. Based in Karachi, Pakistan. Building production AI systems.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Generative AI',
    'RAG',
    'LLM',
    'Adeena Ramzan',
    'Karachi',
  ],
  authors: [{ name: 'Adeena Ramzan' }],
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Adeena Ramzan | AI/ML Engineer',
    description:
      'AI/ML Engineer specializing in Generative AI, RAG systems, and LLM fine-tuning.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

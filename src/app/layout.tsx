import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const spaceMono = Space_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'Product Manager | Portfolio',
  description: 'Hari Krishna - Product Manager specializing in AI-driven EdTech',
  openGraph: {
    title: 'Product Manager | Portfolio',
    description: 'Hari Krishna - Product Manager specializing in AI-driven EdTech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Manager | Portfolio',
    description: 'Hari Krishna - Product Manager specializing in AI-driven EdTech',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} ${spaceMono.variable} bg-[#121212] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Product Manager | Portfolio',
  description: 'Hari Krishna - Product Manager specializing in AI-driven EdTech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#121212] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

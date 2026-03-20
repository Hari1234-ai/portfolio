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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const themes = [
                    { id: "blue", color: "#38bdf8", glow: "rgba(56, 189, 248, 0.3)" },
                    { id: "rose", color: "#e11d48", glow: "rgba(225, 29, 72, 0.3)" },
                    { id: "teal", color: "#2dd4bf", glow: "rgba(45, 212, 191, 0.3)" },
                    { id: "orange", color: "#f97316", glow: "rgba(249, 115, 22, 0.3)" },
                    { id: "purple", color: "#c084fc", glow: "rgba(192, 132, 252, 0.3)" },
                  ];
                  const saved = localStorage.getItem("portfolio-theme");
                  if (saved) {
                    const theme = themes.find(t => t.id === saved);
                    if (theme) {
                      document.documentElement.style.setProperty("--accent-primary", theme.color);
                      document.documentElement.style.setProperty("--accent-glow", theme.glow);
                      document.documentElement.style.setProperty("--accent-text", theme.color);
                    }
                  }
                } catch (e) {
                  console.error("Theme init failed", e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${spaceMono.variable} bg-[#121212] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

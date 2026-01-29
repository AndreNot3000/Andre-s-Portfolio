import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Olumide Andre - Flutter Mobile App Developer',
  description: 'Portfolio of Olumide Andre - Flutter Mobile App Developer specializing in cross-platform mobile applications, iOS and Android development',
  keywords: 'flutter developer, mobile app developer, ios developer, android developer, dart, cross-platform, mobile development',
  authors: [{ name: 'Olumide Andre' }],
  creator: 'Olumide Andre',
  publisher: 'Olumide Andre',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
  // manifest: '/manifest.json', // Uncomment when icon files are created
  openGraph: {
    title: 'Olumide Andre - Flutter Mobile App Developer',
    description: 'Portfolio showcasing innovative mobile applications built with Flutter',
    url: 'https://olumideandre.dev',
    siteName: 'Olumide Andre Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Olumide Andre - Flutter Mobile App Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olumide Andre - Flutter Mobile App Developer',
    description: 'Portfolio showcasing innovative mobile applications built with Flutter',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
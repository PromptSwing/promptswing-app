import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const dmSans = localFont({
  src: [
    { path: '../../public/fonts/dm-sans-400.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/dm-sans-500.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/dm-sans-700.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'PromptSwing',
  description: 'Revenue protection infrastructure for commerce merchants.',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}

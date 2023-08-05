import './globals.css';
import 'remixicon/fonts/remixicon.css'
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';

const dm_sans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Bike Hub',
  description: 'The visual showcasing of Bikes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body className={`${dm_sans.className} bg-bh-neutrals-100 text-bh-neutrals-800 min-h-screen relative`}>
        {children}
        <div className="hidden sm:block">
          <ScrollToTop style="fixed right-8 bottom-8" />
        </div>
      </body>
    </html>
  )
}

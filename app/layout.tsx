import type { Metadata, Viewport } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/lib/smooth-scroll';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Cursor } from '@/components/ui/Cursor';
import { Preloader } from '@/components/ui/Preloader';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.altruistyinnovation.com'),
  title: 'Altruisty Innovation Pvt Ltd | Innovate. Build. Transform.',
  description:
    'Turning Ideas into Intelligent Digital Solutions. We help businesses embrace technology, empower students with practical skills, and support innovators in transforming ideas into meaningful digital experiences.',
  keywords: [
    'Altruisty Innovation Pvt Ltd',
    'Software Development',
    'Artificial Intelligence',
    'Emerging Technologies',
    'Digital Transformation',
    'Internships',
    'Tech Hackathons',
  ],
  authors: [{ name: 'Altruisty Innovation Pvt Ltd' }],
  icons: {
    icon: '/logo/altruisty-logo.png',
    apple: '/logo/altruisty-logo.png',
  },
  openGraph: {
    title: 'Altruisty Innovation Pvt Ltd | Turning Ideas into Intelligent Digital Solutions',
    description:
      'From software development to emerging technologies, we bring ideas to life through innovation, creativity, and technology.',
    url: 'https://www.altruistyinnovation.com/',
    siteName: 'Altruisty Innovation Pvt Ltd',
    images: [
      {
        url: '/logo/altruisty-logo.png',
        width: 800,
        height: 600,
        alt: 'Altruisty Innovation Pvt Ltd Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#2F4A9F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-white text-slate-800 antialiased selection:bg-brand-cyan/30 selection:text-brand-deep">
        <Preloader />
        <ScrollProgress />
        <Cursor />
        <SmoothScrollProvider>
          <main className="relative flex flex-col min-h-screen">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

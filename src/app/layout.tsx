import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.altruistyinnovation.com'),
  title: 'Altruisty Innovation — Innovate. Build. Transform.',
  description:
    'Turning Ideas into Intelligent Digital Solutions. Altruisty Innovation provides software development, artificial intelligence, emerging technologies, skill development, and industry-partnered internships.',
  keywords: [
    'Altruisty Innovation',
    'Software Development',
    'Artificial Intelligence',
    'Emerging Technologies',
    'Digital Transformation',
    'Internships',
    'College Collaborations',
    'Tech Solutions',
  ],
  authors: [{ name: 'Altruisty Innovation Pvt Ltd' }],
  openGraph: {
    title: 'Altruisty Innovation — Innovate. Build. Transform.',
    description:
      'Turning Ideas into Intelligent Digital Solutions. Empowering businesses, students, and innovators with modern digital technologies.',
    url: 'https://www.altruistyinnovation.com/',
    siteName: 'Altruisty Innovation',
    images: [
      {
        url: '/logo.png',
        width: 694,
        height: 171,
        alt: 'Altruisty Innovation Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Teko:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#3B72AF] selection:text-white">
        {children}
      </body>
    </html>
  );
}

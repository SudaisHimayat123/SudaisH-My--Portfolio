import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

// Load fonts with Next.js font optimization
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

// SEO Metadata
export const metadata: Metadata = {
  title: 'Sudais Himayat | Full-Stack & AI Developer',
  description:
    'Computer Science student at COMSATS University Islamabad with hands-on experience in MERN stack and AI/ML. Completed multiple internships in frontend, machine learning, and AI.',
  keywords: [
    'Sudais Himayat',
    'Full-Stack Developer',
    'AI Developer',
    'MERN Stack',
    'Machine Learning',
    'React Developer',
    'Python Developer',
    'Portfolio',
    'COMSATS',
    'Pakistan Developer',
  ],
  authors: [{ name: 'Sudais Himayat', url: 'https://github.com/SudaisHimayat123' }],
  creator: 'Sudais Himayat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sudais Himayat | Full-Stack & AI Developer',
    description: 'CS Student passionate about building scalable Full-Stack and AI/ML applications.',
    siteName: 'Sudais Himayat Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Sudais Himayat Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudais Himayat | Full-Stack & AI Developer',
    description: 'CS Student passionate about building scalable Full-Stack and AI/ML applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Theme initialization script to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'light') document.documentElement.classList.add('light');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="bg-bg font-body text-text antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

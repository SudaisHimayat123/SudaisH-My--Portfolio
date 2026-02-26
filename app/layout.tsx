import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Sudais Himayat — Full-Stack & AI Developer',
  description: 'Computer Science student at COMSATS University Islamabad. Full-Stack & AI Developer with expertise in MERN stack, Machine Learning, and Computer Vision.',
  keywords: ['Sudais Himayat', 'Full-Stack Developer', 'AI Developer', 'MERN Stack', 'Machine Learning', 'Pakistan'],
  authors: [{ name: 'Sudais Himayat' }],
  openGraph: {
    type: 'website',
    title: 'Sudais Himayat — Full-Stack & AI Developer',
    description: 'Building intelligent systems. Crafting seamless experiences.',
    siteName: 'Sudais Himayat Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudais Himayat — Full-Stack & AI Developer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'var(--bg-surface)',
                color: 'var(--text-primary)',
                border: '1px solid var(--accent)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

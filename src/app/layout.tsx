import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: false, // Prevents Chrome's preload warning for unused font slices
});

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'NovaDGT - Permiso B Driving Exam Prep',
  description: 'Premium test preparation for the Spanish DGT Driving License theory test.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'NovaDGT',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950`}>
        <LanguageProvider>
          <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
            {/* Background Ambient Glow */}
            <div className="pointer-events-none fixed inset-0 z-0">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-amber-500/10 blur-[140px]" />
              <div className="absolute top-1/2 -right-40 h-[400px] w-[500px] rounded-full bg-blue-500/10 blur-[130px]" />
            </div>

            <Navbar />

            <main className="relative z-10 flex-1 pb-20 md:pb-8">
              {children}
            </main>

            <MobileNav />
          </div>
        </LanguageProvider>

        {/* Register Service Worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch((err) => {
                    console.error('Service worker registration failed:', err);
                  });
                });
              }
            `,
          }}
        />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Anek_Latin, Montserrat } from 'next/font/google';

import './globals.css';

import Footer from '@/components/ui/footer';
import { cn } from '@/lib/utils';
import { AOSInit, ThemeProvider, TranslationProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'Image Hub - profesjonalne narzędzie dla fotografów',
  description:
    'Zarządzaj swoją bazą zdjęć, udostępniaj swoje prace bez pośredników i nawiązuj współprace z klientami oraz innymi fotografami. Niezależnie od Twojego poziomu zaawansowania, znajdziesz tutaj narzędzia, które podniosą jakość Twojej pracy!',
  keywords: 'image hub, narzędzie dla fotografów'
};

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

const anekLatin = Anek_Latin({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anekLatin'
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          montserrat.variable,
          anekLatin.variable,
          'select-none bg-background'
        )}>
        <AOSInit />
        <ThemeProvider>
          <TranslationProvider>{children}</TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

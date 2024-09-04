import type { Metadata } from 'next';
import { Anek_Latin, Montserrat } from 'next/font/google';
import './globals.css';
import { AOSInit } from '@/components/AOSInit';
import { ThemeProvider } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';
import TranslationsProvider from '@/components/TranslationsProvider';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const anekLatin = Anek_Latin({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Image Hub - profesjonalne narzędzie dla fotografów',
  description:
    'Zarządzaj swoją bazą zdjęć, udostępniaj swoje prace bez pośredników i nawiązuj współprace z klientami oraz innymi fotografami. Niezależnie od Twojego poziomu zaawansowania, znajdziesz tutaj narzędzia, które podniosą jakość Twojej pracy!',
  keywords: 'image hub, narzędzie dla fotografów'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(montserrat.className, anekLatin.className)}>
        <AOSInit />
        <ThemeProvider>
          <TranslationsProvider>{children}</TranslationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

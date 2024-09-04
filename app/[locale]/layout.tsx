import type { Metadata } from 'next';

import { AOSInit, ThemeProvider, TranslationProvider } from '@/providers';

import './globals.css';

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
      <body>
        <AOSInit />
        <ThemeProvider>
          <TranslationProvider>{children}</TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

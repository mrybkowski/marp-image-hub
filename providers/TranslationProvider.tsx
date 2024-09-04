'use server';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

interface TranslationProviderProviderProps {
  children: React.ReactNode;
}

export async function TranslationProvider({
  children
}: TranslationProviderProviderProps) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

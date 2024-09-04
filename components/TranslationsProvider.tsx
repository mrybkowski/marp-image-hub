import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

interface TranslationsProviderProps {
  children: React.ReactNode;
}

export default async function TranslationsProvider({
  children
}: TranslationsProviderProps) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

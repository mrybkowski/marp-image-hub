import { Container } from '@/components/ui/container';
import { ToggleMode } from '@/components/ui/toggle-mode';
import { H1 } from '@/components/ui/typography-h1';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('app');

  return (
    <main className="h-full">
      <Container className="flex items-center justify-center gap-5 h-full">
        <ToggleMode />
        <H1>{t('name')}</H1>
      </Container>
    </main>
  );
}

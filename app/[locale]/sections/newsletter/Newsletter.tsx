'use client';

import { RocketIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import NewsletterForm from './NewsletterForm';

import { Container } from '@/components/ui/container';
import { H2 } from '@/components/ui/typography-h2';
import { P } from '@/components/ui/typography-p';

export default function About() {
  const t = useTranslations();

  return (
    <section
      id="newsletter"
      className="py-10 bg-secondary/20 dark:bg-foreground md:rounded-[100px] rounded-[40px]">
      <div data-aos="fade-up">
        <Container className="flex flex-col gap-10">
          <div className="w-full flex flex-col gap-2 pb-5 md:pb-0">
            <div className="flex flex-row items-center gap-2">
              <div className="p-3 bg-secondary rounded-full border border-secondary-foreground">
                <RocketIcon color="black" className="h-5 w-5" />
              </div>
              <H2>{t('newsletter.title')}</H2>
            </div>
            <P className="text-5xl lg:text-7xl md:text-6xl font-anekLatin">
              {t('newsletter.subtitle')}
            </P>
          </div>
          <div className="flex md:flex-row flex-col-reverse items-center gap-10">
            <div className="bg-secondary/50 dark:bg-background flex flex-col md:flex-row rounded-[40px] p-10 border-y dark:border-secondary border-secondary-foreground w-full lg:w-7/12">
              <div className="flex flex-col justify-center gap-5 w-full">
                <NewsletterForm />
              </div>
            </div>
            <div className="w-full lg:w-5/12 h-full flex flex-col gap-5">
              <P>{t('newsletter.content.0')}</P>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

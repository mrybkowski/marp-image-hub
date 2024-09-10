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
    <section id="newsletter" className="py-10">
      <div data-aos="fade-up">
        <Container>
          <div className="bg-[#BFB1F5]/50 flex flex-col md:flex-row rounded-[40px] p-5 md:p-10 border border-slate-900 dark:border-slate-400 gap-10">
            <div className="md:w-1/2 w-full flex flex-col gap-2 pb-5 md:pb-0">
              <div className="flex flex-row items-center gap-2">
                <div className="p-3 bg-slate-800 rounded-full border border-slate-400">
                  <RocketIcon color="white" className="h-5 w-5" />
                </div>
                <H2>{t('newsletter.title')}</H2>
              </div>
              <P className="text-5xl lg:text-7xl md:text-6xl font-anekLatin">
                {t('newsletter.subtitle')}
              </P>
              <P>{t('newsletter.content.0')}</P>
            </div>
            <div className="flex flex-col justify-center gap-5 md:w-1/2 w-full">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

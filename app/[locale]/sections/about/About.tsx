'use client';

import { useState } from 'react';
import { CameraIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { Container } from '@/components/ui/container';
import { H2 } from '@/components/ui/typography-h2';
import { P } from '@/components/ui/typography-p';

export default function About() {
  const t = useTranslations('about');

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-10">
      <div data-aos="fade-up">
        <Container
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <div className="bg-primary/50 dark:bg-slate-900/50 flex flex-col md:flex-row rounded-[40px] p-5 md:p-10 border border-slate-900 dark:border-slate-400">
            <div className="md:w-1/2 w-full flex flex-col gap-2 pb-5 md:pb-0">
              <div className="flex flex-row items-center gap-2">
                <div className="p-3 bg-slate-800 rounded-full border border-slate-400">
                  <CameraIcon color="white" className="h-5 w-5" />
                </div>
                <H2>{t('title')}</H2>
              </div>
              <P className="text-5xl lg:text-7xl md:text-6xl font-anekLatin">
                {t('subtitle')}
              </P>
            </div>
            <div className="flex flex-col gap-5 md:w-1/2 w-full">
              <P>{t('content.0')}</P>
              <P>{t('content.1')}</P>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

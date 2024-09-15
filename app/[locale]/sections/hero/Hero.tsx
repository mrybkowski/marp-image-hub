'use client';

import { Camera } from 'lucide-react';
import { useTranslations } from 'next-intl';

import BackgroundLayer from './BackgroundLayer';
import InfoCard from './InfoCard';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { H1 } from '@/components/ui/typography-h1';
import { P } from '@/components/ui/typography-p';
import { useScrollToSection } from '@/hooks';

export default function Hero() {
  const t = useTranslations();

  const scrollToAboutSection = useScrollToSection('about');
  const scrollToNewsletterSection = useScrollToSection('newsletter');

  return (
    <section
      id="hero"
      className="xl:h-full xl:py-0 py-[100px] relative overflow-hidden rounded-b-[100px] border-y border-foreground dark:border-none">
      <BackgroundLayer
        className="dark:top-[50%] top-[10%] -right-[50%] w-[100%] h-[100%]"
        gradient={'purple'}
      />
      <BackgroundLayer
        className="dark:top-[50%] top-[10%] -left-[50%] w-[100%] h-[100%]"
        gradient={'green'}
      />

      <Container className="flex flex-col xl:flex-row h-full z-10 relative gap-10">
        <div className="flex flex-col justify-center xl:w-1/2 w-full gap-5">
          <P className="flex flex-row gap-2 items-center lg:text-3xl text-2xl">
            <Camera className="h-10 w-10" />
            {t('app.name')}
          </P>
          <H1>{t('hero.title')}</H1>
          <P className="lg:text-3xl text-2xl font-light">
            {t('hero.description')}
          </P>
          <div className="flex flex-col md:flex-row gap-5 pt-5">
            <Button onClick={() => scrollToNewsletterSection()}>
              {t('hero.action.signUp')}
            </Button>
            <Button onClick={() => scrollToAboutSection()} variant="outline">
              {t('hero.action.about')}
            </Button>
          </div>
        </div>

        <div className="h-full flex items-center justify-center xl:w-1/2 w-full">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
            <InfoCard
              title={t('hero.info.newsletter.title')}
              quantity={t('hero.info.newsletter.quantity')}
              description={t('hero.info.newsletter.description')}
            />
            <div className="grid grid-cols-1 gap-4 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-1">
              <InfoCard
                title={t('hero.info.visits.title')}
                quantity={t('hero.info.visits.quantity')}
                description={t('hero.info.visits.description')}
              />
              <InfoCard
                title={t('hero.info.participation.title')}
                quantity={t('hero.info.participation.quantity')}
                description={t('hero.info.participation.description')}
              />
            </div>
            <div className="col-span-1 lg:col-span-2 grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full">
              <InfoCard
                quantity={t('hero.info.rate.quantity')}
                description={t('hero.info.rate.description')}
              />
              <InfoCard
                quantity={t('hero.info.functions.quantity')}
                description={t('hero.info.functions.description')}
              />
              <InfoCard
                quantity={t('hero.info.users.quantity')}
                description={t('hero.info.users.description')}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

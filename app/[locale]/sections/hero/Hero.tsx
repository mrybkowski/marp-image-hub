'use client';

import { useTranslations } from 'next-intl';
import { StarIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { H1 } from '@/components/ui/typography-h1';
import { P } from '@/components/ui/typography-p';

import InfoCard from './InfoCard';
import BackgroundLayer from './BackgroundLayer';
import { useScrollToSection } from '@/hooks';

export default function Hero() {
  const t = useTranslations('hero');

  const scrollToAboutSection = useScrollToSection('about');

  return (
    <section
      id="hero"
      className="xl:h-full xl:py-0 py-[100px] relative overflow-hidden">
      <BackgroundLayer
        className="top-[-35%] right-[-40%] w-[80%] h-[80%]"
        gradient={'purple'}
      />
      <BackgroundLayer
        className="top-[-10%] left-[-0%] w-[90%] h-[90%]"
        gradient={'green'}
      />

      <Container className="flex flex-col xl:flex-row h-full z-10 relative gap-10">
        <div className="flex flex-col justify-center xl:w-1/2 w-full gap-5">
          <P className="flex flex-row items-center justify-center gap-2 w-fit py-2 px-7 lg:text-xl dark:bg-white/25 bg-white rounded-[40px] border border-primary">
            <StarIcon />
            {t('subtitle')}
          </P>
          <H1>{t('title')}</H1>
          <P className="lg:text-3xl text-2xl font-light">{t('description')}</P>
          <div className="flex flex-col md:flex-row gap-5 pt-10">
            <Button>{t('action.signUp')}</Button>
            <Button onClick={() => scrollToAboutSection()} variant="outline">
              {t('action.about')}
            </Button>
          </div>
        </div>

        <div className="h-full flex items-center justify-center xl:w-1/2 w-full">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
            <InfoCard
              title={t('info.newsletter.title')}
              quantity={t('info.newsletter.quantity')}
              description={t('info.newsletter.description')}
            />
            <div className="grid grid-cols-1 gap-4 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-1">
              <InfoCard
                title={t('info.visits.title')}
                quantity={t('info.visits.quantity')}
                description={t('info.visits.description')}
              />
              <InfoCard
                title={t('info.participation.title')}
                quantity={t('info.participation.quantity')}
                description={t('info.participation.description')}
              />
            </div>
            <div className="col-span-1 lg:col-span-2 grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full">
              <InfoCard
                quantity={t('info.rate.quantity')}
                description={t('info.rate.description')}
              />
              <InfoCard
                quantity={t('info.functions.quantity')}
                description={t('info.functions.description')}
              />
              <InfoCard
                quantity={t('info.users.quantity')}
                description={t('info.users.description')}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { DashboardIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Container } from '@/components/ui/container';
import { H2 } from '@/components/ui/typography-h2';
import { H3 } from '@/components/ui/typography-h3';
import { P } from '@/components/ui/typography-p';

const individualCreator = [
  {
    title: 'functions.groups.individualCreator.0.title',
    description: 'functions.groups.individualCreator.0.description'
  },
  {
    title: 'functions.groups.individualCreator.1.title',
    description: 'functions.groups.individualCreator.1.description'
  },
  {
    title: 'functions.groups.individualCreator.2.title',
    description: 'functions.groups.individualCreator.2.description'
  },
  {
    title: 'functions.groups.individualCreator.3.title',
    description: 'functions.groups.individualCreator.3.description'
  }
];

const professionalOrganizer = [
  {
    title: 'functions.groups.professionalOrganizer.0.title',
    description: 'functions.groups.professionalOrganizer.0.description'
  },
  {
    title: 'functions.groups.professionalOrganizer.1.title',
    description: 'functions.groups.professionalOrganizer.1.description'
  },
  {
    title: 'functions.groups.professionalOrganizer.2.title',
    description: 'functions.groups.professionalOrganizer.2.description'
  },
  {
    title: 'functions.groups.professionalOrganizer.3.title',
    description: 'functions.groups.professionalOrganizer.3.description'
  }
];

const creativeOrganization = [
  {
    title: 'functions.groups.creativeOrganization.0.title',
    description: 'functions.groups.creativeOrganization.0.description'
  },
  {
    title: 'functions.groups.creativeOrganization.1.title',
    description: 'functions.groups.creativeOrganization.1.description'
  },
  {
    title: 'functions.groups.creativeOrganization.2.title',
    description: 'functions.groups.creativeOrganization.2.description'
  },
  {
    title: 'functions.groups.creativeOrganization.3.title',
    description: 'functions.groups.creativeOrganization.3.description'
  }
];

export default function Functions() {
  const t = useTranslations();

  const [activeData, setActiveData] = useState(individualCreator);

  return (
    <section id="functions" className="py-10">
      <div data-aos="fade-up">
        <Container>
          <div className="flex flex-row items-center gap-2">
            <div className="p-3 bg-slate-900 rounded-full border border-slate-400">
              <DashboardIcon color="white" className="h-5 w-5" />
            </div>
            <H2>{t('functions.title')}</H2>
          </div>
          <P className="text-5xl lg:text-7xl md:text-6xl font-anekLatin md:w-2/3 lg:w-1/2 w-full">
            {t('functions.subtitle')}
          </P>
          <div className="flex flex-col md:flex-row gap-5 my-5">
            <Button
              onClick={() => setActiveData(individualCreator)}
              className={`${activeData === individualCreator ? '' : 'bg-primary/30'}`}>
              {t('functions.groups.individualCreator.title')}
            </Button>
            <Button
              onClick={() => setActiveData(professionalOrganizer)}
              className={`${activeData === professionalOrganizer ? '' : 'bg-primary/30'}`}>
              {t('functions.groups.professionalOrganizer.title')}
            </Button>
            <Button
              onClick={() => setActiveData(creativeOrganization)}
              className={`${activeData === creativeOrganization ? '' : 'bg-primary/30'}`}>
              {t('functions.groups.creativeOrganization.title')}
            </Button>
          </div>
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {activeData.map((element, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-5 h-full">
                    <div className="flex flex-col gap-2 p-5 md:p-10 border dark:border-slate-400 border-slate-900 rounded-[40px] dark:bg-slate-900/50 h-full">
                      <H3 className="text-2xl font-semibold">
                        {t(element.title)}
                      </H3>
                      <P>{t(element.description)}</P>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </div>
    </section>
  );
}

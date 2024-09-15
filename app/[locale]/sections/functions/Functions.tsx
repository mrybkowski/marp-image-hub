'use client';

import { useState } from 'react';
import { LayoutDashboardIcon } from 'lucide-react';
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
        <Container className="flex gap-10">
          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="p-3 bg-gradient-to-tr from-primary to-secondary rounded-full border border-descructive">
                <LayoutDashboardIcon color="black" className="h-5 w-5" />
              </div>
              <H2>{t('functions.title')}</H2>
            </div>
            <P className="text-5xl lg:text-7xl md:text-6xl font-anekLatin md:w-2/3 lg:w-1/2 w-full">
              {t('functions.subtitle')}
            </P>
          </div>
          <div>
            <div className="flex flex-col md:flex-row my-5 bg-white dark:bg-foreground w-min p-2 rounded-md gap-2">
              <Button
                variant={
                  activeData === individualCreator ? 'default' : 'outline'
                }
                onClick={() => setActiveData(individualCreator)}
                className={`${activeData === individualCreator ? '' : 'bg-white dark:bg-foreground border-none'}`}>
                {t('functions.groups.individualCreator.title')}
              </Button>
              <Button
                variant={
                  activeData === professionalOrganizer ? 'default' : 'outline'
                }
                onClick={() => setActiveData(professionalOrganizer)}
                className={`${activeData === professionalOrganizer ? '' : 'bg-white dark:bg-foreground border-none'}`}>
                {t('functions.groups.professionalOrganizer.title')}
              </Button>
              <Button
                variant={
                  activeData === creativeOrganization ? 'default' : 'outline'
                }
                onClick={() => setActiveData(creativeOrganization)}
                className={`${activeData === creativeOrganization ? '' : 'bg-white dark:bg-foreground border-none'}`}>
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
                      <div className="flex flex-col gap-2 p-5 md:p-10 border-y dark:border-slate-400 border-slate-900 rounded-[40px] bg-white dark:bg-destructive/50 h-full">
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
          </div>
        </Container>
      </div>
    </section>
  );
}

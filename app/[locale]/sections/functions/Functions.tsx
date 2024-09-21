'use client';

import { useState, useEffect, useRef } from 'react';
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

  // Referencja do sekcji, aby przewinąć do niej po kliknięciu
  const sectionRef = useRef<HTMLDivElement>(null);

  // Funkcja do zmiany URL i przewinięcia do sekcji
  const updateURLAndScroll = (hash: string) => {
    window.history.pushState(null, '', hash);

    // Przewinięcie do sekcji
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Funkcja do zmiany grupy na podstawie hasha
  const handleButtonClick = (data: any, hash: string) => {
    setActiveData(data);
    updateURLAndScroll(hash);
  };

  // Ustawienie grupy na podstawie hasha z URL
  useEffect(() => {
    const hash = window.location.hash;

    if (hash === '#professionalOrganizer') {
      setActiveData(professionalOrganizer);
    } else if (hash === '#creativeOrganization') {
      setActiveData(creativeOrganization);
    } else {
      setActiveData(individualCreator);
    }
  }, []);

  // Listener na zmiany hasha URL, aby automatycznie przełączać grupę po zmianie hash
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#professionalOrganizer') {
        setActiveData(professionalOrganizer);
      } else if (hash === '#creativeOrganization') {
        setActiveData(creativeOrganization);
      } else {
        setActiveData(individualCreator);
      }

      // Scroll do sekcji po zmianie hash
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <section id="functions" className="py-10" ref={sectionRef}>
      <div data-aos="fade-up">
        <Container className="flex gap-10">
          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="p-3 bg-gradient-to-tr from-primary to-secondary rounded-full border border-input">
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
                onClick={() => handleButtonClick(individualCreator, '#')}
                className={`${activeData === individualCreator ? '' : 'bg-white dark:bg-foreground border-none'} w-full`}>
                {t('functions.groups.individualCreator.title')}
              </Button>
              <Button
                variant={
                  activeData === professionalOrganizer ? 'default' : 'outline'
                }
                onClick={() =>
                  handleButtonClick(
                    professionalOrganizer,
                    '#professionalOrganizer'
                  )
                }
                className={`${activeData === professionalOrganizer ? '' : 'bg-white dark:bg-foreground border-none'} w-full`}>
                {t('functions.groups.professionalOrganizer.title')}
              </Button>
              <Button
                variant={
                  activeData === creativeOrganization ? 'default' : 'outline'
                }
                onClick={() =>
                  handleButtonClick(
                    creativeOrganization,
                    '#creativeOrganization'
                  )
                }
                className={`${activeData === creativeOrganization ? '' : 'bg-white dark:bg-foreground border-none'} w-full`}>
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
                      <div className="flex flex-col gap-2 p-10 border-y border-section rounded-[40px] bg-white dark:bg-destructive/50 h-full">
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

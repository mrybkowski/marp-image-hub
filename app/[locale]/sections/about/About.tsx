'use client';

import {
  Building2Icon,
  Facebook,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { H2 } from '@/components/ui/typography-h2';
import { P } from '@/components/ui/typography-p';
import { useScrollToSection } from '@/hooks';

export default function About() {
  const t = useTranslations();

  const scrollToFunctionsSection = useScrollToSection('functions');

  return (
    <section
      id="about"
      className="py-10 bg-primary/20 dark:bg-foreground rounded-[100px] border-y dark:border-none border-foreground">
      <div data-aos="fade-up">
        <Container className="flex gap-10">
          <div className="md:w-1/2 w-full flex flex-col gap-2 pb-5 md:pb-0">
            <div className="flex flex-row items-center gap-2">
              <div className="p-3 bg-primary rounded-full border border-primary-foreground">
                <Building2Icon color="black" className="h-5 w-5" />
              </div>
              <H2>{t('about.title')}</H2>
            </div>
            <P className="text-5xl lg:text-7xl md:text-6xl font-anekLatin">
              {t('about.subtitle')}
            </P>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-10">
            <div className="bg-primary/50 dark:bg-background flex flex-col md:flex-row rounded-[40px] p-5 md:p-10 border-y dark:border-primary border-primary-foreground w-full lg:w-7/12">
              <div className="flex flex-col gap-5">
                <P>{t('about.content.0')}</P>
                <P>{t('about.content.1')}</P>
                <Button
                  onClick={() => scrollToFunctionsSection()}
                  variant="primary">
                  {t('about.action.functions')}
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-5/12 h-full flex flex-col gap-5">
              <P fontWeight="bold">{t('app.socialmedia.description')}</P>
              <div className="flex flex-row gap-2 cursor-pointer hover:text-primary-foreground dark:hover:text-primary">
                <FacebookIcon />
                <P className="cursor-pointer hover:text-primary-foreground dark:hover:text-primary">
                  {t('app.socialmedia.link')}
                </P>
              </div>
              <div className="flex flex-row gap-2 cursor-pointer hover:text-primary-foreground dark:hover:text-primary">
                <InstagramIcon />
                <P className="cursor-pointer hover:text-primary-foreground dark:hover:text-primary">
                  {t('app.socialmedia.link')}
                </P>
              </div>
              <div className="flex flex-row gap-2 cursor-pointer hover:text-primary-foreground dark:hover:text-primary">
                <LinkedinIcon />
                <P className="cursor-pointer hover:text-primary-foreground dark:hover:text-primary">
                  {t('app.socialmedia.link')}
                </P>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

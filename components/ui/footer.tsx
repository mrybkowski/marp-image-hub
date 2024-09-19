'use client';

import {
  Camera,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { P } from './typography-p';

import BackgroundLayer from '@/app/[locale]/sections/hero/BackgroundLayer';
import { Container } from '@/components/ui/container';

export default function Footer() {
  const t = useTranslations();

  const { theme, resolvedTheme } = useTheme();

  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <section
      id="footer"
      className="py-10 bg-foreground md:rounded-t-[100px] rounded-t-[40px] relative  overflow-hidden">
      {/* <BackgroundLayer
        className="dark:top-[50%] top-[10%] -right-[50%] w-[100%] h-[100%]"
        gradient={'green'}
        isVisible={isDarkMode}
      />
      <BackgroundLayer
        className="dark:top-[50%] top-[10%] -left-[50%] w-[100%] h-[100%]"
        gradient={'purple'}
        isVisible={isDarkMode}
      /> */}
      <Container className="flex flex-row flex-wrap relative">
        <div className="flex flex-col w-full lg:w-4/12 gap-5">
          <P className="flex flex-row gap-2 items-center lg:text-3xl text-2xl text-white">
            <Camera className="h-10 w-10" />
            {t('app.name')}
          </P>
          <P className="text-white">{t('app.long_description')}</P>
          <div className="flex flex-row gap-5 text-white">
            <FacebookIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
        <div className="w-full lg:w-8/12 pt-10 md:py-0">
          <div className="flex flex-row flex-wrap md:justify-end justify-start gap-10">
            <div className="flex flex-col gap-6">
              <P className="text-3xl text-white">{t('hero.menuTitle')}</P>
              <div className="flex flex-col gap-2">
                <P className="text-white">{t('about.title')}</P>
                <P className="text-white">{t('functions.title')}</P>
                <P className="text-white">{t('contact.title')}</P>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <P className="text-3xl text-white">
                {t('footer.menu.partners.title')}
              </P>
              <div className="flex flex-col gap-2">
                <P className="text-white">
                  {t('footer.menu.partners.elements.partnersList')}
                </P>
                <P className="text-white">
                  {t('footer.menu.partners.elements.becamePartner')}
                </P>
                <P className="text-white">
                  {t('footer.menu.partners.elements.affiliation')}
                </P>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <P className="text-3xl text-white">
                {t('footer.menu.company.title')}
              </P>
              <div className="flex flex-col gap-2">
                <P className="text-white">
                  {t('footer.menu.company.elements.privacyPolicy')}
                </P>
                <P className="text-white">
                  {t('footer.menu.company.elements.cookies')}
                </P>
                <P className="text-white">
                  {t('footer.menu.company.elements.rules')}
                </P>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full h-px bg-white mt-10 mb-5"></hr>
        <P className="w-full text-center text-white">{t('app.copy')}</P>
      </Container>
    </section>
  );
}

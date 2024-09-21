'use client';

import {
  Camera,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon
} from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { P } from './typography-p';

import { Container } from '@/components/ui/container';

export default function Footer() {
  const t = useTranslations();

  const gradientVariants = {
    green:
      'radial-gradient(circle, rgba(177,219,97,1) 0%, rgba(177,219,97,0) 100%)',
    purple:
      'radial-gradient(circle, rgba(191,177,245,1) 0%, rgba(191,177,245,0) 100%)'
  };

  return (
    <section
      id="footer"
      className="py-10 bg-foreground md:rounded-t-[100px] rounded-t-[40px] relative overflow-hidden">
      <div
        className={`dark:absolute d-none rounded-full opacity-100 blur-3xl animate-move-pulse dark:top-[0%] top-[10%] -right-[50%] w-[100%] h-[100%]`}
        style={{ background: gradientVariants['green'] }}
      />
      <div
        className={`dark:absolute d-none rounded-full opacity-100 blur-3xl animate-move-pulse dark:top-[0%] top-[10%] -left-[50%] w-[100%] h-[100%]`}
        style={{ background: gradientVariants['purple'] }}
      />
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
              <Link href="/#hero" passHref>
                <P className="text-3xl text-white">{t('navigation.title')}</P>
              </Link>
              <div className="flex flex-col gap-2">
                <Link href="/#about" passHref>
                  <P className="text-white">{t('navigation.project')}</P>
                </Link>
                <Link href="/#functions" passHref>
                  <P className="text-white">
                    {t('navigation.functions.title')}
                  </P>
                </Link>
                <Link href="/#newsletter" passHref>
                  <P className="text-white">{t('navigation.newsletter')}</P>
                </Link>
                <Link href="/#contact" passHref>
                  <P className="text-white">{t('navigation.contact')}</P>
                </Link>
              </div>
            </div>
            {/* <div className="flex flex-col gap-6">
              <P className="text-3xl text-white">
                {t('navigation.partners.title')}
              </P>
              <div className="flex flex-col gap-2">
                <P className="text-white">
                  {t('navigation.partners.partnersList')}
                </P>
                <P className="text-white">
                  {t('navigation.partners.becamePartner')}
                </P>
                <P className="text-white">
                  {t('navigation.partners.affiliation')}
                </P>
              </div>
            </div> */}
            <div className="flex flex-col gap-6">
              <Link href="/company" passHref>
                <P className="text-3xl text-white">
                  {t('navigation.company.title')}
                </P>
              </Link>
              <div className="flex flex-col gap-2">
                <Link href="/privacy-policy" passHref>
                  <P className="text-white">
                    {t('navigation.company.privacyPolicy')}
                  </P>
                </Link>
                {/* <Link href="/cookies" passHref>
                  <P className="text-white">
                    {t('navigation.company.cookies')}
                  </P>
                </Link> */}
                <Link href="/rules" passHref>
                  <P className="text-white">{t('navigation.company.rules')}</P>
                </Link>
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

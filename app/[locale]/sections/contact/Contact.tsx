import { GlobeIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import ContactForm from './ContactForm';

import { Container } from '@/components/ui/container';
import { H2 } from '@/components/ui/typography-h2';
import { P } from '@/components/ui/typography-p';

export default function Contact() {
  const t = useTranslations();

  const DynamicMap = dynamic(() => import('./ContactMap'), { ssr: false });

  return (
    <section id="contact" className="py-10">
      <div data-aos="fade-up">
        <Container className="flex flex-col gap-10">
          <div className="w-full flex flex-col gap-2 pb-5 md:pb-0">
            <div className="flex flex-row items-center gap-2">
              <div className="p-3 bg-gradient-to-tr from-primary to-secondary rounded-full border border-input">
                <GlobeIcon color="black" className="h-5 w-5" />
              </div>
              <H2>{t('contact.title')}</H2>
            </div>
            <P className="text-5xl lg:text-7xl md:text-6xl font-anekLatin">
              {t('contact.subtitle')}
            </P>
          </div>
          <div className="flex lg:flex-row flex-col gap-10">
            <div className="flex flex-col gap-2 p-10 border-y dark:border-slate-400 border-slate-900 rounded-[40px] bg-white dark:bg-destructive/50 w-full lg:w-7/12">
              <ContactForm />
            </div>
            <div className="w-full lg:w-5/12">
              <DynamicMap />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

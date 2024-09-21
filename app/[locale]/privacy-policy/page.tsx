import { Container } from '@/components/ui/container';
import { H1 } from '@/components/ui/typography-h1';
import { P } from '@/components/ui/typography-p';
import { CookieIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export default function PrivacyPolicy() {
  const t = useTranslations();

  return (
    <section id="privacy-policy" className="py-[100px]">
      <Container>
        <div className="w-full flex flex-col gap-2 pb-5 md:pb-0">
          <div className="flex flex-row items-end gap-2">
            <div className="p-3 bg-gradient-to-tr from-primary to-secondary rounded-full border border-section">
              <CookieIcon color="black" className="h-5 w-5" />
            </div>
            <P className="lg:w-3/4 w-full">{t('privacyPolicy.description')}</P>
          </div>
          <H1 customStyle="subpage" className="mb-5">
            {t('privacyPolicy.title')}
          </H1>
        </div>

        <Accordion type="single" collapsible className="flex flex-col">
          <AccordionItem
            value="generalInformation"
            className="lg:w-3/4 w-full dark:bg-foreground bg-white p-10 rounded-[40px] border-y border-section">
            <AccordionTrigger className="text-3xl ml-5">
              {t('privacyPolicy.section.generalInformation.title')}
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-disc pl-5">
                <li>
                  {t('privacyPolicy.section.generalInformation.description.0')}
                </li>
                <li>
                  {t('privacyPolicy.section.generalInformation.description.1')}
                </li>
                <li>
                  {t('privacyPolicy.section.generalInformation.description.2')}
                </li>
                <li>
                  {t('privacyPolicy.section.generalInformation.description.3')}
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="privacyPolicy" className="lg:w-3/4 w-full p-10">
            <AccordionTrigger className="text-3xl ml-5">
              {t('privacyPolicy.section.privacyPolicy.title')}
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-disc pl-5">
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.0')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.1')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.2')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.3')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.4')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.5')}
                </li>
                <ol className="list-disc pl-5">
                  <li>
                    {t('privacyPolicy.section.privacyPolicy.description.5-1')}
                  </li>
                  <li>
                    {t('privacyPolicy.section.privacyPolicy.description.5-2')}
                  </li>
                  <li>
                    {t('privacyPolicy.section.privacyPolicy.description.5-3')}
                  </li>
                  <li>
                    {t('privacyPolicy.section.privacyPolicy.description.5-4')}
                  </li>
                  <li>
                    {t('privacyPolicy.section.privacyPolicy.description.5-5')}
                  </li>
                  <li>
                    {t('privacyPolicy.section.privacyPolicy.description.5-6')}
                  </li>
                </ol>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.6')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.7')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.8')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.9')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.10')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.11')}
                </li>
                <li>
                  {t('privacyPolicy.section.privacyPolicy.description.12')}
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="scopesAndPurpose"
            className="lg:w-3/4 w-full dark:bg-foreground bg-white p-10 rounded-[40px] border-y border-section">
            <AccordionTrigger className="text-3xl ml-5">
              {t('privacyPolicy.section.scopesAndPurpose.title')}
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-disc pl-5">
                <li>
                  {t('privacyPolicy.section.scopesAndPurpose.description.0')}
                </li>
                <li>
                  {t('privacyPolicy.section.scopesAndPurpose.description.1')}
                </li>
                <ol className="list-disc pl-5">
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.1-1'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.1-2'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.1-3'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.1-4'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.1-5'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.1-6'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.1-7'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.1-8'
                    )}
                  </li>
                </ol>
                <li>
                  {t('privacyPolicy.section.scopesAndPurpose.description.2')}
                </li>
                <li>
                  {t('privacyPolicy.section.scopesAndPurpose.description.3')}
                </li>
                <li>
                  {t('privacyPolicy.section.scopesAndPurpose.description.4')}
                </li>
                <ol className="list-disc pl-5">
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.4-1'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.4-2'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.4-3'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.4-4'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.4-5'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.4-6'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.scopesAndPurpose.description.4-7'
                    )}
                  </li>
                </ol>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cookies" className="lg:w-3/4 w-full p-10">
            <AccordionTrigger className="text-3xl ml-5">
              {t('privacyPolicy.section.cookies.title')}
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-disc pl-5">
                <li>{t('privacyPolicy.section.cookies.description.0')}</li>
                <li>{t('privacyPolicy.section.cookies.description.1')}</li>
                <ol className="list-disc pl-5">
                  <li>{t('privacyPolicy.section.cookies.description.1-1')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.1-2')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.1-3')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.1-4')}</li>
                </ol>
                <li>{t('privacyPolicy.section.cookies.description.2')}</li>
                <ol className="list-disc pl-5">
                  <li>{t('privacyPolicy.section.cookies.description.2-1')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.2-2')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.2-3')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.2-4')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.2-5')}</li>
                </ol>
                <li>{t('privacyPolicy.section.cookies.description.3')}</li>
                <li>{t('privacyPolicy.section.cookies.description.4')}</li>
                <ol className="list-disc pl-5">
                  <li>{t('privacyPolicy.section.cookies.description.4-1')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.4-2')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.4-3')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.4-4')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.4-5')}</li>
                  <li>{t('privacyPolicy.section.cookies.description.4-5')}</li>
                </ol>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="socialMedia"
            className="lg:w-3/4 w-full dark:bg-foreground bg-white p-10 rounded-[40px] border-y border-section">
            <AccordionTrigger className="text-3xl ml-5">
              {t('privacyPolicy.section.socialMedia.title')}
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-disc pl-5">
                <li>{t('privacyPolicy.section.socialMedia.description.0')}</li>
                <ol className="list-disc pl-5">
                  <li>
                    {t('privacyPolicy.section.socialMedia.description.0-1')}
                  </li>
                  <li>
                    {t('privacyPolicy.section.socialMedia.description.0-2')}
                  </li>
                </ol>
                <li>{t('privacyPolicy.section.socialMedia.description.1')}</li>
                <li>{t('privacyPolicy.section.socialMedia.description.2')}</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="rightsAndObligations"
            className="lg:w-3/4 w-full p-10">
            <AccordionTrigger className="text-3xl ml-5">
              {t('privacyPolicy.section.rightsAndObligations.title')}
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-disc pl-5">
                <li>
                  {t(
                    'privacyPolicy.section.rightsAndObligations.description.0'
                  )}
                </li>
                <ol className="list-disc pl-5">
                  <li>
                    {t(
                      'privacyPolicy.section.rightsAndObligations.description.1-1'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.rightsAndObligations.description.1-2'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.rightsAndObligations.description.1-3'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.rightsAndObligations.description.1-4'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.rightsAndObligations.description.1-5'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.rightsAndObligations.description.1-6'
                    )}
                  </li>
                  <li>
                    {t(
                      'privacyPolicy.section.rightsAndObligations.description.1-7'
                    )}
                  </li>
                </ol>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </section>
  );
}

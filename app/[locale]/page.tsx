import { Contact } from './sections/contact';
import { Functions } from './sections/functions';
import { Hero } from './sections/hero';
import { Newsletter } from './sections/newsletter';
import { Project } from './sections/project';
import { Tech } from './sections/tech';

import Footer from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Tech />
        <Project />
        <Functions />
        <Newsletter />
        <Contact />
      </div>
      <Toaster />
    </>
  );
}

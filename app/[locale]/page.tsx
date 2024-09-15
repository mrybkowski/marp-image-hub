import { About } from './sections/about';
import { Functions } from './sections/functions';
import { Hero } from './sections/hero';
import { Newsletter } from './sections/newsletter';
import { Tech } from './sections/tech';

import { Toaster } from '@/components/ui/toaster';
import { ToggleMode } from '@/components/ui/toggle-mode';

export default function Home() {
  return (
    <>
      <div className="absolute z-50 top-5 left-5">
        <ToggleMode />
      </div>
      <main className="h-full">
        <Hero />
        <Tech />
        <About />
        <Functions />
        <Newsletter />
        <Toaster />
      </main>
    </>
  );
}

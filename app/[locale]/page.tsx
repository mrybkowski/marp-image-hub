import { About } from './sections/about';
import { Functions } from './sections/functions';
import { Hero } from './sections/hero';

import { ToggleMode } from '@/components/ui/toggle-mode';

export default function Home() {
  return (
    <>
      <div className="absolute z-50 top-5 left-5">
        <ToggleMode />
      </div>
      <main className="h-full">
        <Hero />
        <About />
        <Functions />
      </main>
    </>
  );
}

import { ToggleMode } from '@/components/ui/toggle-mode';
import { Hero } from './sections/hero';
import { About } from './sections/about';

export default function Home() {
  return (
    <>
      <div className="absolute z-50 top-5 left-5">
        <ToggleMode />
      </div>
      <main className="h-full">
        <Hero />
        <About />
      </main>
    </>
  );
}

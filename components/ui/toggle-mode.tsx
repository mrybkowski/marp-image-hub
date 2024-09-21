'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ToggleMode() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    } else {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) {
    return <Button variant="outline" aria-label="Toggle theme" />;
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button className="border-none" onClick={toggleTheme}>
            <MoonIcon
              className={`h-[1.2rem] w-[1.2rem] transition-all ${
                isDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
              }`}
            />
            <SunIcon
              className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
              }`}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content
          side="top"
          align="center"
          className={`px-2 py-1 rounded text-sm font-medium ${
            isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}>
          {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          <Tooltip.Arrow
            className={`${isDark ? 'fill-gray-800' : 'fill-white'}`}
          />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

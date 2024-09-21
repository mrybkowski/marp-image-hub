'use client';

import * as React from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Container } from './container';
import { ToggleMode } from './toggle-mode';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks';
import { cn } from '@/lib/utils';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'navigation.functions.individualCreator.title',
    href: '/#individualCreator',
    description: 'navigation.functions.individualCreator.description'
  },
  {
    title: 'navigation.functions.professionalOrganizer.title',
    href: '/#professionalOrganizer',
    description: 'navigation.functions.professionalOrganizer.description'
  },
  {
    title: 'navigation.functions.creativeOrganization.title',
    href: '#creativeOrganization',
    description: 'navigation.functions.creativeOrganization.description'
  }
];

export function Header() {
  const t = useTranslations();
  const isMobile = useIsMobile(768);

  return (
    <section id="nav" className="fixed z-50 bg-foreground w-full">
      <Container>
        {isMobile ? <MobileMenu t={t} /> : <DesktopMenu t={t} />}
      </Container>
    </section>
  );
}

export function MobileMenu({ t }: { t: any }) {
  return (
    <Drawer>
      <div className="flex flex-row justify-between">
        <DrawerTrigger asChild>
          <button className="p-2">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </DrawerTrigger>
        <ToggleMode />
      </div>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{t('app.name')}</DrawerTitle>
        </DrawerHeader>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/#" passHref>
                <DrawerClose asChild>
                  <a className="text-base font-medium">
                    {' '}
                    {t('navigation.home')}
                  </a>
                </DrawerClose>
              </Link>
            </li>
            <li>
              <Link href="/#projects" passHref>
                <DrawerClose asChild>
                  <a className="text-base font-medium">
                    {t('navigation.project')}
                  </a>
                </DrawerClose>
              </Link>
            </li>
            <li>
              <Link href="/#functions" passHref>
                <DrawerClose asChild>
                  <a className="text-base font-medium">
                    {t('navigation.functions.title')}
                  </a>
                </DrawerClose>
              </Link>
            </li>
            <li>
              <Link href="/#newsletter" passHref>
                <DrawerClose asChild>
                  <a className="text-base font-medium">
                    {t('navigation.newsletter')}
                  </a>
                </DrawerClose>
              </Link>
            </li>
            <li>
              <Link href="/#contact" passHref>
                <DrawerClose asChild>
                  <a className="text-base font-medium">
                    {t('navigation.contact')}
                  </a>
                </DrawerClose>
              </Link>
            </li>
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}

function DesktopMenu({ t }: { t: any }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <ToggleMode />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('navigation.home')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#project" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('navigation.project')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {t('navigation.functions.title')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#newsletter" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('navigation.newsletter')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('navigation.contact')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  const t = useTranslations();

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{t(title)}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {t(children)}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

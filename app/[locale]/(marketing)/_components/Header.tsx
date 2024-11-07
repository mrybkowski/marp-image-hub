"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logos";
import MenuItems from "./MenuItems";
import { useEffect, useState } from "react";
import { Container } from "./Container";

export function Header() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      return window.scrollY >= 300 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`w-full py-3 transition-colors duration-300 z-10 ${
        scrolled ? "fixed bg-background/95 shadow-md" : "absolute top-0"
      }`}
    >
      <Container className="flex justify-between">
        <Link
          href="/"
          className="flex flex-row items-center gap-1 capitalize font-bold text-foreground cursor-pointer"
        >
          <Logo width={24} height={24} />
          <p>{t("app.name")}</p>
        </Link>
        <div className="lg:block hidden ">
          <MenuItems />
        </div>
        <div className="flex flex-row gap-3">
          <Button variant="secondary">{t("action.login")}</Button>
          <Button className="hidden sm:block">{t("action.register")}</Button>
          <div className="lg:hidden flex">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  name="menu"
                  aria-label="name"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>{""}</SheetTitle>
                </SheetHeader>
                <MenuItems isMobileView={true} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}

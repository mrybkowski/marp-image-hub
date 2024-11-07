import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  BlikLogo,
  MastercardLogo,
  Przelewy24Logo,
  StripeLogo,
  VisaLogo,
} from "@/components/logos";
import { Container } from "../_components";

export function Hero() {
  const t = useTranslations("marketing.hero");

  return (
    <section id="hero" className="bg-blue-100 sm:h-dvh h-[800px] relative">
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(255,220,198,1) 0%, rgba(219,234,254,1))",
        }}
        className="top-[10%] right-[5%] absolute w-[50%] h-[50%] rounded-full blur-3xl"
      />
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,214,1) 0%, rgba(219,234,254,1))",
        }}
        className="-bottom-[50%] -left-[50%] absolute w-[100%] h-[100%] rounded-full blur-3xl"
      />
      <div className="h-full relative">
        <Container className="h-full flex flex-col items-center justify-center gap-5 relative">
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-bold font-anekLatin text-center tracking-tight text-balance">
            {t("title")}
          </h1>
          <p className="text-center font-medium text-balance">
            {t("description")}
          </p>
          <div className="flex flex-row flex-wrap justify-center gap-3">
            <Button>{t("demo")}</Button>
            <Button variant="secondary">{t("more")}</Button>
          </div>
          <div className="absolute bottom-0 flex flex-row flex-wrap items-center justify-center gap-10 pb-10">
            <StripeLogo />
            <BlikLogo />
            <MastercardLogo />
            <Przelewy24Logo />
            <VisaLogo />
          </div>
        </Container>
      </div>
    </section>
  );
}

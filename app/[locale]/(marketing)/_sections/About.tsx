import { useTranslations } from "next-intl";
import { Container } from "../_components";
import Image from "next/image";

export function About() {
  const t = useTranslations("marketing.about");

  return (
    <section id="about" className="py-10 bg-zinc-50 relative">
      <Container>
        <div className="flex flex-col">
          <div className="flex flex-col gap-3 w-full lg:w-5/12 pr-5 lg:-mb-64 xl:-mb-72">
            <h2 className="text-xl font-medium text-primary">{t("title")}</h2>
            <p className="font-anekLatin tracking-tight xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-balance">
              {t("subtitle")}
            </p>
            <p className="pb-20 text-balance">{t("description")}</p>
          </div>
          <Image
            className="scale-x-[-1] lg:scale-x-[1]"
            src="/static/about.webp"
            alt="about"
            width={1520}
            height={935}
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}

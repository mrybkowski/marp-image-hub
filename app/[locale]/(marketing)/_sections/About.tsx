import { useTranslations } from "next-intl";
import { Container } from "../_components";
import Image from "next/image";

export function About() {
  const t = useTranslations("marketing.about");

  return (
    <section id="about" className="py-10 bg-zinc-50 relative">
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(255,220,198,1) 0%, rgba(219,234,254,1))",
        }}
        className="top-[15%] left-[15%] absolute w-[75%] h-[75%] rounded-full blur-3xl"
      />
      <Container className="relative">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-3 w-full lg:w-5/12 pr-5 lg:-mb-64 xl:-mb-72">
            <h2 className="text-center lg:text-left text-xl font-medium text-blue-900">
              {t("title")}
            </h2>
            <p className="text-center lg:text-left font-anekLatin tracking-tight xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-balance">
              {t("subtitle")}
            </p>
            <p className="text-center lg:text-left pb-20 text-balance">
              {t("description")}
            </p>
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

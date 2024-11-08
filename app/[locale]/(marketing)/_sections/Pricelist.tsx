import { useTranslations } from "next-intl";
import { Container } from "../_components";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Pricelist() {
  const t = useTranslations("marketing.pricelist");

  return (
    <section id="pricelist" className="py-10 bg-zinc-50">
      <Container>
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="text-center text-xl font-medium text-blue-900">
            {t("title")}
          </h2>
          <p className="text-center font-anekLatin tracking-tight xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-balance">
            {t("subtitle")}
          </p>
          <p className="text-center text-balance">{t("description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
          <PricelistCard
            title={t("plan.basic.title")}
            price={t("plan.basic.price")}
            description={t("plan.basic.description")}
            className="order-2 md:order-1"
          />
          <PricelistCard
            title={t("plan.premium.title")}
            price={t("plan.premium.price")}
            description={t("plan.premium.description")}
            isFeatured={true}
            className="order-1 md:order-2"
          />
          <PricelistCard
            title={t("plan.enterprise.title")}
            price={t("plan.enterprise.price")}
            description={t("plan.enterprise.description")}
            className="order-3"
          />
        </div>
      </Container>
    </section>
  );
}

function PricelistCard({
  isFeatured,
  title,
  price,
  description,
  className,
}: {
  isFeatured?: boolean;
  title: string;
  price: string;
  description: string;
  className: string;
}) {
  return (
    <div
      className={cn(
        "bg-blue-950 rounded-[--radius] text-zinc-50 px-5 py-10 flex flex-col flex-wrap gap-5 w-full relative",
        isFeatured ? "border-4 border-orange-500 md:mb-10" : "md:mt-10",
        className
      )}
    >
      {isFeatured && (
        <p className="text-xs absolute py-1 top-0 px-3 left-[50%] -translate-y-1/2 -translate-x-1/2 bg-orange-500 rounded-full uppercase">
          Rekomendowany
        </p>
      )}
      <p
        className={cn(
          "lg:text-3xl md:text-2xl text-xl font-bold",
          isFeatured ? "text-orange-500" : "text-zinc-50"
        )}
      >
        {title}
      </p>
      <div className="flex flex-col gap-2">
        <p className="lg:text-5xl md:text-4xl text-3xl font-medium">{price}</p>
        <p className="text-xs">{description}</p>
      </div>
      <Button>Wybieram</Button>
      <div className="flex flex-col gap-3">
        <p className="text-lg">Zawiera:</p>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 items-center">
            <CheckCircle
              className={isFeatured ? "text-orange-500" : "text-zinc-50"}
            />
            <p className="text-xs">Dodawanie nowych klientów</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircle
              className={isFeatured ? "text-orange-500" : "text-zinc-50"}
            />
            <p className="text-xs">Wgrywanie nieograniczonych zdjęć</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircle
              className={isFeatured ? "text-orange-500" : "text-zinc-50"}
            />
            <p className="text-xs">Tworzenie nieograniczonej liczby albumów</p>
          </div>
        </div>
      </div>
      <Link className="text-xs text-blue-600" href="/">
        Lista wszystkich funkcjonalności &gt;
      </Link>
    </div>
  );
}

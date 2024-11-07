import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface IMenuItemsProps {
  isMobileView?: boolean;
}

export default function MenuItems({ isMobileView = false }: IMenuItemsProps) {
  const t = useTranslations();

  return (
    <ul
      className={cn(
        "flex items-center justify-center h-full font-medium",
        isMobileView ? "flex-col gap-5" : "flex-row gap-10"
      )}
    >
      <li className="cursor-pointer hover:text-primary">
        {t("marketing.nav.about")}
      </li>
      <li className="cursor-pointer hover:text-primary">
        {t("marketing.nav.newsletter")}
      </li>
      <li className="cursor-pointer hover:text-primary">
        {t("marketing.nav.reviews")}
      </li>
      <li className="cursor-pointer hover:text-primary">
        {t("marketing.nav.pricelist")}
      </li>
      <li className="cursor-pointer hover:text-primary">
        {t("marketing.nav.contact")}
      </li>
      <li className="cursor-pointer hover:text-primary block sm:hidden">
        {t("action.register")}
      </li>
    </ul>
  );
}

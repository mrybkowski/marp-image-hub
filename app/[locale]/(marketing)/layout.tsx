import { TranslationProvider } from "@/providers";
import { Anek_Latin, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";

import "../../globals.css";
import { Header } from "./_components";

interface IMarketingLayoutParams {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const anekLatin = Anek_Latin({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anekLatin",
});

export const metadata: Metadata = {
  title: "photomarp",
  description: "Reliable protection for your creativity",
};

export default async function MarketingLayout({
  children,
  params,
}: Readonly<IMarketingLayoutParams>) {
  const { lang } = await params;

  return (
    <html lang={lang || "en"}>
      <body
        className={cn(
          montserrat.variable,
          anekLatin.variable,
          "antialiased font-montserrat"
        )}
      >
        <TranslationProvider>
          <Header />
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}

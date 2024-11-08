import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "../_components";
import { useTranslations } from "next-intl";
import { User } from "lucide-react";

export function Reviews() {
  const t = useTranslations("marketing.reviews");

  const reviews = [
    {
      image: {
        title: "Review 1",
        src: "/reviews/1.webp",
      },
      author: "Anna Kowalska",
      position: "Marketing Manager",
      description:
        "Aplikacja sprawiła, że zarządzanie treściami graficznymi stało się o wiele łatwiejsze. Doceniam prosty proces dodawania zdjęć i możliwość natychmiastowej sprzedaży. Moim zdaniem to świetne narzędzie dla osób, które chcą profesjonalnie oferować swoje prace.",
    },
    {
      image: {
        title: "Review 2",
        src: "/reviews/2.webp",
      },
      author: "Tomasz Nowak",
      position: "Freelance Designer",
      description:
        "Jestem pod wrażeniem funkcji tej aplikacji. Bezpieczna płatność i prosty interfejs sprawiają, że sprzedawanie prac jest łatwe i przyjemne. W końcu mogę skupić się na tworzeniu, a nie na technicznych aspektach sprzedaży.",
    },
    {
      image: {
        title: "Review 3",
        src: "/reviews/3.webp",
      },
      author: "Katarzyna Zielińska",
      position: "Fotograf",
      description:
        "Ta aplikacja to dokładnie to, czego potrzebowałam. Dzięki niej mogę szybko i bezproblemowo udostępniać swoje zdjęcia klientom. Doceniam bezpieczeństwo, jakie oferuje przy płatnościach, oraz wygodę użytkowania.",
    },
    {
      image: {
        title: "Review 4",
        src: "/reviews/4.webp",
      },
      author: "Michał Majewski",
      position: "Artysta",
      description:
        "Uwielbiam tę aplikację! Intuicyjny design i szybki proces sprzedaży sprawiają, że korzystanie z niej to czysta przyjemność. Dzięki tej platformie udało mi się dotrzeć do nowych klientów i promować swoje prace w bezpieczny sposób.",
    },
    {
      image: {
        title: "Review 5",
        src: "/reviews/5.webp",
      },
      author: "Alicja Wysocka",
      position: "Właścicielka studia fotograficznego",
      description:
        "Fantastyczne narzędzie dla fotografów! Bezpieczna sprzedaż i wygodny interfejs sprawiają, że mogę poświęcić więcej czasu na pracę kreatywną, a mniej na obsługę techniczną.",
    },
  ];

  return (
    <section id="reviews" className="bg-blue-100 py-10 w-full">
      <Container className="flex flex-col gap-10 px-16 md:px-12 lg:px-5 items-center">
        <div className="flex flex-col items-center justofy-center gap-3 w-full">
          <h2 className="text-center text-xl font-medium text-blue-900">
            {t("title")}
          </h2>
          <p className="lg:w-1/2 w-full text-center font-anekLatin tracking-tight xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-balance">
            {t("subtitle")}
          </p>
        </div>
        <Carousel className="w-full md:w-2/3">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center flex-wrap">
                  <div className="md:w-1/3 w-1/5 p-1 rounded-[--radius] flex items-center justify-center bg-blue-200 aspect-square">
                    {/* <Image
                      src={review?.image?.src}
                      alt={review.image?.title}
                      width={400}
                      height={400}
                      className="aspect-square"
                      loading="lazy"
                    /> */}
                    <User width={250} height={250} />
                  </div>
                  <div className="flex flex-col gap-5 md:w-2/3 w-4/5 p-10">
                    <p className="line-clamp-6">{review?.description}</p>
                    <div>
                      <p className="font-medium">{review?.author}</p>
                      <p>{review?.position}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  );
}

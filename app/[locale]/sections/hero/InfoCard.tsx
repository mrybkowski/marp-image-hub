import { P } from '@/components/ui/typography-p';

interface InfoCardProps {
  title?: string;
  quantity: string;
  description: string;
}

export default function InfoCard({
  title,
  quantity,
  description
}: InfoCardProps) {
  return (
    <div
      data-aos="fade-up"
      className="dark:bg-slate-900/50 bg-white/50 rounded-[40px] p-8 border-y border-section flex flex-col justify-center gap-2">
      <P className="lg:text-3xl text-2xl">{title}</P>
      <P className="lg:text-6xl text-3xl">{quantity}</P>
      <P className="text-xl text-md text-balance">{description}</P>
    </div>
  );
}

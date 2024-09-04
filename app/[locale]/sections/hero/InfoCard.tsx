import { P } from '@/components/ui/typography-p';

interface InfoCardProps {
  title?: string;
  quantity: string;
  description: string;
}

function InfoCard({ title, quantity, description }: InfoCardProps) {
  return (
    <div className="dark:bg-slate-900/50 bg-white/50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-center gap-2">
      <P className="text-3xl">{title}</P>
      <P className="text-6xl">{quantity}</P>
      <P className="text-xl text-balance">{description}</P>
    </div>
  );
}

export default InfoCard;

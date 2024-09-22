import Image from 'next/image';
import { Container } from '@/components/ui/container';

export default function Tech() {
  return (
    <section id="about" className="py-10">
      <Container className="overflow-hidden relative">
        <div className="relative flex gap-10 w-full justify-between animate-marquee">
          <div className="shrink-0">
            <Image src="/google.svg" alt="Google" width={218} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/stripe.svg" alt="Stripe" width={182} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/java.svg" alt="Java" width={40} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/spring.svg" alt="Spring" width={75} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/react.svg" alt="React" width={66} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/next_js.svg" alt="NextJS" width={75} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/ts.svg" alt="TypeScript" width={75} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/ai.svg" alt="AI" width={75} height={75} />
          </div>
        </div>

        <div className="absolute flex gap-10 w-full justify-between animate-marquee2 ml-10">
          <div className="shrink-0">
            <Image src="/google.svg" alt="Google" width={218} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/stripe.svg" alt="Stripe" width={182} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/java.svg" alt="Java" width={40} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/spring.svg" alt="Spring" width={75} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/react.svg" alt="React" width={66} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/next_js.svg" alt="NextJS" width={75} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/ts.svg" alt="TypeScript" width={75} height={75} />
          </div>
          <div className="shrink-0">
            <Image src="/ai.svg" alt="AI" width={75} height={75} />
          </div>
        </div>
      </Container>
    </section>
  );
}

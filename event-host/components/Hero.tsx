'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { contact, media } from '@/lib/site';
import { MessageCircle, Play, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

// Must match SplashScreen: PROGRESS_MS(3600) + EXIT_DELAY_EXTRA(150) + EXIT_ANIM(900)
const SPLASH_TOTAL_MS = 4650;

export default function Hero() {
  const { t } = useLanguage();

  // Default to splash-aware (long) delays — corrected immediately if splash already seen
  const base = SPLASH_TOTAL_MS / 1000;
  const [imageDelay, setImageDelay] = useState(`${base}s`);
  const [card1Delay, setCard1Delay] = useState(`${base + 0.35}s`);
  const [card2Delay, setCard2Delay] = useState(`${base + 0.55}s`);
  const [textDelay,  setTextDelay]  = useState(`${base + 0.2}s`);

  useEffect(() => {
    if (sessionStorage.getItem('splash-seen')) {
      // Return visit — no splash, use short snappy delays
      setImageDelay('0.1s');
      setCard1Delay('0.4s');
      setCard2Delay('0.6s');
      setTextDelay('0.25s');
    }
  }, []);

  return (
    <section
      id="about"
      className="bg-white px-5 pb-16 pt-24 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32 lg:pt-44"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-auto sm:min-h-[540px] lg:min-h-[680px]">
          <div
            className="absolute inset-0 overflow-hidden reveal-cinematic"
            style={{ animationDelay: imageDelay }}
          >
            <Image
              src={media.hero}
              alt="Professional event host"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[58%_15%] image-parallax-reveal"
              style={{ animationDelay: imageDelay }}
              priority
            />
          </div>

          {/* Bottom-left card */}
          <div
            className="absolute bottom-4 left-4 z-10 block w-32 bg-white p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.14)] reveal-up sm:w-52 sm:p-3.5"
            style={{ animationDelay: card1Delay }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={media.heroDetail}
                alt="Event host portrait detail"
                fill
                sizes="208px"
                className="object-cover object-[60%_25%]"
              />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <CalendarDays className="size-3 text-[#9a6a25]" />
              <span className="text-[9px] font-light uppercase tracking-[0.15em] text-stone-400">
                {t.hero.detailNote}
              </span>
            </div>
          </div>

          {/* Top-right: pulsing equalizer — no text, no music label */}
          <div
            className="absolute right-4 top-6 z-10 flex size-[52px] items-center justify-center bg-stone-950/90 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm reveal-up sm:size-[60px]"
            style={{ animationDelay: card2Delay }}
          >
            <div className="flex h-6 items-end gap-[3px]">
              {([0, 0.18, 0.08, 0.28, 0.14] as number[]).map((delay, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-sm bg-[#9a6a25]"
                  style={{
                    height: '100%',
                    transformOrigin: 'bottom',
                    animation: `eq-bar 0.75s ease-in-out infinite alternate`,
                    animationDelay: `${delay}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: textDelay }}>
          <h1 className="font-heading text-[42px] font-light leading-[1] text-stone-950 sm:text-[80px] lg:text-[108px]">
            {t.hero.title}
          </h1>

          <div className="mt-6 h-px w-14 bg-[#9a6a25]" />

          <p className="mt-6 max-w-sm text-[14px] leading-[1.8] text-stone-600 sm:text-[15px] sm:leading-[1.85]">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 w-full rounded-none bg-stone-950 px-8 text-[11px] font-light uppercase tracking-[0.15em] text-white shadow-none transition-colors duration-200 hover:bg-stone-800 sm:w-auto"
              onClick={() =>
                window.open(contact.whatsapp, '_blank', 'noopener,noreferrer')
              }
            >
              <MessageCircle className="mr-2.5 size-3.5" />
              {t.hero.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-none border-stone-200 bg-transparent px-8 text-[11px] font-light uppercase tracking-[0.15em] text-stone-600 shadow-none transition-colors duration-200 hover:bg-stone-50 hover:text-stone-950 sm:w-auto"
              onClick={() => (window.location.hash = 'video')}
            >
              <Play className="mr-2.5 size-3.5" />
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

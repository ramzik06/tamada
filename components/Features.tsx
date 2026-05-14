'use client';

import { Award, HeartHandshake, Lightbulb, Mic2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: Mic2, title: t.features.item1Title, description: t.features.item1Desc },
    { icon: HeartHandshake, title: t.features.item2Title, description: t.features.item2Desc },
    { icon: Lightbulb, title: t.features.item3Title, description: t.features.item3Desc },
    { icon: Award, title: t.features.item4Title, description: t.features.item4Desc },
  ];

  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-[36px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:text-[48px] md:text-[60px]">
            {t.features.title}
          </h2>
          <p className="max-w-sm text-[14px] leading-relaxed text-stone-500 sm:text-[15px] sm:leading-8 lg:text-right">
            {t.features.description}
          </p>
        </div>

        <div className="divide-y divide-stone-100">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex gap-4 py-8 sm:gap-6 sm:py-10 lg:gap-16 lg:py-12"
              >
                <span className="w-6 shrink-0 pt-1 text-[9px] font-light uppercase tracking-[0.2em] text-stone-300 sm:w-8 sm:text-[10px]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-1 flex-col gap-4 sm:gap-5 lg:flex-row lg:items-start lg:gap-20">
                  <div className="lg:w-2/5">
                    <Icon className="mb-4 size-4 text-[#9a6a25] sm:mb-5 sm:size-5" />
                    <h3 className="font-heading text-[24px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:text-[28px] md:text-[32px]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-relaxed text-stone-600 sm:text-[15px] sm:leading-[1.85] lg:flex-1 lg:pt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

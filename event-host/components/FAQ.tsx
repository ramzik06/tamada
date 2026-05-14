'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-4 text-[8px] font-light uppercase tracking-[0.2em] text-stone-400 sm:text-[9px]">
            {t.faq.badge}
          </p>
          <h2 className="font-heading text-[32px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:text-[48px]">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-2 sm:space-y-4">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-stone-100 last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-5 text-left transition-colors duration-200 hover:text-stone-600 sm:py-6"
                >
                  <span className="font-heading text-[16px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:text-[22px]">
                    {item.q}
                  </span>
                  <div className="ml-4 shrink-0">
                    {isOpen ? (
                      <Minus className="size-3.5 text-stone-400 sm:size-4" />
                    ) : (
                      <Plus className="size-3.5 text-stone-400 sm:size-4" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-6 sm:pb-8' : 'max-h-0'
                  }`}
                >
                  <p className="text-[14px] leading-relaxed text-stone-500 sm:text-[15px]">
                    {item.a}
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

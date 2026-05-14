'use client';

import { useState } from 'react';
import { contact } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Image from 'next/image';

export default function Services() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="bg-[#f9f7f3] px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-[8px] font-light uppercase tracking-[0.2em] text-stone-400 sm:text-[9px]">
              {t.pricing.badge}
            </p>
            <h2 className="font-heading text-[32px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:text-[48px] md:text-[60px]">
              {t.pricing.title}
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="max-w-xs text-[14px] leading-relaxed text-stone-500 sm:text-[15px] sm:leading-8">
              {t.pricing.description}
            </p>
            <p className="mt-2 text-[12px] text-stone-400 sm:text-[13px]">
              {t.pricing.packageIncludes}
            </p>
          </div>
        </div>

        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {t.pricing.eventTypes.map((event: any, index: number) => (
            <div
              key={event.title}
              onClick={() => setSelectedService(event)}
              className="group flex cursor-pointer items-center justify-between gap-4 py-6 transition-colors duration-200 hover:bg-white/60 sm:gap-8 sm:py-8 lg:py-10"
            >
              <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                <span className="shrink-0 text-[9px] font-light uppercase tracking-[0.18em] text-stone-300 sm:text-[10px]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-[20px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:text-[28px] md:text-[34px]">
                  {event.title}
                </h3>
              </div>
              <div className="shrink-0">
                <div className="flex size-7 items-center justify-center rounded-full border border-stone-200 text-stone-300 transition-colors duration-300 group-hover:border-stone-950 group-hover:text-stone-950 sm:size-8">
                  <span className="text-[9px] uppercase tracking-widest sm:text-[10px]">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10">
            <div 
              className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setSelectedService(null)}
            />
            <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden bg-white shadow-2xl transition-all duration-300 md:h-auto md:flex-row">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full bg-stone-950/10 text-stone-950 backdrop-blur-md transition-colors hover:bg-stone-950 hover:text-white md:bg-transparent md:text-stone-400 md:backdrop-blur-0"
              >
                <X className="size-5" />
              </button>
              
              <div className="relative aspect-video w-full shrink-0 md:aspect-auto md:w-1/2">
                <Image 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col overflow-y-auto p-6 md:w-1/2 md:p-12">
                <p className="mb-3 text-[8px] font-light uppercase tracking-[0.2em] text-stone-400 sm:text-[9px]">
                  {t.pricing.badge}
                </p>
                <h3 className="mb-4 font-heading text-[28px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:mb-6 sm:text-[40px]">
                  {selectedService.title}
                </h3>
                <div className="mb-6 h-px w-8 bg-[#9a6a25] sm:mb-8" />
                <p className="mb-8 text-[14px] leading-relaxed text-stone-500 sm:mb-10 sm:text-[15px]">
                  {selectedService.description}
                </p>
                <div className="mt-auto">
                  <Button
                    className="h-12 w-full rounded-none bg-stone-950 px-10 text-[11px] font-light uppercase tracking-[0.15em] text-white shadow-none transition-colors duration-200 hover:bg-stone-800"
                    onClick={() =>
                      window.open(contact.whatsapp, '_blank', 'noopener,noreferrer')
                    }
                  >
                    <MessageCircle className="mr-2.5 size-3.5" />
                    {t.pricing.contact}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Button
            className="h-12 w-full rounded-none bg-stone-950 px-10 text-[11px] font-light uppercase tracking-[0.15em] text-white shadow-none transition-colors duration-200 hover:bg-stone-800 sm:w-auto"
            onClick={() =>
              window.open(contact.whatsapp, '_blank', 'noopener,noreferrer')
            }
          >
            <MessageCircle className="mr-2.5 size-3.5" />
            {t.pricing.contact}
          </Button>
        </div>
      </div>
    </section>
  );
}

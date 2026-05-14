'use client';

import { contact } from '@/lib/site';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-800 bg-stone-950 px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <h3 className="font-heading text-[28px] font-light tracking-[-0.01em] text-white">
            Nursultan
          </h3>

          <div className="flex flex-wrap gap-8">
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-[11px] font-light text-stone-500 transition-colors hover:text-white">
              Instagram
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[11px] font-light text-stone-500 transition-colors hover:text-white">
              WhatsApp
            </a>
            <a href={contact.phoneHref} className="text-[11px] font-light text-stone-500 transition-colors hover:text-white">
              {contact.phoneDisplay}
            </a>
          </div>

          <p className="text-[10px] font-light uppercase tracking-[0.14em] text-stone-600">
            &copy; {currentYear} Nursultan
          </p>
        </div>
      </div>
    </footer>
  );
}

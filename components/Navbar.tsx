'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Languages, Menu, X, Camera, MessageCircle } from 'lucide-react';
import { contact } from '@/lib/site';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking on a link
  const closeMenu = () => setIsOpen(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#video', label: t.nav.video },
    { href: '#services', label: t.nav.pricing },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-stone-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link href="/" className="font-heading text-xl font-light tracking-[0.08em] text-stone-950" onClick={closeMenu}>
              Nursultan
            </Link>
            <div className="h-3 w-px bg-stone-200" />
            <a 
              href={contact.phoneHref} 
              className="text-[11px] font-medium tracking-[0.02em] text-[#9a6a25] transition-colors hover:text-stone-950 sm:text-[13px]"
            >
              {contact.phoneDisplay}
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] font-light uppercase tracking-[0.18em] text-stone-400 transition-colors duration-300 hover:text-stone-950"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'RU' ? 'KZ' : 'RU')}
              className="flex items-center gap-1.5 text-[10px] font-light uppercase tracking-[0.14em] text-stone-400 transition-colors hover:text-stone-950"
            >
              <Languages className="size-3" />
              {language}
            </button>

            <div className="hidden h-3.5 w-px bg-stone-200 sm:block" />

            {/* Desktop Socials */}
            <div className="hidden items-center gap-4 sm:flex">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-light uppercase tracking-[0.14em] text-stone-400 transition-colors hover:text-stone-950"
              >
                WhatsApp
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-light uppercase tracking-[0.14em] text-stone-400 transition-colors hover:text-stone-950"
              >
                Instagram
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex size-8 items-center justify-center text-stone-950 md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-12 pt-32">
          <div className="flex flex-col gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`font-heading text-[42px] font-light tracking-tight text-stone-950 transition-all duration-500 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <div className="mb-8 h-px w-full bg-stone-100" />
            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[11px] font-light uppercase tracking-[0.15em] text-stone-400"
                >
                  <Camera className="size-4" />
                  Instagram
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[11px] font-light uppercase tracking-[0.15em] text-stone-400"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

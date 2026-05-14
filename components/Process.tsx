'use client';

import { BriefcaseBusiness, CalendarCheck, MessageCircle, Sparkle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion, Variants } from 'framer-motion';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    { number: '01', icon: MessageCircle, title: t.process.step1Title, description: t.process.step1Desc },
    { number: '02', icon: CalendarCheck, title: t.process.step2Title, description: t.process.step2Desc },
    { number: '03', icon: BriefcaseBusiness, title: t.process.step3Title, description: t.process.step3Desc },
    { number: '04', icon: Sparkle, title: t.process.step4Title, description: t.process.step4Desc },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.p variants={itemVariants} className="mb-4 text-[8px] font-light uppercase tracking-[0.2em] text-stone-400 sm:text-[9px]">
            {t.process.badge}
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-heading text-[36px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:text-[48px] md:text-[60px]">
            {t.process.title}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} variants={itemVariants}>
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#9a6a25]/30" />
                  <span className="text-[9px] font-light uppercase tracking-[0.2em] text-[#9a6a25] sm:text-[10px]">
                    {step.number}
                  </span>
                </div>
                <Icon className="mb-5 size-4 text-stone-400" />
                <h3 className="font-heading text-[22px] font-light leading-tight text-stone-950 sm:text-[24px]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-stone-600 sm:text-[15px] sm:leading-[1.8]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

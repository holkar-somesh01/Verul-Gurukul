'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { fadeIn } from '@/lib/utils/animations';

export const AboutHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url('/images/MadhyamikGurukul.jpg')` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.h1 
          variants={fadeIn('up')}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          {t('about.title')}
        </motion.h1>
      </div>
    </section>
  );
};
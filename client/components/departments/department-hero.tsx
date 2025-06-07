'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { fadeIn } from '@/lib/utils/animations';

interface DepartmentHeroProps {
  imageUrl: string;
  titleKey: string;
  descriptionKey: string;
}

export const DepartmentHero = ({
  imageUrl,
  titleKey,
  descriptionKey
}: DepartmentHeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-white"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t(titleKey)}</h1>
          <p className="text-lg md:text-xl text-gray-200">
            {t(descriptionKey)}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
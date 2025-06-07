'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { ACHIEVEMENTS } from '@/lib/constants';
import { fadeIn, staggerContainer, cardHover } from '@/lib/utils/animations';
import { SectionHeading } from '../ui/section-heading';

export const AchievementsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading
            title={t('home.achievements.title')}
            subtitle="Our school has achieved numerous milestones over the years."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                whileHover="hover"
                initial="rest"
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm"
              >
                <motion.div
                  variants={cardHover}
                  className="h-full flex flex-col items-center text-center"
                >
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-4 mb-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{t(achievement.description)}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
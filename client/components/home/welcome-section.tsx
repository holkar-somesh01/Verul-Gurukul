'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { SectionHeading } from '../ui/section-heading';

export const WelcomeSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading 
            title={t('home.welcome.title')} 
            subtitle={t('home.welcome.description')}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={fadeIn('right')}
              className="relative rounded-lg overflow-hidden aspect-video"
            >
              <img 
                src="/images/MadhyamikGurukul.jpg" 
                alt="School Building" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div variants={fadeIn('left')}>
              <h3 className="text-2xl font-bold mb-4">{t('home.mission.title')}</h3>
              <p className="mb-6 text-muted-foreground">
                {t('home.mission.description')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['item1', 'item2', 'item3', 'item4'].map((item, index) => (
                  <motion.div 
                    key={item}
                    variants={fadeIn('up', 0.1 * index)}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <p>{t(`home.facilities.${item}`)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
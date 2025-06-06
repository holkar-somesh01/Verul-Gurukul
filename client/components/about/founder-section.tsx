'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { SectionHeading } from '@/components/ui/section-heading';
import { QuoteIcon } from 'lucide-react';

export const FounderSection = () => {
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
            title={t('about.founder.title')}
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeIn('up')}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm relative"
            >
              <QuoteIcon className="h-12 w-12 text-gray-200 dark:text-gray-700 absolute top-6 left-6 opacity-50" />
              
              <blockquote className="text-lg md:text-xl relative z-10 pl-6">
                <p className="italic text-muted-foreground mb-4">
                  "{t('about.founder.message')}"
                </p>
                <footer className="text-right">
                  <cite className="not-italic font-semibold">
                    — {t('about.founder.name')}
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 0.2)}
              className="mt-8 text-center"
            >
              <div className="inline-block rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg" 
                  alt="Founder"
                  className="w-32 h-32 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
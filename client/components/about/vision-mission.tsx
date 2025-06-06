'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { Lightbulb, Target } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

export const VisionMission = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Vision */}
          <motion.div variants={fadeIn('right')}>
            <div className={cn(
              "bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8",
              "border border-blue-100 dark:border-blue-800",
              "h-full flex flex-col"
            )}>
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-blue-100 dark:bg-blue-800 rounded-full p-3">
                  <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold">{t('about.vision.title')}</h3>
              </div>
              
              <p className="text-muted-foreground">
                {t('about.vision.description')}
              </p>
            </div>
          </motion.div>
          
          {/* Mission */}
          <motion.div variants={fadeIn('left')}>
            <div className={cn(
              "bg-amber-50 dark:bg-amber-900/20 rounded-lg p-8",
              "border border-amber-100 dark:border-amber-800",
              "h-full flex flex-col"
            )}>
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-amber-100 dark:bg-amber-800 rounded-full p-3">
                  <Target className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                </div>
                <h3 className="text-2xl font-bold">{t('about.mission.title')}</h3>
              </div>
              
              <p className="text-muted-foreground">
                {t('about.mission.description')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
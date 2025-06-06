'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { staggerContainer, fadeIn } from '@/lib/utils/animations';
import { SectionHeading } from '@/components/ui/section-heading';

interface Feature {
  icon?: ReactNode;
  titleKey: string;
  items: string[];
}

interface FeatureListProps {
  features: Feature[];
}

export const FeatureList = ({ features }: FeatureListProps) => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.1 * index)}
              >
                <SectionHeading 
                  title={t(feature.titleKey)} 
                  align="left"
                  className="mb-6"
                />
                
                <ul className="space-y-4">
                  {feature.items.map((itemKey, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      variants={fadeIn('up', 0.05 * itemIndex)}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mt-0.5">
                        <span className="text-xs font-bold">{itemIndex + 1}</span>
                      </div>
                      <span>{t(itemKey)}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { Book, Computer, Home, MapPin, Target, BookOpen } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { SectionHeading } from '../ui/section-heading';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';

const facilities = [
  {
    key: 'item1',
    icon: BookOpen,
    href: '/about#facilities',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-500 dark:text-blue-300',
  },
  {
    key: 'item2',
    icon: Book,
    href: '/about#facilities',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-500 dark:text-green-300',
  },
  {
    key: 'item3',
    icon: Computer,
    href: '/about#facilities',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-500 dark:text-purple-300',
  },
  {
    key: 'item4',
    icon: MapPin,
    href: '/about#facilities',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconColor: 'text-yellow-500 dark:text-yellow-300',
  },
  {
    key: 'item5',
    icon: Target,
    href: '/departments/rifle-shooting',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-500 dark:text-red-300',
  },
  {
    key: 'item6',
    icon: Home,
    href: '/departments/hostel',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-500 dark:text-indigo-300',
  },
];

export const FacilitiesSection = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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
            title={t('home.facilities.title')}
            subtitle="We provide state-of-the-art facilities to ensure a comprehensive learning experience."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {facilities.map((facility, index) => {
              const FacilityIcon = facility.icon;
              
              return (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 0.1 * index)}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative"
                >
                  <Link href={facility.href}>
                    <div className={cn(
                      "rounded-lg p-6 h-full transition-all duration-300",
                      "border border-border hover:border-primary",
                      "flex flex-col items-center text-center",
                      hoveredIndex === index ? "shadow-lg" : "shadow-sm",
                    )}>
                      <div className={cn(
                        "rounded-full p-4 mb-4",
                        facility.bgColor
                      )}>
                        <FacilityIcon className={cn("h-6 w-6", facility.iconColor)} />
                      </div>
                      <h3 className="font-medium">{t(`home.facilities.${facility.key}`)}</h3>
                      
                      {hoveredIndex === index && (
                        <motion.div 
                          className="absolute inset-0 rounded-lg bg-primary/10 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/about#facilities">{t('common.readMore')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
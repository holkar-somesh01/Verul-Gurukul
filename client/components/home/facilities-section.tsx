// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useLanguage } from '@/hooks/use-language';
// import { Book, Computer, Home, MapPin, Target, BookOpen } from 'lucide-react';
// import { fadeIn, staggerContainer } from '@/lib/utils/animations';
// import { SectionHeading } from '../ui/section-heading';
// import { cn } from '@/lib/utils';
// import Link from 'next/link';
// import { Button } from '../ui/button';

// const facilities = [
//   {
//     key: 'item1',
//     icon: BookOpen,
//     href: '/about#facilities',
//     bgColor: 'bg-blue-100 dark:bg-blue-900/30',
//     iconColor: 'text-blue-500 dark:text-blue-300',
//   },
//   {
//     key: 'item2',
//     icon: Book,
//     href: '/about#facilities',
//     bgColor: 'bg-green-100 dark:bg-green-900/30',
//     iconColor: 'text-green-500 dark:text-green-300',
//   },
//   {
//     key: 'item3',
//     icon: Computer,
//     href: '/about#facilities',
//     bgColor: 'bg-purple-100 dark:bg-purple-900/30',
//     iconColor: 'text-purple-500 dark:text-purple-300',
//   },
//   {
//     key: 'item4',
//     icon: MapPin,
//     href: '/about#facilities',
//     bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
//     iconColor: 'text-yellow-500 dark:text-yellow-300',
//   },
//   {
//     key: 'item5',
//     icon: Target,
//     href: '/departments/rifle-shooting',
//     bgColor: 'bg-red-100 dark:bg-red-900/30',
//     iconColor: 'text-red-500 dark:text-red-300',
//   },
//   {
//     key: 'item6',
//     icon: Home,
//     href: '/departments/hostel',
//     bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
//     iconColor: 'text-indigo-500 dark:text-indigo-300',
//   },
// ];

// export const FacilitiesSection = () => {
//   const { t } = useLanguage();
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//         >
//           <SectionHeading 
//             title={t('home.facilities.title')}
//             subtitle="We provide state-of-the-art facilities to ensure a comprehensive learning experience."
//           />

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//             {facilities.map((facility, index) => {
//               const FacilityIcon = facility.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   variants={fadeIn('up', 0.1 * index)}
//                   onHoverStart={() => setHoveredIndex(index)}
//                   onHoverEnd={() => setHoveredIndex(null)}
//                   className="relative"
//                 >
//                   <Link href={facility.href}>
//                     <div className={cn(
//                       "rounded-lg p-6 h-full transition-all duration-300",
//                       "border border-border hover:border-primary",
//                       "flex flex-col items-center text-center",
//                       hoveredIndex === index ? "shadow-lg" : "shadow-sm",
//                     )}>
//                       <div className={cn(
//                         "rounded-full p-4 mb-4",
//                         facility.bgColor
//                       )}>
//                         <FacilityIcon className={cn("h-6 w-6", facility.iconColor)} />
//                       </div>
//                       <h3 className="font-medium">{t(`home.facilities.${facility.key}`)}</h3>

//                       {hoveredIndex === index && (
//                         <motion.div 
//                           className="absolute inset-0 rounded-lg bg-primary/10 pointer-events-none"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           transition={{ duration: 0.2 }}
//                         />
//                       )}
//                     </div>
//                   </Link>
//                 </motion.div>
//               );
//             })}
//           </div>

//           <div className="mt-12 text-center">
//             <Button asChild>
//               <Link href="/about#facilities">{t('common.readMore')}</Link>
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };





'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-blue-600',
    path: "/gallery-welcome"
  },
  {
    key: 'item2',
    icon: Book,
    href: '/about#facilities',
    gradientFrom: 'from-green-400',
    gradientTo: 'to-green-600',
    path: "/gallery-lab"
  },
  {
    key: 'item3',
    icon: Computer,
    href: '/about#facilities',
    gradientFrom: 'from-purple-400',
    gradientTo: 'to-purple-600',
    path: "/gallery-computer"
  },
  {
    key: 'item4',
    icon: MapPin,
    href: '/about#facilities',
    gradientFrom: 'from-yellow-400',
    gradientTo: 'to-yellow-600',
    path: "/gallery-ground"
  },
  {
    key: 'item5',
    icon: Target,
    href: '/departments/rifle-shooting',
    gradientFrom: 'from-red-400',
    gradientTo: 'to-red-600',
    path: "/gallery-rifle"
  },
  {
    key: 'item6',
    icon: Home,
    href: '/departments/hostel',
    gradientFrom: 'from-indigo-400',
    gradientTo: 'to-indigo-600',
    path: "/gallery-hostel"
  },
];

export const FacilitiesSection = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading
            title={t('home.facilities.title')}
            subtitle="We provide state-of-the-art facilities to ensure a comprehensive learning experience."
            className="text-orange-600 dark:text-orange-400"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {facilities.map((facility, index) => {
              const FacilityIcon = facility.icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 0.12 * index)}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative cursor-pointer perspective-1000"
                >
                  {/* Floating background shape */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={isHovered ? { scale: 1.2, opacity: 0.15 } : { scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "absolute inset-0 rounded-xl pointer-events-none",
                      `bg-gradient-to-tr ${facility.gradientFrom} ${facility.gradientTo}`,
                      "blur-3xl filter"
                    )}
                    style={{ zIndex: 0 }}
                  />

                  <Link href={facility.path} className="relative block z-10">
                    <motion.div
                      className={cn(
                        "rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-transparent dark:border-gray-700",
                        "flex flex-col items-center text-center p-8 shadow-md",
                        "transition-shadow duration-300",
                        isHovered
                          ? "shadow-xl scale-[1.05] border-orange-400 dark:border-orange-500"
                          : "shadow-md"
                      )}
                      whileHover={{ rotateX: 5, rotateY: 5, transition: { duration: 0.3 } }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={cn(
                          "rounded-full p-5 mb-6 shadow-lg",
                          `bg-gradient-to-tr ${facility.gradientFrom} ${facility.gradientTo}`,
                          "text-white flex items-center justify-center w-16 h-16",
                          "drop-shadow-md"
                        )}
                      >
                        <FacilityIcon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white drop-shadow-sm">
                        {t(`home.facilities.${facility.key}`)}
                      </h3>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Button
              className="inline-block px-10 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500
              shadow-lg hover:shadow-orange-400/70 hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link href="/about#facilities">{t('common.readMore')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

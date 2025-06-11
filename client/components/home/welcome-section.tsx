'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image'; // ✅ Next.js Image
import { useLanguage } from '@/hooks/use-language';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { SectionHeading } from '../ui/section-heading';
import lab from '../../app/assets/lab-img.jpg';
import building2 from '@/app/assets/building2-img.jpg';
import front from '@/app/assets/front-img.jpg';
import ground from '@/app/assets/ground-img.jpg';
import professor from '@/app/assets/professor-img.jpg';

const images = [building2, front, ground, professor, lab];

export const WelcomeSection = () => {
  const { t } = useLanguage();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    // <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
    //   <div className="container mx-auto px-4">
    //     <motion.div
    //       variants={staggerContainer}
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.25 }}
    //     >
    //       <SectionHeading
    //         title={t('home.welcome.title')}
    //         subtitle={t('home.welcome.description')}
    //       />

    //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    //         {/* Image Carousel */}
    //         <div className="relative w-full rounded-lg overflow-hidden aspect-video">
    //           <AnimatePresence mode="wait">
    //             <motion.div
    //               key={currentIndex}
    //               initial={{ opacity: 0, scale: 0.98 }}
    //               animate={{ opacity: 1, scale: 1 }}
    //               exit={{ opacity: 0, scale: 1.02 }}
    //               transition={{ duration: 0.8, ease: 'easeInOut' }}
    //               className="w-full h-full absolute top-0 left-0"
    //             >
    //               <Image
    //                 src={images[currentIndex]}
    //                 alt={`Slide ${currentIndex + 1}`}
    //                 fill
    //                 sizes="100vw"
    //                 style={{ objectFit: 'cover' }}
    //                 className="rounded-lg"
    //                 priority
    //               />
    //             </motion.div>
    //           </AnimatePresence>

    //           {/* Dots */}
    //           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
    //             {images.map((_, idx) => (
    //               <div
    //                 key={idx}
    //                 className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-orange-500' : 'bg-white/50'
    //                   }`}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //         {/* Text Content */}
    //         <motion.div variants={fadeIn('left')}>
    //           <h3 className="text-2xl font-bold mb-4">{t('home.mission.title')}</h3>
    //           <p className="mb-6 text-muted-foreground">
    //             {t('home.mission.description')}
    //           </p>

    //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //             {['item1', 'item2', 'item3', 'item4'].map((item, index) => (
    //               <motion.div
    //                 key={item}
    //                 variants={fadeIn('up', 0.1 * index)}
    //                 className="flex items-start space-x-2"
    //               >
    //                 <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0 mt-0.5">
    //                   <span className="text-sm font-bold">{index + 1}</span>
    //                 </div>
    //                 <p>{t(`home.facilities.${item}`)}</p>
    //               </motion.div>
    //             ))}
    //           </div>
    //         </motion.div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
    // <section className="py-20 md:py-28 bg-gradient-to-br from-white via-orange-50 to-yellow-100 text-gray-800">
    <section className="py-16 md:py-24 bg-white overflow-hidden dark:bg-gray-900">

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
            className="text-orange-500"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image Carousel */}
            <div className="relative w-full rounded-2xl overflow-hidden aspect-video shadow-xl border border-orange-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="w-full h-full absolute top-0 left-0"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

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

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-all duration-300 border border-orange-400 ${currentIndex === idx ? 'bg-orange-500 shadow-md' : 'bg-orange-100'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Text Content */}
            <motion.div variants={fadeIn('left')} className="text-gray-800">
              <h3 className="text-3xl font-semibold mb-4 text-orange-500 drop-shadow-sm">
                {t('home.mission.title')}
              </h3>
              <p className="mb-6 text-gray-600 leading-relaxed">
                {t('home.mission.description')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* {['item1', 'item2', 'item3', 'item4', "item5"].map((item, index) => ( */}

                {['item1', 'item2', 'item3', 'item4'].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={fadeIn('up', 0.1 * index)}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{t(`home.facilities.${item}`)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

  )
}

'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { ACHIEVEMENTS } from '@/lib/constants';
import { fadeIn, staggerContainer, cardHover } from '@/lib/utils/animations';
import { SectionHeading } from '../ui/section-heading';

export const AchievementsSection = () => {
  const { t } = useLanguage();

  return (
    // <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
    //   <div className="container mx-auto px-4">
    //     <motion.div
    //       variants={staggerContainer}
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.25 }}
    //     >
    //       <SectionHeading
    //         title={t('home.achievements.title')}
    //         subtitle="Our school has achieved numerous milestones over the years."
    //       />

    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //         {ACHIEVEMENTS.map((achievement, index) => (
    //           <motion.div
    //             key={index}
    //             variants={fadeIn('up', 0.1 * index)}
    //             whileHover="hover"
    //             initial="rest"
    //             className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm"
    //           >
    //             <motion.div
    //               variants={cardHover}
    //               className="h-full flex flex-col items-center text-center"
    //             >
    //               <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-4 mb-4">
    //                 <achievement.icon className="h-8 w-8 text-primary" />
    //               </div>
    //               <h3 className="text-3xl font-bold mb-2">{achievement.title}</h3>
    //               <p className="text-muted-foreground">{t(achievement.description)}</p>
    //             </motion.div>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>

    <section
      className="py-16 md:py-24 bg-gradient-to-br from-white via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-x-hidden"
    >
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeading
            title={t('home.achievements.title')}
            subtitle="Our school has achieved numerous milestones over the years."
            className="text-orange-600 dark:text-orange-400"
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 max-w-full mx-auto">
            {/* Decorative blurred shapes */}
            <div
              className="pointer-events-none absolute -top-20 -left-10 w-36 h-36 rounded-full bg-orange-200 opacity-20 blur-3xl dark:bg-orange-700"
              style={{ maxWidth: '9rem', maxHeight: '9rem', left: '1rem' }}
            ></div>
            <div
              className="pointer-events-none absolute -bottom-24 -right-12 w-48 h-48 rounded-full bg-yellow-300 opacity-20 blur-3xl dark:bg-yellow-600"
              style={{ maxWidth: '12rem', maxHeight: '12rem', right: '1rem' }}
            ></div>

            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.15 * index)}
                whileHover="hover"
                initial="rest"
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg dark:shadow-black/40 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-md mx-auto"
              >
                <motion.div
                  variants={cardHover}
                  className="h-full flex flex-col items-center text-center"
                >
                  <div className="rounded-full bg-gradient-to-tr from-orange-400 to-yellow-400 p-5 mb-6 shadow-lg text-white flex items-center justify-center w-16 h-16">
                    <achievement.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-extrabold mb-3 text-gray-900 dark:text-white drop-shadow-md">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                    {t(achievement.description)}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>


  );
};









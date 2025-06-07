// 'use client';

// import { motion } from 'framer-motion';
// import { useLanguage } from '@/hooks/use-language';
// import { fadeIn } from '@/lib/utils/animations';
// import students from '../../app/assets/students.jpg';

// export const AboutHero = () => {
//   const { t } = useLanguage();

//   return (
//     <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-gray-500">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
//         style={{ backgroundImage: `url(${students.src})` }}
//       />

//       {/* Content */}
//       <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
//         <motion.h1
//           variants={fadeIn('up')}
//           initial="hidden"
//           animate="visible"
//           className="text-4xl md:text-6xl font-bold text-white mb-4"
//         >
//           {t('about.title')}
//         </motion.h1>
//       </div>
//     </section>
//   );
// };








'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import students from '../../app/assets/students.jpg';
import { fadeIn } from '@/lib/utils/animations';

export const AboutHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-gray-50">
      {/* Background Image with subtle overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center filter brightness-90"
        style={{ backgroundImage: `url(${students.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/10 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center max-w-4xl">
        <motion.h1
          variants={fadeIn('up')}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
        >
          {t('about.title')}
        </motion.h1>

        <motion.p
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-xl text-lg text-gray-200 font-light tracking-wide"
        >
          Dedicated to inspiring excellence, nurturing growth, and shaping future leaders.
        </motion.p>

      </div>
    </section>
  );
};

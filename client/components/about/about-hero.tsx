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
    <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url('https://res.cloudinary.com/dmolheokh/image/upload/v1749202581/MadhyamikGurukul_etqdhw.jpg')` }}
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50 z-10" /> */}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
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

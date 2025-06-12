// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import { useLanguage } from '@/hooks/use-language';
// import { Button } from '@/components/ui/button';
// import { fadeIn } from '@/lib/utils/animations';

// import building from '@/app/assets/building-img.jpg';
// import food from '../../app/assets/food-img.jpg';
// import front from '../../app/assets/front-img.jpg';
// import ground from '../../app/assets/ground-img.jpg';
// import lab from '../../app/assets/lab-img.jpg';
// import professor from '../../app/assets/professor-img.jpg';
// import shiv from '../../app/assets/shiv-img.jpg';
// import student from '../../app/assets/student-img.jpg';
// import swami from '../../app/assets/swami-img.jpg';
// import tradition from '../../app/assets/tradition-img.jpg';
// import school from '../../app/assets/school-img.jpg';


// export const HeroSection = () => {
//   const { t } = useLanguage();
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setOffset(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//       {/* Parallax Background */}
//       <div
//         className="absolute inset-0 z-0 opacity-40"
//         style={{
//           backgroundImage: `url(${building.src})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           transform: `translateY(${offset * 0.5}px)`,
//         }}
//       />


//       {/* Content */}
//       <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
//         <motion.h1
//           className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl"
//           variants={fadeIn('up')}
//           initial="hidden"
//           animate="visible"
//           custom={0}
//         >
//           {t('home.hero.title')}
//         </motion.h1>

//         <motion.p
//           className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-200"
//           variants={fadeIn('up')}
//           initial="hidden"
//           animate="visible"
//           custom={0.2}
//         >
//           {t('home.hero.subtitle')}
//         </motion.p>

//         <motion.div
//           variants={fadeIn('up')}
//           initial="hidden"
//           animate="visible"
//           custom={0.4}
//         >
//           <Button asChild className="text-base" size="lg">
//             <Link href="/about" className="group">
//               {t('home.hero.cta')}
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </Button>
//         </motion.div>
//       </div>

//       {/* Animated scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         animate={{ y: [0, 12, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
//           <motion.div
//             className="w-1.5 h-3 bg-white rounded-full mt-2"
//             animate={{ y: [0, 15, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };








'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/utils/animations';
import staff from '@/app/assets/staff.jpg';
import hostel from '@/app/assets/hostel.jpg';
import buildingg from '@/app/assets/building4.jpg';
import buildinggg from '@/app/assets/building3.jpg';
import school from '@/app/assets/school-img.jpg';

export const HeroSection = () => {
  const { t } = useLanguage();
  const [offset, setOffset] = useState(0);
  const images = [
    staff,
    hostel,
    buildingg,
    buildinggg,
    school
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 2000); // 1000ms = 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 transition-all duration-500"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-4xl text-orange-600 md:text-6xl font-bold mb-6 max-w-4xl"
          variants={fadeIn('up')}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {t('home.hero.title')}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-200"
          variants={fadeIn('up')}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          {t('home.hero.subtitle')}
        </motion.p>
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <Button
            asChild
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 shadow-md"
          >
            <Link href="/about" className="flex items-center group">
              {t('home.hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


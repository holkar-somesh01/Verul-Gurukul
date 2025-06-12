// 'use client';

// import { motion } from 'framer-motion';
// import { useLanguage } from '@/hooks/use-language';
// import { fadeIn } from '@/lib/utils/animations';

// interface DepartmentHeroProps {
//   imageUrl: string;
//   titleKey: string;
//   descriptionKey: string;
// }

// export const DepartmentHero = ({
//   imageUrl,
//   titleKey,
//   descriptionKey
// }: DepartmentHeroProps) => {
//   const { t } = useLanguage();

//   return (
//     <section className="relative h-[60vh] overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('${imageUrl}')` }}
//       />

//       {/* Dark Overlay with Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10" />

//       {/* Content */}
//       <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
//         <motion.div
//           variants={fadeIn('up')}
//           initial="hidden"
//           animate="visible"
//           className="max-w-3xl text-white"
//         >
//           <h1 className="text-3xl md:text-5xl font-bold mb-4">{t(titleKey)}</h1>
//           <p className="text-lg md:text-xl text-gray-200">
//             {t(descriptionKey)}
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };







// 'use client';

// import { motion } from 'framer-motion';
// import { useLanguage } from '@/hooks/use-language';
// import { fadeIn } from '@/lib/utils/animations';
// import { Sparkles } from 'lucide-react';
// import rifel from '@/app/assets/rifel.jpg';

// interface DepartmentHeroProps {
//   imageUrl: string;
//   titleKey: string;
//   descriptionKey: string;
// }

// export const DepartmentHero = ({
//   imageUrl,
//   titleKey,
//   descriptionKey,
// }: DepartmentHeroProps) => {
//   const { t } = useLanguage();

//   return (
//     <section className="relative overflow-hidden bg-black">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-center overflow-hidden scale-110 md:scale-105 transition-transform duration-1000 ease-out"
//         style={{ backgroundImage: `url('${rifel.src}')` }}
//       />


//       {/* Content */}
//       <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-end pb-20">
//         <motion.div
//           variants={fadeIn('up')}
//           initial="hidden"
//           animate="visible"
//           className="border border-orange-500/10 rounded-xl p-6 md:p-10 "
//         >
//           <div className="flex items-center gap-4 mb-4">
//             <Sparkles className="text-orange-400 w-8 h-8 animate-bounce-slow" />
//             <h1 className="text-2 xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent tracking-wide">
//               {t(titleKey)}
//             </h1>
//           </div>

//           <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
//             {t(descriptionKey)}
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };





'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { fadeIn } from '@/lib/utils/animations';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import hostel from '@/app/assets/hostel.jpg';
import rifel from '@/app/assets/rifel.jpg';
import school from '@/app/assets/school-img.jpg';

const images = [
  hostel,
  rifel,
  school,
];

interface DepartmentHeroProps {
  titleKey: string;
  descriptionKey: string;
  imageUrl: String
}

export const DepartmentHero = ({
  titleKey,
  descriptionKey,
  imageUrl
}: DepartmentHeroProps) => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 6000); // Change slide every 6s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[65vh] md:h-[80vh] overflow-hidden bg-black">
      {/* Background Carousel */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div
            className="w-full h-full bg-center bg-cover scale-110 md:scale-105 transition-transform duration-1000 ease-out"
            style={{ backgroundImage: `url('${src.src}')` }}
          />
        </div>
      ))}


      {/* Hero Content */}
      <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-end pb-20">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          animate="visible"
          className="bg-black/40  border border-orange-500/10 rounded-xl p-4 md:p-5"
        >
          <div className="flex items-center gap-4 mb-4">
            <Sparkles className="text-orange-400 w-4 h-4 animate-pulse" />
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              {t(titleKey)}
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            {t(descriptionKey)}
          </p>
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-orange-500 scale-110' : 'bg-white/40'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

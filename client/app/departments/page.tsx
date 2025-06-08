// 'use client';

// import { useEffect } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { useLanguage } from '@/hooks/use-language';
// import { MotionWrapper } from '@/components/layout/motion-wrapper';
// import { SectionHeading } from '@/components/ui/section-heading';
// import { fadeIn, staggerContainer, cardHover } from '@/lib/utils/animations';
// import { Button } from '@/components/ui/button';

// export default function DepartmentsPage() {
//   const { t } = useLanguage();

//   // Set page title
//   useEffect(() => {
//     document.title = `${t('nav.departments')} | ${t('home.hero.title')}`;
//   }, [t]);

//   return (
//     <MotionWrapper>
//       <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <SectionHeading 
//             title={t('nav.departments')}
//             subtitle="Our school offers various specialized departments to enhance the educational experience"
//           />

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
//           >
//             {/* Rifle Shooting Department */}
//             <motion.div
//               variants={fadeIn('right')}
//               whileHover="hover"
//               initial="rest"
//             >
//               <motion.div 
//                 variants={cardHover}
//                 className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm h-full"
//               >
//                 <div className="aspect-video overflow-hidden">
//                   <img 
//                     src="/images/RifileShooting.jpg"
//                     alt="Rifle Shooting"
//                     className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold mb-2">{t('departments.rifleShooting.title')}</h3>
//                   <p className="text-muted-foreground mb-4">
//                     {t('departments.rifleShooting.description')}
//                   </p>
//                   <Button asChild>
//                     <Link href="/departments/rifle-shooting">
//                       {t('common.readMore')}
//                     </Link>
//                   </Button>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Hostel Department */}
//             <motion.div
//               variants={fadeIn('left')}
//               whileHover="hover"
//               initial="rest"
//             >
//               <motion.div 
//                 variants={cardHover}
//                 className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm h-full"
//               >
//                 <div className="aspect-video overflow-hidden">
//                   <img 
//                     src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
//                     alt="Hostel"
//                     className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold mb-2">{t('departments.hostel.title')}</h3>
//                   <p className="text-muted-foreground mb-4">
//                     {t('departments.hostel.description')}
//                   </p>
//                   <Button asChild>
//                     <Link href="/departments/hostel">
//                       {t('common.readMore')}
//                     </Link>
//                   </Button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </MotionWrapper>
//   );
// }










'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { MotionWrapper } from '@/components/layout/motion-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { fadeIn, staggerContainer, cardHover } from '@/lib/utils/animations';
import { Button } from '@/components/ui/button';
import hostel from '../../../client/app/assets/hostel.jpg';
import rifel from '../../../client/app/assets/rifel.jpg';

export default function DepartmentsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t('nav.departments')} | ${t('home.hero.title')}`;
  }, [t]);

  return (
    <MotionWrapper>
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-white to-orange-50 text-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            title={t('nav.departments')}
            subtitle="Explore our specialized departments designed to foster excellence."
            className="mb-20 text-center max-w-3xl mx-auto text-orange-600"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          >
            {/* Rifle Shooting Department */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              whileHover="hover"
              initial="rest"
              className="cursor-pointer"
            >
              <motion.div
                variants={cardHover}
                className="bg-white border border-orange-200 rounded-2xl shadow-md shadow-orange-200 flex flex-col h-full transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="aspect-video overflow-hidden rounded-t-2xl border-b border-orange-200">
                  <img
                    src={rifel.src}
                    alt="Rifle Shooting"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-3xl font-extrabold mb-3 text-orange-600">
                    {t('departments.rifleShooting.title')}
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg flex-grow">
                    {t('departments.rifleShooting.description')}
                  </p>
                  <Button
                    asChild
                    variant="orange"
                    className="self-start px-8 py-3 rounded-full font-semibold tracking-wide shadow-md hover:shadow-orange-400 transition"
                  >
                    <Link href="/departments/rifle-shooting">
                      {t('common.readMore')}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Hostel Department */}
            <motion.div
              variants={fadeIn('left', 0.3)}
              whileHover="hover"
              initial="rest"
              className="cursor-pointer"
            >
              <motion.div
                variants={cardHover}
                className="bg-white border border-orange-200 rounded-2xl shadow-md shadow-orange-200 flex flex-col h-full transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="aspect-video overflow-hidden rounded-t-2xl border-b border-orange-200">
                  <img
                    src={hostel.src}
                    alt="Hostel"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-3xl font-extrabold mb-3 text-orange-600">
                    {t('departments.hostel.title')}
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg flex-grow">
                    {t('departments.hostel.description')}
                  </p>
                  <Button
                    asChild
                    variant="orange"
                    className="self-start px-8 py-3 rounded-full font-semibold tracking-wide shadow-md hover:shadow-orange-400 transition"
                  >
                    <Link href="/departments/hostel">
                      {t('common.readMore')}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
}

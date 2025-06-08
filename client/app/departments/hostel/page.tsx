// 'use client';

// import { useEffect } from 'react';
// import { useLanguage } from '@/hooks/use-language';
// import { MotionWrapper } from '@/components/layout/motion-wrapper';
// import { DepartmentHero } from '@/components/departments/department-hero';
// import { FeatureList } from '@/components/departments/feature-list';
// import { SectionHeading } from '@/components/ui/section-heading';
// import rifel from '../../client/app/assets/rifel.jpg';

// export default function HostelPage() {
//   const { t } = useLanguage();

//   // Set page title
//   useEffect(() => {
//     document.title = `${t('departments.hostel.title')} | ${t('home.hero.title')}`;
//   }, [t]);

//   const features = [
//     {
//       titleKey: 'departments.hostel.features.title',
//       items: [
//         'departments.hostel.features.item1',
//         'departments.hostel.features.item2',
//         'departments.hostel.features.item3',
//         'departments.hostel.features.item4',
//         'departments.hostel.features.item5',
//       ],
//     },
//   ];

//   return (
//     <MotionWrapper>
//       <DepartmentHero
//         imageUrl="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
//         titleKey="departments.hostel.title"
//         descriptionKey="departments.hostel.description"
//       />

//       <FeatureList features={features} />

//       <section className="py-16 bg-gray-50 dark:bg-gray-800">
//         <div className="container mx-auto px-4">
//           <SectionHeading
//             title="Hostel Life"
//             subtitle={t('departments.hostel.additionalInfo')}
//           />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//             {[1, 2, 3].map((item) => (
//               <div
//                 key={item}
//                 className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm"
//               >
//                 <img
//                   src={`https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=800`}
//                   alt={`Hostel Life ${item}`}
//                   className="w-full aspect-video object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg mb-2">Student Life in Hostel</h3>
//                   <p className="text-muted-foreground text-sm">
//                     Our hostel provides a nurturing environment where students learn valuable life skills while focusing on academics.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </MotionWrapper>
//   );
// }





'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { MotionWrapper } from '@/components/layout/motion-wrapper';
import { DepartmentHero } from '@/components/departments/department-hero';
import { FeatureList } from '@/components/departments/feature-list';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import hostel from '../../../app/assets/hostel.jpg';

export default function HostelPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t('departments.hostel.title')} | ${t('home.hero.title')}`;
  }, [t]);

  const features = [
    {
      titleKey: 'departments.hostel.features.title',
      items: [
        'departments.hostel.features.item1',
        'departments.hostel.features.item2',
        'departments.hostel.features.item3',
        'departments.hostel.features.item4',
        'departments.hostel.features.item5',
      ],
    },
  ];

  return (
    <MotionWrapper>
      <DepartmentHero
        imageUrl="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
        titleKey="departments.hostel.title"
        descriptionKey="departments.hostel.description"
      />

      <FeatureList features={features} />

      <section className="py-20 relative bg-gradient-to-br from-orange-50 via-yellow-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all overflow-hidden">
        {/* Background Sparkle Blur Layer */}
        <div className="absolute -top-20 left-0 w-96 h-96 bg-orange-400 opacity-20 rounded-full filter blur-3xl animate-pulse z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="🏠 Luxurious Hostel Life"
            subtitle={t('departments.hostel.additionalInfo')}
            className="text-center mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-orange-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={hostel.src}
                    alt={`Hostel Life ${item}`}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-xl text-orange-600 dark:text-orange-300 tracking-wide">
                    🌟 Student Life in Hostel
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Our hostel offers more than just accommodation — it's a vibrant space fostering growth, friendships, and memories.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
}

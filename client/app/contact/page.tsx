// 'use client';

// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useLanguage } from '@/hooks/use-language';
// import { MotionWrapper } from '@/components/layout/motion-wrapper';
// import { SectionHeading } from '@/components/ui/section-heading';
// import { ContactForm } from '@/components/contact/contact-form';
// import { ContactMap } from '@/components/contact/contact-map';
// import { CONTACT_INFO } from '@/lib/constants';
// import { fadeIn, staggerContainer } from '@/lib/utils/animations';

// export default function ContactPage() {
//   const { t } = useLanguage();

//   // Set page title
//   useEffect(() => {
//     document.title = `${t('contact.title')} | ${t('home.hero.title')}`;
//   }, [t]);

//   return (
//     <MotionWrapper>
//       <section className="pt-32 pb-16 md:pt-40 md:pb-24">
//         <div className="container mx-auto px-4">
//           <SectionHeading
//             title={t('contact.title')}
//             subtitle="Get in touch with us for any queries or information"
//           />

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.25 }}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12"
//           >
//             {/* Contact Form */}
//             <motion.div variants={fadeIn('right')}>
//               <ContactForm />
//             </motion.div>

//             {/* Contact Information & Map */}
//             <motion.div variants={fadeIn('left')} className="space-y-8">
//               <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 lg:p-8">
//                 <h3 className="text-xl font-semibold mb-6">{t('contact.info.title')}</h3>

//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <CONTACT_INFO.address.icon className="h-5 w-5 text-primary mt-1 mr-3" />
//                     <div>
//                       <p className="font-medium">{t('contact.info.address.title')}</p>
//                       <address className="not-italic text-muted-foreground">
//                         {t('contact.info.address.line1')}<br />
//                         {t('contact.info.address.line2')}<br />
//                         {t('contact.info.address.line3')}
//                       </address>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <CONTACT_INFO.phone.icon className="h-5 w-5 text-primary mt-1 mr-3" />
//                     <div>
//                       <p className="font-medium">{t('contact.info.phone.title')}</p>
//                       <p className="text-muted-foreground">
//                         <a href={`tel:${t('contact.info.phone.number')}`} className="hover:text-primary">
//                           {t('contact.info.phone.number')}
//                         </a>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <CONTACT_INFO.email.icon className="h-5 w-5 text-primary mt-1 mr-3" />
//                     <div>
//                       <p className="font-medium">{t('contact.info.email.title')}</p>
//                       <p className="text-muted-foreground">
//                         <a href={`mailto:${t('contact.info.email.address')}`} className="hover:text-primary">
//                           {t('contact.info.email.address')}
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold mb-4">{t('contact.map')}</h3>
//                 <ContactMap />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </MotionWrapper>
//   );
// }









'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { MotionWrapper } from '@/components/layout/motion-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactMap } from '@/components/contact/contact-map';
import { CONTACT_INFO } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';

export default function ContactPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t('contact.title')} | ${t('home.hero.title')}`;
  }, [t]);

  return (
    <MotionWrapper>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-orange-50 dark:bg-slate-800 transition-colors">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('contact.title')}
            subtitle="Get in touch with us for any queries or information"
            className="text-orange-700 dark:text-orange-300"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12"
          >
            {/* Contact Form */}
            <motion.div variants={fadeIn('right')}>
              <ContactForm />
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div variants={fadeIn('left')} className="space-y-8">
              <div className="bg-white dark:bg-orange-900 rounded-lg shadow-sm p-6 lg:p-8 transition-colors">
                <h3 className="text-xl font-semibold mb-6 text-orange-700 dark:text-orange-300">
                  {t('contact.info.title')}
                </h3>

                <div className="space-y-4 text-gray-800 dark:text-orange-100">
                  <div className="flex items-start">
                    <CONTACT_INFO.address.icon className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-orange-800 dark:text-orange-300">
                        {t('contact.info.address.title')}
                      </p>
                      <address className="not-italic text-gray-600 dark:text-orange-200">
                        {t('contact.info.address.line1')}<br />
                        {t('contact.info.address.line2')}<br />
                        {t('contact.info.address.line3')}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CONTACT_INFO.phone.icon className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-orange-800 dark:text-orange-300">
                        {t('contact.info.phone.title')}
                      </p>
                      <p className="text-gray-600 dark:text-orange-200">
                        <a
                          href={`tel:${t('contact.info.phone.number')}`}
                          className="hover:text-orange-600 dark:hover:text-orange-400"
                        >
                          {t('contact.info.phone.number')}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CONTACT_INFO.email.icon className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-orange-800 dark:text-orange-300">
                        {t('contact.info.email.title')}
                      </p>
                      <p className="text-gray-600 dark:text-orange-200">
                        <a
                          href={`mailto:${t('contact.info.email.address')}`}
                          className="hover:text-orange-600 dark:hover:text-orange-400"
                        >
                          {t('contact.info.email.address')}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
                  {t('contact.map')}
                </h3>
                <ContactMap />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
}

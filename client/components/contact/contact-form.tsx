// 'use client';

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { motion } from 'framer-motion';
// import { useLanguage } from '@/hooks/use-language';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { fadeIn, staggerContainer } from '@/lib/utils/animations';
// import { CheckCircle2 } from 'lucide-react';

// interface ContactFormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// export const ContactForm = () => {
//   const { t } = useLanguage();
//   const [isSuccess, setIsSuccess] = useState(false);
//   const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

//   const onSubmit = async (data: ContactFormData) => {
//     try {
//       const message =
//         `Name: ${data.name}\n` +
//         `Email: ${data.email}\n` +
//         `Subject: ${data.subject}\n` +
//         `Message: ${data.message}`;

//       const phoneNumber = '918482816761';
//       const encodedMessage = encodeURIComponent(message);
//       const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//       window.open(whatsappUrl, '_blank');
//       reset();
//       setIsSuccess(true);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setIsSuccess(false);
//     }
//   };

//   const handleSendAnother = () => {
//     setIsSuccess(false);
//   };

//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 lg:p-8"
//     >
//       {isSuccess ? (
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn('up')}
//           className="flex flex-col ..."
//         >
//           <div className="bg-green-100 dark:bg-green-800 p-4 rounded-full mb-4 shadow-md">
//             <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-300" />
//           </div>

//           <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
//             🎉 {t('contact.form.success') || 'Message Sent Successfully!'}
//           </h3>

//           <p className="text-muted-foreground mb-4 max-w-md">
//             Thank you for reaching out! We've received your message and will respond shortly.
//           </p>

//           <Button
//             variant="default"
//             onClick={handleSendAnother}
//             className="rounded-full px-6 py-2 bg-green-600 hover:bg-green-700 text-white transition"
//           >
//             {t('contact.form.sendAnother') || 'Send Another Message'}
//           </Button>
//         </motion.div>
//         // <motion.div
//         //   variants={fadeIn('up')}
//         //   className="text-center py-12"
//         // >
//         //   <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
//         //     <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-300" />
//         //   </div>
//         //   <h3 className="text-xl font-semibold mb-2">{t('contact.form.success') || 'Message sent!'}</h3>
//         //   <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
//         //   <Button
//         //     variant="outline"
//         //     className="mt-4"
//         //     onClick={handleSendAnother}
//         //   >
//         //     {t('contact.form.sendAnother') || 'Send another message'}
//         //   </Button>
//         // </motion.div>
//       ) : (
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <motion.div variants={fadeIn('up')} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Name */}
//               <div className="space-y-2">
//                 <Label htmlFor="name">{t('contact.form.name') || 'Name'}</Label>
//                 <Input
//                   id="name"
//                   placeholder={t('contact.form.name') || 'Name'}
//                   {...register('name', { required: true })}
//                   className={errors.name ? 'border-destructive' : ''}
//                 />
//                 {errors.name && (
//                   <p className="text-sm text-destructive">Name is required</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div className="space-y-2">
//                 <Label htmlFor="email">{t('contact.form.email') || 'Email'}</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder={t('contact.form.email') || 'Email'}
//                   {...register('email', {
//                     required: true,
//                     pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   })}
//                   className={errors.email ? 'border-destructive' : ''}
//                 />
//                 {errors.email && (
//                   <p className="text-sm text-destructive">Valid email is required</p>
//                 )}
//               </div>
//             </div>

//             {/* Subject */}
//             <div className="space-y-2">
//               <Label htmlFor="subject">{t('contact.form.subject') || 'Subject'}</Label>
//               <Input
//                 id="subject"
//                 placeholder={t('contact.form.subject') || 'Subject'}
//                 {...register('subject', { required: true })}
//                 className={errors.subject ? 'border-destructive' : ''}
//               />
//               {errors.subject && (
//                 <p className="text-sm text-destructive">Subject is required</p>
//               )}
//             </div>

//             {/* Message */}
//             <div className="space-y-2">
//               <Label htmlFor="message">{t('contact.form.message') || 'Message'}</Label>
//               <Textarea
//                 id="message"
//                 placeholder={t('contact.form.message') || 'Message'}
//                 rows={5}
//                 {...register('message', { required: true })}
//                 className={errors.message ? 'border-destructive' : ''}
//               />
//               {errors.message && (
//                 <p className="text-sm text-destructive">Message is required</p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               size="lg"
//               className="w-full"
//             >
//               {t('contact.form.submit') || 'Send Message'}
//             </Button>
//           </motion.div>
//         </form>
//       )}
//     </motion.div>
//   );
// };










'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { CheckCircle2 } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const { t } = useLanguage();
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const message =
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Subject: ${data.subject}\n` +
        `Message: ${data.message}`;

      const phoneNumber = '918482816761';
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      reset();
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSuccess(false);
    }
  };

  const handleSendAnother = () => {
    setIsSuccess(false);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-orange-50 dark:bg-orange-950 rounded-lg shadow-sm p-6 lg:p-8"
    >
      {isSuccess ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn('up')}
          className="flex flex-col items-center text-center"
        >
          <div className="bg-orange-100 dark:bg-orange-600 p-4 rounded-full mb-4 shadow-md">
            <CheckCircle2 className="h-10 w-10 text-orange-600 dark:text-orange-300" />
          </div>

          <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-2">
            🎉 {t('contact.form.success') || 'Message Sent Successfully!'}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">
            Thank you for reaching out! We've received your message and will respond shortly.
          </p>

          <Button
            variant="default"
            onClick={handleSendAnother}
            className="rounded-full px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white transition"
          >
            {t('contact.form.sendAnother') || 'Send Another Message'}
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div variants={fadeIn('up')} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-orange-700 dark:text-orange-300">
                  {t('contact.form.name') || 'Name'}
                </Label>
                <Input
                  id="name"
                  placeholder={t('contact.form.name') || 'Name'}
                  {...register('name', { required: true })}
                  className={`bg-white dark:bg-orange-900 ${errors.name ? 'border-red-500' : 'border-orange-300'}`}
                />
                {errors.name && <p className="text-sm text-red-600">Name is required</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-orange-700 dark:text-orange-300">
                  {t('contact.form.email') || 'Email'}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contact.form.email') || 'Email'}
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  className={`bg-white dark:bg-orange-900 ${errors.email ? 'border-red-500' : 'border-orange-300'}`}
                />
                {errors.email && <p className="text-sm text-red-600">Valid email is required</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-orange-700 dark:text-orange-300">
                {t('contact.form.subject') || 'Subject'}
              </Label>
              <Input
                id="subject"
                placeholder={t('contact.form.subject') || 'Subject'}
                {...register('subject', { required: true })}
                className={`bg-white dark:bg-orange-900 ${errors.subject ? 'border-red-500' : 'border-orange-300'}`}
              />
              {errors.subject && <p className="text-sm text-red-600">Subject is required</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-orange-700 dark:text-orange-300">
                {t('contact.form.message') || 'Message'}
              </Label>
              <Textarea
                id="message"
                placeholder={t('contact.form.message') || 'Message'}
                rows={5}
                {...register('message', { required: true })}
                className={`bg-white dark:bg-orange-900 ${errors.message ? 'border-red-500' : 'border-orange-300'}`}
              />
              {errors.message && <p className="text-sm text-red-600">Message is required</p>}
            </div>

            <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              {t('contact.form.submit') || 'Send Message'}
            </Button>
          </motion.div>
        </form>
      )}
    </motion.div>
  );
};

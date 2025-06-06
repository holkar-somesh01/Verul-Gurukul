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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulating API call
    try {
      // In a real application, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 lg:p-8"
    >
      {isSuccess ? (
        <motion.div 
          variants={fadeIn('up')}
          className="text-center py-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-300" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t('contact.form.success')}</h3>
          <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => setIsSuccess(false)}
          >
            Send another message
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div variants={fadeIn('up')} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <Input
                  id="name"
                  placeholder={t('contact.form.name')}
                  {...register('name', { required: true })}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">Name is required</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contact.form.email')}
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">Valid email is required</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject">{t('contact.form.subject')}</Label>
              <Input
                id="subject"
                placeholder={t('contact.form.subject')}
                {...register('subject', { required: true })}
                className={errors.subject ? 'border-destructive' : ''}
              />
              {errors.subject && (
                <p className="text-sm text-destructive">Subject is required</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">{t('contact.form.message')}</Label>
              <Textarea
                id="message"
                placeholder={t('contact.form.message')}
                rows={5}
                {...register('message', { required: true })}
                className={errors.message ? 'border-destructive' : ''}
              />
              {errors.message && (
                <p className="text-sm text-destructive">Message is required</p>
              )}
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? t('common.loading') : t('contact.form.submit')}
            </Button>
          </motion.div>
        </form>
      )}
    </motion.div>
  );
};
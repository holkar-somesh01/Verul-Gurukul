'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { MotionWrapper } from '@/components/layout/motion-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { GalleryGrid } from '@/components/gallery/gallery-grid';

export default function GalleryPage() {
  const { t } = useLanguage();
  
  // Set page title
  useEffect(() => {
    document.title = `${t('gallery.title')} | ${t('home.hero.title')}`;
  }, [t]);
  
  return (
    <MotionWrapper>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={t('gallery.title')}
            subtitle="Explore images from our school events, activities, and facilities"
          />
          
          <GalleryGrid />
        </div>
      </section>
    </MotionWrapper>
  );
}
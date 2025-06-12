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
      <section className="pt-32 pb-16 md:pt-0 md:pb-20">
        <div className="container mx-auto px-4">
          {/* <SectionHeading
            title={t('gallery.title')}
            subtitle={t('gallery.subtitle')}
          /> */}
          <GalleryGrid />
        </div>
      </section>
    </MotionWrapper>
  );
}
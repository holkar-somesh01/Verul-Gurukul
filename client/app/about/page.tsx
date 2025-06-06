'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { MotionWrapper } from '@/components/layout/motion-wrapper';
import { AboutHero } from '@/components/about/about-hero';
import { VisionMission } from '@/components/about/vision-mission';
import { FounderSection } from '@/components/about/founder-section';
import { SectionHeading } from '@/components/ui/section-heading';

export default function AboutPage() {
  const { t } = useLanguage();
  
  // Set page title
  useEffect(() => {
    document.title = `${t('about.title')} | ${t('home.hero.title')}`;
  }, [t]);
  
  return (
    <MotionWrapper>
      <AboutHero />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={t('about.history.title')}
            align="left" 
          />
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground">{t('about.history.description')}</p>
          </div>
        </div>
      </section>
      
      <VisionMission />
      <FounderSection />
      
      {/* Timeline section could be added here */}
    </MotionWrapper>
  );
}
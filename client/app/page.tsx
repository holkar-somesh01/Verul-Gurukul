'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { MotionWrapper } from '@/components/layout/motion-wrapper';
import { HeroSection } from '@/components/home/hero-section';
import { WelcomeSection } from '@/components/home/welcome-section';
import { AchievementsSection } from '@/components/home/achievements-section';
import { FacilitiesSection } from '@/components/home/facilities-section';

export default function Home() {
  const { t } = useLanguage();

  // Set page title
  useEffect(() => {
    document.title = t('home.hero.title');
  }, [t]);

  return (
    <MotionWrapper>
      <HeroSection />
      <WelcomeSection />
      <AchievementsSection />
      <FacilitiesSection />
    </MotionWrapper>
  );
}
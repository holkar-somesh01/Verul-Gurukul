'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { MotionWrapper } from '@/components/layout/motion-wrapper';
import { DepartmentHero } from '@/components/departments/department-hero';
import { FeatureList } from '@/components/departments/feature-list';

export default function RifleShootingPage() {
  const { t } = useLanguage();
  
  // Set page title
  useEffect(() => {
    document.title = `${t('departments.rifleShooting.title')} | ${t('home.hero.title')}`;
  }, [t]);
  
  const features = [
    {
      titleKey: 'departments.rifleShooting.features.title',
      items: [
        'departments.rifleShooting.features.item1',
        'departments.rifleShooting.features.item2',
        'departments.rifleShooting.features.item3',
        'departments.rifleShooting.features.item4',
      ],
    },
    {
      titleKey: 'departments.rifleShooting.achievements.title',
      items: [
        'departments.rifleShooting.achievements.item1',
        'departments.rifleShooting.achievements.item2',
        'departments.rifleShooting.achievements.item3',
      ],
    },
  ];
  
  return (
    <MotionWrapper>
      <DepartmentHero 
        imageUrl="/images/RifileShooting.jpg"
        titleKey="departments.rifleShooting.title"
        descriptionKey="departments.rifleShooting.description"
      />
      
      <FeatureList features={features} />
    </MotionWrapper>
  );
}
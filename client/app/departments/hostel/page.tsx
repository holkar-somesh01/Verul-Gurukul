'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { MotionWrapper } from '@/components/layout/motion-wrapper';
import { DepartmentHero } from '@/components/departments/department-hero';
import { FeatureList } from '@/components/departments/feature-list';
import { SectionHeading } from '@/components/ui/section-heading';

export default function HostelPage() {
  const { t } = useLanguage();
  
  // Set page title
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
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Hostel Life"
            subtitle={t('departments.hostel.additionalInfo')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm"
              >
                <img 
                  src={`https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={`Hostel Life ${item}`}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Student Life in Hostel</h3>
                  <p className="text-muted-foreground text-sm">
                    Our hostel provides a nurturing environment where students learn valuable life skills while focusing on academics.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
}
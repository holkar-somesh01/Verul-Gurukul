'use client';

import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { toggleLanguage, t, currentLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-1 text-sm"
      onClick={toggleLanguage}
    >
      <Languages className="h-4 w-4 mr-1" />
      <span className="hidden sm:inline-block">{t('common.languageSwitcher')}</span>
      <span className="inline-block sm:hidden">{currentLanguage.toUpperCase()}</span>
    </Button>
  );
};
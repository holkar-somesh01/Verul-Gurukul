'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <h2 className="text-2xl font-semibold mb-4">{t('common.error')}</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/">
          {t('nav.home')}
        </Link>
      </Button>
    </div>
  );
}
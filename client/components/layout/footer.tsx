'use client';

import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { CONTACT_INFO, QUICK_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
            <p className="text-muted-foreground mb-4">{t('footer.aboutText')}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('contact.info.address.line1')}<br />
                  {t('contact.info.address.line2')}<br />
                  {t('contact.info.address.line3')}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t('contact.info.phone.number')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t('contact.info.email.address')}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">School Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday:</span>
                <span className="font-medium">8:00 AM - 4:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Saturday:</span>
                <span className="font-medium">8:00 AM - 12:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Sunday:</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={cn(
          "mt-12 pt-6 border-t border-gray-200 dark:border-gray-800",
          "text-center text-sm text-muted-foreground"
        )}>
          <p>{t('footer.copyright')}</p>
          <p className="mt-1">{t('footer.designedBy')}</p>
        </div>
      </div>
    </footer>
  );
};
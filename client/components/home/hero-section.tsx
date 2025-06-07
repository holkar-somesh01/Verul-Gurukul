'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/utils/animations';

export const HeroSection = () => {
  const { t } = useLanguage();
  const [offset, setOffset] = useState(0);

  const images = [
    'https://res.cloudinary.com/dmolheokh/image/upload/v1749202581/MadhyamikGurukul_etqdhw.jpg',
    'https://res.cloudinary.com/dmolheokh/image/upload/v1749278648/hostelMain_t0yyt8.jpg',
    'https://res.cloudinary.com/dmolheokh/image/upload/v1749199168/Sttaf_m9lyww.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 1000); // 1000ms = 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 transition-all duration-500"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-4xl text-orange-600 md:text-6xl font-bold mb-6 max-w-4xl"
          variants={fadeIn('up')}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {t('home.hero.title')}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-200"
          variants={fadeIn('up')}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          {t('home.hero.subtitle')}
        </motion.p>
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <Button
            asChild
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 shadow-md"
          >
            <Link href="/about" className="flex items-center group">
              {t('home.hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </Button>

        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
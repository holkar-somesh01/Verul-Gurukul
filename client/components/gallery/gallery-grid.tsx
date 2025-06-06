'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer, imageHover } from '@/lib/utils/animations';

export const GalleryGrid = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory
    ? GALLERY_IMAGES.filter(image => image.category === selectedCategory)
    : GALLERY_IMAGES;

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="mb-2"
          >
            All
          </Button>
          {GALLERY_CATEGORIES.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {t(`gallery.categories.${category}`)}
            </Button>
          ))}
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={fadeIn('up', 0.1 * image.id)}
              whileHover="hover"
              initial="rest"
              className="relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <motion.img
                variants={imageHover}
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium text-lg">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button (for demonstration) */}
        {/* <div className="mt-10 text-center">
          <Button variant="outline">
            {t('gallery.loadMore')}
          </Button>
        </div> */}
      </div>
    </div>
  );
};
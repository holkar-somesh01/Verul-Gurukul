// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useLanguage } from '@/hooks/use-language';
// import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '@/lib/constants';
// import { Button } from '@/components/ui/button';
// import { fadeIn, staggerContainer, imageHover } from '@/lib/utils/animations';

// export const GalleryGrid = () => {
//   const { t } = useLanguage();
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   // Filter images based on selected category
//   const filteredImages = selectedCategory 
//     ? GALLERY_IMAGES.filter(image => image.category === selectedCategory)
//     : GALLERY_IMAGES;

//   return (
//     <div className="py-12">
//       <div className="container mx-auto px-4">
//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           <Button
//             variant={selectedCategory === null ? "default" : "outline"}
//             onClick={() => setSelectedCategory(null)}
//             className="mb-2"
//           >
//             All
//           </Button>

//           {GALLERY_CATEGORIES.map(category => (
//             <Button
//               key={category}
//               variant={selectedCategory === category ? "default" : "outline"}
//               onClick={() => setSelectedCategory(category)}
//               className="mb-2"
//             >
//               {t(`gallery.categories.${category}`)}
//             </Button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {filteredImages.map((image) => (
//             <motion.div
//               key={image.id}
//               variants={fadeIn('up', 0.1 * image.id)}
//               whileHover="hover"
//               initial="rest"
//               className="relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
//             >
//               <motion.img
//                 variants={imageHover}
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover transition-all"
//               />
//               <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
//                 <p className="text-white font-medium text-lg">{image.alt}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Load More Button (for demonstration) */}
//         <div className="mt-10 text-center">
//           <Button variant="outline">
//             {t('gallery.loadMore')}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };










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
  
  const filteredImages = selectedCategory
    ? GALLERY_IMAGES.filter(image => image.category === selectedCategory)
    : GALLERY_IMAGES;

  return (
    <div className="py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-white min-h-screen">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-orange-600 mb-10"
        >
          {t('gallery.title')}
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

        <div className="flex flex-wrap justify-center gap-2 mb-8">

          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(null)}
            className="rounded-full px-6 py-2 font-medium shadow-md hover:shadow-lg"
          >
            All
          </Button>
          {GALLERY_CATEGORIES.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full px-6 py-2 font-medium shadow-md hover:shadow-lg"
            >
              {t(`gallery.categories.${category}`)}
            </Button>
          ))}
        </div>

        {/* Image Grid */}


        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={fadeIn('up', 0.1 * image.id)}
              whileHover="hover"
              initial="rest"
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            >
              <motion.img
                variants={imageHover}
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <p className="text-white font-semibold text-xl tracking-wide">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Load More Button */}
        <div className="mt-12 text-center">
          <Button
            variant="default"
            className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white px-6 py-2 rounded-full shadow hover:shadow-xl transition-all"
          >

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

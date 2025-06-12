// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const images = [
//     '/gallery/ground1.jpg',
//     '/gallery/ground2.jpg',
//     '/gallery/ground3.jpg',
//     '/gallery/ground4.jpg',
//     '/gallery/ground5.jpg',
//     '/gallery/ground6.jpg',
// ];

// export default function GalleryPage() {
//     return (
//         <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
//             <div className="max-w-7xl mx-auto text-center mb-10">
//                 <h2 className="text-4xl font-bold tracking-wide text-green-400">🏟️ Sports Ground Gallery</h2>
//                 <p className="text-gray-400 mt-2">Explore premium ground photos for professional events & matches.</p>
//             </div>

//             <motion.div
//                 className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//             >
//                 {images.map((src, index) => (
//                     <motion.div
//                         key={index}
//                         whileHover={{ scale: 1.05 }}
//                         className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
//                     >
//                         <Image
//                             src={src}
//                             alt={`Ground ${index + 1}`}
//                             width={500}
//                             height={300}
//                             className="object-cover w-full h-60 hover:scale-110 transition-transform duration-300"
//                         />
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// }










'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
    '/gallery/ground1.jpg',
    '/gallery/ground2.jpg',
    '/gallery/ground3.jpg',
    '/gallery/ground4.jpg',
    '/gallery/ground5.jpg',
    '/gallery/ground6.jpg',
];

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 px-4 py-12 transition-colors duration-500">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-orange-400">
                    🏟️ Sports Ground <span className="text-orange-500">Gallery</span>
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
                    Explore premium ground photos for professional events & matches.
                </p>
            </div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.15 }}
            >
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-2xl overflow-hidden shadow-lg dark:shadow-black/40 transform transition-transform cursor-pointer bg-white dark:bg-gray-900"
                    >
                        <Image
                            src={src}
                            alt={`Ground ${index + 1}`}
                            width={500}
                            height={300}
                            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

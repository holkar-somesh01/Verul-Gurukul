'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import babaji from '@/app/assets/babaji.jpg';

const images = [
    babaji,
    babaji,
    babaji,
    babaji,
    babaji,
    babaji,
]; // Place these in /public/gallery

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ModernRoomsGallery() {
    return (
        <section className="bg-white dark:bg-gray-950 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-extrabold text-gray-800 dark:text-white mb-10"
                >
                    Modern <span className="text-orange-500">Rooms</span>
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                        >
                            <Image
                                src={src.src}
                                alt={`Modern Room ${index + 1}`}
                                width={500}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-medium">Room {index + 1}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

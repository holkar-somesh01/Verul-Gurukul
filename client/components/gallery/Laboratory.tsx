'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const labs = [
    { name: 'AI Research Lab', img: '/labs/lab1.jpg' },
    { name: 'Cybersecurity Lab', img: '/labs/lab2.jpg' },
    { name: 'Networking Lab', img: '/labs/lab3.jpg' },
    { name: 'Data Science Lab', img: '/labs/lab4.jpg' },
    { name: 'IoT Lab', img: '/labs/lab5.jpg' },
    { name: 'Robotics Lab', img: '/labs/lab6.jpg' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

export default function LabsGallery() {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-12">
                Computer Labs Gallery
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {labs.map((lab, index) => (
                    <motion.div
                        key={lab.name}
                        custom={index}
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                        whileHover={{ scale: 1.05 }}
                        className="bg-slate-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform"
                    >
                        <Image
                            src={lab.img}
                            alt={lab.name}
                            width={600}
                            height={400}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{lab.name}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

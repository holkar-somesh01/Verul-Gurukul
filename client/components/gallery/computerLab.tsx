'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const rooms = [
    { name: 'AI Lab', img: '/rooms/ai.jpg' },
    { name: 'Robotics Room', img: '/rooms/robotics.jpg' },
    { name: 'VR Studio', img: '/rooms/vr.jpg' },
    { name: 'Networking Lab', img: '/rooms/network.jpg' },
    { name: 'Gaming Room', img: '/rooms/gaming.jpg' },
    { name: 'Multimedia Studio', img: '/rooms/media.jpg' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.5 },
    }),
};

export default function ComputerRoomsGallery() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-bold text-center mb-10">Computer Rooms Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {rooms.map((room, i) => (
                    <motion.div
                        key={room.name}
                        custom={i}
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform"
                    >
                        <Image
                            src={room.img}
                            alt={room.name}
                            width={500}
                            height={300}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{room.name}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

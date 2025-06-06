'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/utils/animations';

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
}

export const MotionWrapper = ({ children, className }: MotionWrapperProps) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="enter"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
};
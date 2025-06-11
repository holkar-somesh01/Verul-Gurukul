import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay,
      },
    },
  };
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Hover scale animation
export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300
    }
  },
};

// Page transition animation
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

// Image hover animation
export const imageHover: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Card hover effect
export const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: "0px 0px 0px rgba(0,0,0,0.1)",
  },
  hover: {
    y: -8,
    boxShadow: "0px 15px 25px rgba(0,0,0,0.06)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }
};
import { useInView } from "framer-motion";
import { useRef } from "react";

// Creative art-themed animation variants
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: -15,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
  },
};

export const bounceIn = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: -10,
    filter: "hue-rotate(180deg)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "hue-rotate(0deg)",
  },
};

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
    skewX: -10,
    filter: "brightness(0.5)",
  },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    filter: "brightness(1)",
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 100,
    skewX: 10,
    filter: "contrast(0.5)",
  },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    filter: "contrast(1)",
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: 45,
    filter: "saturate(0)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "saturate(1)",
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const galleryItemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotate: -5,
    scale: 0.9,
    filter: "grayscale(100%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "grayscale(0%)",
  },
};

export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const colorShiftAnimation = {
  animate: {
    filter: [
      "hue-rotate(0deg)",
      "hue-rotate(90deg)",
      "hue-rotate(180deg)",
      "hue-rotate(270deg)",
      "hue-rotate(360deg)",
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const textReveal = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
  },
};

export const buttonHover = {
  hover: {
    scale: 1.05,
    y: -3,
    rotate: 2,
    boxShadow: "0 10px 25px rgba(161, 122, 241, 0.3)",
  },
  tap: {
    scale: 0.95,
    rotate: -1,
  },
};

// Custom hook for scroll animations
export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: "-100px 0px",
  });

  return { ref, isInView };
};

// Variants
export const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Transition 1
export const transition1 = { duration: 0.5 };

export const transition1WithDelay = (delay: number) => {
  return { delay: delay, ease: "easeInOut", duration: 0.5 };
};

// Transition 2

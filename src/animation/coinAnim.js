export const coinVariants = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 4,
      ease: "easeInOut",
    },
  },
};

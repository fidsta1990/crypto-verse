export const homeVariants = {
  hidden: {
    y: "50vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      ease: "easeInOut",
    },
  },
};

export const animateLink = {
  hidden: {
    y: "-50vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};


//animation to display navbar on page load
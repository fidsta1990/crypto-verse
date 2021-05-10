import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const logoAnim = (
  <motion.svg
    variants={pathVariants}
    className="cv-logo"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="141"
    height="141"
    viewBox="0 0 141 141"
  >
    <defs>
      <filter
        id="a"
        x="0"
        y="0"
        width="141"
        height="141"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="b" />
        <feFlood floodColor="#121212" floodOpacity="0.404" />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="c"
        x="23.197"
        y="30.197"
        width="64.607"
        height="80.607"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="d" />
        <feFlood floodOpacity="0.271" />
        <feComposite operator="in" in2="d" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="e"
        x="53.197"
        y="30.197"
        width="64.607"
        height="80.607"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="f" />
        <feFlood floodOpacity="0.322" />
        <feComposite operator="in" in2="f" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g transform="translate(-404 -428)">
      <g transform="matrix(1, 0, 0, 1, 404, 428)" filter="url(#a)">
        <g
          transform="translate(9 6)"
          fill="#fff"
          stroke="#757ce8"
          strokeWidth="12"
        >
          <circle cx="61.5" cy="61.5" r="61.5" stroke="none" />
          <circle cx="61.5" cy="61.5" r="55.5" fill="none" />
        </g>
      </g>
      <g transform="translate(-21 965) rotate(-90)">
        <g transform="matrix(0, 1, -1, 0, 537, 425)" filter="url(#c)">
          <motion.path
            variants={pathVariants}
            d="M46,0,0,30"
            transform="translate(40.5 90.5) rotate(-90)"
            fill="none"
            stroke="#757ce8"
            strokeLinecap="round"
            strokeWidth="15"
          />
        </g>
        <g transform="matrix(0, 1, -1, 0, 537, 425)" filter="url(#e)">
          <motion.path
            variants={pathVariants}
            d="M46,30,0,0"
            transform="translate(70.5 90.5) rotate(-90)"
            fill="none"
            stroke="#757ce8"
            strokeLinecap="round"
            strokeWidth="15"
          />
        </g>
      </g>
    </g>
  </motion.svg>
);

import React from "react"
import { motion } from "framer-motion"
import "./Animation.scss"
const easing = [0.6, -0.05, 0.01, 0.99]

const svgStagger = {
  show: {
    transition: {
      staggerChildren: 2,
    },
  },
}

const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    ease: easing,
  },
  show: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    ease: easing,
  },
}

const AnimationLoader = ({ setLoading }) => {
  return (
    <motion.div className="fullPageLoader">
      <motion.svg
        width="712"
        height="123"
        viewBox="0 0 712 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="logo"
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={svgStagger}
      >
        <motion.path
          d="M3.46094 117.5V5.4999H29.7009V93.8199H81.8609V117.5H3.46094Z"
          stroke="white"
          strokeWidth="1"
          variants={pathVariant}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M144.088 119.1C127.342 119.1 113.475 113.767 102.488 103.1C91.6084 92.4332 86.1684 78.5666 86.1684 61.4999C86.1684 44.4332 91.6084 30.5666 102.488 19.8999C113.368 9.23324 127.235 3.8999 144.088 3.8999C160.942 3.8999 174.808 9.23324 185.688 19.8999C196.675 30.5666 202.168 44.4332 202.168 61.4999C202.168 78.5666 196.675 92.4332 185.688 103.1C174.808 113.767 160.942 119.1 144.088 119.1ZM122.008 85.0199C127.662 90.8866 135.022 93.8199 144.088 93.8199C153.155 93.8199 160.515 90.8866 166.168 85.0199C171.822 79.0466 174.648 71.2066 174.648 61.4999C174.648 51.8999 171.768 44.1132 166.008 38.1399C160.355 32.1666 153.048 29.1799 144.088 29.1799C135.022 29.1799 127.662 32.1666 122.008 38.1399C116.355 44.1132 113.528 51.8999 113.528 61.4999C113.528 71.2066 116.355 79.0466 122.008 85.0199Z"
          stroke="white"
          strokeWidth="1"
          variants={pathVariant}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M278.108 5.4999L322.268 117.5H294.428L285.628 93.8199H240.988L232.188 117.5H204.348L248.508 5.4999H278.108ZM249.628 70.1399H276.828L263.228 34.1399L249.628 70.1399Z"
          stroke="white"
          strokeWidth="1"
          variants={pathVariant}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M331.43 117.5V5.4999H371.91C389.936 5.4999 403.963 10.4066 413.99 20.2199C424.016 29.9266 429.03 43.5799 429.03 61.1799C429.03 78.7799 423.963 92.5932 413.83 102.62C403.803 112.54 389.83 117.5 371.91 117.5H331.43ZM357.67 93.3399H371.75C381.136 93.3399 388.496 90.4599 393.83 84.6999C399.163 78.9399 401.83 71.0999 401.83 61.1799C401.83 51.1532 399.163 43.4199 393.83 37.9799C388.603 32.4332 381.243 29.6599 371.75 29.6599H357.67V93.3399Z"
          stroke="white"
          strokeWidth="1"
          variants={pathVariant}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M442.523 117.5V5.4999H468.763V117.5H442.523Z"
          stroke="white"
          strokeWidth="1"
          variants={pathVariant}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M558.742 5.4999H585.142V117.5H561.302L512.982 51.4199V117.5H486.742V5.4999H510.422L558.742 71.4199V5.4999Z"
          stroke="white"
          strokeWidth="1"
          variants={pathVariant}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M642.356 55.5799H708.116V117.5H684.596V108.86C676.809 115.687 666.783 119.1 654.516 119.1C638.409 119.1 625.023 113.767 614.356 103.1C603.689 92.3266 598.356 78.4599 598.356 61.4999C598.356 44.4332 603.743 30.5666 614.516 19.8999C625.289 9.23324 638.836 3.8999 655.156 3.8999C667.743 3.8999 678.836 6.99324 688.436 13.1799C698.143 19.2599 704.436 28.0599 707.316 39.5799L681.716 46.9399C680.329 41.6066 677.236 37.3399 672.436 34.1399C667.743 30.8332 661.983 29.1799 655.156 29.1799C646.516 29.1799 639.423 32.1666 633.876 38.1399C628.436 44.1132 625.716 51.8999 625.716 61.4999C625.716 71.2066 628.489 79.0466 634.036 85.0199C639.689 90.8866 647.103 93.8199 656.276 93.8199C662.996 93.8199 668.969 92.3266 674.196 89.3399C679.423 86.3532 682.889 82.6199 684.596 78.1399H642.356V55.5799Z"
          stroke="white"
          strokeWidth="1"
          variants={pathVariant}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </motion.div>
  )
}

export default AnimationLoader

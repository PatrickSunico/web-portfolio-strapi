import React from "react"
import * as classes from "./SocialLinks.module.scss"
import { motion } from "framer-motion"

import { useHeroDataQuery } from "../../hooks/useHeroDataQuery"

// Icons
import LinkedIn from "../../assets/icons/LinkedIn.svg"
import Behance from "../../assets/icons/Behance.svg"
import Github from "../../assets/icons/Github.svg"

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemToShow = {
  // Default state hide it first then reveal it
  hidden: {
    opacity: 0,
    y: 0,
    ease: [0.6, -0.05, 0.01, 0.99],
    duration: 0.6,
  },
  show: {
    opacity: 1,
    y: 0,
    ease: [0.6, -0.05, 0.01, 0.99],
    duration: 0.6,
  },
  exit: {
    opacity: 0,
    y: 60,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
}

const SocialLinks = () => {
  const heroQuery = useHeroDataQuery()
  const socialLinks = heroQuery.socialLinks.nodes[0].HeroSection
  return (
    <div className={`${classes["socialLinksWrapper"]}`}>
      <motion.ul
        className={classes["socialList"]}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.li variants={itemToShow}>
          <a href={socialLinks.github_link} rel="noopener" targe="_blank">
            <Github />
          </a>
        </motion.li>
        <motion.li variants={itemToShow}>
          <a href={socialLinks.behance_link} rel="noopener" targe="_blank">
            <LinkedIn />
          </a>
        </motion.li>
        <motion.li variants={itemToShow}>
          <a href={socialLinks.linkedin_link} rel="noopener" targe="_blank">
            <Behance />
          </a>
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default SocialLinks

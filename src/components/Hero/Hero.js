import React from "react"
import * as classes from "./Hero.module.scss"

import AnchorButton from "../UI/AnchorButton"
import * as linkStyles from "../UI/Button.module.scss"

import { useHeroDataQuery } from "../../hooks/useHeroDataQuery"
import { motion } from "framer-motion"

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}
const easing = [0.6, -0.05, 0.01, 0.99]

const itemToShow = {
  // Default state hide it first then reveal it
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 1, ease: easing },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
}

const Hero = () => {
  const heroQuery = useHeroDataQuery()
  const heroData = heroQuery.heroDetails.nodes[0].HeroSection
  const { headline, secondary_headline, caption, resume } = heroData

  console.log(resume)
  return (
    <motion.div className={classes["hero"]}>
      <div className="heroContainer">
        <div className="container">
          <div className="row">
            <motion.div
              className="sectionBlock flex-direction-column"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.h2
                className={classes["heroHeading"]}
                variants={itemToShow}
              >
                {headline}
              </motion.h2>
              <motion.p
                className={classes["heroCaption"]}
                variants={itemToShow}
              >
                {secondary_headline}
              </motion.p>
              <motion.div
                className={`${classes["heroDescription"]} col-sm-12 col-md-10 col-xl-8`}
                variants={itemToShow}
                dangerouslySetInnerHTML={{ __html: caption }}
              ></motion.div>

              <motion.a
                target="_blank"
                rel="noopener"
                variants={itemToShow}
                className={linkStyles["button"]}
              >
                My Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero

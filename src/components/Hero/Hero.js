import React from "react"
import * as classes from "./Hero.module.scss"
import { motion } from "framer-motion"

// Components
import ParallaxObjects from "../ParallaxObjects/ParallaxObjects"
import HeroDetails from "./HeroDetails/HeroDetails"

const Hero = () => {
  return (
    <>
      <motion.div id="hero" className={classes["hero"]}>
        <ParallaxObjects>
          <HeroDetails />
        </ParallaxObjects>
      </motion.div>
    </>
  )
}

export default Hero

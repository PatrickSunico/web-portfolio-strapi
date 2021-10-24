import React from "react"
import * as classes from "./Hero.module.scss"
import { motion } from "framer-motion"

// Components
import ParallaxObjects from "../ParallaxObjects/ParallaxObjects"
import HeroDetails from "./HeroDetails/HeroDetails"

const Hero = () => {
  return (
    <section id="hero">
      <motion.div className={classes["hero"]}>
        <ParallaxObjects>
          <HeroDetails />
        </ParallaxObjects>
      </motion.div>
    </section>
  )
}

export default Hero

import React from "react"
import * as classes from "./Hero.module.scss"
import { motion } from "framer-motion"

// Components
import ParallaxObjects from "../ParallaxObjects/ParallaxObjects"
import HeroDetails from "./HeroDetails/HeroDetails"
// import ParallaxObjects from "../ParallaxObjects/ParallaxObjects"

const Hero = () => {
  // const heroQuery = useHeroDataQuery()
  // const heroData = heroQuery.heroDetails.nodes[0].HeroSection
  // const { headline, secondary_headline, caption, resume } = heroData

  return (
    <>
      <motion.div className={classes["hero"]}>
        <ParallaxObjects>
          <HeroDetails />
        </ParallaxObjects>
      </motion.div>
    </>
  )
}

export default Hero

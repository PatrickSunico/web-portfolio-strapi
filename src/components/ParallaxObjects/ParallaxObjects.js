import React, { useEffect, useState } from "react"

import { motion, useAnimation } from "framer-motion"
import * as classes from "./ParallaxObjects.module.scss"

import { StaticImage } from "gatsby-plugin-image"

// BG Layers
import Borealis from "../../assets/svg-layers/borealis.svg"

// Planets
import MoonLayer from "../../assets/svg-layers/moon.svg"
import PlanetLayer1 from "../../assets/svg-layers/planet-1.svg"
import PlanetLayer2 from "../../assets/svg-layers/planet-2.svg"
import PlanetLayer3 from "../../assets/svg-layers/planet-3.svg"
import PlanetLayer4 from "../../assets/svg-layers/planet-4.svg"
import PlanetLayer5 from "../../assets/svg-layers/planet-5.svg"

// Make a loop that loops through all of the svgs to make it's own motion.div

const Moon = props => {
  return (
    <motion.div animate={props.animate} className={`${classes["moon"]}`}>
      <MoonLayer />
    </motion.div>
  )
}

const Planet1 = props => {
  return (
    <motion.div
      animate={props.animate}
      className={`${classes["planetLayer1"]} `}
    >
      <PlanetLayer1 />
    </motion.div>
  )
}
const Planet2 = props => {
  return (
    <motion.div
      animate={props.animate}
      className={`${classes["planetLayer2"]} `}
    >
      <PlanetLayer2 />
    </motion.div>
  )
}
const Planet3 = props => {
  return (
    <motion.div
      animate={props.animate}
      className={`${classes["planetLayer3"]} `}
    >
      <PlanetLayer3 />
    </motion.div>
  )
}
const Planet4 = props => {
  return (
    <motion.div
      animate={props.animate}
      className={`${classes["planetLayer4"]} `}
    >
      <PlanetLayer4 />
    </motion.div>
  )
}
const Planet5 = props => {
  return (
    <motion.div
      animate={props.animate}
      className={`${classes["planetLayer5"]} `}
    >
      <PlanetLayer5 />
    </motion.div>
  )
}
const Astronaut = props => {
  return (
    // formats: [AUTO, AVIF, WEBP]
    <motion.div animate={props.animate} className={`${classes["astronaut"]} `}>
      <StaticImage
        src="../../images/astronaut.png"
        alt="test"
        placeholder="none"
        formats={["AUTO", "AVIF", "WEBP"]}
      />
    </motion.div>
  )
}

const ParallaxGroup = props => {
  return <> {props.children} </>
}

// Main Parent
const ParallaxObjects = props => {
  const [width, setWidth] = useState(window.innerWidth)

  const [layers, setLayers] = useState(true)

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight)
    // Cleanup
    return () => {
      window.removeEventListener("resize", updateWidthAndHeight)
      setLayers(!layers)
    }
  }, [width, layers])
  const planet1 = useAnimation()
  const planet2 = useAnimation()
  const planet3 = useAnimation()
  const planet4 = useAnimation()
  const planet5 = useAnimation()
  const moon = useAnimation()
  const astronaut = useAnimation()

  return (
    <motion.div
      className={classes["frameGroup"]}
      onMouseMove={event => {
        let offsetX = event.clientX - window.innerWidth / 2
        let offsetY = event.clientY - window.innerWidth / 2
        moon.start({ x: offsetX / 20, y: offsetY / -20 })
        planet1.start({ x: offsetX / -24, y: offsetY / 24 })
        planet2.start({ x: offsetX / -18, y: offsetY / -18 })
        planet3.start({ x: offsetX / 22, y: offsetY / -22 })
        planet4.start({ x: offsetX / -40, y: offsetY / -40 })
        planet5.start({ x: offsetX / 10, y: offsetY / 10 })
        astronaut.start({ x: offsetX / -20, y: offsetY / -20 })
      }}
    >
      {width > 578 && (
        <ParallaxGroup>
          <Borealis className={classes["borealis"]} />
          {/* <StarPattern className={classes["starPattern"]} /> */}
          <Moon
          // animate={moon}
          />
          <Planet1
          // animate={planet1}
          />
          <Planet2
          // animate={planet2}
          />
          <Planet3
          // animate={planet3}
          />
          <Planet4
          // animate={planet4}
          />
          <Planet5
          // animate={planet5}
          />
          <Astronaut
          // animate={astronaut}
          />
        </ParallaxGroup>
      )}

      {props.children}
    </motion.div>
  )
}

export default ParallaxObjects

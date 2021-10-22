import React from "react"

import { motion, useAnimation } from "framer-motion"
import * as classes from "./ParallaxObjects.module.scss"
import Layer1 from "../../assets/svg-layers/layer-1.svg"
import Layer2 from "../../assets/svg-layers/layer-2.svg"
import Layer3 from "../../assets/svg-layers/layer-3.svg"
import Layer4 from "../../assets/svg-layers/layer-4.svg"
import Layer5 from "../../assets/svg-layers/layer-5.svg"
import Layer6 from "../../assets/svg-layers/layer-6.svg"
import Layer7 from "../../assets/svg-layers/layer-7.svg"
import Layer8 from "../../assets/svg-layers/layer-8.svg"
import Layer9 from "../../assets/svg-layers/layer-9.svg"

// Make a loop that loops through all of the svgs to make it's own motion.div

const Frame1 = props => {
  return (
    <motion.div
      animate={props.animate}
      size={110 / 1.5}
      className={`${classes["layer"]} ${classes["layer1"]} `}
    >
      <Layer1 data-speed="-5" />
    </motion.div>
  )
}

// Main Parent
const ParallaxObjects = props => {
  const bgAnimate = useAnimation()

  return (
    <motion.div
      className={classes["frameGroup"]}
      onMouseMove={event => {
        let offsetX = event.clientX - window.innerWidth / 2
        let offsetY = event.clientY - window.innerWidth / 2
        bgAnimate.start({ x: offsetX / 8, y: offsetY / 8 })

        // console.log(offsetX, offsetY)
      }}
    >
      <Frame1 animate={bgAnimate} />
      {/* <Layer2
        className={`${classes["layer"]} ${classes["layer2"]} `}
        data-speed="5"
      />
      <Layer3
        className={`${classes["layer"]} ${classes["layer3"]} `}
        data-speed="2"
      />
      <Layer4
        className={`${classes["layer"]} ${classes["layer4"]} `}
        data-speed="6"
      />
      <Layer5
        className={`${classes["layer"]} ${classes["layer5"]} `}
        data-speed="8"
      />
      <Layer6
        className={`${classes["layer"]} ${classes["layer6"]} `}
        data-speed="-2"
      />
      <Layer7
        className={`${classes["layer"]} ${classes["layer6"]} `}
        data-speed="4"
      />
      <Layer8
        className={`${classes["layer"]} ${classes["layer7"]} `}
        data-speed="9"
      />
      <Layer9
        className={`${classes["layer"]} ${classes["layer8"]} `}
        data-speed="6"
      /> */}

      {props.children}
    </motion.div>
  )
}

// // import { Frame, useAnimation } from "framer"

// // Children
// const FrameBG = props => {
//   return <Frame className={classes["frameBG"]}></Frame>
// }

// // Main Parent
// const ParallaxObjects = () => {
//   return (
//     <div className={classes["frameGroup"]}>
//       <FrameBG />
//     </div>
//   )
// }

export default ParallaxObjects

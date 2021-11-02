import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

// import React, { useEffect, useState } from "react"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import { motion, useAnimation } from "framer-motion"

// import * as classes from "../components/UI/404.module.scss"

// // BG Layers
// import MoonLayer from "../assets/svg-layers/moon.svg"
// import Borealis from "../assets/svg-layers/borealis.svg"

// const Moon = props => {
//   return (
//     <motion.div animate={props.animate} className={`${classes["moon"]}`}>
//       <MoonLayer />
//     </motion.div>
//   )
// }

// // Group the parallax objects
// const ParallaxGroup = props => {
//   return <>{props.children}</>
// }

// // Main Container
// const ParallaxObjects = props => {
//   const [width, setWidth] = useState(window.innerWidth)

//   const [layers, setLayers] = useState(true)

//   const updateWidthAndHeight = () => {
//     setWidth(window.innerWidth)
//   }

//   useEffect(() => {
//     window.addEventListener("resize", updateWidthAndHeight)
//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", updateWidthAndHeight)
//       setLayers(!layers)
//     }
//   }, [width, layers])
//   const moon = useAnimation()

//   return (
//     <motion.div
//       className={classes["frameGroup"]}
//       onMouseMove={event => {
//         let offsetX = event.clientX - window.innerWidth / 2
//         let offsetY = event.clientY - window.innerWidth / 2
//         moon.start({ x: offsetX / 20, y: offsetY / -20 })
//       }}
//     >
//       <div>
//         <h2>4</h2>
//         <Moon />
//         <h2>4</h2>
//       </div>
//     </motion.div>
//   )
// }

// // 404 Details
// const NotFoundDetails = () => {
//   return (
//     <div className={classes["absolute"]}>
//       <h2 className={classes["heading"]}>You're Lost in Space</h2>
//       <p className={classes["description"]}>
//         The Page you're looking for is now beyond our reach
//       </p>
//     </div>
//   )
// }

// const NotFoundPage = props => {
//   return (
//     <Layout>
//       <Seo title="404: Not found" />
//       <motion.div className={classes["relativeContainer"]}>
//         <ParallaxObjects>
//           <NotFoundDetails />
//         </ParallaxObjects>
//       </motion.div>
//     </Layout>
//   )
// }

// export default NotFoundPage

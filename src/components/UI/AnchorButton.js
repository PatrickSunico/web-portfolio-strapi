import React from "react"
import * as classes from "./Button.module.scss"

import { motion } from "framer-motion"

const AnchorButton = props => {
  const localFile = props.local.publicURL

  return (
    <motion.a
      target="_blank"
      rel="noopener"
      href={`${localFile}`}
      whileHover={{
        opacity: 1,
        scale: 4,
        transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
      }}
      className={classes[props.classNames]}
    >
      {props.children}
    </motion.a>
  )
}

export default AnchorButton

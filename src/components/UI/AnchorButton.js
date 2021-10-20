import React from "react"
import * as classes from "./Button.module.scss"

import { Link } from "gatsby"
import { motion } from "framer-motion"

const AnchorButton = props => {
  // const resume = props.resume
  const localFile = props.local.publicURL

  return (
    <motion.a
      target="_blank"
      rel="noopener"
      href={`${localFile}`}
      className={classes[props.classNames]}
      variants={props.variants}
    >
      {props.children}
    </motion.a>
  )
}

export default AnchorButton

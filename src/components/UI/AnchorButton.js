import React from "react"
import * as classes from "./Button.module.scss"

import { Link } from "gatsby"

const AnchorButton = props => {
  return (
    <Link to="/" className={classes[props.classNames]}>
      {props.children}
    </Link>
  )
}

export default AnchorButton

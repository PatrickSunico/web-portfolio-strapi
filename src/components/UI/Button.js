import React from "react"
import * as classes from "./Button.module.scss"

const Button = props => {
  return (
    <button
      className={classes[props.classNames]}
      type={props.type ? props.type : "button"}
      disabled={props.type === "submit" && props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button

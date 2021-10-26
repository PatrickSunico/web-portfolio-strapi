import React from "react"
import * as classes from "./Message.module.scss"
import { FaCheckCircle } from "react-icons/fa"

const Message = props => {
  return (
    <>
      <div
        className={`${classes["alert"]} ${
          props.fadeState ? classes["fadeIn"] : classes["fadeOut"]
        }`}
      >
        <FaCheckCircle />
        {props.children}
      </div>
    </>
  )
}

export default Message

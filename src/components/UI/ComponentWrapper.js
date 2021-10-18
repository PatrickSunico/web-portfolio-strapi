import React from "react"

const ComponentWrapper = ({ children }) => {
  return (
    <div id="componentWrapper">
      <div className="blurredArea">{children}</div>
    </div>
  )
}

export default ComponentWrapper

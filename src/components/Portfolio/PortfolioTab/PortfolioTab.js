import React from "react"

import PortfolioCard from "../PortfolioCard/PortfolioCard"
import * as classes from "./PortfolioTab.module.scss"

const PortfolioTab = props => {
  console.log(props)
  const { contents } = props

  console.log(contents)
  return (
    <div className={classes["portfolioContentWrapper"]}>
      {contents.map(content => (
        <PortfolioCard key={content.node.strapiId} content={content.node} />
      ))}
      {/* {contents.map(content => (
        <PortfolioCard key={content.id} content={content} />
      ))} */}
    </div>
  )
}

export default PortfolioTab

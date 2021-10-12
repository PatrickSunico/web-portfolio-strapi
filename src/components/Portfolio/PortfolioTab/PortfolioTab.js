import React from "react"

import PortfolioCard from "../PortfolioCard/PortfolioCard"
import * as classes from "./PortfolioTab.module.scss"

const PortfolioTab = props => {
  const { contents } = props

  console.log(contents)
  return (
    <div className={classes["portfolioContentWrapper"]}>
      {contents.map(content => (
        <PortfolioCard key={content.node.strapiId} content={content.node} />
      ))}
    </div>
  )
}

export default PortfolioTab

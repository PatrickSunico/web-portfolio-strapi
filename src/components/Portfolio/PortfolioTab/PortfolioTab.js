import React from "react"

import PortfolioCard from "../PortfolioCard/PortfolioCard"
import * as classes from "./PortfolioTab.module.scss"

const PortfolioTab = props => {
  const { contents } = props

  return (
    <div className={classes["portfolioContentWrapper"]}>
      {contents.map(content => (
        <PortfolioCard key={content.id} content={content} />
      ))}
    </div>
  )
}

export default PortfolioTab

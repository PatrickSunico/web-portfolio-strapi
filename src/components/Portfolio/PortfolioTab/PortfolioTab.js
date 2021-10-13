import React from "react"

import PortfolioCard from "../PortfolioCard/PortfolioCard"
import * as classes from "./PortfolioTab.module.scss"
import Github from "../../../assets/icons/GithubLink.svg"

const PortfolioTab = props => {
  const { contents } = props

  return (
    <div className={classes["portfolioContentWrapper"]}>
      {contents.map((content, index) => (
        <PortfolioCard key={index} content={content.node} />
      ))}
    </div>
  )
}

export default PortfolioTab

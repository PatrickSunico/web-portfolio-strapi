import React from "react"

import PortfolioCard from "../PortfolioCard/PortfolioCard"
import * as classes from "./PortfolioTab.module.scss"
import Github from "../../../assets/icons/GithubLink.svg"

const PortfolioTab = props => {
  const { contents } = props

  return (
    <>
      {contents.map((content, index) => (
        <PortfolioCard key={content.node.id} content={content.node} />
      ))}
    </>
  )
}

export default PortfolioTab

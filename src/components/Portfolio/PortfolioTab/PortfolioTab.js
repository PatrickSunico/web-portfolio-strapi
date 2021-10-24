import React from "react"

import PortfolioCard from "../PortfolioCard/PortfolioCard"

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

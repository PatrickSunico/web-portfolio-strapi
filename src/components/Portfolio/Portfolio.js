import React, { useState, useMemo } from "react"
import * as classes from "./Portfolio.module.scss"

// Components
import PortfolioMenu from "./PortfolioMenu/PortfolioMenu"
import PortfolioTab from "./PortfolioTab/PortfolioTab"

// Data
import { content, menu } from "../../data/portfolioData"

const Portfolio = () => {
  const [activeMenuId, setActiveMenuId] = useState(content[0].id)

  const activeTab = useMemo(
    () => menu.find(menu => menu.id === activeMenuId),
    [activeMenuId, menu]
  )

  const filteredContent = content.filter(
    project => project.type === activeTab.type
  )

  return (
    <div className={classes["portfolioParent"]}>
      <div className="sectionContainer">
        <div className="container flex-direction-column">
          <div className="sectionHeaderLeft">
            <h2>Portfolio</h2>
          </div>

          {/* Tabs Here */}
          <PortfolioMenu
            tabs={menu}
            onNavClick={setActiveMenuId}
            activeMenuId={activeMenuId}
          />

          {/* Tab Content */}
          <PortfolioTab tab={activeTab} contents={filteredContent} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio

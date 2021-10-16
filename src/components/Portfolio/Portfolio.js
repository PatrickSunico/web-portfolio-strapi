import React, { useState, useMemo } from "react"
import * as classes from "./Portfolio.module.scss"

// Components
import PortfolioMenu from "./PortfolioMenu/PortfolioMenu"
import PortfolioTab from "./PortfolioTab/PortfolioTab"

// Data
import { menu } from "../../data/portfolioData"
import { usePortfolioQuery } from "../../hooks/usePortfolioQuery"

const Portfolio = () => {
  const projectQuery = usePortfolioQuery()
  const projectsData = projectQuery
  const projectsList = projectsData.project_cards.edges

  const [activeMenuType, setActiveMenuType] = useState(menu[0].type)

  const activeTab = useMemo(
    () => menu.find(menu => menu.type === activeMenuType),
    [activeMenuType, menu]
  )
  const projects = projectsList.filter(
    project => project.node.projectType === activeMenuType
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
            onNavClick={setActiveMenuType}
            activeMenuType={activeMenuType}
          />

          {/* Tab Content */}
          <PortfolioTab tab={activeTab} contents={projects} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio

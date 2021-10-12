import React, { useState, useMemo } from "react"
import * as classes from "./Portfolio.module.scss"

// Components
import PortfolioMenu from "./PortfolioMenu/PortfolioMenu"
import PortfolioTab from "./PortfolioTab/PortfolioTab"

// Data
// import { content, menu } from "../../data/portfolioData"
// // import { useProjectQuery } from "../../hooks/useProjectQuery"

// import { useProjectQuery } from "../../hooks/useProjectQuery"

const Portfolio = () => {
  // const projectQuery = useProjectQuery()
  // const projects = projectQuery.project_cards.edges

  // const [activeMenuType, setActiveMenuType] = useState(menu[0].type)

  // const activeTab = useMemo(
  //   () => menu.find(menu => menu.type === activeMenuType),
  //   [activeMenuType, menu]
  // )

  // const filterProjects = projects.filter(
  //   project => project.node.projectType === activeMenuType
  // )

  return (
    <div className={classes["portfolioParent"]}>
      <div className="sectionContainer">
        <div className="container flex-direction-column">
          <div className="sectionHeaderLeft">
            <h2>Portfolio</h2>
          </div>

          {/* Tabs Here */}
          {/* <PortfolioMenu
            tabs={menu}
            onNavClick={setActiveMenuType}
            activeMenuType={activeMenuType}
          /> */}

          {/* Tab Content */}
          {/* <PortfolioTab tab={activeTab} contents={filterProjects} /> */}
        </div>
      </div>
    </div>
  )
}

export default Portfolio

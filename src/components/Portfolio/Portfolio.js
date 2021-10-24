import React, { useState, useMemo } from "react"
import Fade from "react-reveal/Fade"

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
    [activeMenuType]
  )

  const handleKeyPress = (event, data) => {
    if (event.key === "Enter" || event.charCode === 13) {
      setActiveMenuType(data)
    }
  }

  const projects = projectsList.filter(
    project => project.node.projectType === activeMenuType
  )

  return (
    <section id="portfolio">
      <div className="sectionContainer">
        <div className="container flex-direction-column">
          <Fade big>
            <div className="sectionHeaderLeft">
              <h2>Portfolio</h2>
            </div>

            {/* Tabs Here */}
            <PortfolioMenu
              tabs={menu}
              onNavClick={setActiveMenuType}
              onEnter={handleKeyPress}
              activeMenuType={activeMenuType}
            />
            {/* Tab Content */}
            <PortfolioTab tab={activeTab} contents={projects} />
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

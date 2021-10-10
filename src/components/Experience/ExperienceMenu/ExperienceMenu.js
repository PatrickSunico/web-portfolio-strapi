import React from "react"
import * as tabStyles from "../../UI/Tabs.module.scss"

const ExperienceMenu = props => {
  const companies = props.tabs

  return (
    <ul className={tabStyles["tabsNav"]}>
      {companies.map(({ node }, index) => (
        <li key={node.strapiId}>
          <a
            className={`${tabStyles.tabsLink} ${
              props.activeTabId === node.strapiId && tabStyles.active
            }`}
            onClick={() => props.onNavClick(node.strapiId)}
          >
            {node.company}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ExperienceMenu

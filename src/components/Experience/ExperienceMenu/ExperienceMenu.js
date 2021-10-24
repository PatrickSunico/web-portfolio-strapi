import React from "react"
import * as tabStyles from "../../UI/Tabs.module.scss"

import Fade from "react-reveal/Fade"

const ExperienceMenu = props => {
  const companies = props.tabs

  return (
    <Fade big>
      <ul className={tabStyles["tabsNav"]}>
        {companies.map(({ node }, index) => (
          <li key={node.strapiId}>
            <div
              className={`${tabStyles.tabsLink} ${
                props.activeTabId === node.strapiId ? tabStyles.active : ""
              }`}
              onClick={() => props.onNavClick(node.strapiId)}
              role="button"
              tabIndex={index}
              aria-hidden="true"
            >
              {node.company}
            </div>
          </li>
        ))}
      </ul>
    </Fade>
  )
}

export default ExperienceMenu

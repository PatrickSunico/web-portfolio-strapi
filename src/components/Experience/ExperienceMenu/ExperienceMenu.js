import React from "react"
import * as tabStyles from "../../UI/Tabs.module.scss"

const ExperienceMenu = props => {
  return (
    <ul className={tabStyles["tabsNav"]}>
      {props.tabs.map((item, index) => (
        <li key={index}>
          <a
            className={`${tabStyles.tabsLink} ${
              props.activeTabId === item.id && tabStyles.active
            }`}
            onClick={() => props.onNavClick(item.id)}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ExperienceMenu

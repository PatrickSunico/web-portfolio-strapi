import React from "react"

import * as tabStyles from "../../UI/Tabs.module.scss"

// List
const PortfolioMenu = props => {
  return (
    <>
      <ul className={tabStyles["tabsNavPortfolio"]}>
        {props.tabs.map((item, index) => (
          <li key={index} className={tabStyles["tabsItem"]}>
            <a
              className={`${tabStyles.tabsLinkPortfolio} ${
                props.activeMenuId === item.id && tabStyles.active
              }`}
              onClick={() => props.onNavClick(item.id)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
export default PortfolioMenu

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
                props.activeMenuType === item.type && tabStyles.active
              }`}
              onClick={() => props.onNavClick(item.type)}
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

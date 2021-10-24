import React from "react"

import * as tabStyles from "../../UI/Tabs.module.scss"

// List
const PortfolioMenu = props => {
  return (
    <>
      <ul className={tabStyles["tabsNavPortfolio"]}>
        {props.tabs.map((item, index) => (
          <li key={index}>
            <div
              className={`${tabStyles.tabsLinkPortfolio} ${
                props.activeMenuType === item.type && tabStyles.active
              }`}
              onClick={() => props.onNavClick(item.type)}
              aria-hidden="true"
              role="button"
              tabIndex={index}
            >
              {item.title}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
export default PortfolioMenu

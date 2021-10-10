import React from "react"
import * as tabStyles from "../../UI/Tabs.module.scss"
import * as classes from "./ExperienceTab.module.scss"

// Content
const ExperienceTab = props => {
  return (
    <div className={tabStyles["tabsContent"]}>
      <div className={classes["companyYearPositionBlock"]}>
        <div className={classes["yearPositionBlock"]}>
          <h3>{props.tab.name}</h3>
          <span className={classes["year"]}>
            <p>{props.tab.year}</p>
            <p>{props.tab.country}</p>
          </span>
        </div>
        <h4>{props.tab.position}</h4>
      </div>

      <div className={classes["workHistoryContainer"]}>
        <div className={`${classes["workContainer"]} container`}>
          <ul className="row">
            {props.tab.experience.map((exp, index) => (
              <li className="col-xl-6" key={index}>
                <p>{exp.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceTab

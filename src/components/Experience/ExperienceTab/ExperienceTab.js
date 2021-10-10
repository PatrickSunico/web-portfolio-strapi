import React from "react"
import * as tabStyles from "../../UI/Tabs.module.scss"
import * as classes from "./ExperienceTab.module.scss"

import moment from "moment"

// Content
const ExperienceTab = props => {
  const { position, company, country, description, start_date, end_date } =
    props.tab.node

  return (
    <div className={tabStyles["tabsContent"]}>
      <div className={classes["companyYearPositionBlock"]}>
        <div className={classes["yearPositionBlock"]}>
          <h3>{company}</h3>
          <span className={classes["year"]}>
            <p>
              {moment(start_date).format("MMMM YYYY")} -{" "}
              {moment(end_date).format("MMMM YYYY")}
            </p>
            <p>{country}</p>
          </span>
        </div>
        <h4>{position}</h4>
      </div>

      <div className={classes["workHistoryContainer"]}>
        <div className={`${classes["workContainer"]} container`}>
          <ul className="row">
            {description.map(({ description, id }) => (
              <li className="col-xl-6" key={id}>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceTab

import React, { useState, useMemo } from "react"
import * as tabStyles from "../UI/Tabs.module.scss"
import * as classes from "./Experience.module.scss"
import { workHistory } from "../../data/workHistory"

// Components
import ExperienceTab from "./ExperienceTab/ExperienceTab"
import ExperienceMenu from "./ExperienceMenu/ExperienceMenu"

import { useExperienceQuery } from "../../hooks/useExperienceQuery"
// Parent
const Experience = () => {
  const experienceQuery = useExperienceQuery()
  const experienceList = experienceQuery.experiences.edges

  // Companies
  const companyQuery = useExperienceQuery()
  const companies = companyQuery.companies.edges
  console.log(companies)

  const [activeTabId, setActiveTabId] = useState(workHistory[0].id) //props.workArray[0].id
  const activeTab = useMemo(
    () => workHistory.find(tab => tab.id === activeTabId),
    [activeTabId, workHistory]
  )

  return (
    <div className={`marginBottom`}>
      <div className="sectionContainer">
        <div className="container flex-direction-column">
          <div className="sectionHeaderRight">
            <h2>Experience</h2>
          </div>

          <ExperienceMenu
            tabs={workHistory}
            onNavClick={setActiveTabId}
            activeTabId={activeTabId}
          />
          <ExperienceTab tab={activeTab} />
        </div>
      </div>
    </div>
  )
}

export default Experience

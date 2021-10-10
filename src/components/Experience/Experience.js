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
  // Experience
  const experienceQuery = useExperienceQuery()
  const experienceList = experienceQuery.experiences.edges

  const companiesByYear = experienceList.sort(
    (a, b) => new Date(b.node.start_date) - new Date(a.node.start_date)
  )

  const [activeTabId, setActiveTabId] = useState(
    companiesByYear[0].node.strapiId
  ) //props.workArray[0].id
  const activeTab = useMemo(
    () => experienceList.find(tab => tab.node.strapiId === activeTabId),
    [activeTabId, experienceList]
  )

  return (
    <div className={`marginBottom`}>
      <div className="sectionContainer">
        <div className="container flex-direction-column">
          <div className="sectionHeaderRight">
            <h2>Experience</h2>
          </div>

          <ExperienceMenu
            tabs={companiesByYear}
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

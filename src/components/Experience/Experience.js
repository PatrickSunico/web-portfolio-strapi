import React, { useState, useMemo } from "react"
import Fade from "react-reveal/Fade"

// Styles
import * as classes from "./Experience.module.scss"
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
    <section id="experience">
      <div className={`marginBottom ${classes["experienceContainer"]}`}>
        <div className="sectionContainer">
          <div className="container flex-direction-column">
            <Fade big>
              <div className="sectionHeaderRight">
                <h2>Experience</h2>
              </div>
            </Fade>

            <ExperienceMenu
              tabs={companiesByYear}
              onNavClick={setActiveTabId}
              activeTabId={activeTabId}
            />
            <Fade big>
              <ExperienceTab tab={activeTab} />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

import React from "react"
// Components
import ProjectCard from "./ProjectCard/ProjectCard"

// Styles
import * as classes from "./ProjectList.module.scss"

const ProjectList = () => {
  return (
    <div className={`${classes["projectListParent"]} marginTop marginBottom`}>
      <div className="sectionContainer">
        <div className="container flex-direction-column">
          <div className="sectionHeaderRight">
            <h2>Other Projects</h2>
          </div>

          <div className={classes["projectsGrid"]}>
            <ProjectCard>Card</ProjectCard>
            <ProjectCard>Card</ProjectCard>
            <ProjectCard>Card</ProjectCard>
            <ProjectCard>Card</ProjectCard>
            <ProjectCard>Card</ProjectCard>
            <ProjectCard>Card</ProjectCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectList

import React from "react"
// Components
import ProjectCard from "./ProjectCard/ProjectCard"

// Styles
import * as classes from "./ProjectList.module.scss"

// Data
import { useOtherProjectQuery } from "../../hooks/useOtherProjectsQuery"

const ProjectList = () => {
  const otherProjectsQuery = useOtherProjectQuery()
  const otherProjectsData = otherProjectsQuery.other_projects.nodes

  return (
    <div className={`marginTop marginBottom`}>
      <div className="sectionContainer">
        <div className="container flex-direction-column">
          <div className="sectionHeaderRight">
            <h2>Other Projects</h2>
          </div>

          <div className={classes["projectsGrid"]}>
            {otherProjectsData.map((content, index) => (
              <ProjectCard key={content.strapiId} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectList

import React from "react"
import * as classes from "./ProjectCard.module.scss"

import GithubLink from "../../../assets/icons/GithubLink.svg"
import BehanceLink from "../../../assets/icons/BehanceLink.svg"
import WebLink from "../../../assets/icons/WebLink.svg"

const ProjectCard = props => {
  const { ProjectCategory, ProjectTitle, ProjectTools, SocialLink, strapiId } =
    props.content
  const stringifyId = strapiId.toString()
  const padStart = stringifyId.padStart(2, "0")

  return (
    <div className={classes["projectCard"]}>
      <div className={classes["projectDetails"]}>
        <div className={classes["projectCategories"]}>
          {ProjectCategory.map(({ projectCategory, id }) => (
            <p key={id}> {projectCategory} </p>
          ))}
        </div>
        <h5> {ProjectTitle} </h5>

        <ul className={classes["projectLinks"]}>
          {SocialLink.map(
            ({ availableLinks, socialLink, id }) =>
              (availableLinks === "Behance" && (
                <li key={id}>
                  <a href={socialLink} target="_blank">
                    <BehanceLink />
                  </a>
                </li>
              )) ||
              (availableLinks === "Github" && (
                <li key={id}>
                  <a href={socialLink} target="_blank">
                    <GithubLink />
                  </a>
                </li>
              )) ||
              (availableLinks === "Web" && (
                <li key={id}>
                  <a href={socialLink} target="_blank">
                    <WebLink />
                  </a>
                </li>
              ))
          )}
        </ul>
      </div>

      <div className={classes["projectNumber"]}>{padStart}</div>
    </div>
  )
}

export default ProjectCard

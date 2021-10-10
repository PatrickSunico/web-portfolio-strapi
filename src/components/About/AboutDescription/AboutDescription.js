import React from "react"
import * as classes from "./AboutDescription.module.scss"
// ../../images/Portrait.png
// import portrait from ".."
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { DesignSkills, DevelopmentSkills } from "../../../data/SkillsData"

// Data
import { useAboutQuery } from "../../../hooks/useAboutQuery"

const Description = () => {
  // About Section Query
  const aboutQuery = useAboutQuery()
  const { about } = aboutQuery

  // gets the Portrait Image
  const portrait = getImage(aboutQuery.portrait)

  // Skills
  const renderDesign = about.design_skills.map(({ skill, id }) => (
    <li className="" key={id}>
      {skill}
    </li>
  ))
  const renderDevelopment = about.development_skills.map(({ skill, id }) => (
    <li className="" key={id}>
      {skill}
    </li>
  ))
  return (
    <>
      <div className="sectionHeaderLeft">
        <h2>About Me</h2>
      </div>
      <div className={`row ${classes["descriptionContainer"]}`}>
        <div
          className={`${classes["portraitWrapper"]} col col-sm-8 col-md-4 col-lg-3 col-xl-3`}
        >
          <GatsbyImage
            image={portrait}
            alt="Patrick Portrait"
            className={classes["image"]}
          />
        </div>
        <div
          className={`${classes["descriptionWrapper"]} col col-sm-12 col-md-8 col-lg-9 col-xl-9`}
        >
          {/* Description */}
          <div className={`${classes["description"]}`}>
            <p>{about.about_description} </p>
          </div>

          {/* Skills */}
          <div className={`${classes["skills"]} row mt-30`}>
            <div className="col col-xs-12 col-sm-6 col-md-5 col-xl-3">
              <h3>Design</h3>
              <ul>{renderDesign}</ul>
            </div>

            <div className="col col-xs-12 col-sm-6 col-md-7 col-lg-4 col-xl-3">
              <h3>Development</h3>
              <ul className={classes["developmentColumn"]}>
                {renderDevelopment}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Description

import React from "react"
import * as classes from "./AboutDescription.module.scss"

import DOMPurify, { sanitize } from "dompurify"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Data
import { useAboutQuery } from "../../../hooks/useAboutQuery"

const Description = () => {
  // About Section Query
  const aboutQuery = useAboutQuery()
  const aboutData = aboutQuery.about.nodes[0].AboutSection
  const portrait = getImage(aboutQuery.portrait)

  // // Skills
  const renderDesign = aboutData.DesignSkills.map(({ skill, id }) => (
    <li className="" key={id}>
      {skill}
    </li>
  ))
  const renderDevelopment = aboutData.DevelopmentSkills.map(({ skill, id }) => (
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
          <div
            className={`${classes["description"]}`}
            dangerouslySetInnerHTML={{
              __html: aboutData.AboutDescription,
            }}
          />

          {/* Skills */}
          <div className={`${classes["skills"]} row mt-30`}>
            <div className="col col-xs-12 col-sm-6 col-md-5 col-xl-3">
              <h3>Design</h3>
              <ul>{renderDesign}</ul>
            </div>

            <div className="col col-xs-12 col-sm-6 col-md-7 col-lg-4 col-xl-3">
              <h3>Development</h3>
              <ul className="">{renderDevelopment}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Description

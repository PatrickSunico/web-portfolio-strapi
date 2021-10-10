import React from "react"
import * as classes from "./AboutDescription.module.scss"
// ../../images/Portrait.png
// import portrait from ".."
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { DesignSkills, DevelopmentSkills } from "../../../data/SkillsData"

// Data
import { useAboutQuery } from "../../../hooks/useAboutQuery"

const Description = () => {
  const renderDesign = DesignSkills.map(({ skills }, index) => (
    <li className="" key={index}>
      {skills}
    </li>
  ))
  const renderDevelopment = DevelopmentSkills.map(({ skills }, index) => (
    <li className="" key={index}>
      {skills}
    </li>
  ))

  // About Section Query
  const aboutQuery = useAboutQuery()
  const portrait = getImage(aboutQuery.portrait)
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
            <p>
              I'm a dreamer and a web aficionado, I like to implement ideas into
              an actual product and build up on that idea to make it more robust
              and scalable when it comes to websites,
              <br /> <br />
              Here you can see a selection of my best web design wireframes not
              just websites, but right brain stuffs too such as logo designs and
              many more
              <br /> <br />
              Technologies I’ve been working with recently
            </p>
          </div>

          {/* Skills */}
          <div className={`${classes["skills"]} row mt-30`}>
            <div className="col col-xs-12 col-sm-6 col-md-5 col-xl-3">
              <h3>Design</h3>
              <ul>{renderDesign}</ul>
            </div>

            <div className="col col-xs-12 col-sm-6 col-md-7 col-lg-4 col-xl-3">
              <h3>Development</h3>
              <ul>{renderDevelopment}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Description

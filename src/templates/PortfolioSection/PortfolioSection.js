import React from "react"
import * as classes from "./PortfolioSection.module.scss"
import * as fontStyle from "../PortfolioTemplate.module.scss"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PortfolioSection = ({ sectionField }) => {
  console.log(sectionField)

  const { headingTitle, sectionDescription, sectionImage } = sectionField[0]

  const about_image = sectionImage[0].url
  console.log(about_image)

  return (
    <div className={classes["splitSection"]}>
      <div className={classes["detailsSection"]}>
        <h3 className={fontStyle["mainHeading"]}>{headingTitle}</h3>
        <div
          className={classes["description"]}
          dangerouslySetInnerHTML={{ __html: sectionDescription }}
        />
      </div>

      <div className={classes["sideImage"]}>
        <div className={classes["aboutImageWrapper"]}>
          <img src={about_image} />
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection

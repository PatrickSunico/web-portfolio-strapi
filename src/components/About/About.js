import React from "react"
import * as classes from "./About.module.scss"
import AboutDescription from "./AboutDescription/AboutDescription"
// import Experience from "./Experience/Experience"

const About = () => {
  return (
    <div className="marginTop">
      <div className="sectionContainer">
        <div className="container flex-direction-column">
          <div className="marginTop">
            <AboutDescription />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

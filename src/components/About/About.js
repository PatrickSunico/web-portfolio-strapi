import React from "react"
import AboutDescription from "./AboutDescription/AboutDescription"

const About = () => {
  return (
    <div id="about">
      <div className="marginTop">
        <div className="sectionContainer">
          <div className="container flex-direction-column">
            <div className="marginTop">
              <AboutDescription />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

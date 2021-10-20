import React from "react"
import { Link } from "gatsby"

import LinkedIn from "../../../assets/icons/LinkedInLink.svg"
import Behance from "../../../assets/icons/BehanceLink.svg"
import Github from "../../../assets/icons/GithubLink.svg"

import * as classes from "./ContactDetails.module.scss"

const ContactDetails = () => {
  return (
    <div className={classes["gridDetails"]}>
      <div className={classes["details"]}>
        <span>Email</span>
        <a href="mailto:apatricksunico@gmail.com">apatricksunico@gmail.com</a>
      </div>
      <div className={classes["details"]}>
        <span>Number</span>
        <p>(+974) 3375 9809</p>
      </div>

      <div className={classes["details"]}>
        <ul>
          <li>
            <Link to="/">
              <Github />
            </Link>
          </li>
          <li>
            <Link to="/">
              <LinkedIn />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Behance />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactDetails

import React from "react"

import LinkedIn from "../../../assets/icons/LinkedInLink.svg"
import Behance from "../../../assets/icons/BehanceLink.svg"
import Github from "../../../assets/icons/GithubLink.svg"

import * as classes from "./ContactDetails.module.scss"

import { useHeroDataQuery } from "../../../hooks/useHeroDataQuery"

// const socialLinks = heroQuery.socialLinks.nodes[0].HeroSection

const ContactDetails = () => {
  const heroQuery = useHeroDataQuery()
  const socialLinks = heroQuery.socialLinks.nodes[0].HeroSection

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
            <a href={socialLinks.github_link} rel="noopener" targe="_blank">
              <Github />
            </a>
          </li>
          <li>
            <a href={socialLinks.linkedin_link} rel="noopener" targe="_blank">
              <LinkedIn />
            </a>
          </li>
          <li>
            <a href={socialLinks.behance_link} rel="noopener" targe="_blank">
              <Behance />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactDetails

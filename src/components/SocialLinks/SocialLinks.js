import React from "react"
import { Link } from "gatsby"
import * as classes from "./SocialLinks.module.scss"

// Icons
import LinkedIn from "../../assets/icons/LinkedIn.svg"
import Behance from "../../assets/icons/Behance.svg"
import Github from "../../assets/icons/Github.svg"

const SocialLinks = () => {
  return (
    <div className={`${classes["socialLinksWrapper"]}`}>
      <ul className={classes["socialList"]}>
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
  )
}

export default SocialLinks

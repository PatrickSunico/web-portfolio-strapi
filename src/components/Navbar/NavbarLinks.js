import React from "react"
import { Link } from "gatsby"

import * as classes from "./Navbar.module.scss"

// Data
import { MenuData } from "../../data/MenuData"

const NavbarLinks = () => {
  const renderLinks = MenuData.map((link, index) => (
    <li key={index}>
      <Link to="/" className={`${classes["link"]}`}>
        {link.title}
      </Link>
    </li>
  ))

  return <>{renderLinks}</>
}

export default NavbarLinks

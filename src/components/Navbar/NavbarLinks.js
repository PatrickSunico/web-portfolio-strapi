import React from "react"
import { Link } from "gatsby"

import * as classes from "./Navbar.module.scss"

// Data
import { MenuData } from "../../data/MenuData"

import { useMenuQuery } from "../../hooks/useMenuQuery"

const NavbarLinks = () => {
  const currentMenu = useMenuQuery().location.path
  const renderLinks = MenuData.map((link, index) => (
    <Link key={index} to="/" className={`${classes["link"]}`}>
      {link.title}
    </Link>
  ))

  return <>{currentMenu !== "/" ? "" : renderLinks}</>
}

export default NavbarLinks

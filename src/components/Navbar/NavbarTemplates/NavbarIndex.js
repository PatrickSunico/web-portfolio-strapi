import React, { useState, useEffect } from "react"
import Logo from "../../../assets/icons/Logo.svg"
import { Link } from "gatsby"
import * as classes from "../Navbar.module.scss"
// import NavbarLinks from "../NavbarLinks"

import { FaBars } from "react-icons/fa"

import { MenuData } from "../../../data/MenuData"

const NavbarIndex = ({ navbarActive }) => {
  const [sidebar, setSideBar] = useState(true)
  const showSideBar = () => setSideBar(!sidebar)

  const [width, setWidth] = useState("")

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    // setWidth(window.innerWidth)
    window.addEventListener("resize", updateWidthAndHeight)
    if (width < 991 && sidebar) {
      setSideBar(sidebar)
    }

    // Cleanup
    return window.addEventListener("resize", updateWidthAndHeight)
  }, [width, sidebar])

  return (
    <nav
      className={
        navbarActive
          ? `${classes["navbar"]} ${classes["active"]}`
          : `${classes["navbar"]}`
      }
    >
      <div className={`container ${classes["alignment"]}`}>
        <div className={classes["navbarPosition"]}>
          {/* Logo */}
          <div className={`${classes["logo"]}`}>
            <Link className={classes["logoLink"]} to="/">
              <Logo />
            </Link>
          </div>

          <FaBars className={`${classes["bar"]}`} onClick={showSideBar} />

          {/* Menu */}
          <div className={`${classes["menu"]}`}>
            {MenuData.map((link, index) => (
              <Link key={index} to="/" className={`${classes["link"]}`}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarIndex

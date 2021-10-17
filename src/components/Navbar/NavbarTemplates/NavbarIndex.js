import React, { useState, useEffect } from "react"
import Logo from "../../../assets/icons/Logo.svg"
import { Link } from "gatsby"
import * as classes from "../Navbar.module.scss"

import { FaBars } from "react-icons/fa"

// Components
import NavbarLinks from "../NavbarLinks"
import AnchorButton from "../../UI/AnchorButton"

const NavbarIndex = ({ navbarActive }) => {
  const [sidebar, setSideBar] = useState(true)

  const toggleHandler = () => {
    setSideBar(!sidebar)
  }

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

          <FaBars className={`${classes["bar"]}`} onClick={toggleHandler} />

          {/* DesktopMenu */}
          <div className={`${classes["desktopMenu"]}`}>
            <ul>
              <NavbarLinks />
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className={`${classes["mobileMenu"]}`}>
            {!sidebar && (
              <div className={classes["blur"]} onClick={toggleHandler} />
            )}

            <ul
              className={`${
                sidebar ? `${classes["slideIn"]}` : `${classes["slideOut"]}`
              }`}
            >
              <NavbarLinks />
              <li className={classes["resume"]}>
                <AnchorButton classNames={`button`}> My Resume</AnchorButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarIndex

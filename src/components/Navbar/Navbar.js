import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from "../../assets/icons/Logo.svg"

// Styles
import * as classes from "./Navbar.module.scss"

// Components
import NavbarLinks from "./NavbarLinks"

const Navbar = ({ siteTitle }) => {
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [navbarActive, setNavbarActive] = useState(false)
  const changeNavbarBackground = () => {
    scrollTop >= 80 ? setNavbarActive(true) : setNavbarActive(false)
  }
  useEffect(() => {
    const onScroll = e => {
      // scrollTop - element's measurement of distance to it's topmost visible content, Root element is <html> will show scrollY
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > scrollTop)
      changeNavbarBackground()
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop, changeNavbarBackground])

  return (
    <nav
      className={
        navbarActive
          ? `${classes["navbar"]} ${classes["active"]}`
          : `${classes["navbar"]}`
      }
    >
      <div className={`container ${classes["alignment"]}`}>
        <div className="row">
          {/* Logo */}
          <div className={`${classes["logo"]}`}>
            <Link className={classes["logoLink"]} to="/">
              <Logo />
            </Link>
          </div>

          {/* Menu */}
          <div className={`${classes["menu"]}`}>
            <NavbarLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar

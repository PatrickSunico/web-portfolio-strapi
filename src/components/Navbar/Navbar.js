import React, { useState } from "react"
import PropTypes from "prop-types"
import { Location } from "@reach/router"

// Components

import NavbarIndex from "./NavbarTemplates/NavbarIndex"
import NavbarPortfolio from "./NavbarTemplates/NavbarPortfolio"

const Navbar = data => {
  const [navbarActive, setNavbarActive] = useState(false)

  const changeNavbarBackground = () => {
    return window.scrollY >= 80 ? setNavbarActive(true) : setNavbarActive(false)
  }

  window.addEventListener("scroll", changeNavbarBackground)

  return (
    <>
      <Location>
        {({ location }) => {
          if (location.pathname === "/") {
            return <NavbarIndex navbarActive={navbarActive} />
          } else {
            return <NavbarPortfolio navbarActive={navbarActive} />
          }
        }}
      </Location>
    </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar

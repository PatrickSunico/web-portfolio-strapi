import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

import Layout from "../components/layout"
import ComponentWrapper from "../components/UI/ComponentWrapper"
// import ComponentWrapper from "../components/UI/ComponentWrapper"
import Seo from "../components/seo"

import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import SocialLinks from "../components/SocialLinks/SocialLinks"
import Portfolio from "../components/Portfolio/Portfolio"
import Experience from "../components/Experience/Experience"
import ProjectList from "../components/ProjectsList/ProjectList"
import ContactContainer from "../components/Contact/ContactContainer"
import AnimationLoader from "../components/AnimationLoader/AnimationLoader"

const IndexPage = props => {
  const [loading, setLoading] = useState(true)
  // Loading Animation
  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading")
  }, [loading])

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <AnimationLoader setLoading={setLoading} />
          </motion.div>
        ) : (
          <Layout navigation={props} pageTitle="Home Page">
            <Navbar navigation={props} />
            <Seo title="Home" />

            <ComponentWrapper>
              <SocialLinks />
              <Hero />
              <About />
              <Experience />
              <Portfolio />
              <ProjectList />
              <ContactContainer />
            </ComponentWrapper>
          </Layout>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default IndexPage

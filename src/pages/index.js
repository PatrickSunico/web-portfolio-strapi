import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import SocialLinks from "../components/SocialLinks/SocialLinks"
import Portfolio from "../components/Portfolio/Portfolio"
import ContactForm from "../components/ContactForm/ContactForm"
import Experience from "../components/Experience/Experience"
import ProjectList from "../components/ProjectsList/ProjectList"

const IndexPage = props => {
  console.log(props)
  return (
    <Layout pageTitle="Home Page">
      <Seo title="Home" />
      <SocialLinks />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <ProjectList />
      <ContactForm />
    </Layout>
  )
}

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}></div>
      <h1>Hi peoplekind</h1>
      <p style= {{color :`purple`,fontSize:`36px`}}>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, color:`purple` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <div/>
  </Layout>
)

export default IndexPage

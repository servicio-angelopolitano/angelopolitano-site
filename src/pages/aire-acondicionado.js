import React from "react"
import "stylesheets/main.module.less"
import Nav from "components/Nav/Nav"
import ContactForm from "components/ContactForm/ContactForm"
import classes from "stylesheets/service.module.less"
import Img from "gatsby-image"

export default ({ data }) => (
  <div className={classes.container}>
    <Nav white />
    <div className={classes.intro}>
      <h1>
        <strong>Aires Acondicionados</strong> en <strong>Puebla</strong> y area
        metropolitana.
      </h1>
      <Img fluid={data.banner.childImageSharp.fluid} />
    </div>
    <div className={classes.description}>
      <h2>
        <b>Venta, instalación, reparacion y mantenimiento</b> de climas, aires
        acondicionados y minisplits.
      </h2>
    </div>
    <ContactForm />
  </div>
)

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "sweat.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 1100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

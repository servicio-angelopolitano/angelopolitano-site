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
        <strong>Soporte Técnico de Linea Blanca</strong> a Domicilio en{" "}
        <strong>Puebla</strong> y area metropolitana.
      </h1>
      <Img fluid={data.banner.childImageSharp.fluid} />
    </div>
    <div className={classes.description}>
      <h2>
        <b>Reparación, mantenimiento</b> y <b>servicio</b> técnico profesional
        para:
      </h2>
      <div className={classes.options}>
        <span>Lava-Secadoras</span>
        <span>Lavadoras</span>
        <span>Centros de Lavado</span>
        <span>Secadoras</span>
        <span>Y más...</span>
      </div>
    </div>
    <ContactForm />
  </div>
)

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "washing-close.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 1100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

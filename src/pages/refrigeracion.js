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
        <strong>Soporte Técnico de Refrigeración a Domicilio</strong> en la
        ciudad de Puebla y area metropolitana.
      </h1>
      <Img fluid={data.banner.childImageSharp.fluid} />
    </div>
    <div className={classes.description}>
      <h2>
        <b>Instalación, mantenimiento, reparación</b> y <b>servicio</b> técnico
        profesional para:
      </h2>
      <div className={classes.options}>
        <span>Refrigeradores Inverter</span>
        <span>IceMaker</span>
        <span>Enfriadores de Agua</span>
        <span>Frigobares</span>
        <span>Duplex</span>
        <span>Congeladores</span>
        <span>Refrigeradores Comerciales</span>
        <span>Refresqueros</span>
        <span>Y más...</span>
      </div>
    </div>
    <ContactForm />
  </div>
)

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "fridge-tall.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

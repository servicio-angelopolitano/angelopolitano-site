import React, { Fragment } from "react"
import "stylesheets/main.module.less"
import Nav from "components/Nav/Nav"
import classes from "stylesheets/index.module.less"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div className={classes.container}>
    <Nav />
    <div className={classes.intro}>
      <h1>
        <strong>Reparación</strong> y mantenimiento profesional de{" "}
        <strong>línea blanca</strong> y <strong>refrigeración</strong>.
      </h1>
      <Img fluid={data.banner.childImageSharp.fluid} />
    </div>
    <div className={classes.logos}>
      <h2>
        <strong>+60</strong> años de experiencia brindando confianza y
        satisfacción.
      </h2>
      <p>Trabajamos con las marcas principales del mercado.</p>
        <Img fluid={data.logos.childImageSharp.fluid} />
    </div>
    <div className={classes.servicios}>
      <div>
        <div className={classes.service}>
          <div className={classes.text}>
            <h2>
              <Link to="/refrigeracion">
                <b>Refrigeradores</b> <br />& Congeladores
              </Link>
            </h2>
          </div>
          <div className={classes.image}>
            <Img fluid={data.fridge.childImageSharp.fluid} />
          </div>
        </div>
        <div className={classes.serviceAlt}>
          <div className={classes.text}>
            <h2>
              <Link to="/lavado-secado">
                <b>Lavadoras</b> <br />& Secadoras
              </Link>
            </h2>
          </div>
          <div className={classes.image}>
            <Img fluid={data.machine.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div className={classes.service}>
        <div className={classes.text}>
          <h2>
            <Link to="/refrigeracion">
              <b>Aire</b> <br />
              Acondicionado
            </Link>
          </h2>
        </div>
        <div className={classes.image}>
          <Img fluid={data.minisplit.childImageSharp.fluid} />
        </div>
      </div>
    </div>
    <div className={classes.contact}>
      <h3>Contacto</h3>
      <p>[Forma de contacto aquí]</p>
    </div>
  </div>
)

export const query = graphql`
  fragment CompanyLogo on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 120) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    banner: file(relativePath: { eq: "washing-machines-intro.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fridge: file(relativePath: { eq: "fridge-tall.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    machine: file(relativePath: { eq: "lavadora.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    minisplit: file(relativePath: { eq: "minisplit.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logos: file(relativePath: { eq: "logos/all_logos.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

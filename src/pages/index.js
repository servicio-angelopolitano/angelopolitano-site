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
  </div>
)

export const query = graphql`
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
  }
`

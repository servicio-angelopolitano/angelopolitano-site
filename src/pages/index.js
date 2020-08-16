import React, { Fragment } from "react"
import "stylesheets/main.module.less"
import Nav from "components/Nav/Nav"
import ContactForm from "components/ContactForm/ContactForm"
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
        <b>60</b> años de experiencia brindando <b>confianza</b> y{" "}
        <b>satisfacción</b>.
      </h2>
      <p>Trabajamos con las marcas principales del mercado.</p>
      <div>
        <Img fluid={data.logo1.childImageSharp.fluid} loading="lazy" />
        <Img fluid={data.logo2.childImageSharp.fluid} loading="lazy" />
        <Img fluid={data.logo3.childImageSharp.fluid} loading="lazy" />
        <Img fluid={data.logo4.childImageSharp.fluid} loading="lazy" />
        <Img fluid={data.logo5.childImageSharp.fluid} loading="lazy" />
        <Img fluid={data.logo6.childImageSharp.fluid} loading="lazy" />
        <Img fluid={data.logo7.childImageSharp.fluid} loading="lazy" />
        <Img fluid={data.logo8.childImageSharp.fluid} loading="lazy" />
        <Img fluid={data.logo9.childImageSharp.fluid} loading="lazy" />
      </div>
    </div>
    <div className={classes.servicios}>
      <div className={classes.service}>
        <div className={classes.text}>
          <h2>
            <Link to="/refrigeracion">
              <b>Refrigeradores</b> <br />& Congeladores
            </Link>
          </h2>
          <p>
            Soporte técnico de linea blanca a domicilio en la ciudad de{" "}
            <b>Puebla</b> y área metropolitana
          </p>
          <Link to="/refrigeracion">
            <button>Detalles</button>
          </Link>
        </div>
        <Img fluid={data.fridge.childImageSharp.fluid} loading="lazy" />
      </div>
      <div className={classes.serviceAlt}>
        <div className={classes.text}>
          <h2>
            <Link to="/lavado-secado">
              <b>Lavadoras</b> <br />& Secadoras
            </Link>
          </h2>
          <p>
            Soporte técnico de linea blanca a domicilio en la ciudad de{" "}
            <b>Puebla</b> y área metropolitana
          </p>

          <Link to="/lavado-secado">
            <button>Detalles</button>
          </Link>
        </div>
        <Img fluid={data.machine.childImageSharp.fluid} loading="lazy" />
      </div>
      <div className={classes.service}>
        <div className={classes.text}>
          <h2>
            <Link to="/refrigeracion">
              <b>Aire</b> <br />
              Acondicionado
            </Link>
          </h2>
          <p>
            Soporte técnico de linea blanca a domicilio en la ciudad de{" "}
            <b>Puebla</b> y área metropolitana
          </p>
          <Link to="/refrigeracion">
            <button>Detalles</button>
          </Link>
        </div>
        <Img fluid={data.minisplit.childImageSharp.fluid} loading="lazy" />
      </div>
    </div>
    <ContactForm />
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
        fluid(quality: 100, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fridge: file(relativePath: { eq: "fridge-tall.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    machine: file(relativePath: { eq: "lavadora.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    minisplit: file(relativePath: { eq: "minisplit.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo1: file(relativePath: { eq: "logos/samsung.png" }) {
      ...CompanyLogo
    }
    logo2: file(relativePath: { eq: "logos/lg.png" }) {
      ...CompanyLogo
    }
    logo3: file(relativePath: { eq: "logos/bosch.png" }) {
      ...CompanyLogo
    }
    logo4: file(relativePath: { eq: "logos/electrolux.png" }) {
      ...CompanyLogo
    }
    logo5: file(relativePath: { eq: "logos/frigidaire.png" }) {
      ...CompanyLogo
    }
    logo6: file(relativePath: { eq: "logos/supermatic.png" }) {
      ...CompanyLogo
    }
    logo7: file(relativePath: { eq: "logos/mabe.png" }) {
      ...CompanyLogo
    }
    logo8: file(relativePath: { eq: "logos/whirpool.png" }) {
      ...CompanyLogo
    }
    logo9: file(relativePath: { eq: "logos/ge.png" }) {
      ...CompanyLogo
    }
  }
`

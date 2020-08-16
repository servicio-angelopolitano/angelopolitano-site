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
    <div className={classes.allDetails}>
      <div className={classes.detailsFloor}>
        <div className={classes.text}>
          <h3>Reparación</h3>
          <div>
            <p>
              Nuestro servicio técnico especializado consta del análisis y
              revisión de la falla, brindándole un presupuesto{" "}
              <b>competitivo</b>, <b>garantía</b> por escrito y una{" "}
              <b>atención</b> personalizada, contamos con refacciones{" "}
              <b>originales</b> para garantizar el buen funcionamiento de su
              equipo.
            </p>
          </div>
        </div>
        <Img fluid={data.reparacion.childImageSharp.fluid} />
      </div>
      <div
        className={[classes.detailsFloor, classes.detailsReversed].join(" ")}
      >
        <div className={classes.text}>
          <h3>Mantenimiento</h3>
          <div>
            <p>
              El <b>mantenimiento</b> en todos los equipos es primordial y
              recomendablemente realizarlo una vez por año, de esta manera
              aseguramos larga vida y <b>excelente funcionalidad.</b>
            </p>
          </div>
        </div>
        <Img fluid={data.mantenimiento.childImageSharp.fluid} />
      </div>
      <div className={classes.detailsFloor}>
        <div className={classes.text}>
          <h3>Instalación</h3>
          <div>
            <p>
              Contamos con tecnico <b>especializados</b> en linea blanca,
              nuestro personal esta constantemente actualizando para brindarle
              el servicio en la <b>instalacion</b> de sus equipos en base a los
              lineamientos establecidos por el fabricante, garantizando un{" "}
              <b>buen funcionamiento</b> de sus aparatos.
            </p>
          </div>
        </div>
        <Img fluid={data.instalacion.childImageSharp.fluid} />
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
    mantenimiento: file(relativePath: { eq: "lav_mantenimiento.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    reparacion: file(relativePath: { eq: "lav_reparacion.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    instalacion: file(relativePath: { eq: "lav_instalacion.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

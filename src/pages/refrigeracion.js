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
        <strong>Soporte Técnico de Refrigeración a Domicilio</strong> en Puebla
        y area metropolitana.
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
    <div className={classes.allDetails}>
      <div className={classes.detailsFloor}>
        <div className={classes.text}>
          <h3>Reparación</h3>
          <div>
            <p>
              Su refrigerador tira agua, hace escarcha, no enciende o no enfría,
              nuestro servicio técnico especializado consta del{" "}
              <b>análisis y revisión</b> de la falla, brindándole un{" "}
              <b>presupuesto competitivo</b>, garantía por escrito y una{" "}
              <b>atención</b> personalizada, contamos con
              <b>refacciones originales</b> para garantizar el buen
              funcionamiento de su equipo.
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
              El <b>mantenimiento</b> en todos los equipos de{" "}
              <b>refrigeración</b> es primordial y recomendablemente realizarlo
              una vez por año, de preferencia antes de la temporada de calor de
              esta manera aseguramos <b>larga vida</b> y{" "}
              <b>excelente funcionalidad</b>.
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
              Contamos con <b>tecnico especializados</b> en refrigeracion,
              nuestro personal esta constantemente actualizando para brindarle
              el servicio en la <b>instalación</b> de sus equipos en base a los
              lineamientos establecidos por el fabricante, garantizando un{" "}
              <b>buen funcionamiento </b>de sus aparatos.
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
    banner: file(relativePath: { eq: "fridge-tall.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mantenimiento: file(relativePath: { eq: "ref_mantenimiento.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    reparacion: file(relativePath: { eq: "ref_reparacion.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    instalacion: file(relativePath: { eq: "ref_instalacion.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

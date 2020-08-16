import React from "react"
import "stylesheets/main.module.less"
import Nav from "components/Nav/Nav"
import ContactForm from "components/ContactForm/ContactForm"
import classes from "stylesheets/service.module.less"
import Img from "gatsby-image"

export default ({ data }) => (
  <div className={classes.container}>
    <Nav
      white
      title="Servicio Angelopolitano | Aire Acondicionado"
      description="Aires Acondicionados en Puebla y area metropolitana."
      canonical="/aire-acondicionado"
    />
    <div className={classes.intro}>
      <h1>
        <strong>Aires Acondicionados</strong> en <strong>Puebla</strong> y area
        metropolitana.
      </h1>
      <Img fluid={data.banner.childImageSharp.fluid} />
    </div>
    <div className={classes.description}>
      <h2>
        <b>Venta</b>, <b>instalación</b>, <b>reparación</b> y{" "}
        <b>mantenimiento</b> de sistemas de:
      </h2>
      <div className={classes.options}>
        <span>Equipos de Piso</span>
        <span>Minisplit</span>
        <span>Equipos de Techo</span>
        <span>Aire Acondicionado de Ventana</span>
        <span>Aire Acondicionado Portátil</span>
        <span>Sistemas Centrales</span>
        <span>Y más...</span>
      </div>
    </div>
    <div className={classes.allDetails}>
      <div className={classes.detailsFloor}>
        <div className={classes.text}>
          <h3>Mantenimiento</h3>
          <div>
            <p>
              Realizamos <b>mantenimientos periodicos</b> para evitar{" "}
              <b>daños mayores</b> en sus equipos componentes importantes y
              <b>ducteria</b>.
            </p>
          </div>
        </div>
        <Img fluid={data.mantenimiento.childImageSharp.fluid} />
      </div>
      <div
        className={[classes.detailsFloor, classes.detailsReversed].join(" ")}
      >
        <div className={classes.text}>
          <h3>Instalación</h3>
          <div>
            <p>
              Todas las instalaciones que realizamos son con{" "}
              <b>mano de obra calificada</b> en base a las especificaciones de
              cada uno de los <b>fabricantes</b> para evitar <b>daños</b> a los
              equipos.
            </p>
          </div>
        </div>
        <Img fluid={data.instalacion.childImageSharp.fluid} />
      </div>
      <div className={classes.detailsFloor}>
        <div className={classes.text}>
          <h3>Reparación</h3>
          <div>
            <p>
              Si su equipo presenta algún problema como <b>tirar agua</b>, hace{" "}
              <b>ruidos extraños</b>, no prende, le marca algún <b>error</b>,{" "}
              <b>no enfria</b>
              correctamente, llamenos hacemos reparaciones con repuestos
              originales.
            </p>
          </div>
        </div>
        <Img fluid={data.reparacion.childImageSharp.fluid} />
      </div>
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
    mantenimiento: file(relativePath: { eq: "ac_mantenimiento.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    reparacion: file(relativePath: { eq: "ac_reparar.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    instalacion: file(relativePath: { eq: "minisplit.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

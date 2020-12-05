import React from "react"
import "stylesheets/main.module.less"
import Nav from "components/Nav/Nav"
import ContactForm from "components/ContactForm/ContactForm"
import classes from "stylesheets/service.module.less"
import Img from "gatsby-image"
import MovingText from "components/MovingText/MovingText"
import ACLogos from "components/Logos/ACLogos"
import WideForm from "components/WideForm/WideForm"
import phone from "images/phone-b.svg"

export default ({ data }) => (
  <div className={classes.container}>
    <Nav
      white
      title="Servicio Angelopolitano | Aire Acondicionado"
      description="Soporte Técnico, Instalación y Reparación de Aire Acondicionado a Domicilio en Aguascalientes."
      canonical="/aire-acondicionado"
    />
    <div className={classes.intro}>
      <h1>
        <strong>Soporte Técnico</strong>,<br />
        <strong>Instalación</strong> y <strong>Reparación</strong> de Aire
        Acondicionado a Domicilio en Aguascalientes.
        <div>
          <a rel="noopener noreferrer" href="tel:4493918113">
            Llámanos Ahora{" "}
            <i rel="noopener noreferrer" href="tel:4493918113">
              <img src={phone} alt="" />
              <b>449 391 8113</b>
            </i>
          </a>
        </div>
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
    <WideForm
      options={["Reparación", "Mantenimiento", "Instalación"]}
      producto="Aire Acondicionado"
    />
    <ACLogos />
    <div className={classes.allDetails}>
      <div className={classes.detailsFloor}>
        <div className={classes.text}>
          <h3>Mantenimiento</h3>
          <div>
            <p>
              Realizamos <b>mantenimientos periodicos</b> para evitar{" "}
              <b>daños mayores</b> en sus equipos componentes importantes y{" "}
              <b>ductería</b>.
            </p>
            <a href="#contacto">
              <button>Enviar Mensaje</button>
            </a>
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
            <a href="#contacto">
              <button>Enviar Mensaje</button>
            </a>
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
              <b>no enfria</b> correctamente, llamenos hacemos reparaciones con
              repuestos originales.
            </p>
            <a href="#contacto">
              <button>Enviar Mensaje</button>
            </a>
          </div>
        </div>
        <Img fluid={data.reparacion.childImageSharp.fluid} />
      </div>
    </div>
    <MovingText />
    <ContactForm />
  </div>
)

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "ac_main.jpeg" }) {
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

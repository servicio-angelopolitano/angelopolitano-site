import React from "react"
import classes from "./ContactForm.module.less"
import whatsapp from "images/whatsapp-g.svg"
import phone from "images/phone-b.svg"
import fb from "images/facebook.svg"

export default () => (
  <div className={classes.container} id="contacto">
    <h3>
      <b>Contacto</b>
    </h3>
    <h4>
      Contáctanos y solicita la visita de un técnico a tu domicilio.{" "}
      <b>Aceptamos pago con tarjeta.</b>
    </h4>
    <div className={classes.content}>
      <div className={classes.details}>
        <a rel="noopener noreferrer" href="tel:2224662012">
          222 466 2012
        </a>
        <div className={classes.buttons}>
          <a
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=+5212224662012&text=Estoy%20interesado%20en%20sus%20servicios."
            className={classes.wpButton}
            target="_blank"
          >
            <button>
              <img src={whatsapp} alt="" />
              Whatsapp
            </button>
          </a>
          <a
            rel="noopener noreferrer"
            href="tel:2224662012"
            className={classes.phoneButton}
            target="_blank"
          >
            <button>
              <img src={phone} alt="" />
              Llamar Ahora
            </button>
          </a>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Servicio-Angelopolitano-112038447281029/"
            >
              <button>
                <img src={fb} alt="" />
                Facebook
              </button>
            </a>
          </div>
        </div>
      </div>
      <form
        className={classes.form}
        data-netlify="true"
        action="/mensaje-enviado/"
        name="contacto"
        method="POST"
      >
        <label htmlFor="nombre">NOMBRE</label>
        <input id="nombre" name="nombre" required type="text" />
        <label htmlFor="correo">CORREO</label>
        <input id="correo" name="correo" required type="email" />
        <label htmlFor="telefono">TELEFONO</label>
        <input
          id="telefono"
          name="telefono"
          required
          type="number"
          step={false}
        />
        <label htmlFor="mensaje">MENSAJE</label>
        <textarea id="mensaje" name="mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
)

import React from "react"
import classes from "./ContactForm.module.less"
import whatsapp from "images/whatsapp-b.svg"
import phone from "images/phone-b.svg"

export default () => (
  <div className={classes.container} id="contacto">
    <div className={classes.content}>
      <div className={classes.details}>
        <h3>Contacto</h3>
        <a rel="noopener noreferrer" href="tel:2223507488">
          222 350 7488
        </a>
        <div className={classes.buttons}>
          <a
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=+5212223507488&text=Estoy%20interesado%20en%20sus%20servicios."
          >
            <button>
              <img src={whatsapp} alt="" />
              Whatsapp
            </button>
          </a>
          <a rel="noopener noreferrer" href="tel:2223507488">
            <button>
              <img src={phone} alt="" />
              Llamar Ahora
            </button>
          </a>
        </div>
        <p>Avenida 95 Poniente, Np. 1709. Local 3, Col. Mayorazgo. Puebla.</p>
      </div>
      <form
        className={classes.form}
        data-netlify="true"
        action="/mensaje-enviado"
        name="contact"
        method="POST"
        netlify
      >
        <label htmlFor="nombre">NOMBRE</label>
        <input name="nombre" />
        <label htmlFor="correo">CORREO</label>
        <input name="correo" />
        <label htmlFor="telefono">TELEFONO</label>
        <input name="telefono" />
        <label htmlFor="mensaje">MENSAJE</label>
        <textarea name="mensaje" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
)

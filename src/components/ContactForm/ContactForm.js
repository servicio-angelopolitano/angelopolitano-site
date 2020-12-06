import React, { useState } from "react"
import classes from "./ContactForm.module.less"
import whatsapp from "images/whatsapp-g.svg"
import phone_icon from "images/phone-b.svg"
import fb from "images/facebook.svg"
import Axios from "axios"
import { navigate } from "gatsby"

export default () => {
  let [loading, setLoading] = useState(false)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [phone, setPhone] = useState("")
  let [message, setMessage] = useState("")

  let sendForm = e => {
    e.preventDefault()
    if (!name || !phone || !message) {
      console.log("form incomplete")
      alert("Por favor llena todos los campos requeridos.")
      return
    }
    console.log("sending form")
    setLoading(true)
    let formData = new FormData()
    formData.append("name", name)
    formData.append("phone", phone)
    formData.append("email", email)
    formData.append("message", message)
    Axios({
      method: "post",
      url: "https://www.servicioangelopolitano.com/contact.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(result => {
        console.log("result",result)
        if (result.data === "success") {
          navigate("/mensaje-enviado/")
        } else throw result
      })
      .catch(error => {
        setLoading(false)
        alert(
          "Hubo un error enviando la información, por favor contáctanos via teléfonica al 449 391 8113."
        )
        console.log("Error 2:", error)
      })
  }

  return (
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
          <a rel="noopener noreferrer" href="tel:4493918113">
            449 391 8113
          </a>
          <div className={classes.buttons}>
            <a
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=+5214493918113&text=Estoy%20interesado%20en%20sus%20servicios."
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
              href="tel:4493918113"
              className={classes.phoneButton}
              target="_blank"
            >
              <button>
                <img src={phone_icon} alt="" />
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
          onSubmit={sendForm}
          name="contacto"
        >
          <label htmlFor="nombre">NOMBRE *</label>
          <input
            id="nombre"
            name="nombre"
            required
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="correo">CORREO</label>
          <input
            id="correo"
            name="correo"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="telefono">TELEFONO *</label>
          <input
            id="telefono"
            name="telefono"
            required
            type="number"
            onChange={e => setPhone(e.target.value)}
          />
          <label htmlFor="mensaje">MENSAJE *</label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            onChange={e => setMessage(e.target.value)}
          />
          <input type="hidden" name="form-name" value="contacto" />
          <button type="submit" onClick={sendForm} disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  )
}

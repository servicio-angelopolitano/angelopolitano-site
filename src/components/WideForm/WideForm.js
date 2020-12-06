import React, { useState } from "react"
import classes from "./WideForm.module.less"
import Axios from "axios"
import { navigate } from "gatsby"

export default ({ options, producto }) => {
  let [loading, setLoading] = useState(false)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [phone, setPhone] = useState("")
  let [service, setService] = useState("")

  let sendForm = e => {
    e.preventDefault()
    if (!name || !phone) {
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
    formData.append("service", service)
    formData.append("product", producto)
    Axios({
      method: "post",
      url: "https://www.servicioangelopolitano.com/contact.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(result => {
        console.log("result", result)
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
    <div className={classes.container}>
      <div className={classes.content}>
        <h2>
          Agenda ahora mismo la visita de un técnico y recibe un{" "}
          <b>10% de descuento.</b>
        </h2>
        <form
          className={classes.form}
          name="forma-descuento"
          onSubmit={sendForm}
        >
          <div className={classes.inputs}>
            <div>
              <label htmlFor="nombre">NOMBRE</label>
              <input
                id="nombre"
                name="nombre"
                required
                type="text"
                placeholder="Nombre"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="correo">CORREO</label>
              <input
                id="correo"
                name="correo"
                required
                type="email"
                placeholder="Correo"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="telefono">TELÉFONO</label>
              <input
                id="telefono"
                name="telefono"
                required
                type="number"
                placeholder="Teléfono"
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="servicio">SERVICIO</label>
              <select
                id="servicio"
                name="servicio"
                placeholder="Servicio"
                defaultValue="Ninguna Opcion Seleccionada"
                onChange={e => setService(e.target.value)}
              >
                <option value="Ninguna Opcion Seleccionada" disabled>
                  Selecciona un Servicio
                </option>
                {options.map((it, index) => (
                  <option value={it} key={index}>
                    {it}
                  </option>
                ))}
              </select>{" "}
            </div>
          </div>
          <div className={classes.hidden}>
            <label htmlFor="producto">PRODUCTO</label>
            <input
              id="producto"
              name="producto"
              type="input"
              value={producto}
            />
            <input type="hidden" name="form-name" value="forma-descuento" />
          </div>
          <button type="submit" onClick={sendForm} disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  )
}

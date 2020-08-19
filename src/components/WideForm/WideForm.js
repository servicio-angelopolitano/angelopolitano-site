import React from "react"
import classes from "./WideForm.module.less"

export default ({ options, producto }) => (
  <div className={classes.container}>
    <div className={classes.content}>
      <h2>
        Agenda ahora mismo la visita de un técnico y recibe un{" "}
        <b>10% de descuento.</b>
      </h2>
      <form
        className={classes.form}
        data-netlify="true"
        action="/mensaje-enviado/"
        name="forma-descuento"
        method="POST"
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
              step={false}
            />
          </div>
          <div>
            <label htmlFor="servicio">SERVICIO</label>
            <select
              id="servicio"
              name="servicio"
              placeholder="Servicio"
              defaultValue={null}
            >
              <option value={null} disabled>
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
          <input id="producto" name="producto" type="input" value={producto} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
)

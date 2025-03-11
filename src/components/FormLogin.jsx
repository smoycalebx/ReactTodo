import React from 'react'
import '../style/Login.css'

function FormLogin() {
  return (
    <div className='divContainer'>
      <h1>Login</h1>
      <p>Ingresa tus datos aquí</p>
      <label htmlFor="">Nombre</label>
      <input type="text" />
      <label htmlFor="">Apellido</label>
      <input type="text" />
      <label htmlFor="">Contraseña</label>
      <input type="text" />
      
    </div>
  )
}

export default FormLogin

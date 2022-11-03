import React from 'react'
import TenderoLogin from '../Image/TenderoLogin.png';
import "../CrearTendero/CrearTendero.css"

export const CrearTendero = () => {
  return (
    <div className='container-ct'>
      <div className='container_login-ct'>
        <img className='TenderoLogin' src={TenderoLogin} alt="img"></img>
      </div>
      <div className='login-ct'>
        <input type="text" placeholder='Nombre Completo' />
        <input type="text" placeholder='Telefono' />
        <input type="text" placeholder='Dirección' />
        <input type="text" placeholder='Correo Electronico' />
        <input type="text" placeholder='Crear Contraseña' />
        <button type='submit'>Enviar</button>
      </div>
    </div>
  )
}

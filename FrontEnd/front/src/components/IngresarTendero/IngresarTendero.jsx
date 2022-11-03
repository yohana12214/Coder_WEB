import React from 'react'
import "../IngresarTendero/IngresarTenero.css"
import TenderoLogin from '../Image/TenderoLogin.png';

export const IngresarTendero = () => {
  return (
    <div className='container-it'>
      <div className='container_login'>
        <img className='TenderoLogin' src={TenderoLogin} alt="img"></img>
      </div>
      <div className='login-it'>
        <input type="text" placeholder='Correo' />
        <input type="text" placeholder='Contraseña' />
        <button type='submit'>Enviar</button>
      </div>
    </div>
  )
}

import React from 'react'
import TenderoLogin from '../Image/TenderoLogin.png';

export const CrearTendero = () => {
  return (
    <div className='container'>
      <div className='container_login'>
        <img className='TenderoLogin' src={TenderoLogin} alt="img"></img>
      </div>
      <div className='login'>
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

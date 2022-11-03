import React from 'react'
import TenderoLogin from '../Image/TenderoLogin.png';

export const IngresarTendero = () => {
  return (
    <div className='container'>
      <div className='container_login'>
        <img className='TenderoLogin' src={TenderoLogin} alt="img"></img>
      </div>
      <div className='login'>
        <input type="text" placeholder='Correo' />
        <input type="text" placeholder='Contraseña' />
        <button type='submit'>Enviar</button>
      </div>
    </div>
  )
}

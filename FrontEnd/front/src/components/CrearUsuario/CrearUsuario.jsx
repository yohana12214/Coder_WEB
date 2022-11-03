import React from 'react'
import { Link } from 'react-router-dom'
import logincliente from '../Image/logincliente.png';
import "../CrearUsuario/CrearUsuario.css"

export const CrearUsuario = () => {
  return (
    <div className='container-cu'>
        <div className='container_login-cu'>
            <img className='loginCliente-cu' src={logincliente} alt="img"></img>
        </div>
        <div className='login-cu'>
            <input type="text" placeholder='Nombre Completo' />
            <input type="text" placeholder='Telefono' />
            <input type="text" placeholder='Dirección' />
            <input type="text" placeholder='Correo Electronico' />
            <input type="text" placeholder='Crear Contraseña' />
            <Link to={'/homecliente'}><button type='submit'>
                Enviar
            </button></Link>

        </div>
    </div>
  )
}

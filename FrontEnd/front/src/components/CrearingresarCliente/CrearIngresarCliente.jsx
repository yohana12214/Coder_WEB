import React from 'react'
import ClientesLogin from '../Image/ClientesLogin.png';
import '../CrearingresarCliente/CrearIngresarCliente.css';
import { Link } from 'react-router-dom';
import '../CrearingresarCliente/CrearIngresarCliente.css';

export const CrearIngresarClinete = () => {
  return (
    <div className='container'>
    <div className='container_crear'>
        <div className='crear'>
            <img className='Tendero' src={ClientesLogin}></img>
            <Link to={'/crearusuario'}>
                <button className='button_products'>Crear Cuenta</button>
            </Link>
        </div>
        <div className='Ingresar'>
            <Link to={'/logincliente'}>
                <button className='button_products'>Ingresar</button>
            </Link>
        </div>
    </div>
</div>
  )
}
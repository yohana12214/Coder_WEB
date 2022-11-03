import React from 'react'
import ClientesLogin from '../Image/ClientesLogin.png';
import '../CrearingresarCliente/CrearIngresarCliente.css';
import { Link } from 'react-router-dom';

export const CrearIngresarClinete = () => {
  return (
    <div className='main_container-cic'>
        <div className='container_img'>
            <img className='cliente-cic' src={ClientesLogin} alt="img"></img>
        </div>  

        <div className='container_btn-cic'>
            <Link to={'/crearusuario'}> <button className='button_products'>Crear Cuenta</button> </Link>
            <Link to={'/logincliente'}> <button className='button_products'>Ingresar</button> </Link>
        </div>
        
    </div>

  )
}
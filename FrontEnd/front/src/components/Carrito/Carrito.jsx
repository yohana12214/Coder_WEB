import React from 'react'
import { Link } from 'react-router-dom'
import '../Carrito/Carrito.css'
import 'boxicons';

export const Carrito = () => {
  return (
    <div className='container'>
        <div className='container_carrito'>
            <text className='nombre_cliente'>Acá se mostrará el nombre del cliente</text>
        </div>
        <div className='boton_pagar'>
            <Link to={'/pagar'}><box-icon name='credit-card'></box-icon></Link>
        </div>
    </div>
  )
}
  
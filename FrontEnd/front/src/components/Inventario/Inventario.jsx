import React from 'react'
import { Link } from 'react-router-dom'
import '../Inventario/Inventario.css'

export const Inventario = () => {
  return (
    <div className='container'>
            <div className='container_list'>
                <table>
                    <tr>
                        <td><strong>Producto</strong></td>
                        <td><strong>Precio</strong></td>
                        <td><strong>Cantidad Vendida</strong></td>
                        <td><strong>Total Vendido</strong></td>
                        <td><strong>Stock</strong></td>
                    </tr>
                    <tr>
                        <td>Tomate</td>
                        <td>2.000</td>
                        <td>16</td>
                        <td>10.000</td>
                        <td>200</td>
                    </tr>
                </table>
            </div>
            <div className='container_button'>
                <Link to={'/'}><box-icon name='exit'></box-icon></Link>
                
                <Link to={'/hometendero'}><box-icon name='arrow-back' ></box-icon></Link>
            </div>
            <div className='container_barra'>
                <div className='nombrecliente'>
                    <text className='nombre'>Aca debe ir el nombre del cliente</text>
                </div>
            </div>
        </div>
  )
}

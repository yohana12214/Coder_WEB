import React from 'react'
import '../ListaVenta/ListaVenta.css'



export const ListaVenta = () => {
    return (
        <div className='container'>
            <div className='container_list'>
                <table>
                    <tr>
                        <td><strong>Producto</strong></td>
                        <td><strong>Precio</strong></td>
                        <td><strong>Cantidad</strong></td>
                    </tr>

                    <tr>
                        <td>Tomate</td>
                        <td>2.000</td>
                        <td>16</td>
                    </tr>
                </table>

            </div>
            <div className='container_button'>
                <button className='button_products'>Productos</button>
                <button className='button_ventas'>Ventas</button>

            </div>
        </div>
    )
}

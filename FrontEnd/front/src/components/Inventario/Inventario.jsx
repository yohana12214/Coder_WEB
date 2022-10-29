import React from 'react'

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
                <button className='button_products'>Productos</button>
                <button className='button_ventas'>Ventas</button>

            </div>
        </div>
  )
}

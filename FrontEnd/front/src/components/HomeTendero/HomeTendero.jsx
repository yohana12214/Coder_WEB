import React from 'react';
import '../HomeTendero/HomeTendero.css'
import Canasta from '../Image/Canasta.png'
import Stonks from '../Image/Stonks.png'


export const HomeTendero = () => {
    return (
        <div className='container'>
            <div className='container_products'>
                <img className='image_producto' src={Canasta}></img>
                <button className='button_products'>Productos</button>
            </div>
            <div className='container_sell'>
                <img className='image_ventas' src={Stonks}></img>
                <button className='button_ventas'> </button>
            </div>
        </div>
    )
}

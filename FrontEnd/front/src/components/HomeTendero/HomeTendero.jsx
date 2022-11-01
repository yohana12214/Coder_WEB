import React from 'react';
import { Link } from 'react-router-dom';
import Canasta from '../Image/Canasta.png';
import Stonks from '../Image/Stonks.png';
import '../HomeTendero/HomeTendero.css';

export const HomeTendero = () => {
    return (
        <div className='container'>
            <div className='container_products'>
                <img className='image_producto' src={Canasta}></img>
                <Link to='/inventario'><button className='button_products'>Productos</button></Link>
            </div>
            <div className='container_sell'>
                <img className='image_ventas' src={Stonks}></img>
                <Link to='/listaventas'>   <button className='button_ventas'>Ventas</button></Link>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';
import Tendero from '../Image/Tendero.png';

export const CrearIngresar = () => {
    return (
        <div className='container'>
            <div className='container_crear'>
                <div className='crear'>
                    <img className='Tendero' src={Tendero}></img>
                    <Link to={'/creartendero'}>
                        <button className='button_products'>Crear Cuenta</button>
                    </Link>
                </div>
                <div className='Ingresar'>
                    <Link to={'/IngresarTendero'}>
                        <button className='button_products'>Ingresar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

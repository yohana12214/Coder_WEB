import React from 'react';
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button";


import '../Inicio/Inicio.css'
import Tendero from '../Image/Tendero.png'
import Clientes from "../Image/Clientes.png"



export const Inicio = () => {
    return (
        <div className="container">
            <div className='container_products'>
                <img className='image_producto' src={Tendero} alt="tendero" ></img>
                <Link to={'/crearingresar'}>
                    <button className='button_products'>Ingresar</button>
                </Link>
            </div>
            <div className='container_products'>
                <img className='image_ventas' src={Clientes} alt="clientes"></img>
                <Link to={'/crearingresarcliente'}>
                    <button className='button_products'>Clientes</button>
                </Link>
            </div>
        </div>
    )
}
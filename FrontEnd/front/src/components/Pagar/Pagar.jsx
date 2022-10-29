import React from 'react'
import Daviplata from '../Image/Daviplata.png'
import '../Pagar/Pagar.css'
import Nequi from '../Image/Nequi.png'
export const Pagar = () => {
  return (
    <div className='container'>
        <div className=' container_pagoDaviplata'>
            <img className='pago_daviplata' src={Daviplata}></img>
            <text className='numero_daviplata'>3124567890</text>
        </div>
        <div className='container_pagoNequi'>
          <img className='pago_nequi' src={Nequi}></img>
          <text className='numero_Nequi'>3124567890</text>
        </div>
        <div className='container_expliacion'>
          <text className='explicacionPago'>Puedes hacer tu pago con cualquiera de los canales indicados
y enviar el comprobante de pago</text>
        </div>
        <div className='container_botones'>
          <button className='subir_comprobante'>Subir Comprobante</button>
          <button className='subir_comprobante'>Envíar Pedido</button>
        </div>


    </div>
  )
}

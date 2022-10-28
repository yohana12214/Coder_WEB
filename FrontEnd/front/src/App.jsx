
import './App.css';
import { Inicio } from './components/Inicio/Inicio.jsx';
import { Header } from './components/Header/Header';
import { Route, Router, Routes } from 'react-router-dom'
import { HomeTendero } from './components/HomeTendero/HomeTendero';
import { ListaVenta } from './components/ListaVenta/ListaVenta';
import { ButtonExit } from './components/Icons/ButtonExit';

function App() {
  return (
    <>
      <div className='header_container'>

        <Header titulo={'MI AMIGO DEL BARRIO'} />

      </div>
      <div className='Container_Body'>
        
        <ButtonExit />
      </div>
    </>
  );
}

export default App;


import './App.css';
import { Header } from './components/Header/Header';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import{Inventario } from './components/Inventario/Inventario'
import { ListaVenta } from './components/ListaVenta/ListaVenta';
import { Pagar } from './components/Pagar/Pagar';
import {Carrito} from './components/Carrito/Carrito';
import {HomeCliente} from './components/HomeCliente/HomeCliente';
import {LoginCliente} from './components/LoginCliente/LoginCliente';
import { CrearUsuario } from './components/CrearUsuario/CrearUsuario';
import {Inicio} from './components/Inicio/Inicio';
import {HomeTendero} from './components/HomeTendero/HomeTendero';
import { AgregarProductos } from './components/AgregarProductos/AgregarProductos';
import { CrearTendero } from './components/CrearTendero/CrearTendero';
import { CrearIngresar } from './components/CrearIngresar/CrearIngresar';
import { IngresarTendero } from './components/IngresarTendero/IngresarTendero';
import { CrearIngresarClinete } from './components/CrearingresarCliente/CrearIngresarCliente';


function App() {
  return (
    <>
    <Router>
      <div className='header_container'>
        <Header titulo={'MI AMIGO DEL BARRIO'} />
      </div>
      <div className='Container_Body'>
        <Routes>
          <Route path='/hometendero' element={<HomeTendero/>}/>
          <Route path='/inventario' element={<Inventario/>}/>
          <Route path='/listaventas' element={<ListaVenta/>}/>
          <Route path='/pagar' element={<Pagar/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/homecliente' element={<HomeCliente/>}/>
          <Route path='/logincliente' element={<LoginCliente/>}/>
          <Route path='/crearusuario' element={<CrearUsuario/>}/>
          <Route path='/agregarproductos' element={<AgregarProductos/>}/>
          <Route path='/creartendero' element={<CrearTendero/>}/>
          <Route path='/crearingresartendero' element={<CrearIngresar/>}/>
          <Route path='/ingresartendero' element={<IngresarTendero/>}/>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/cicliente' element={<CrearIngresarClinete/>}/>
        </Routes>

      </div>  
      </Router>
    </>
  );
}

export default App;

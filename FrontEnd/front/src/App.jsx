
import './App.css';
import { Header } from './components/Header/Header';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomeTendero} from './components/HomeTendero/HomeTendero';



function App() {
  return (
    <>
    <Router>
      <div className='header_container'>
        <Header titulo={'MI AMIGO DEL BARRIO'} />
      </div>
      <div className='Container_Body'>
        <Routes>
          <Route path='/hometendero' element={<HomeTendero />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;

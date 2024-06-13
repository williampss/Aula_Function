import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Mapas from './components/mapas';
import Temperatura from './components/temperatura';

function App() {
  return (
    <div className="App">
     <h1>Rotas: </h1>
     <BrowserRouter>
      <Routes>
        <Route  element= {<Home/>} path='/'/>
        <Route  element= {<Mapas/>} path='/mapas'/>
        <Route  element= {<Temperatura/>} path='/temperatura'/>
      </Routes>
     </BrowserRouter>

     {/* <Home></Home>
     <Mapas></Mapas>
     <Temperatura></Temperatura> */}
    
    </div>
  );
}

export default App;

import {useState, useEffect} from 'react';
import './App.css';
import Clima from './components/clima/index';

function App() {
  const diaSemana = ['Dom', 'Seg', 'Ter', 'Quart', 'Quint', 'Sext', 'Sab'];
  const [contadorEstado, setContadorEstado]= useState (0);
  let contador = 0;

  const contaClique= () =>{
    console.log(contador = contador + 1);
  }
  return (
    <div className="App">
      {/* <butoon onClick= {() => {console.log(contador = contador + 1)}}>Clique Aqui</butoon> */}
      <button onClick ={()=> {setContadorEstado(contadorEstado + 1)}}>Clique Aquuui</button>
      <h1>{contadorEstado}</h1>
      <button onClick={contaClique}>Clique Aqui</button>
      <h1>{contador}</h1>
      {
        diaSemana.map((dia) =>{
          return(<Clima diaSemana={dia}></Clima>)
        })
      }
    </div>
  );
}

export default App;

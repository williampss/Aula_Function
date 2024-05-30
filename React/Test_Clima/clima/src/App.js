import {useState, useEffect} from 'react';
import './App.css';
import {  FaTemperatureHigh, FaWind } from "react-icons/fa";
import { LuLocateFixed, LuText } from "react-icons/lu";
import City from "./components/image/undraw_Mobile_user_re_xta4-removebg-preview.png"
import CardSemana from './components/clima';

// import Clima from './components/clima/index';

export function App() {
  let temperatura= 30; 
  const [stateTemp, setstatTemp] = useState(0)
  const [stateDescription, setstateDescription] = useState("Descrição")
  const [stateWind, setstateWind] = useState(0)
  const [cidade,setCidade] = useState("Local")
  const callApi = () =>{
  console.log('vai chamar na api')
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=f99304c622259877b6a126e5fe74deba`)
  .then((resposta) =>{
    return resposta.json();
  })
   .then((dadoTemperatura) =>{
     console.log(dadoTemperatura);
    setstateDescription(dadoTemperatura.weather[0].description)
    setstateWind(dadoTemperatura.wind.speed)
    setstatTemp(dadoTemperatura.main.temp)
   })
    .catch(() =>{
      alert('LOCAL NÃO ENCONTRADO, TENTE NOVAMENTE😴')
    });
}
const dadoEntrada = (evento) =>{
 setCidade( evento.target.value)

}

  // const diaSemana = ['Dom', 'Seg', 'Ter', 'Quart', 'Quint', 'Sext', 'Sab'];
  // const [contadorEstado, setContadorEstado]= useState (0);
  // let contador = 0;

  // const contaClique= () =>{
  //   console.log(contador = contador + 1);
  // }
  return (
    <div className="App">
      <img src={City}/> 
      <div className='container'>
      <div className='inserir'>
         <input type='text' onChange={dadoEntrada}></input>
      </div>
      <button onClick= {callApi}>Pesquisar</button>
      <div className='boxHigh'>
        <p><LuLocateFixed/> {cidade}</p>
        <p><FaTemperatureHigh/> {stateTemp}</p>
        </div>
        <div className='boxDown'>
        <p><LuText/>{stateDescription}</p>
        <p><FaWind/> {stateWind} km/h</p>
      </div>

      {/* 
      Entrada de dados
      imagem  
      input
      botao
      Card
      Semana
      7xCard
      
      
    */}

      </div>
     
      {/* <butoon onClick= {() => {console.log(contador = contador + 1)}}>Clique Aqui</butoon>
      <button onClick ={()=> {setContadorEstado(contadorEstado + 1)}}>Clique Aquuui</button>
      <h1>{contadorEstado}</h1>
      <button onClick={contaClique}>Clique Aqui</button>
      <h1>{contador}</h1>
      {
        diaSemana.map((dia) =>{
          return(<Clima diaSemana={dia}></Clima>)
        })
      } */}
      <CardSemana descricao={stateDescription} temperatura={stateTemp} />
      <CardSemana descricao={stateDescription} temperatura={stateTemp} />
      <CardSemana descricao={stateDescription} temperatura={stateTemp} />
      <CardSemana descricao={stateDescription} temperatura={stateTemp} />
      <CardSemana descricao={stateDescription} temperatura={stateTemp} />
      <CardSemana descricao={stateDescription} temperatura={stateTemp} />
    </div>
  );
}

export default App;


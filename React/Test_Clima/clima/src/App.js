import {useState, useEffect} from 'react';
import './App.css';
import {  FaTemperatureHigh, FaThermometer, FaWater, FaWind } from "react-icons/fa";
import { LuLocateFixed, LuText } from "react-icons/lu";

// import Clima from './components/clima/index';

function App() {
  let temperatura= 30;
  const [stateTemp, setstatTemp] = useState(0);
  const [stateDescription, setstateDescription] = useState("Descrição");
  const [stateWind, setstateWind] = useState(0);
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
      alert('Cidade não encontrada')
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
       <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fundraw.co%2Fillustration%2Fcity_life_gnpr&psig=AOvVaw0UcN7kdiFVFzPMpIXBmiz5&ust=1716574377446000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCPm9WwpIYDFQAAAAAdAAAAABAE'></img> 
      <div className='container'>
      <div className='inserir'>
         <input type='text' onChange={dadoEntrada}></input>
      </div>
     
      <button onClick= {callApi}>buscar</button>
      <p><LuLocateFixed/> {cidade}</p>
      <p><FaTemperatureHigh/> {stateTemp}</p>
      <p><LuText/>{stateDescription}</p>
      <p><FaWind/> {stateWind} km/h</p>
      
     
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
    </div>
  );
}

export default App;


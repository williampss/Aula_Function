import {useState, useEffect} from 'react';
import './App.css';
import Clima from './components/clima/index';

function App() {
  let temperatura= 30;
  const [stateTemp, setstatTemp] = useState(0);
  const [stateDescription, setstateDescription] = useState("");
  const [stateWind, setstateWind] = useState(0);
  const [cidade,setCidade] = useState("São Pualo")
const callApi = () =>{
  console.log('vai chamar na api')
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`)
  .then((resposta) =>{
    return resposta.json();
  })
   .then((dadoTemperatura) =>{
    //  console.log(dadoTemperatura);
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
      <input type='text' onChange={dadoEntrada}></input>
      <button onClick= {callApi}>buscar</button>
      <p>{cidade}</p>
      <p>{stateDescription}</p>
      <p>{stateWind}</p>
      <p>{stateTemp}°C</p>
      
     
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

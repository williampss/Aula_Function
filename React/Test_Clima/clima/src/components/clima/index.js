import './clima.css';
function Clima(temp){
  return(
       <div className='container'>
      <h2>{temp.diaSemana}</h2>
      <h3>São Paulo</h3>
      <h1>16ºc</h1>
      <p>nublado</p>
    </div>

  )
}
export default Clima;
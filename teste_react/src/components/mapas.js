import {Link} from 'react-router-dom'

const Mapas = () =>{
  return(
    <div>
      <h2>Mapas</h2>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/temperatura'>Temperatura</Link></li>
      </ul>
    </div>
  )
}
export default Mapas;
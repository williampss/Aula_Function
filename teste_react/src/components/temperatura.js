import {Link} from 'react-router-dom'

const Temperatura = () =>{
  return(
    <div>
      <h2>Temperatura</h2>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/mapas'>Mapas</Link></li>
      </ul>
    </div>
  )
}
export default Temperatura;
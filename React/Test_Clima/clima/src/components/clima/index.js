import './clima.css';
import {} from '../../App'
export function CardSemana(props){
  return(
       <div className='Card_temp'>
        <p>dia</p>
        <p>{props.temperatura}</p>
        <p>{props.descricao}</p>  
       </div>
  )
}
export default CardSemana;
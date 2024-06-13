import './clima.css';
import {} from '../../App'
export function CardSemana(props){
  return(
       <div className='Card_temp'>
        <p className='textCard'>dia</p>
        <p className='textCard'>{props.temperatura}</p>
        <p className='textCard'>{props.descricao}</p>  
       </div>
  )
}
export default CardSemana;
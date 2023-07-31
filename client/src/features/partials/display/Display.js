
import { useDispatch, useSelector } from "react-redux";
import './display.css'


export default function Display() {

    
    const  { money } = useSelector((state) => state.money)
    const dispatch = useDispatch()



//   if( !tray && change > 0 ){    
//     // message = "Collect change"
//   }



  return (
    <div className='display'>
        <p className='message'></p>
        <p className='money'>{money.toFixed(2)}</p>        
    </div>
  )
}

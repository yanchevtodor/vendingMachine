import { useSelector, useDispatch } from 'react-redux';
import { setChange, resetChenge } from '../../money/moneySlice'
import './change.css'

export default function Change() {

    const dispatch = useDispatch()

    const change = useSelector((state) => state.money.change)

  const handleChangeClick = () => dispatch(resetChenge());

  return (
    <div className='change' onClick={()=>{handleChangeClick()}}>
      {change.toFixed(2)}
    </div>
  )
}

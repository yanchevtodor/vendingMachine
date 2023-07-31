import { useSelector, useDispatch } from "react-redux";
import { addMoney, setMoney, resetMoney, setChange, resetChenge } from '../../money/moneySlice'

export default function Reset() {



    const money = useSelector((state) => state.money.money)
    const change = useSelector((state) => state.money.change)

    const dispatch = useDispatch()

    const handleCoinsClick = () => {

            dispatch(setChange(change + money ));
            dispatch(resetMoney())
        
    };




  return (
    <div className='reset'>

        <div onClick={() => handleCoinsClick() }></div>
        
    </div>
  )
}

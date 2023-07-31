import { useSelector, useDispatch } from "react-redux";
import { addMoney, setMoney, setChange } from './moneySlice'

export default function Money() {



    const money = useSelector((state) => state.money.money)
    const change = useSelector((state) => state.money.change)

    const dispatch = useDispatch()

    const handleCoinsClick = (event) => {
        const amount = Number(event.target.alt);

        if (money + amount > 9.95) {
            dispatch(setMoney(money))
            dispatch(setChange(change + amount));
          } else {
            dispatch(addMoney(amount))
          }
        
    };




  return (
    <div className='money'>
        <img onClick={handleCoinsClick} alt="0.05"src='./images/5.png' />
        <img onClick={handleCoinsClick} alt="0.10"src='./images/10.png' />
        <img onClick={handleCoinsClick} alt="0.20"src='./images/20.png' />
        <img onClick={handleCoinsClick} alt="0.50"src='./images/50.png' />
        <img onClick={handleCoinsClick} alt="1"src='./images/100.png' />
    </div>
  )
}

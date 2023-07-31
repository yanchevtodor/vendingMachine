import { useDispatch, useSelector } from "react-redux";
import { setTray, updateProductCountDown } from "./productsSlice";
import { setChange, setMoney } from "../money/moneySlice";

export default function Products() {


    const  { products, tray } = useSelector((state) => state.products)

    const { money, change } = useSelector((state) => state.money)
    const dispatch = useDispatch()


    const handleClick = ( product ) => {
        if(money >= product.price && product.count !== 0){
            dispatch(setChange( change + money - product.price ))
            dispatch(setMoney(0))
            dispatch(setTray(product))

            dispatch(updateProductCountDown(product))
        } 


    }

    return (
        <div className='display-case'>
        {      
            products !== [] && products.map((product) => {
            return(             
                <div key={product.name} className='product-card' onClick={()=>{handleClick(product)}}>
                {
                    product.count > 0
                    ?
                    <>
                        <p>{product.count}</p>
                        <p>{product.name}</p>
                        <p>{product.price.toFixed(2)} lv</p>
                    </>
                    :
                    <p>empty</p>}
                </div>           
            )
            })
        }
        </div>
    )
}

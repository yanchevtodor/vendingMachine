import { useDispatch, useSelector } from "react-redux";
import { updateProductCountUp, updateProductCountDown } from "../products/productsSlice";

export default function EditProducts() {


    const  { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()


    const handleClickPlus = ( product ) => {

            dispatch(updateProductCountUp(product))
    

    }
    const handleClickMinus = ( product ) => {

        dispatch(updateProductCountDown(product))


}

    return (
        <div className='edit-products'>
        {      
            products !== [] && products.map((product) => {
            return(             
                <div key={product.name} className='edit-product' >  
                    <p>{product.count}</p>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p onClick={()=>{handleClickPlus(product)}}>+</p>
                    <p onClick={()=>{handleClickMinus(product)}}>-</p>
                </div>           
            )
            })
        }
        </div>
    )
}

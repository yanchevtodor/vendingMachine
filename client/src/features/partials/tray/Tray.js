import { useDispatch, useSelector } from "react-redux";
import { setTray } from "../../products/productsSlice";
import { useEffect } from "react";

export default function CollectorTray() {
  
  const  { tray } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log(tray)
  }, [tray])

  return (
    
      tray.name
      ?
        <div className='collector-tray' onClick={()=>{dispatch(setTray({}))}}>
            <div key={tray.name} className='product-card'>
                <p>{tray.name}</p>
            </div>
        </div>
      :
        <div className='collector-tray' >
            <p>empty</p>
        </div>
    
  )
}

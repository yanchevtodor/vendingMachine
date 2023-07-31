import "./App.css";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./features/products/productsSlice";



import Display from './features/partials/display/Display'
import Money from './features/money/Money'
import Products from './features/products/Products'
import Tray from './features/partials/tray/Tray'
import Reset from './features/partials/reset/Reset'
import Change from './features/partials/change/Change'
import EditProducts from './features/editProducts/EditProducts'


function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getProducts())
  },[])


  return (

      <div className="App">

        <div className='frame'>
          <div className='left-side'>
              <Products />
              <Tray />
          </div>
          <div className='right-side'>
              <Display />
              <Reset />
              <Money />
              <Change />
          </div>
        </div>
        <EditProducts />
      </div>
  );
}

export default App;

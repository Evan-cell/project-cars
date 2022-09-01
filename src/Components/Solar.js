import React from 'react'
import '../Components/solar.css'
function Solar() {
  return (
    <div className='solar'  >
        
        <div className="header">
            {/* <div className="header__left">
                <img src="https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg" alt="" className='img__header'/>
            </div>
            <div className="header__center">
                <a href="">Model S</a>
                <a href="">Model 3</a>
                <a href="">Model X</a>
                <a href="">Model Y</a>
                <a href="">Solar Roof</a>
                <a href="">Solar Panels</a>
            </div>
            <div className="header__right">
            <a href="">Shop</a>
            <a href="">Account</a>
            <a href="">Menu</a>
            </div> */}
            
        </div>
        <div className="header__title">
           <h1>Solar Panels</h1>
           <p>Order online for <a href="">Touchless Delivery</a></p>     
        </div>
        <div className="order__inventory">
            <button className='order'>Custom Order</button>
            <button className='invent'>Existing Inventory</button>
        </div>
    </div>
  )
}

export default Solar
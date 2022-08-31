import React from 'react'
import '../Components/Home.css'
function Home() {
  return (
    <div className='home'>
        <div className="header">
            <div className="header__left">
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
            <div className="header__right"></div>
        </div>
    </div>
  )
}

export default Home
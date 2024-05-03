import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="banner">
     <Navbar/>
      <div className='banner_content'>
        <div className='container'>
          <div className='banner_text'>
            <h3>Pizza Devlivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p className='pass'>
              pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some
            </p>
            <div className='banner_btn'>
               <a href="#" className='btn btn-smart'>DEVLERY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import './Navbar.css'
import logo from '../../assets/logos/m-logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <div className='company'>
        <img src={logo} alt="" className='logo' />
        <p>eManager</p>
      </div>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>About us</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar

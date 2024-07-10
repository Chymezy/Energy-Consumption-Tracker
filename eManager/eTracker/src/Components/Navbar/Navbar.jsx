import React from 'react'
import './Navbar.css'
import logo from '../../assets/logos/logo_1.jpg'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
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

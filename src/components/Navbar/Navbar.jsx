import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Monitoring</li>
            <li>Product</li> 
            <li>Service</li>
            <li>User</li>
        </ul>
    </nav>
  )
}

export default Navbar
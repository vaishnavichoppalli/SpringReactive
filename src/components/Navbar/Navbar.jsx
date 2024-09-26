import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Service from '../Service/Service'
import icon from '../../assets/bell-icon.png'
import user from '../../assets/user_temp.png'

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
        <div className='nav-right'>
        <ul>
          <li><img src={icon}/></li>
          <li><img src={user}/></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar
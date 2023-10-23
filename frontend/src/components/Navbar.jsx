import React from 'react'
import logo from "../images/inst.png"
import '../css/Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div  className='navbar' >  
    <Link to="/"  > <img src={logo} alt=""    style={{width:"30%",objectFit:"contain",}} />   </Link>
    <ul className="nav-menu">
        <Link to="/signup" >SignUp</Link >
        <Link to="login" >SignIn</Link >
        <Link  to="/profile" >Profile</Link > 
    </ul>
          

    </div>
  )
}

export default Navbar
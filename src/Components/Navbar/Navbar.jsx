import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <Link style={{textDecoration: 'none'}} to='/'><h2>K.A</h2></Link>
      <Link style={{textDecoration: 'none'}} to='/contact'><h2>Contact Me</h2></Link>
    </nav>
  )
}

export default Navbar

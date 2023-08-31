import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink  className="link" to="/About">About</NavLink>
      <NavLink className="link" to="/Contact">Contact</NavLink>
      <NavLink  className="link" to="/Toggle">Toggle</NavLink>

    </nav>
  )
}

export default Navbar

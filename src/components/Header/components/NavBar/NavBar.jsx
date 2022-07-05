import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = ({ logout }) => {
  return (
    <nav className="b-nav--container">
      <Link to="/" className="b-nav--item">Inicio</Link>
      <Link to="/my-pairs" className="b-nav--item">Mi glosario</Link>
      <Link to="/practice" className="b-nav--item b-nav--item_practice">Practicar</Link>
      <span onClick={logout} className="b-nav--item b-nav--item_logout">Cerrar sesión</span>
    </nav>
  )
}

export default NavBar
import React from "react"
import { Link } from "react-router-dom"

import { useHeader } from "./hooks/useHeader"
import './Header.css'
import NavButton from "./components/NavButton/NavButton"
import NavBar from "./components/NavBar/NavBar"

const Header = () => {
  const { logout, open, handleOpen, buttonRef } = useHeader()

  return (
    <div className="b-header--container">
      <header className="b-header">
        <Link to="/" className="b-header--title">My Glossary</Link>
        <div className="b-navbar">
          <NavButton open={open} handleOpen={handleOpen} buttonRef={buttonRef} />
          {open &&
            <NavBar logout={logout} />
          }
        </div>
      </header>
    </div>
  )
}

export default Header
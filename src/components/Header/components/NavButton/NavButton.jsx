import React from 'react'

import menu from '../../../../assets/imges/menu.png'
import remove from '../../../../assets/imges/remove.png'
import './NavButton.css'

const NavButton = ({ open, handleOpen, buttonRef }) => {
  return (
    <div className="b-button--container" onClick={handleOpen}>
      {open ? (
        <div className="b-button__open">
          <img src={remove} alt="close" className="b-nav--img-button__close" />
        </div>
      ) : (
        <div className="b-button__close" ref={buttonRef}>
          <img src={menu} alt="menu" className="b-nav--img-button__menu" />
        </div>
      )}
    </div>
  )
}

export default NavButton
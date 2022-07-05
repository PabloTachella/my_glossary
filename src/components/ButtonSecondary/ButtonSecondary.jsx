import React from 'react'
import "./ButtonSecondary.css"

const ButtonSecondary = ({ handleClick, handleDisabled, text, className }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={handleDisabled}
      className={`b-button-secondary  ${className}`}
    >{text}
    </button>
  )
}

export default ButtonSecondary
import React from "react";
import "./ButtonPrimary.css"

const ButtonPrimary = ({ handleClick, handleDisabled, text, className }) => {
  return (
    <button
      type="submit"
      onClick={handleClick || null}
      className={`b-button-primary ${className}`}
      disabled={handleDisabled}
    >{text}
    </button>
  )
}

export default ButtonPrimary
import React from "react";
import okIcon from '../../assets/imges/ok-black.png'
import './Correct.css'

const Correct = () => {
  return (
    <>
      <div className="b-correct--icon-container">
        <img src={okIcon} alt="correcto" className="b-correct--icon" />
      </div>
    </>
  )
}

export default Correct
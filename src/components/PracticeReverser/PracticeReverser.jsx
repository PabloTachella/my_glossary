import React from "react";
import reverse_arrows from '../../assets/imges/flechas-invertir.png'
import './PracticeReverser.css'

const PracticeReverser = ({ option1, option2, handleChange }) => {

  return (
    <div className="b-practice-reverser--container">
      <span className="b-practice-reverser--text b-practice-reverser--text_left">{option1}</span>
      <button onClick={handleChange} className="b-practice-reverser--button">
        <img src={reverse_arrows} alt="reverse_arrows" className="b-practice-reverser--logo"/>
      </button>
      <span className="b-practice-reverser--text">{option2}</span>
    </div>
  )
}

export default PracticeReverser
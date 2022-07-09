import React from 'react';
import SwitchCharacterInput from '../SwitchCharacterInput/SwitchCHaracterInput';

import { usePractice } from '../views/Practice/hooks/usePractice'
import clue from '../../assets/imges/pista.png'
import solution from '../../assets/imges/solucion.png'
import './HeaderInput.css'

const HeaderInput = () => {
  const {
    handleSwitchCharacterInput,
    characterMode,
    showClue,
    showSolution
  } = usePractice()

  return (
    <div className="b-header-input--container">
      <div className="b-header-input--switch-container">
        <SwitchCharacterInput onChange={handleSwitchCharacterInput} checked={characterMode} />
      </div>
      <button type="button" onClick={showClue} className="b-header-input--button">
        <img src={clue} alt="clue" className="b-header-input--img-button" />
      </button>
      <button type="button" onClick={showSolution} className="b-header-input--button">
        <img src={solution} alt="solution" className="b-header-input--img-button" />
      </button>
    </div>
  )
}

export default HeaderInput
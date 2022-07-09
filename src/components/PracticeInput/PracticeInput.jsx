import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputTextArea from "../InputTextArea/InputTextArea";
import SingleCharacterInput from "../SingleCharacterInput/SingleCharacterInput";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import './PracticeInput.css'

import { usePracticeInput } from "./hooks/usePracticeInput";
import HeaderInput from "../HeaderInput/HeaderInput";

const PracticeInput = ({ characterMode, input, setInput, handleFocus, focus }) => {
  const {
    checkAnswer,
    sentence,
    translation,
    onChange,
    languages,
    skipPair,
    disabledCheck,
  } = usePracticeInput({ input, setInput, handleFocus })

  return (
    <form onSubmit={checkAnswer} className="b-practice--form">
      <span className="b-form--sentence">{sentence}</span>
      {/* <div className="b-form--head">
        <button type="button" className="b-form--button_hint" onClick={showHint}>PISTA</button>
      </div> */}
      <div className="b-practice--input-container">
        <HeaderInput />
        {characterMode ?
          translation &&
          <div className="b-practice--cell-input-container">
            <SingleCharacterInput
              sentence={translation}
              handleChangeInput={onChange}
              input={input}
            />
          </div>
          :
          <InputTextArea
            focus={focus}
            handleFocus={handleFocus}
            onChange={onChange}
            language={languages.language2}
            value={input}
          />
        }
      </div>
      <div className="b-form--buttons">
        <div className="b-form--button-skip">
          <ButtonSecondary
            handleClick={skipPair}
            handleDisabled={false}
            text="SALTAR"
            className="b-form--button-skip"
          />
        </div>
        <ButtonPrimary handleDisabled={disabledCheck} text="COMPROBAR" />
      </div>
      <ToastContainer />
    </form>
  )
}

export default PracticeInput
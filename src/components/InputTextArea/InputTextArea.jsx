import React from "react";

import { useFocusEnd } from './hooks'
import './InputTextArea.css'

const InputTextArea = ({ focus, handleFocus, onChange, language, value}) => {
  const { inputRef } = useFocusEnd(focus)

  return (
    <textarea
      type="text"
      placeholder={`Escribe en ${language}`}
      onChange={onChange}
      ref={inputRef}
      onBlur={handleFocus}
      value={value}
      maxLength={140}
      className="b-form--input"
    />
  )
}

export default React.memo(InputTextArea)
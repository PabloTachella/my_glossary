import React from 'react';
import { useFocusEnd } from '../../../../hooks/useFocusEnd';

const Letter = props => {
  const { char,
    inputsValues,
    totalIndex,
    onChange,
    focus,
  } = props

  const { inputRef } = useFocusEnd(focus)

  const handleChange = ev => {
    if (ev.target.value) onChange({ value: ev.target.value, totalIndex })
  }

  return (
    <input
      type="text"
      placeholder={char}
      maxLength="2"
      ref={inputRef}
      onChange={handleChange}
      className="b-single-character-input--char" // b-char__placehold Agregar para visualizar placeholder
      value={inputsValues[totalIndex]}
      readOnly={totalIndex > Object.values(inputsValues).findIndex(value => value === '')}
    />
  )
}

export default Letter
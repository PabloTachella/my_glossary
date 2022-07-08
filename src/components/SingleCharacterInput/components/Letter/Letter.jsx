import React from 'react';
import { useFocusEnd } from '../../../../hooks/useFocusEnd';

const Letter = props => {
  const { char,
    inputsValues,
    totalIndex,
    onChange,
    focus,
    placeHoldersShow
  } = props

  const { inputRef } = useFocusEnd(focus)

  const handleChange = ev => {
    if (ev.target.value) onChange({ value: ev.target.value, totalIndex })
  }

  const classPlaceHolderShow = `${placeHoldersShow[totalIndex] ? 'b-char__placehold' : ''}`
  const classColorRed = `${placeHoldersShow[totalIndex] && inputsValues[totalIndex] !== char ? 'b-char__color-red' : ''}`

  return (
    <input
      type="text"
      placeholder={char}
      maxLength="2"
      ref={inputRef}
      onChange={handleChange}
      className={`b-single-character-input--char ${classPlaceHolderShow} ${classColorRed}`} // b-char__placehold Agregar para visualizar placeholder
      value={inputsValues[totalIndex]}
      readOnly={totalIndex > Object.values(inputsValues).findIndex(value => value === '')}
    />
  )
}

export default Letter
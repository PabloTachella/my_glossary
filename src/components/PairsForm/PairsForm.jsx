import React from "react";

import ok_black from '../../assets/imges/ok-black.png'
import { useFocusEnd } from "../../hooks/useFocusEnd";
import './PairsForm.css'

const PairsForm = ({
  focus,
  language,
  entry,
  translation,
  onSubmit,
  updateEntry,
  updateTranslation,
  handleFocus
}) => {
  const myLanguage = 'Español'

  const { inputRef } = useFocusEnd(focus)

  const handleChange = (ev) => {
    ev.preventDefault()
    const { name, value } = ev.target
    name === "entry" ? updateEntry(value) : updateTranslation(value)
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    onSubmit({ entry, translation })
  }

  const emptyField = !entry || !translation

  return (
    <form onSubmit={handleSubmit} className="b-pairs-form">
      <div className="b-pairs-form--input-container">
        <textarea
          type="text"
          placeholder={`Escribe en ${myLanguage}`}
          onChange={handleChange}
          name={'entry'}
          value={entry}
          ref={inputRef}
          onBlur={handleFocus}
          maxLength={140}
          className="b-form--input"
        />
      </div>
      <div className="b-pairs-form--input-container">
        <textarea
          type="text"
          placeholder={`Escribe en ${language}`}
          onChange={handleChange}
          name={'translation'}
          value={translation}
          maxLength={140}
          className="b-form--input"
        />
      </div>
      <button type="submit" disabled={emptyField} className="b-pairs-form--button">
        <img src={ok_black} alt="ok" className="b-pairs-form--img-button" />
      </button>
    </form >
  )
}

export default PairsForm
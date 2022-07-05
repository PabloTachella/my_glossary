import React from 'react';
import Letter from '../Letter/Letter';

const Word = props => {
  const { wordInCharacters,
    inputsValues,
    prevCharacters,
    indexFocus,
    nextCell,
  } = props

  return (
    <>
      {
        wordInCharacters.map((char, index) =>
          <Letter key={index}
            char={char}
            inputsValues={inputsValues}
            totalIndex={index + prevCharacters}
            focus={indexFocus === index + prevCharacters}
            onChange={nextCell}
          />
        )
      }
      <div className="b-single-character-input--space"></div>
    </>
  )
}

export default Word
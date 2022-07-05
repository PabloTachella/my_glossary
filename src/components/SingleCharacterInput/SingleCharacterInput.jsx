import React from "react";

import Word from "./components/Word/Word";
import { useSingleCharacterInput } from "./hooks/useSingleCharacterInput";
import './SingleCharacterInput.css'

const SingleCharacterInput = ({ sentence, handleChangeInput, input }) => {
  const { wordsInCharacter,
    inputsValues,
    getPrevCharacters,
    indexFocus,
    nextCell
  } = useSingleCharacterInput({ sentence, handleChangeInput, input })

  return (
    <>
      {inputsValues && wordsInCharacter?.length > 0 &&
        <div className="b-single-character-input--container">
          {wordsInCharacter.map((wordInCharacters, index_word) => {
            return (
              <div key={index_word} className="b-single-character-input--word-container">
                <Word
                  wordInCharacters={wordInCharacters}
                  inputsValues={inputsValues}
                  prevCharacters={getPrevCharacters({ wordsInCharacter, index_word })}
                  indexFocus={indexFocus}
                  nextCell={nextCell}
                />
              </div>
            )
          })}
        </div>
      }
    </>
  )
}

export default SingleCharacterInput
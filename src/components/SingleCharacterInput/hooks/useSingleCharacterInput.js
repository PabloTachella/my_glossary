import { useEffect, useState } from "react"

export const useSingleCharacterInput = ({ sentence, handleChangeInput, input }) => {
  const [inputsValues, setInputsValues] = useState()
  const [wordsInCharacter, setWordsInCharacter] = useState()
  const [indexFocus, setIndexFocus] = useState(0)

  useEffect(() => {
    const sentenceInCharacters = sentence.split('')
    setInputsValues(() => {
      let values = {}
      sentenceInCharacters.forEach((char, index) => {
        if (char === ' ') values[index] = null
        else values[index] = ''
      })
      return { ...values }
    })
    const words = sentence.split(' ')
    setWordsInCharacter(words.map(word => word.split('')))
  }, [sentence])

  useEffect(() => {
    if (inputsValues) {
      const inputString = Object.values(inputsValues).map(char => char === null ? ' ' : char).join('').trim()
      handleChangeInput(inputString)
    }
  }, [inputsValues])

  useEffect(() => {
    if (input === '') setIndexFocus(0)
  }, [input])

  const getPrevCharacters = ({ wordsInCharacter, index_word }) => {
    if (index_word === 0) return 0
    let prev_chars = 0
    for (let i = 0; i < index_word; i++) {
      prev_chars += wordsInCharacter[i].length + 1
    }
    return prev_chars
  }

  const nextCell = ({ value, totalIndex }) => {
    if (value === undefined) setIndexFocus(prev => prev + 1)
    else {
      setInputsValues(prev => ({ ...prev, [totalIndex]: value.substr(-1) }))
      setIndexFocus(prev => {
        if (Object.keys(inputsValues).length > totalIndex + 1)
          if (inputsValues[totalIndex + 1] === null) return prev + 2
          else return prev + 1
        return prev
      })
    }
  }

  const prevCell = () => {
    setIndexFocus(index => {
      if (index > 0)
        if (inputsValues[index - 1] !== null) return index - 1
        else return index - 2
      return index
    })
  }

  const handleDelete = ({ deletePrevChar = false, deleteActualChar = false }) => {
    if (deletePrevChar) {
      setInputsValues(prev => {
        if (indexFocus > 0)
          if (prev[indexFocus - 1] !== null) return { ...prev, [indexFocus - 1]: '' }
          else return { ...prev, [indexFocus - 2]: '' }
        return { ...prev }
      })
      prevCell()
    }
    else if (deleteActualChar) {
      setInputsValues(prev => ({ ...prev, [indexFocus]: '' }))
      if (inputsValues[indexFocus - 1] === null) {
        if (inputsValues[indexFocus - 2] === '') prevCell()
      } else {
        if (inputsValues[indexFocus - 1] === '') prevCell()
      }
    }
  }

  useEffect(() => {
    const handleClickedKey = (ev) => {
      const clickedKey = ev.key

      if (clickedKey === "ArrowRight") {
        const lastIndex = Object.values(inputsValues).findIndex(value => value === '')
        if (lastIndex > indexFocus) nextCell({})
      } else if (clickedKey === "ArrowLeft") {
        prevCell()
      } else if (clickedKey === "Backspace") {
        if (ev.target.value.length === 0)
          handleDelete({ deletePrevChar: true })
        else handleDelete({ deleteActualChar: true })
      } else if (clickedKey === " ") {
        ev.preventDefault()
      }
    }

    document.addEventListener("keydown", handleClickedKey)

    return (() => document.removeEventListener("keydown", handleClickedKey))
  }, [prevCell, nextCell, handleDelete, inputsValues, indexFocus])

  return {
    wordsInCharacter,
    inputsValues,
    getPrevCharacters,
    indexFocus,
    nextCell
  }
}
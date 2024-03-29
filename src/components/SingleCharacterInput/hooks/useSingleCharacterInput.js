import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { calcCharsToShow, generateIndicesCharsToShow, signs } from "../helpers"

export const useSingleCharacterInput = ({ sentence, handleChangeInput, input }) => {
  const [inputsValues, setInputsValues] = useState()
  const [placeHoldersShow, setPlaceHoldersShow] = useState(sentence.split('').fill(false))
  const [wordsInCharacter, setWordsInCharacter] = useState()
  const [indexFocus, setIndexFocus] = useState(input.length <= sentence.length - 1 ? input.length : sentence.length - 1)
  const { usedHelp } = useSelector(state => state.practice)

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

    setPlaceHoldersShow(sentence.split('').fill(false))
    
    const words = sentence.split(' ')
    setWordsInCharacter(words.map(word => word.split('')))
  }, [sentence])

  const showSignsAndHelp = (sentence, help) => {
    const sentenceInCharacters = sentence.split('')

    setPlaceHoldersShow(prev => {
      let values = [...prev]
      const amountCharsToShow = calcCharsToShow(sentenceInCharacters.length, help)
      const indicesCharsToShow = generateIndicesCharsToShow(sentenceInCharacters, amountCharsToShow, prev)

      if (help === 4) values = values.fill(true)
      else {
        sentenceInCharacters.forEach((char, index) => {
          if (isSign(char)) values[index] = true
          if (help > 1 && prev[index]) values[index] = true
          if (indicesCharsToShow.includes(index)) values[index] = true
        })
      }
      return [...values]
    })
  }

  useEffect(() => {
    showSignsAndHelp(sentence, usedHelp)
  }, [usedHelp, sentence])

  useEffect(() => {
    const sentenceInCharacters = sentence.split('')

    setInputsValues(() => {
      let values = {}
      sentenceInCharacters.forEach((char, index) => {
        if (char === ' ') values[index] = null
        else values[index] = input[index] ? input[index] : ''
      })
      return { ...values }
    })
  }, [usedHelp])

  useEffect(() => {
    if (inputsValues) {
      const inputString = Object.values(inputsValues).map((char, index) => char === null ? ' ' : char).join('').trim()
      handleChangeInput(inputString)
    }
  }, [inputsValues])

  useEffect(() => {
    if (input === '') setIndexFocus(0)
  }, [input, usedHelp])

  const getPrevCharacters = ({ wordsInCharacter, index_word }) => {
    if (index_word === 0) return 0
    let prev_chars = 0
    for (let i = 0; i < index_word; i++) {
      prev_chars += wordsInCharacter[i].length + 1
    }
    return prev_chars
  }

  const isSign = char => signs.includes(char)

  const nextCell = ({ value, totalIndex }) => {
    if (value === undefined) setIndexFocus(prev => prev + 1)
    else {
      setInputsValues(prev => ({ ...prev, [totalIndex]: value.substr(-1) }))
      setIndexFocus(prev => {
        if (sentence.length > prev + 1) // reviso si no terminó la sentencia
          if (inputsValues[totalIndex + 1] === null) return prev + 2 // salto a la siguiente palabra
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
    nextCell,
    isSign,
    placeHoldersShow
  }
}
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify';

import { incrementErrors, removePracticedElement, resetPracticeValues, updatePracticeValues } from "../../../store/slices/practice"
import { generateRandomNum } from "../../../utils/generateRandomNumBetween";
import { calcRepracticeDate, compareStrings } from '../helpers'

export const usePracticeInput = ({ input, setInput, handleFocus }) => {
  const dispatch = useDispatch()
  const {
    languages,
    statusPractice,
    listToPracticeFiltered,
    errors,
    usedHelp,
  } = useSelector(state => state.practice)
  const { language } = useSelector(state => state.glossary)
  const { uid } = useSelector(state => state.user)
  const [indexPractice, setIndexPractice] = useState(generateRandomNum(listToPracticeFiltered.length))
  const [alternativeIndex, setAlternativeIndex] = useState(generateRandomNum(19))

  useEffect(() => {
    setIndexPractice(generateRandomNum(listToPracticeFiltered.length))
  }, [listToPracticeFiltered])

  const isTestMode = !listToPracticeFiltered[0].date
  let a
  let b

  if (isTestMode) {
    a = listToPracticeFiltered[indexPractice] ? listToPracticeFiltered[indexPractice].translation : listToPracticeFiltered[alternativeIndex].translation
  } else a = listToPracticeFiltered[0].translation

  if (isTestMode) {
    b = listToPracticeFiltered[indexPractice] ? listToPracticeFiltered[indexPractice].entry : listToPracticeFiltered[alternativeIndex].entry
  } else b = listToPracticeFiltered[0].entry

  const sentence = languages.language1 === language ? a : b
  const translation = languages.language2 === language ? a : b
  const disabledCheck = !input.length > 0

  useEffect(() => {
    const handleClickedKey = (ev) => {
      const clickedKey = ev.key

      if (clickedKey === "Enter") {
        ev.preventDefault()
        checkAnswer()
      }
    }

    document.addEventListener("keydown", handleClickedKey)

    return (() => document.removeEventListener("keydown", handleClickedKey))
  }, [input, translation])

  // Speech the sentences to practice
  const msg = new SpeechSynthesisUtterance()
  useEffect(() => {
    setTimeout(() => {
      if (sentence != undefined) {
      msg.text = sentence
      msg.lang = languages.language1 === language ? "en-US" : "es-ES"
      window.speechSynthesis.speak(msg)
      }
    }, 700)
  }, [sentence])

  const preventRecurrences = ({ value, pairsAmount }) => {
    const random = generateRandomNum(pairsAmount)

    if (value != random) {
      return random
    } else {
      return preventRecurrences({ value, pairsAmount })
    }
  }

  const checkAnswer = ev => {
    ev?.preventDefault()
    const isMobile = window.innerWidth < 880

    const isCorrectAnswer = compareStrings(input, translation)

    if (isCorrectAnswer) {
      if (isMobile) toast.success('¡Bien hecho! 😀', { autoClose: 2000 })
      else toast('¡Bien hecho! 😀', { autoClose: 2500 })

      if (!isTestMode) {
        const { id, lvlUnderstand, errors: prevErrors } = listToPracticeFiltered[0]
        const { repracticeDate, newLvlUnderstand } = calcRepracticeDate({ errors, usedHelp, lvlUnderstand })

        dispatch(updatePracticeValues({
          uid,
          language,
          repracticeDate,
          id,
          lvlUnderstand: newLvlUnderstand,
          errors: errors === 0 ? prevErrors : prevErrors + 1
        }))

      } else {
        dispatch(resetPracticeValues())
        setIndexPractice(prev => preventRecurrences({ value: prev, pairsAmount: listToPracticeFiltered.length }))
      }

      setInput('')
      handleFocus()
    } else {
      if (isMobile) toast.error('Vuelve a intentarlo 💪', { autoClose: 2000 })
      else toast('Vuelve a intentarlo 💪', { autoClose: 2500 })

      if (!isTestMode) {
        if (errors < 3) dispatch(incrementErrors())
      }
    }
  }

  const skipPair = () => {
    if (isTestMode) setIndexPractice(prev => preventRecurrences({ value: prev, pairsAmount: listToPracticeFiltered.length }))
    else dispatch(removePracticedElement())
    if (input) setInput('')
    dispatch(resetPracticeValues())
    handleFocus()
  }

  const onChange = eventOrValue => {
    const value = eventOrValue.target ? eventOrValue.target.value : eventOrValue
    setInput(value)
  }

  return {
    checkAnswer,
    sentence,
    translation,
    onChange,
    languages,
    skipPair,
    disabledCheck,
    statusPractice,
  }
}
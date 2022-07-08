import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useData } from "../../../../hooks/useData"
import { useForm } from "../../../../hooks/useForm"
import { setLanguages, setUsedHelp, incrementUsedHelp } from "../../../../store/slices/practice"

export const usePractice = () => {
  const myLanguage = 'Español'
  const dispatch = useDispatch()
  const { languages, listToPracticeFiltered, usedHelp, loadStatus } = useSelector(state => state.practice)
  const { language, glossaryData } = useSelector(state => state.glossary)
  const { filter } = useSelector(state => state.myPairs)
  const { entry: input, updateEntry: setInput, focus, handleFocus } = useForm()

  useData()

  useEffect(() => {
    dispatch(setLanguages({ language1: myLanguage, language2: language }))
  }, [])

  const handleSwitchCharacterInput = ev => {
    if (usedHelp !== 1 && ev.target.checked) dispatch(setUsedHelp(1)) // Hasta que agregue más opciones de ayuda
    else dispatch(setUsedHelp(0))
  }

  const reverseThePractrice = () => {
    if (languages.language1 === myLanguage) {
      dispatch(setLanguages({ language1: language, language2: myLanguage }))
    } else {
      dispatch(setLanguages({ language1: myLanguage, language2: language }))
    }
  }

  const showClue = () => dispatch(incrementUsedHelp())
  const showSolution = () => dispatch(setUsedHelp(4))

  const existPairs = glossaryData[language]?.length > 0 || listToPracticeFiltered?.length > 0

  const characterMode = usedHelp >= 1

  return {
    listToPracticeFiltered,
    languages,
    reverseThePractrice,
    handleSwitchCharacterInput,
    characterMode,
    myLanguage,
    input,
    setInput,
    handleFocus,
    focus,
    existPairs,
    loadStatus,
    filter,
    showClue,
    showSolution
  }
}
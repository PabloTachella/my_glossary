import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { postData } from "../../../store/slices/glossary"
import { useForm } from "../../../hooks/useForm"
import { useEffect } from 'react';

export const useHandleForm = ({ glossaryData, language }) => {
  const { uid } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const {
    entry,
    translation,
    pairsList,
    focus,
    updateEntry,
    updateTranslation,
    addToPairsList,
    removeFromPairsList,
    handleFocus,
    resetPairsList
  } = useForm()

  useEffect(() => {
    const handleClickedKey = (ev) => {
      const clickedKey = ev.key

      if (clickedKey === "Enter") {
        ev.preventDefault()
        if (entry && translation) addToList({ entry, translation })
      }
    }

    document.addEventListener("keydown", handleClickedKey)

    return (() => document.removeEventListener("keydown", handleClickedKey))
  }, [entry, translation, glossaryData[language], pairsList])

  const disabledButton = !pairsList.length > 0

  const addToList = ({ entry, translation }) => {
    if (entry && translation) {
      let pairExists = glossaryData[language]
        .some(pair => pair.entry === entry || pair.translation === translation)

      if (!pairExists) pairExists = pairsList.some(pair => pair.entry === entry || pair.translation === translation)

      if (pairExists) {
        alert('la pareja ingresada ya existe')
      } else {
        const isSentence = entry.includes(' ') && translation.includes(' ')
        addToPairsList({ entry, translation, isSentence })
        updateEntry('')
        updateTranslation('')
        handleFocus()
      }
    }
  }

  const editPair = index => {
    const { entry, translation } = { ...pairsList[index] }
    removeFromPairsList(index)

    updateEntry(entry)
    updateTranslation(translation)
    handleFocus()
  }

  const saveData = () => {
    dispatch(postData({ pairsList, language, uid }))
    toast('¡Exito al guardar!', { autoClose: 2000 })
    resetPairsList()
  }

  return {
    entry,
    translation,
    pairsList,
    disabledButton,
    focus,
    updateEntry,
    updateTranslation,
    removeFromPairsList,
    handleFocus,
    addToList,
    editPair,
    saveData
  }
}
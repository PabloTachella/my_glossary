import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resetStatus } from "../../../store/slices/glossary"
import { updatePair } from "../../../store/slices/my-pairs"
import { EditPairsContext } from "../../views/MyPairs/context/EditPairsContext"

export const useHandleEditPair = () => {
  const dispatch = useDispatch()
  const {
    entry,
    translation,
    updateEntry,
    updateTranslation,
    focus,
    handleFocus,
    setShowEditModal,
    listChanges,
    setListChanges
  } = useContext(EditPairsContext)

  const { language, status } = useSelector(state => state.glossary)
  const { listToRender } = useSelector(state => state.myPairs)

  const finishEdition = () => {
    const indexPairToEdit = listToRender.findIndex(pair => pair.checked)
    const pairToEdit = listToRender[indexPairToEdit]

    const { entry: prevEntry, translation: prevTranslation, id } = { ...pairToEdit }
    const previouslyEdited = listChanges.edits.some(el => el.id == id)

    setListChanges(prev => {
      let editedElement

      if (previouslyEdited) {
        const previousEdition = prev.edits.find(el => el.id == id)
        const indexOfEdition = prev.edits.indexOf(previousEdition)

        editedElement = { ...previousEdition, edited: { id, entry, translation } }
        prev.edits.splice(indexOfEdition, 1)
      } else {
        editedElement = {
          id,
          original: { entry: prevEntry, translation: prevTranslation },
          edited: { entry, translation }
        }
      }

      return { ...prev, edits: prev.edits.concat(editedElement) }
    })

    dispatch(updatePair({ id, entry, translation }))

    setShowEditModal(false)

    // if (status !== 'idle') dispatch(resetStatus())
  }

  const closeEdit = () => {
    setShowEditModal(false)
  }

  return {
    language,
    entry,
    translation,
    updateEntry,
    updateTranslation,
    focus,
    handleFocus,
    finishEdition,
    closeEdit
  }
}
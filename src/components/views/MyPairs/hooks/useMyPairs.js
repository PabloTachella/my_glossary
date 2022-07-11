import { useContext } from "react"
import { useDispatch } from "react-redux"
import { useData } from "../hooks/useData"
import { deleteData, resetStatusSaveChanges, updateData } from "../../../../store/slices/glossary"
import { deletePairs, setCheckedItem } from "../../../../store/slices/my-pairs"
import { EditPairsContext } from "../context/EditPairsContext"

export const useMyPairs = () => {
  const dispatch = useDispatch()
  const {
    updateEntry,
    updateTranslation,
    showEditModal,
    setShowEditModal,
    initialListChanges,
    listChanges,
    setListChanges
  } = useContext(EditPairsContext)

  const {
    uid,
    statusSaveChanges,
    language,
    listToRender
  } = useData()

  // En esta función cargo los valores del par en el formulario de edición
  const editPair = () => {
    const indexPairToEdit = listToRender.findIndex(pair => pair.checked)
    const pairToEdit = listToRender[indexPairToEdit]

    updateEntry(pairToEdit.entry)
    updateTranslation(pairToEdit.translation)
    setShowEditModal(true)
  }

  const deletePair = () => {
    let listIdToDelete = []

    listToRender.forEach((pair) => {
      if (pair.checked) listIdToDelete.push(pair.id)
    })

    if (listIdToDelete.length > 0) {
      dispatch(deletePairs({ listIdToDelete }))
      setListChanges({ ...listChanges, deleted: [...listChanges.deleted, ...listIdToDelete] })
    }

    if (statusSaveChanges !== 'idle') dispatch(resetStatusSaveChanges())
  }

  const saveChanges = async () => {
    if (listChanges.edits.length > 0) {
      dispatch(updateData({ edits: listChanges.edits, language, uid }))
    }

    if (listChanges.deleted.length > 0) {
      dispatch(deleteData({ ids: listChanges.deleted, language, uid }))
    }
    setListChanges(initialListChanges)
  }

  const handleChangeCbox = index => dispatch(setCheckedItem({ index }))

  const editingDisabled = listToRender?.filter(pair => pair.checked).length !== 1
  const deleteDisabled = !listToRender?.some(pair => pair.checked)
  const disabledSaveButton = listChanges.deleted.length === 0 && listChanges.edits.length === 0

  return {
    statusSaveChanges,
    language,
    listToRender,
    editingDisabled,
    deleteDisabled,
    showEditModal,
    disabledSaveButton,
    editPair,
    deletePair,
    saveChanges,
    handleChangeCbox
  }
}
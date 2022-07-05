import React, { useState } from 'react'
import { useForm } from '../../../../hooks/useForm'

const EditPairsContext = React.createContext()

function EditPairsProvider({ children }) {

  const {
    entry,
    translation,
    focus,
    updateEntry,
    updateTranslation,
    handleFocus,
  } = useForm()

  const [showEditModal, setShowEditModal] = useState(false)
  // En esta variable se guardará informacion sobre edicion o eliminacion de pares
  // Más adelante se utilizará para actualizar la DB una vez que se precione "Guardar cambios"
  const initialListChanges = { edits: [], deleted: [] }
  const [listChanges, setListChanges] = useState(initialListChanges)
  // Ejemplo de elemento de edits 
  // {
  //   id,
  //   original: { entry, translation },
  //   edited: { entry, translation }
  // }

  const values = {
    entry,
    translation,
    focus,
    initialListChanges,
    listChanges,
    showEditModal,
    updateEntry,
    updateTranslation,
    handleFocus,
    setListChanges,
    setShowEditModal
  }

  return <EditPairsContext.Provider value={values}>{children}</EditPairsContext.Provider>
}

export { EditPairsProvider, EditPairsContext }
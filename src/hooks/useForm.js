import React from 'react'

const initialState = { entry: '', translation: '', pairsList: [], focus: true }

function FormReducer(state, action) {
  switch (action.type) {
    case 'setEntry': {
      return { ...state, entry: action.payload }
    }
    case 'setTranslation': {
      return { ...state, translation: action.payload }
    }
    case 'addPairsList': {
      return { ...state, pairsList: [...state.pairsList, action.payload] }
    }
    case 'removePairsList': {
      const pairs = [...state.pairsList]
      pairs.splice(action.payload, 1)
      return { ...state, pairsList: [...pairs] }
    }
    case 'resetPairsList': {
      return { ...state, pairsList: []}
    }
    case 'handleFocus': {
      return { ...state, focus: !state.focus }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useForm() {
  const [state, dispatch] = React.useReducer(FormReducer, initialState)
  const { entry, translation, pairsList, focus } = state

  const updateEntry = value => dispatch({ type: 'setEntry', payload: value })
  const updateTranslation = value => dispatch({ type: 'setTranslation', payload: value })
  const addToPairsList = value => dispatch({ type: 'addPairsList', payload: value })
  const removeFromPairsList = value => dispatch({ type: 'removePairsList', payload: value })
  const handleFocus = () => dispatch({ type: 'handleFocus' })
  const resetPairsList = () => dispatch({ type: 'resetPairsList'})

  return {
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
  }
}

export { useForm }
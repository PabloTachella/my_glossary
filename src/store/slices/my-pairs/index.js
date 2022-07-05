import { createSlice } from "@reduxjs/toolkit";

export const myPairsSlice = createSlice({
  name: "my-pairs",
  initialState: {
    list: [],
    listToRender: [],
    filter: 'Todos' // 'Todos', 'Palabras', 'Oraciones'
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload.filter
    },
    setList: (state, action) => {
      state.list = action.payload.data
    },
    setListToRender: (state, action) => {
      const { filter } = state

      if (filter === 'Todos') state.listToRender = state.list.map(pair => ({ ...pair, checked: false }))
      if (filter === 'Palabras') {
        const words = state.list.filter(pair => !pair.isSentence)
        state.listToRender = words.map(pair => ({ ...pair, checked: false }))
      }
      if (filter === 'Oraciones') {
        const sentences = state.list.filter(pair => pair.isSentence)
        state.listToRender = sentences.map(pair => ({ ...pair, checked: false }))
      }
    },
    setCheckedItem: (state, action) => {
      state.listToRender[action.payload.index].checked = !state.listToRender[action.payload.index].checked
    },
    setSelectAll: (state, action) => {
      if (action.payload.checked)
        state.listToRender = state.listToRender.map(pair => ({ ...pair, checked: true }))
      else
        state.listToRender = state.listToRender.map(pair => ({ ...pair, checked: false }))
    },
    deletePairs: (state, action) => {
      const { listIdToDelete } = action.payload
      const pairsNotToDelete = state.list.filter(pair => !listIdToDelete.includes(pair.id))
      state.list = [...pairsNotToDelete]
    },
    updatePair: (state, action) => {
      const { id, entry, translation } = action.payload
      const indexPairToEdit = state.list.findIndex(pair => pair.id === id)
      state.list[indexPairToEdit] = { ...state.list[indexPairToEdit], entry, translation }
    }
  }
})

export const { setListToRender,
  deletePairs,
  setList,
  setFilter,
  setCheckedItem,
  setSelectAll,
  updatePair } = myPairsSlice.actions

export default myPairsSlice.reducer
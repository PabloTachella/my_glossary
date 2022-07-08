import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fsGetListToPractice } from "../../../services/fsGetData";
import { fsUpdatePracticeValues } from "../../../services/fsUpdateData";

export const getListToPractice = createAsyncThunk(
  'practice/getListToPractice', async ({ email, language }) => {
    return await fsGetListToPractice({ email, language })
  }
)

export const updatePracticeValues = createAsyncThunk(
  'practice/updatePracticeValues', async ({ email, language, repracticeDate, id, lvlUnderstand, errors }) => {
    await fsUpdatePracticeValues({ email, language, repracticeDate, id, lvlUnderstand, errors })
    return {id}
  }
)

export const practiceSlice = createSlice({
  name: 'practice',
  initialState: {
    pairIndex: null,
    languages: { language1: '', language2: '' },
    statusPractice: 'idle', // 'idle' | 'correct' | 'incorrect'
    listToPractice: [],
    listToPracticeFiltered: [],
    usedHelp: 0, // Cantidad de ayuda utilizada en la sentencia actual, valor de 0 a 4
    errors: 0, // Nivel de error del usuario en la sentencia actual, valor de 0 a 3
    loadStatus: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    loadError: null,
  },
  reducers: {
    setPairIndex: (state, action) => {
      state.pairIndex = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages.language1 = action.payload.language1;
      state.languages.language2 = action.payload.language2;
    },
    setStatusPractice: (state, action) => {
      state.statusPractice = action.payload;
    },
    setListToPractice: (state, action) => {
      state.listToPractice = action.payload;
    },
    setListToPracticeFiltered: (state, action) => {
      const { filter } = action.payload

      if (filter === 'Todos')
        state.listToPracticeFiltered = state.listToPractice
      if (filter === 'Palabras') {
        const words = state.listToPractice.filter(pair => !pair.isSentence)
        state.listToPracticeFiltered = words
      }
      if (filter === 'Oraciones') {
        const sentences = state.listToPractice.filter(pair => pair.isSentence)
        state.listToPracticeFiltered = sentences
      }
    },
    removePracticedElement: (state, action) => {
      const list = [...state.listToPracticeFiltered]
      const elDeleted = list.shift()
      const indexElToRemove = state.listToPractice.findIndex(el => el.id === elDeleted.id)

      const list1 = [...state.listToPractice]
      list1.splice(indexElToRemove, 1)
      state.listToPractice = list1
    },
    setUsedHelp: (state, action) => {
      state.usedHelp = action.payload
    },
    incrementUsedHelp: (state, action) => {
      state.usedHelp = state.usedHelp < 4 ? state.usedHelp + 1 : state.usedHelp
    },
    incrementErrors: (state, action) => {
      state.errors = state.errors < 3 ? state.errors + 1 : state.errors
    },
    resetPractice: (state, action) => {
      state.pairIndex = null
      state.languages = { language1: '', language2: '' }
      state.statusPractice = 'idle'
      state.listToPractice = []
      state.listToPracticeFiltered = []
      state.usedHelp = 0
      state.errors = 0
      state.loadStatus = 'idle'
      state.loadError = null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(updatePracticeValues.fulfilled, (state, action) => {
        const data = [...state.listToPractice]
        const indexToRemove = data.findIndex(el => el.id === action.payload.id)
        data.splice(indexToRemove, 1)
        state.listToPractice = data
        state.errors = 0
      })
      .addCase(updatePracticeValues.rejected, (state, action) => {
        alert('Error al actualizar los valores de practica:', action.error.message)
        state.errors = 0
        state.usedHelp = 0 // revisar
      })
      .addCase(getListToPractice.pending, (state, action) => {
        state.loadStatus = 'loading'
      })
      .addCase(getListToPractice.fulfilled, (state, action) => {
        state.loadStatus = 'succeeded'
        state.listToPractice = action.payload
      })
      .addCase(getListToPractice.rejected, (state, action) => {
        state.loadStatus = 'failed'
        state.loadError = action.error.message
      })

  }
})

export const {
  setPairIndex,
  setLanguages,
  setStatusPractice,
  setListToPractice,
  removePracticedElement,
  incrementUsedHelp,
  setUsedHelp,
  incrementErrors,
  setListToPracticeFiltered,
  resetPractice
} = practiceSlice.actions
export default practiceSlice.reducer
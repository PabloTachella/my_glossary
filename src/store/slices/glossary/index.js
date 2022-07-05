import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fsDeleteData } from "../../../services/fsDeleteData";
import { fsGetGlossaryByLanguage } from "../../../services/fsGetData";
import { fsPostData } from "../../../services/fsSetData";
import { fsUpdateData } from "../../../services/fsUpdateData";
import getChangesInPairs from "../../../utils/getChangesInPairs";

export const getGlossaryByLanguage = createAsyncThunk(
  'glossary/getGlossaryByLanguage', async ({ email, language }) => {
    const { data } = await fsGetGlossaryByLanguage(email, language)

    return { language, data }
  }
)

export const postData = createAsyncThunk(
  'glossary/postData', async ({ pairsList, language, email }) => {
    let listSavedPairs = []

    for (const { entry, translation, isSentence } of pairsList) {
      const savedPair = await fsPostData({ email, entry, translation, isSentence, language })
      listSavedPairs.push(savedPair)
    }

    return { listSavedPairs, language }
  }
)

export const updateData = createAsyncThunk(
  'glossary/updateData', async ({ edits, language, email }) => {
    const updatedPairs = []

    for (const { original, edited, id } of edits) {
      // getChangesInPairs retorna un objeto con el/los valores editados
      const changes = getChangesInPairs(original, edited)

      await fsUpdateData({ email, language, changes, id })
      updatedPairs.push({ changes, id })
    }

    return { updatedPairs, language }
  }
)

export const deleteData = createAsyncThunk(
  'glossary/deleteData', async ({ ids, language, email }) => {

    for (const id of ids) {
      await fsDeleteData({ email, language, id })
    }

    return { ids, language }
  }
)


export const glossarySlice = createSlice({
  name: 'glossary',
  initialState: {
    language: 'Inglés',
    glossaryData: {},
    statusSaveChanges: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },

  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload.language
    },
    setGlossaryData: (state, action) => {
      state.glossaryData[action.payload.language] = action.payload.data
    },
    resetStatusSaveChanges: (state, action) => {
      state.statusSaveChanges = 'idle'
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getGlossaryByLanguage.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getGlossaryByLanguage.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.glossaryData[action.payload.language] = action.payload.data
      })
      .addCase(getGlossaryByLanguage.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(postData.fulfilled, (state, action) => {
        const { language, listSavedPairs } = { ...action.payload }
        const pairs = [...state.glossaryData[language]]

        state.glossaryData[language] = [...pairs].concat(listSavedPairs)
      })
      .addCase(postData.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(updateData.pending, (state, action) => {
        state.statusSaveChanges = 'loading'
      })
      .addCase(updateData.fulfilled, (state, action) => {
        // updatedPair es un array de objetos con id y cambios: [{id: 'alsdjfiewo', changes :{translation: 'Hello'}}]
        const { language, updatedPairs } = { ...action.payload }
        const pairs = [...state.glossaryData[language]]

        updatedPairs.forEach(updatedPair => {
          const indexOfTheElementToUpdate = pairs.findIndex(pair =>
            pair.id == updatedPair.id
          )
          const newPair = { ...state.glossaryData[language][indexOfTheElementToUpdate], ...updatedPair.changes }

          pairs.splice(indexOfTheElementToUpdate, 1, newPair)
        })
        state.statusSaveChanges = 'succeeded'
        state.glossaryData[language] = [...pairs]
      })
      .addCase(updateData.rejected, (state, action) => {
        state.statusSaveChanges = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteData.pending, (state, action) => {
        state.statusSaveChanges = 'loading'
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        const { language, ids } = { ...action.payload }
        const pairs = [...state.glossaryData[language]]

        ids.forEach(id => {
          const indexOfTheElementToDelete = pairs.findIndex(pair =>
            pair.id == id
          )
          pairs.splice(indexOfTheElementToDelete, 1)
        })
        state.statusSaveChanges = 'succeeded'
        state.glossaryData[language] = [...pairs]
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.statusSaveChanges = 'failed'
        state.error = action.error.message
      })
  }
})

export const {
  setLanguage,
  setGlossaryData,
  resetStatusSaveChanges
} = glossarySlice.actions

export default glossarySlice.reducer
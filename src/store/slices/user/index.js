import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fbAuthenticateUser, fbLoginUserWithLink, fbLogout } from "../../../services/fbAuth";

export const authenticateUser = createAsyncThunk('user/authenticateUser', async (email) => {
  return await fbAuthenticateUser(email)
})

export const loginUser = createAsyncThunk('user/loginUser', async email => {
  await fbLoginUserWithLink(email)
})

export const logoutUser = createAsyncThunk('user/logoutUser', async () => await fbLogout())

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    statusUser: 'loading', //'idle' | 'loading' | 'succeeded' | 'failed'
    statusSendMail: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    uid: null,
    error: null,
  },
  reducers: {
    setAuthentication: (state, action) => {
      state.email = action.payload.email
      state.uid = action.payload.uid
      state.statusUser = action.payload.statusUser
    },
    setEmail: (state, action) => {
      state.email = action.payload.email
    }
  },
  extraReducers(builder) {
    builder
      .addCase(authenticateUser.pending, (state, action) => {
        state.statusUser = 'loading'
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.uid = action.payload
        state.statusUser = 'succeeded'
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.statusUser = 'failed'
        state.error = action.error.message
      })
      .addCase(loginUser.pending, (state, action) => {
        state.statusSendMail = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.statusSendMail = 'succeeded'
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.statusSendMail = 'failed'
        state.error = action.error.message
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.statusUser = 'loading'
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.statusUser = 'idle'
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.statusUser = 'failed'
        state.error = action.error.message
      })
  }
})

export const { setAuthentication, setEmail } = userSlice.actions

export default userSlice.reducer

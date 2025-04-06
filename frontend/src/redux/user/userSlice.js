import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    error: false,
    loading: false,
  },
  reducers: {
    signInStart: (state) => {
       state.loading = true
       state.error = false
    },
    signInSuccess : (state,action) => {
      state.currentUser = action.payload
        state.loading = false
        state.error = false
    },
    signInFailure : (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    signUpStart: (state) => {
      state.loading = true
      state.error = false
    },
    signUpSuccess : (state,action) => {
      state.currentUser = action.payload
        state.loading = false
        state.error = false
    },
    signUpFailure : (state, action) => {
      state.loading = false
      state.error = action.payload
  },

  signOutSuccess(state){
    state.currentUser=null
    state.error=null
    state.loading=false
  },
  clearError: (state) => {
    state.error = null;
  },
  },
})

// Action creators are generated for each case reducer function
export const { signInStart, signInFailure, signInSuccess ,
    signUpStart, signUpFailure, signUpSuccess,signOutSuccess,clearError
 } = userSlice.actions

export default userSlice.reducer
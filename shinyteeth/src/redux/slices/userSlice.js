
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    credentials: {
    }
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    logout: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    signup: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const userData = (state) => state.user
export const { login, logout, signup } = userSlice.actions
export default userSlice.reducer

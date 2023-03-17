
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    credentials: {
      token: ''
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
    }
  }
})

export const userData = (state) => state.user
export const { login, logout } = userSlice.actions
export default userSlice.reducers

// Redux store config
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import userlistSlice from './slices/userlistSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    userlist: userlistSlice
  }
})

export default store

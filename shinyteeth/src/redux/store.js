// Redux store config
import userSlice from './slices/userSlice'
import userlistSlice from './slices/userlistSlice'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  user: userSlice,
  userlist: userlistSlice
})

const persistConfig = {
  key: 'queen#55$Viracocha',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export default store

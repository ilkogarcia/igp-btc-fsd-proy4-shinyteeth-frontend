
import { createSlice } from '@reduxjs/toolkit'

const userlistSlice = createSlice({
  name: 'userlist',
  initialState: {
    users: {
    }
  },
  reducers: {
    update: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const userList = (state) => state.userlist
export const { update } = userlistSlice.actions
export default userlistSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState: string = 'dashboard'

export const actualLinkSlice = createSlice({
  name: 'actualLink',
  initialState: initialState,
  reducers: {
    updateLink: (state, action) => {
      return action.payload
    }
  }
})

export const { updateLink } = actualLinkSlice.actions

export default actualLinkSlice.reducer

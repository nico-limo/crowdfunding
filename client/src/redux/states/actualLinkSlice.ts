import { createSlice } from '@reduxjs/toolkit'
import { LinkType } from '../../types'

const initialState: LinkType = 'dashboard'

export const actualLinkSlice = createSlice({
  name: 'actualLink',
  initialState: initialState,
  reducers: {
    updateLink: (state, action) => action.payload
  }
})

export const { updateLink } = actualLinkSlice.actions

export default actualLinkSlice.reducer

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type LinkType = 'dashboard' | 'profile' | 'create'

const initialState: LinkType = 'dashboard'

export const actualLinkSlice = createSlice({
  name: 'actualLink',
  initialState: 'dashboard' as LinkType,
  reducers: {
    updateLink: (state, action: PayloadAction<LinkType>) => action.payload
  }
})

export const { updateLink } = actualLinkSlice.actions

export default actualLinkSlice.reducer

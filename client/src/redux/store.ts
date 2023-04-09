import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './states/themeSlice'
import actualLinkSlice from './states/actualLinkSlice'
import campaignsSlice, { CampaignsState } from './states/campaignsSlice'
import { CampaignParsedInterface, LinkType, ThemeType } from '../types'

export interface AppStore {
  actualLink: LinkType
  theme: ThemeType
  campaigns: CampaignsState
}

export const store = configureStore<AppStore>({
  reducer: {
    actualLink: actualLinkSlice,
    theme: themeSlice,
    campaigns: campaignsSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

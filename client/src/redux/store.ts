import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './states/themeSlice'
import actualLinkSlice from './states/actualLinkSlice'
import { ThemeType } from '../types'

export interface AppStore {
  actualLink: string
  theme: ThemeType
}

export const store = configureStore<AppStore>({
  reducer: {
    actualLink: actualLinkSlice,
    theme: themeSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

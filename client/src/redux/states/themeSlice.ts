import { createSlice } from '@reduxjs/toolkit'
import { moon, sun } from '../../assets'
import { ThemeType } from '../../types'

const initialState: ThemeType = {
  darkmode: true,
  iconURL: moon
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme(state) {
      ;(state.darkmode = true), (state.iconURL = moon)
    },
    setDefaultTheme(state) {
      ;(state.darkmode = false), (state.iconURL = sun)
    }
  }
})

export const { setDarkTheme, setDefaultTheme } = themeSlice.actions

export default themeSlice.reducer

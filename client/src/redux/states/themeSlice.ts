import { createSlice } from '@reduxjs/toolkit'
import { moon, sun } from '../../assets'
import { ThemeType } from '../../types'

const initialState: ThemeType = {
  colors: {
    bg: '#13131a',
    text: '#445155'
  },
  darkmode: true,
  iconURL: moon
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme(state) {
      ;(state.colors.bg = '#13131a'),
        (state.colors.text = '#445155'),
        (state.darkmode = true),
        (state.iconURL = moon)
    },
    setDefaultTheme(state) {
      ;(state.colors.bg = '#ebfbff'),
        (state.colors.text = '#fff'),
        (state.darkmode = false),
        (state.iconURL = sun)
    }
  }
})

export const { setDarkTheme, setDefaultTheme } = themeSlice.actions

export default themeSlice.reducer

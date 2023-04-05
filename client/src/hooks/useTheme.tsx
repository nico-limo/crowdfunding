import { useDispatch, useSelector } from 'react-redux'

import { setDarkTheme, setDefaultTheme } from '../redux/states/themeSlice'
import { RootState } from '../redux/store'

const useTheme = () => {
  const dispatch = useDispatch()

  const { darkmode, iconURL } = useSelector((state: RootState) => state.theme)

  const toggleTheme = () => {
    if (darkmode) {
      dispatch(setDefaultTheme())
    } else {
      dispatch(setDarkTheme())
    }
  }
  return { darkmode, toggleTheme, iconURL }
}

export default useTheme

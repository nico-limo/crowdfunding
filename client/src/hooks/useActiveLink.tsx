import { useDispatch, useSelector } from 'react-redux'

import { updateLink } from '../redux/states/actualLinkSlice'
import { RootState } from '../redux/store'

const useActiveLink = () => {
  const dispatch = useDispatch()
  const activeLink = useSelector((state: RootState) => state.actualLink)

  const updateActiveLink = (link: string) => {
    dispatch(updateLink(link))
  }

  return { activeLink, updateActiveLink }
}

export default useActiveLink

import { Link, useNavigate } from 'react-router-dom'
import { logo } from '../assets'
import { navlinks } from '../constants'
import Icon from './Icon'
import { useActiveLink } from '../hooks'
import useTheme from '../hooks/useTheme'
import { LinkType } from '../types'

const Sidebar = () => {
  const navigate = useNavigate()
  const { activeLink, updateActiveLink } = useActiveLink()
  const { toggleTheme, iconURL } = useTheme()

  const onNavigate = (
    link: string,
    name: LinkType,
    disabled: boolean = true
  ) => {
    if (!disabled) {
      updateActiveLink(name)
      navigate(link)
    }
  }

  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh] '>
      <Link to='/'>
        <Icon
          size='52px'
          animated
          imgUrl={logo}
          onClick={() => {
            onNavigate('/', 'dashboard')
          }}
        />
      </Link>

      <div className='flex-1 flex flex-col justify-between items-center bg-black-700 rounded-[20px] w-[76px] py-4 mt-12'>
        <div className='flex flex-col justify-center items-center gap-3'>
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              animated
              isActive={activeLink === link.name}
              onClick={() => {
                onNavigate(link.link, link.name, link.disabled)
              }}
            />
          ))}
        </div>

        <Icon bg='black-700' imgUrl={iconURL} onClick={toggleTheme} animated />
      </div>
    </div>
  )
}

export default Sidebar

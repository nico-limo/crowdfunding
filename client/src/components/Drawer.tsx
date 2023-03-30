import { navlinks } from '../constants'
import CustomButton from './CustomButton'

type Props = {
  toggleDrawer: boolean
  activeLink: string
  onNavigate: (link: string, name: string, disabled?: boolean) => void
  onBtnAction: () => void
}

const Drawer = ({
  toggleDrawer,
  activeLink,
  onNavigate,
  onBtnAction
}: Props) => {
  const address = '0xasdasdasfsdhjkl'

  return (
    <div
      className={`absolute top-[60px] right-0 left-0 bg-black-700 z-10 rounded-[10px] shadow-secondary py-4 ${
        !toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'
      } transition-all duration-700`}
    >
      <ul className='mb-4'>
        {navlinks.map((link) => (
          <li
            key={`${link.name}-drawer`}
            className={`flex p-4 ${
              activeLink === link.name && 'bg-black-500'
            } gap-5 cursor-pointer transition duration-300 hover:bg-cyan-700 `}
            onClick={() => onNavigate(link.link, link.name, link.disabled)}
          >
            <img
              src={link.imgUrl}
              alt={link.name}
              className={`w-[24px] h-[24px] object-contain ${
                activeLink === link.name ? 'grayscale-0' : 'grayscale'
              }`}
            />
            <p
              className={`font-epilogue font-semibold text-[14px] ${
                activeLink === link.name ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              {link.name}
            </p>
          </li>
        ))}
      </ul>
      <CustomButton
        btnType='button'
        title={address ? 'Create a campaign' : 'Connect'}
        bg={address ? 'bg-green-700' : 'bg-purple-600'}
        onClick={onBtnAction}
      />
    </div>
  )
}

export default Drawer

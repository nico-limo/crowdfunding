import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomButton from './CustomButton'
import { logo, menu, search, thirdweb } from '../assets'
import { navlinks } from '../constants'
import UserIcon from './UserIcon'
import Drawer from './Drawer'

const Navbar = () => {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState<string>('dashboard')

  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)
  const address = '0xasdasdasfsdhjkl'

  const onNavigate = (link: string, name: string, disabled: boolean = true) => {
    if (!disabled) {
      setActiveLink(name)
      setToggleDrawer(false)
      navigate(link)
    }
  }

  const onBtnAction = () => {
    if (address) {
      navigate('create-campaign')
    } else {
      alert('Connect ')
    }
  }
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-black-700 rounded-[100px]'>
        <input
          type='text'
          placeholder='Search for campaigns'
          className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-gray-600 text-white bg-transparent outline-none'
        />
        <div className='w-[72px] h-full  rounded-[20px] bg-green-600 flex justify-center items-center cursor-pointer'>
          <img
            src={search}
            alt='search'
            className='w-[15px] h-[15px] object-contain'
          />
        </div>
      </div>

      <div className='sm:flex hidden flex-row justify-end gap-4'>
        <CustomButton
          btnType='button'
          title={address ? 'Create a campaign' : 'Connect'}
          bg={address ? 'bg-green-700' : 'bg-purple-600'}
          onClick={onBtnAction}
        />
        <Link to='/profile'>
          <UserIcon isFull />
        </Link>
      </div>

      {/* Small screen Navigation */}
      <div className='sm:hidden flex justify-between items-center relative'>
        <UserIcon size='sm' />
        <div className='cursor-pointer rounded-[10px] p-1 transition duration-300 ease-in-out grayscale hover:grayscale-0 '>
          <img
            src={menu}
            alt='menu'
            className='w-[32px] h-[32px] object-contain '
            onClick={() => setToggleDrawer(!toggleDrawer)}
          />
        </div>

        <Drawer
          activeLink={activeLink}
          onNavigate={onNavigate}
          toggleDrawer={toggleDrawer}
          onBtnAction={onBtnAction}
        />
      </div>
    </div>
  )
}

export default Navbar
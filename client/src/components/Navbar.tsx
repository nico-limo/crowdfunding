import { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserIcon, Drawer, CustomButton } from '../components'
import { menu } from '../assets'
import { useActiveLink } from '../hooks'
import useWeb3 from '../hooks/useWeb3'
import useCampaign from '../hooks/useCampaign'
import { filterCampaigns } from '../utils'

const Navbar = () => {
  const navigate = useNavigate()
  const {
    campaigns,
    userCampaigns,
    searchInput,
    updateSearch,
    updateFilteredCampaigns,
    updateUserFilteredCampaigns
  } = useCampaign()
  const { activeLink, updateActiveLink } = useActiveLink()
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)
  const { address, connect } = useWeb3()

  const onNavigate = (link: string, name: string, disabled: boolean = true) => {
    if (!disabled) {
      updateActiveLink(name)
      setToggleDrawer(false)
      navigate(link)
    }
  }

  const onBtnAction = async () => {
    if (address) {
      navigate('create')
    } else {
      await connect()
    }
  }

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredCampaigns = filterCampaigns(campaigns, searchTerm)
    const filteredUserCampaigns = filterCampaigns(userCampaigns, searchTerm)
    updateSearch(e.target.value)
    updateFilteredCampaigns(filteredCampaigns)
    updateUserFilteredCampaigns(filteredUserCampaigns)
  }

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-black-700 rounded-[100px]'>
        <input
          type='text'
          placeholder='Search for campaigns'
          className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-gray-600 bg-transparent outline-none'
          onChange={(e) => onSearch(e)}
          value={searchInput}
        />
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

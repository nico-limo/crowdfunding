import { Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar } from './components'
import { Home, Campaign, CreateCampaign, Profile } from './pages'
import useTheme from './hooks/useTheme'

export default function App() {
  const { colors } = useTheme()
  return (
    <div
      className={`relative sm:p-8 p-4 bg-[${colors.bg}] min-h-screen flex flex-row`}
    >
      <div className='sm:flex hidden mr-10'>
        <Sidebar />
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/campaign' element={<Campaign />} />
          <Route path='/create' element={<CreateCampaign />} />
        </Routes>
      </div>
    </div>
  )
}

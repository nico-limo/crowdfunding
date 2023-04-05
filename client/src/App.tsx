import { Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar } from './components'
import { Home, Campaign, CreateCampaign, Profile } from './pages'
import useTheme from './hooks/useTheme'
import { useActiveLink } from './hooks'
import { useEffect } from 'react'

export default function App() {
  const { updateActiveLink } = useActiveLink()
  const { darkmode } = useTheme()

  useEffect(() => {
    const path = location.pathname === '/' ? 'dashboard' : location.pathname
    updateActiveLink(path)
  }, [])

  const colorBg = darkmode ? 'bg-black-800' : 'bg-cyan-100'
  const colorText = darkmode ? 'text-white' : 'text-black'
  return (
    <div
      className={`relative sm:p-8 p-4 ${colorBg} ${colorText}   min-h-screen flex flex-row`}
    >
      <div className='sm:flex hidden mr-10'>
        <Sidebar />
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/campaign/:id' element={<Campaign />} />
          <Route path='/create' element={<CreateCampaign />} />
        </Routes>
      </div>
    </div>
  )
}

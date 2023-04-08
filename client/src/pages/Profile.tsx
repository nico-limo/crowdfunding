import { useEffect } from 'react'
import useWeb3 from '../hooks/useWeb3'
import { DisplayCampaigns } from '../components'
import useCampaign from '../hooks/useCampaign'

const Profile = () => {
  const { address, contract, getUserCampaigns } = useWeb3()
  const {
    userCampaigns,
    updateUserCampaigns,
    isLoadingUser,
    searchInput,
    filteredUserCampaigns
  } = useCampaign()

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (address && contract && !userCampaigns.length) {
        const data = await getUserCampaigns()
        updateUserCampaigns(data)
      }
    }
    fetchCampaigns()
  }, [address, contract])

  return (
    <DisplayCampaigns
      title={
        address
          ? `Yours Campaigns (${userCampaigns.length})`
          : 'Connect your Wallet'
      }
      isLoading={isLoadingUser}
      campaigns={searchInput ? filteredUserCampaigns : userCampaigns}
      isConnected={address ? true : false}
    />
  )
}

export default Profile

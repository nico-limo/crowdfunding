import { useState, useEffect } from 'react'
import useWeb3 from '../hooks/useWeb3'
import { CampaignParsedInterface } from '../types'
import { DisplayCampaigns } from '../components'

const Profile = () => {
  const { address, contract, getUserCampaigns } = useWeb3()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [campaigns, setCampaigns] = useState<CampaignParsedInterface[]>([])

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (address && contract) {
        const data = await getUserCampaigns()
        setCampaigns(data)
        setIsLoading(false)
      }
    }
    fetchCampaigns()
  }, [address, contract])

  return (
    <DisplayCampaigns
      title={
        address
          ? `Yours Campaigns (${campaigns.length})`
          : 'Connect your Wallet'
      }
      isLoading={isLoading}
      campaigns={campaigns}
      isConnected={address ? true : false}
    />
  )
}

export default Profile

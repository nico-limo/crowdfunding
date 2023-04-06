import { useState, useEffect } from 'react'
import useWeb3 from '../hooks/useWeb3'
import { CampaignParsedInterface } from '../types'
import { DisplayCampaigns } from '../components'

const Home = () => {
  const { address, contract, getCampaigns } = useWeb3()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [campaigns, setCampaigns] = useState<CampaignParsedInterface[]>([])
  getCampaigns()

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (address && contract) {
        const data = await getCampaigns()
        setCampaigns(data)
        setIsLoading(false)
      }
    }
    fetchCampaigns()
  }, [address, contract])

  return (
    <DisplayCampaigns
      title='All Campaigns'
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Home

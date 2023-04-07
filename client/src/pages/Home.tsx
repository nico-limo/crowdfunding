import { useEffect } from 'react'
import useWeb3 from '../hooks/useWeb3'
import { DisplayCampaigns } from '../components'
import useCampaign from '../hooks/useCampaign'

const Home = () => {
  const { contract, getCampaigns } = useWeb3()
  const {
    campaigns,
    updateCampaigns,
    isLoadingAll,
    filteredCampaigns,
    searchInput
  } = useCampaign()

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (contract && !campaigns.length) {
        const data = await getCampaigns()
        updateCampaigns(data)
      }
    }
    fetchCampaigns()
  }, [contract])

  return (
    <DisplayCampaigns
      title={`All Campaigns (${campaigns.length})`}
      isLoading={isLoadingAll}
      campaigns={searchInput ? filteredCampaigns : campaigns}
    />
  )
}

export default Home

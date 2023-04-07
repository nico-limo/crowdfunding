import { useDispatch, useSelector } from 'react-redux'
import {
  setCampaigns,
  setUserCampaigns,
  setSearch,
  setFilteredCampaigns
} from '../redux/states/campaignsSlice'
import { RootState } from '../redux/store'
import { CampaignParsedInterface } from '../types'

const useCampaign = () => {
  const dispatch = useDispatch()
  const {
    campaigns,
    isLoadingAll,
    isLoadingUser,
    userCampaigns,
    filteredCampaigns,
    searchInput
  } = useSelector((state: RootState) => state.campaigns)

  const updateCampaigns = (campaigns: CampaignParsedInterface[]) => {
    dispatch(setCampaigns(campaigns))
  }
  const updateUserCampaigns = (campaigns: CampaignParsedInterface[]) => {
    dispatch(setUserCampaigns(campaigns))
  }
  const updateFilteredCampaigns = (campaigns: CampaignParsedInterface[]) => {
    dispatch(setFilteredCampaigns(campaigns))
  }
  const updateSearch = (value: string) => {
    dispatch(setSearch(value))
  }

  return {
    campaigns,
    isLoadingAll,
    userCampaigns,
    isLoadingUser,
    updateCampaigns,
    updateUserCampaigns,
    filteredCampaigns,
    updateSearch,
    searchInput,
    updateFilteredCampaigns
  }
}

export default useCampaign

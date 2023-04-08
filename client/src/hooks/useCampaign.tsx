import { useDispatch, useSelector } from 'react-redux'
import {
  setCampaigns,
  setUserCampaigns,
  setSearch,
  setFilteredCampaigns,
  setFilteredUserCampaigns
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
    filteredUserCampaigns,
    searchInput
  } = useSelector((state: RootState) => state.campaigns)

  /**
   * Update the state of all campaigns
   *
   * @param campaigns - An array of parsed campaign objects
   */
  const updateCampaigns = (campaigns: CampaignParsedInterface[]) => {
    dispatch(setCampaigns(campaigns))
  }

  /**
   * Update the state of campaigns owned by the user
   *
   * @param campaigns - An array of parsed campaign objects
   */
  const updateUserCampaigns = (campaigns: CampaignParsedInterface[]) => {
    dispatch(setUserCampaigns(campaigns))
  }

  /**
   * Update the state of filtered campaigns based on the search input
   *
   * @param campaigns - An array of parsed campaign objects
   */
  const updateFilteredCampaigns = (campaigns: CampaignParsedInterface[]) => {
    dispatch(setFilteredCampaigns(campaigns))
  }

  /**
   * Update the state of filtered User campaigns based on the search input
   *
   * @param campaigns - An array of parsed campaign objects
   */
  const updateUserFilteredCampaigns = (
    campaigns: CampaignParsedInterface[]
  ) => {
    dispatch(setFilteredUserCampaigns(campaigns))
  }

  /**
   * Update the search input state on the Navbar
   *
   * @param value - The value to update the search input state with
   */
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
    filteredUserCampaigns,
    updateSearch,
    searchInput,
    updateFilteredCampaigns,
    updateUserFilteredCampaigns
  }
}

export default useCampaign

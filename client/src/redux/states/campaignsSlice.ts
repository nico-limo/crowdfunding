import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CampaignParsedInterface } from '../../types'

export interface CampaignsState {
  campaigns: CampaignParsedInterface[]
  userCampaigns: CampaignParsedInterface[]
  filteredCampaigns: CampaignParsedInterface[]
  isLoadingAll: boolean
  isLoadingUser: boolean
  searchInput: string
}

const initialState: CampaignsState = {
  campaigns: [],
  userCampaigns: [],
  filteredCampaigns: [],
  isLoadingAll: true,
  isLoadingUser: true,
  searchInput: ''
}

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    setCampaigns(state, action: PayloadAction<CampaignParsedInterface[]>) {
      state.campaigns = action.payload
      state.isLoadingAll = false
    },
    setUserCampaigns(state, action: PayloadAction<CampaignParsedInterface[]>) {
      state.userCampaigns = action.payload
      state.isLoadingUser = false
    },
    setFilteredCampaigns(
      state,
      action: PayloadAction<CampaignParsedInterface[]>
    ) {
      state.filteredCampaigns = action.payload
    },

    setSearch(state, action: PayloadAction<string>) {
      state.searchInput = action.payload
    }
  }
})

export const {
  setCampaigns,
  setUserCampaigns,
  setFilteredCampaigns,
  setSearch
} = campaignsSlice.actions
export default campaignsSlice.reducer

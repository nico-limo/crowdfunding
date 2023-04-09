import { BigNumber } from 'ethers'

// Componentns Tpes

export type NavLinksType = {
  name: LinkType
  imgUrl: string
  link: string
  disabled: boolean
}
export type CustomButtonType = {
  onClick?: () => void
  title: string
  bg?: string
  btnType?: button | reset | submit
  fullWidth?: boolean
  isLoading?: boolean
}
export type UserIconType = {
  size?: 'sm' | 'md'
  isFull?: boolean
}

export type ThemeType = {
  darkmode: boolean
  iconURL: string
}

export type DisplayCampaignType = {
  title: string
  campaigns: CampaignParsedInterface[]
  isLoading: boolean
  isConnected?: boolean
}

export type FundCardType = {
  campaign: CampaignParsedInterface
  handleClick: any
}

export type CountBoxType = {
  title: string
  value: string
}

export type FormFieldType = {
  label: string
  placeholder: string
  inputType?: 'text' | 'date' | 'url'
  value: string
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void
  isTextArea?: boolean
}

// Elements and variables interfaces
export interface IconInterface {
  size?: string
  imgUrl: string
  isActive?: boolean
  onClick: () => void
  bg?: string
  disabled?: boolean
  animated?: boolean
}

export interface CampainInterface {
  name: string
  title: string
  description: string
  target: string
  deadline: string
  image: string
}
export interface CampaignCallData extends CampainInterface {
  amountCollected: BigNumber
  owner: string
  pId: number
  deadline: BigNumber
  target: BigNumber
}

export interface CampaignParsedInterface extends CampaignCallData {
  amountCollected: string
  deadline: number
  target: string
}

export interface DonatorInterface {
  donator: any
  donation: string
}

export interface DonatorsData {
  0: string[]
  1: BigNumber[]
}

export type LinkType =
  | 'dashboard'
  | 'profile'
  | 'create'
  | 'payment'
  | 'withdraw'
  | 'logout'

import { formatEther, parseEther } from 'ethers/lib/utils'
import { CampaignParsedInterface, CampainInterface } from '../types'

/**
 * Calculates the number of days left until a deadline.
 *
 * @param deadline The deadline, either a date string or a number (in milliseconds).
 * @returns The number of days left until the deadline, as a string.
 */
export const daysLeft = (deadline: string | number): string => {
  const now = new Date().getTime()
  const deadlineTime = new Date(deadline).getTime()
  const difference = deadlineTime - now

  if (difference <= 0) {
    return '0'
  }
  const remainingDays = Math.ceil(difference / (1000 * 60 * 60 * 24))
  return remainingDays.toString()
}

/**
 * Calculates the percentage of the goal that has been raised.
 *
 * @param goal The fundraising goal amount, as a string.
 * @param raisedAmount The amount of ethers raised so far, as a string.
 * @returns The percentage of the goal that has been raised, as a number.
 */
export const calculateBarPercentage = (
  goal: string,
  raisedAmount: string
): number => {
  const percentage = Math.round((Number(raisedAmount) * 100) / Number(goal))
  return percentage
}

/**
 * Checks if an image exists at a given URL.
 *
 * @param url The URL of the image to check.
 * @param callback A callback function that takes a boolean indicating whether the image exists or not.
 */
export const checkIfImage = (
  url: string,
  callback: (value: boolean) => void
) => {
  const img = new Image()
  img.src = url

  if (img.complete) callback(true)
  img.onload = () => callback(true)
  img.onerror = () => callback(false)
}

/**
 * Filter campaigns based on a search term
 * @param campaigns An array of campaign objects
 * @param searchTerm The search term to filter by
 * @returns An array of campaign objects that match the search term
 */
export const filterCampaigns = (
  campaigns: CampaignParsedInterface[],
  searchTerm: string
) => {
  return campaigns.filter(
    (campaign) =>
      campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

/**
 * Calculate the amount collected from a campaign
 * @param totalAmount The actual total amount of the campaign
 * @param amount The amount sended by the donator
 * @returns The new total amount
 */
export const getAmountCollected = (
  totalAmount: string,
  amount: string
): string => {
  const totalAmountBN = parseEther(totalAmount)
  const amountBN = parseEther(amount)
  const amountCollectedBN = totalAmountBN.add(amountBN)

  const amountCollected = formatEther(amountCollectedBN)
  return amountCollected
}

export const INITIAL_FORM: CampainInterface = {
  name: '',
  title: '',
  description: '',
  target: '',
  deadline: '',
  image: ''
}

export const CROWDFUNDING_ADDRESS = '0xd66b177853d9D9bB4942D4537Aeb6f7fB28aB13F'

import { CampainInterface } from '../types'

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

export const calculateBarPercentage = (
  goal: number,
  raisedAmount: number
): number => {
  const percentage = Math.round((raisedAmount * 100) / goal)
  return percentage
}

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

export const INITIAL_FORM: CampainInterface = {
  name: '',
  title: '',
  description: '',
  target: '',
  deadline: '',
  image: ''
}

export const CROWDFUNDING_ADDRESS = '0xEb74a94E5431Ac5E1521744AA6e545Be27f42f17'

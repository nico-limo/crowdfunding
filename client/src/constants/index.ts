import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw
} from '../assets'
import { NavLinksType } from '../types'

export const navlinks: NavLinksType[] = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
    disabled: false
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create',
    disabled: false
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/',
    disabled: true
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/',
    disabled: true
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
    disabled: false
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true
  }
]

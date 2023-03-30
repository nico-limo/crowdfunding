export type NavLinksType = {
  name: string
  imgUrl: string
  link: string
  disabled: boolean
}
export type CustomButtonType = {
  onClick: () => void
  title: string
  bg?: string
  btnType?: button | reset | submit
}
export type UserIconType = {
  size?: 'sm' | 'md'
  isFull?: boolean
}

export interface IconInterface {
  size?: string
  imgUrl: string
  isActive?: boolean
  onClick: () => void
  bg?: string
  disabled?: boolean
  animated?: boolean
}

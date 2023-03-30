import React from 'react'
import { CustomButtonType } from '../types'

const CustomButton = ({ onClick, title, bg, btnType }: CustomButtonType) => {
  const bgColor = bg ?? 'bg-transparent'
  const animation = 'transition duration-300 ease-in-out hover:opacity-40'
  return (
    <button
      type={btnType ?? 'button'}
      onClick={onClick}
      className={`${bgColor} font-epilogue font-semibold text-[16] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${animation} `}
    >
      {title}
    </button>
  )
}

export default CustomButton

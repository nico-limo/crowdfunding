import React from 'react'
import { CountBoxType } from '../types'

const CountBox = ({ title, value }: CountBoxType) => {
  return (
    <div className='flex flex-col items-center w-[150px]'>
      <h4 className='font-epilogue font-bold text-[30px] p-3 bg-black-700 rounded-t-[10px] w-full text-center truncate'>
        {value}
      </h4>
      <p className='font-epilogue font-normal text-[16px] text-gray-500 bg-black-900 px-3 py-2 rounded-b-[10px] w-full text-center'>
        {title}
      </p>
    </div>
  )
}

export default CountBox

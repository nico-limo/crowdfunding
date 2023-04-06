import { tagType, thirdweb } from '../assets'
import { FundCardType } from '../types'
import { daysLeft } from '../utils'
import { BalanceSection } from '../components'

const FundCard = ({ campaign, handleClick }: FundCardType) => {
  const {
    amountCollected,
    deadline,
    description,
    image,
    name,
    owner,
    target,
    title
  } = campaign

  const remainingDays = daysLeft(deadline)

  return (
    <div
      className='sm:w-[288px] border-2 border-transparent p-4 w-full rounded-[15px] bg-black-700 cursor-pointer hover:scale-105 hover:border-cyan-700 transform transition duration-300'
      onClick={handleClick}
    >
      <img
        src={image}
        alt='fund'
        className='w-full h-[158px] object-cover rounded-[15px]'
      />
      <div className='flex flex-col p-4'>
        <div className='flex flex-row items-center mb-[18px]'>
          <img
            src={tagType}
            alt='tag'
            className='w-[17px] h-[17px] object-contain'
          />
          <p className='ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-gray-500 '>
            Travel
          </p>
        </div>
        <div className='block'>
          <h3 className='font-epilogue font-semibold text-[16px] text-left leading-[26px] truncate'>
            {title}
          </h3>
          <p className='mt-[5px] font-epilogue font-normal text-gray-500 text-left leading-[16px] truncate'>
            {description}
          </p>
        </div>
        <div className='flex justify-between flex-wrap mt-[15px] gap-2'>
          <BalanceSection
            amount={amountCollected}
            label={`Raised of ${target}`}
          />
          <BalanceSection amount={remainingDays} label='Days Left' />
        </div>
      </div>
      <div className='flex items-center mt-[20px] gap-[12px]'>
        <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-black-800'>
          <img
            src={thirdweb}
            alt=' user'
            className='w-1/2 h-1/2 object-contain'
          />
        </div>
        <p className='flex-1 font-epilogue font-[12px] text-gray-500 truncate'>
          by <span className='text-gray-400'>{owner}</span>
        </p>
      </div>
    </div>
  )
}

export default FundCard

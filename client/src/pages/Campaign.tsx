import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CountBox, CustomButton, Loader } from '../components'
import { calculateBarPercentage, daysLeft } from '../utils'
import { thirdweb } from '../assets'
import { CampaignParsedInterface } from '../types'
import useWeb3 from '../hooks/useWeb3'

const Campaign = () => {
  const { state }: { state: CampaignParsedInterface } = useLocation()
  const {
    amountCollected,
    deadline,
    description,
    image,
    owner,
    pId,
    target,
    title
  } = state
  const { address, contract } = useWeb3()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [amount, setAmount] = useState<string>('')
  const [donators, setDonators] = useState([])

  const remainingDays = daysLeft(deadline)
  return (
    <div>
      {isLoading && <Loader />}
      <div className='w-full flex md:flex-row flex-col mt-10 gap-[30px]'>
        <div className='flex-1 flex-col'>
          <img
            src={image}
            alt='campaign'
            className='w-full h-[410px] object-contain rounded-xl'
          />
          <div className='relative w-full h-[5px] bg-black-500 mt-2'>
            <div
              className='absolute h-full bg-green-600'
              style={{
                width: `${calculateBarPercentage(target, amountCollected)}%`,
                maxWidth: '100%'
              }}
            >
              asd
            </div>
          </div>
        </div>

        <div className='flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]'>
          <CountBox title='Days Left' value={remainingDays} />
          <CountBox title={`Raised of ${target}`} value={amountCollected} />
          <CountBox title='Total Backers' value={donators.length.toString()} />
        </div>
      </div>
    </div>
  )
}

export default Campaign

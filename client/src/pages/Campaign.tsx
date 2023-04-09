import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CountBox, CustomButton } from '../components'
import { calculateBarPercentage, daysLeft, getAmountCollected } from '../utils'
import { thirdweb } from '../assets'
import { CampaignParsedInterface, DonatorInterface } from '../types'
import useWeb3 from '../hooks/useWeb3'
import useCampaign from '../hooks/useCampaign'

const Campaign = () => {
  const { state }: { state: CampaignParsedInterface } = useLocation()
  const [campaignState, setCampaignState] = useState(state)
  const { amountCollected, deadline, description, image, owner, pId, target } =
    campaignState
  const { address, contract, donate, getDonations } = useWeb3()
  const { campaigns } = useCampaign()
  const totalCampaigns = campaigns.filter(
    (campaign) => campaign.owner === owner
  ).length
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [amount, setAmount] = useState<string>('')
  const [donators, setDonators] = useState<DonatorInterface[]>([])

  const handleDonate = async () => {
    try {
      if (address && contract) {
        setIsLoading(true)
        await donate(pId, amount)
        const newTotalAmount = getAmountCollected(amountCollected, amount)
        setCampaignState((prevState) => ({
          ...prevState,
          amountCollected: newTotalAmount
        }))
        setAmount('')
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
    }
  }

  const remainingDays = daysLeft(deadline)

  useEffect(() => {
    const fetchDonators = async () => {
      const data = await getDonations(pId)
      if (data.length) {
        setDonators(data)
      }
    }
    if (contract) fetchDonators()
  }, [contract, campaignState])

  return (
    <div>
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
            ></div>
          </div>
        </div>

        <div className='flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]'>
          <CountBox title='Days Left' value={remainingDays} />
          <CountBox title={`Raised of ${target}`} value={amountCollected} />
          <CountBox title='Total Backers' value={donators.length.toString()} />
        </div>
      </div>

      {/* CREATOR SECTION */}
      <div className='mt-[60px] flex lg:flex-row flex-col gap-5'>
        <div className='flex-[2] flex flex-col gap-[40px]'>
          <div>
            <h4 className='font-epilogue font-semibold text-[18px] uppercase'>
              Creator
            </h4>
            <div className='mt-[20px] flex flex-row items-center flex-wrap gap-[14px]'>
              <div className='w-[52px] h-[52px] flex items-center justify-center rounded-full bg-black-600 cursor-pointer'>
                <img
                  src={thirdweb}
                  alt='user'
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
              <div>
                <h4 className='font-epilogue font-semibold text-[14px] break-all'>
                  {owner}
                </h4>
                <p className='mt-[4px] font-epilogue font-normal text-[12px] text-gray-500'>
                  {`${totalCampaigns} Campaigns`}
                </p>
              </div>
            </div>
          </div>

          {/* STORY SECTION */}

          <div>
            <h4 className='font-epilogue font-semibold text-[18px] uppercase'>
              Story
            </h4>
            <div className='mt-[20px]'>
              <p className='font-epilogue font-normal text-[16px] leading-[26px] text-justify text-gray-500'>
                {description}
              </p>
            </div>
          </div>

          {/* DONATORS SECTION */}
          <div>
            <h4 className='font-epilogue font-semibold text-[18px] uppercase'>
              Donators
            </h4>
            <div className='mt-[20px] flex flex-col gap-4 max-h-[300px] overflow-y-auto'>
              {donators.length > 0 ? (
                donators.map((item, i) => (
                  <div
                    key={`${item.donator}-${i}`}
                    className='flex justify-between items-center gap-4'
                  >
                    <p className='font-epilogue font-normal text-[16px] text-gray-400 leading-[26px] break-all truncate'>{`${
                      i + 1
                    }. ${item.donator}`}</p>
                    <p className='font-epilogue font-normal text-[16px] text-gray-500 leading-[26px] break-all'>
                      {item.donation}
                    </p>
                  </div>
                ))
              ) : (
                <p className='font-epilogue font-normal text-[16px] leading-[26px] text-justify text-gray-500'>
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* FUND SECTION*/}
        <div className='flex-1'>
          <h4 className='font-epilogue font-semibold text-[18px] uppercase'>
            Funds
          </h4>
          <div className='mt-[20px] flex flex-col p-4 bg-black-700 rounded-[10px]'>
            <p className='font-epilogue font-medium text-[20px] leading-[30px] text-center text-gray-500'>
              Fund the campaign
            </p>
            <div className='mt-[30px]'>
              <input
                type='number'
                placeholder='ETH 0.1'
                step='0.01'
                className='w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-black-500 bg-transparent font-epilogue text-[18px] leading-[30px] placeholder:text-gray-600 rounded-[10px]'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className='my-[20px] p-4 bg-black-800 rounded-[10px]'>
                <h4 className='font-epilogue font-semibold text-[14px] leading-[22px] '>
                  Back it because you believe in it.
                </h4>
                <p className='mt-[20px] font-epilogue font-normal leading-[22px] text-gray-500'>
                  Support the project for no rewardm just because it speaks to
                  you.
                </p>
              </div>
              <CustomButton
                btnType='button'
                title='Fund Campaign'
                bg='bg-purple-600'
                fullWidth
                isLoading={isLoading}
                onClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campaign

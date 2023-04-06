import { CampaignParsedInterface, DisplayCampaignType } from '../types'
import { useNavigate } from 'react-router-dom'
import { loader } from '../assets'
import FundCard from './FundCard'

const DisplayCampaigns = ({
  campaigns,
  isLoading,
  title,
  isConnected
}: DisplayCampaignType) => {
  const navigate = useNavigate()

  const handleNavigate = (campaign: CampaignParsedInterface) => {
    navigate(`/campaign/${campaign.title}`, {
      state: campaign
    })
  }
  return (
    <div>
      <h1 className='font-epilogue font-semibold text-[18px] text-left'>
        {title}

        <div className='flex flex-wrap mt-[20px] gap-[26px]'>
          {isConnected && isLoading && (
            <img
              src={loader}
              alt='loader'
              className='w-[100px] h-[100px] object-contain'
            />
          )}

          {!isLoading && campaigns.length === 0 && (
            <p className='font-epilogue font-semibold text-[14px] leading-[30px] text-gray-500'>
              There is not activate campaigns
            </p>
          )}

          {!isLoading &&
            campaigns.length > 0 &&
            campaigns.map((campaign) => (
              <FundCard
                key={campaign.pId}
                campaign={campaign}
                handleClick={() => handleNavigate(campaign)}
              />
            ))}
        </div>
      </h1>
    </div>
  )
}

export default DisplayCampaigns

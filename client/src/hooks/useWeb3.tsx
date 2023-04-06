import {
  useAddress,
  useContract,
  useContractWrite,
  useMetamask
} from '@thirdweb-dev/react'
import { CROWDFUNDING_ADDRESS } from '../utils'
import {
  CampaignCallData,
  CampaignParsedInterface,
  CampainInterface
} from '../types'
import { formatEther } from 'ethers/lib/utils'
import { Campaign } from '../pages'

const useWeb3 = () => {
  const { contract } = useContract(CROWDFUNDING_ADDRESS)
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    'createCampaign'
  )
  const address = useAddress()
  const connect = useMetamask()

  const publishCampaign = async (form: CampainInterface) => {
    try {
      const { title, deadline, description, image, target } = form
      const data = await createCampaign([
        address,
        title,
        description,
        target,
        new Date(deadline).getTime(),
        image
      ])
      console.log('Contract call Success ', data)
    } catch (error) {
      console.log('Contract call Failure ', error)
    }
  }

  const getCampaigns = async (): Promise<CampaignParsedInterface[]> => {
    try {
      const campaigns = await contract?.call('getCampaigns')
      if (campaigns && campaigns.length) {
        const parsedCampaigns: CampaignParsedInterface[] = campaigns.map(
          (campaing: CampaignCallData, i: number) => ({
            owner: campaing.owner,
            title: campaing.title,
            description: campaing.description,
            target: formatEther(campaing.target.toString()),
            deadline: campaing.deadline.toNumber(),
            amountCollected: formatEther(campaing.amountCollected.toString()),
            image: campaing.image,
            pId: i
          })
        )
        return parsedCampaigns
      }
      return []
    } catch (error) {
      console.log('Contract call Failure ', error)
      return []
    }
  }

  const getUserCampaigns = async () => {
    if (address) {
      const allCampaigns = await getCampaigns()

      const filteredCampaigns = allCampaigns.filter(
        (campaign) => campaign.owner.toLowerCase() === address.toLowerCase()
      )

      return filteredCampaigns
    }
    return []
  }

  return {
    connect,
    publishCampaign,
    address,
    contract,
    getCampaigns,
    getUserCampaigns
  }
}

export default useWeb3

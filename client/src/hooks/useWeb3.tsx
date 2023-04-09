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
  CampainInterface,
  DonatorInterface,
  DonatorsData
} from '../types'
import { formatEther, parseEther } from 'ethers/lib/utils'

/**
 * A custom hook that provides various Web3 functionality for interacting with the Ethereum network.
 * @returns An object containing various Web3 functionality.
 */

const useWeb3 = () => {
  const { contract } = useContract(CROWDFUNDING_ADDRESS)
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    'createCampaign'
  )
  const address = useAddress()
  const connect = useMetamask()

  /**
   * Publishes a new campaign to the network.
   * @param form An object containing the details of the new campaign to be published.
   */
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
    } catch (error) {
      console.error(error)
      throw 'Error on calling the function'
    }
  }

  /**
   * Retrieves a list of all campaigns on the network.
   * @returns A promise that resolves to an array of parsed campaign data.
   */
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
      return []
    }
  }

  /**
   * Retrieves a list of all campaigns owned by the current user.
   * @returns A promise that resolves to an array of parsed campaign data.
   */
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

  /**
  Makes a donation to a campaign using the smart contract.
  @param pId - The id of the campaign to donate to.
  @param amount - The amount to donate in Ether.
  @returns - A Promise that resolves to the transaction data returned by the contract, or undefined if the contract is not initialized.
  */
  const donate = async (pId: number, amount: string) => {
    try {
      const data = await contract?.call('donateToCampaign', pId, {
        value: parseEther(amount)
      })
      return data
    } catch (error) {
      console.error(error)
      throw 'Error on donate'
    }
  }

  /**
   * Gets an array of donations for a specific campaign
   * @param pId The ID of the campaign to get the donations for
   * @returns An array of `DonatorInterface` objects containing information about each donation
   */
  const getDonations = async (pId: number) => {
    const donations: DonatorsData = await contract?.call('getDonators', pId)

    const numberOfDonations: number = donations[0].length

    const parsedDonations: DonatorInterface[] = []

    // Loop through each donation in the array and parse the data into `DonatorInterface` objects
    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: formatEther(donations[1][i].toString())
      })
    }

    return parsedDonations
  }

  return {
    connect,
    publishCampaign,
    address,
    contract,
    getCampaigns,
    getUserCampaigns,
    donate,
    getDonations
  }
}

export default useWeb3

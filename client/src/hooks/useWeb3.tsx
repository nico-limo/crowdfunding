import {
  useAddress,
  useContract,
  useContractWrite,
  useMetamask
} from '@thirdweb-dev/react'
import React from 'react'
import { CROWDFUNDING_ADDRESS } from '../utils'
import { CampainInterface } from '../types'

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
      const { title, deadline, description, image, name, target } = form
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
  return { connect, publishCampaign, address }
}

export default useWeb3

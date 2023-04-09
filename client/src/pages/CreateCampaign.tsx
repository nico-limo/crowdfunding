import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Banner, CustomButton, FormField, Loader } from '../components'
import { INITIAL_FORM, checkIfImage } from '../utils'
import useWeb3 from '../hooks/useWeb3'
import { parseUnits } from 'ethers/lib/utils'
import useCampaign from '../hooks/useCampaign'

const CreateCampaign = () => {
  const navigate = useNavigate()
  const { updateCampaigns, updateUserCampaigns } = useCampaign()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { publishCampaign, getCampaigns, getUserCampaigns, address } = useWeb3()
  const [form, setForm] = useState(INITIAL_FORM)

  const handleFormFieldChange = (
    fieldName: string,
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault()
      checkIfImage(form.image, async (exists) => {
        if (exists) {
          setIsLoading(true)
          const targetConverted = form.target.replace(/,/g, '.')
          const parsedTarget = parseUnits(targetConverted, 18).toString()
          await publishCampaign({
            ...form,
            target: parsedTarget
          })
          const newCampaigns = await getCampaigns()
          const newUserCampaigns = await getUserCampaigns()
          updateCampaigns(newCampaigns)
          updateUserCampaigns(newUserCampaigns)
          setIsLoading(false)
          navigate('/')
        } else {
          alert('Provide valid image URL')
          setForm({ ...form, image: '' })
          setIsLoading(false)
        }
      })
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <div className='bg-black-700 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 '>
      {isLoading ? (
        <div className='flex gap-4 w-full justify-center items-center'>
          <h4 className='font-epilogue font-semibold text-[18px] text-gray-400'>
            Creating new Campaign
          </h4>
          <Loader />
        </div>
      ) : (
        <>
          <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-black-500 rounded-[10px]'>
            <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px]'>
              Start a Campaign
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className='w-full mt-[65px] flex flex-col gap-[30px]'
          >
            <div className='flex flex-wrap gap-[40px]'>
              <FormField
                label='Address Owner *'
                placeholder='Insert your Address'
                inputType='text'
                value={address ? address : ''}
                handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleFormFieldChange('name', e)
                }
              />
              <FormField
                label='Campaign Title *'
                placeholder='Write a title'
                inputType='text'
                value={form.title}
                handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleFormFieldChange('title', e)
                }
              />
            </div>

            <FormField
              label='Story *'
              placeholder='Write your story'
              value={form.description}
              handleChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                handleFormFieldChange('description', e)
              }
              isTextArea
            />

            <Banner />

            <div className='flex flex-wrap gap-[40px]'>
              <FormField
                label='Goal *'
                placeholder='ETH 0.50'
                inputType='text'
                value={form.target}
                handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleFormFieldChange('target', e)
                }
              />
              <FormField
                label='End Date *'
                placeholder='End Date'
                inputType='date'
                value={form.deadline}
                handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleFormFieldChange('deadline', e)
                }
              />
            </div>

            <FormField
              label='Campaign Image *'
              placeholder='Place iamge URL of your campaign'
              inputType='url'
              value={form.image}
              handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleFormFieldChange('image', e)
              }
            />

            <div className='flex justify-center items-center mt-[40px]'>
              <CustomButton
                btnType='submit'
                title='Submit new campaign'
                bg='bg-green-700'
                onClick={() => {}}
              />
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default CreateCampaign

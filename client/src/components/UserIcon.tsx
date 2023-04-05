import { thirdweb } from '../assets'
import { UserIconType } from '../types'

const UserIcon = ({ isFull, size = 'md' }: UserIconType) => {
  const roundedImg = isFull ? 'rounded-full' : 'rounded-[10px]'
  const sizeImg = size === 'md' ? 'w-[52px] h-[52px]' : `w-[42px] h-[42px]`
  return (
    <div
      className={`${sizeImg} ${roundedImg} bg-black-600 flex justify-center items-center cursor-pointer`}
    >
      <img
        src={thirdweb}
        alt='user'
        className='w-[60%] h-[60%] object-contain'
      />
    </div>
  )
}

export default UserIcon

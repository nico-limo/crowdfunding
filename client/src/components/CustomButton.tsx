import { CustomButtonType } from '../types'
import Loader from './Loader'

const CustomButton = ({
  onClick,
  title,
  bg,
  btnType,
  fullWidth = false,
  isLoading = false
}: CustomButtonType) => {
  const bgColor = bg ?? 'bg-transparent'
  const animation = 'transition duration-300 ease-in-out hover:opacity-40'
  const width = fullWidth ? 'w-full' : ''
  return (
    <button
      type={btnType}
      onClick={onClick}
      className={`${bgColor} ${width} flex items-center justify-center font-epilogue font-semibold text-[16] leading-[26px min-h-[52px] min-w-[200px] px-4 rounded-[10px] ${animation} `}
    >
      {isLoading && <Loader />}
      {title}
    </button>
  )
}

export default CustomButton

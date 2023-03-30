import { IconInterface } from '../types'

const Icon = ({
  size,
  bg,
  onClick,
  imgUrl,
  disabled = false,
  isActive = true,
  animated = false
}: IconInterface) => {
  const imgSize = size ? `w-[52px] h-[52px]` : 'w-[48px] h-[48px]'
  const activeBG = isActive ? `bg-${bg ?? 'black-700'}` : ''
  const isDisabled = !disabled ? 'cursor-pointer' : ''
  const isHover = !isActive && 'hover:bg-cyan-700'
  const isAnimated = animated && 'animate-fade'
  return (
    <div
      className={`${imgSize} rounded-[10px] ${activeBG} flex justify-center items-center ${isDisabled} transition duration-300 ease-in-out ${isHover} ${isAnimated}`}
      onClick={onClick}
    >
      <img
        src={imgUrl}
        alt={imgUrl}
        className={`w-1/2 h-1/2 ${!isActive && 'grayscale'}`}
      />
    </div>
  )
}

export default Icon

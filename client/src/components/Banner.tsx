import { money } from '../assets'

const Banner = () => {
  return (
    <div className='w-full flex justify-start items-center p-4 bg-purple-600 h-[120px] rounded-[10px]'>
      <img
        src={money}
        alt='money'
        className='w-[40px] h-[40] object-contain animate-wiggle'
      />
      <h4 className='font-epilogue font-bold text-[25px] ml-[20px]'>
        You will get 100% of the raised amount
      </h4>
    </div>
  )
}

export default Banner

const BalanceSection = ({
  amount,
  label
}: {
  amount: string
  label: string
}) => {
  return (
    <div className='flex flex-col'>
      <h4 className='font-epilogue font-semibold text-[14px] text-gray-400 leading-[22px]'>
        {amount}
      </h4>
      <p className='mt-[3px] text-[12px] leading-[18px] text-gray-500 sm:max-w-[120px] truncate'>
        {label}
      </p>
    </div>
  )
}

export default BalanceSection

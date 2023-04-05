import { FormFieldType } from '../types'

const FormField = ({
  label,
  inputType,
  handleChange,
  placeholder,
  value,
  isTextArea
}: FormFieldType) => {
  const baseStyle =
    'py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-black-500 bg-transparent font-epilogue text-white text-[14px] placeholder:text-gray-600 rounded-[10px] sm:min-w-[300px] transition-all duration-300'

  const focusStyle = 'focus:border-cyan-700'

  const style = `${baseStyle} ${focusStyle}`

  return (
    <label className='flex-1 w-full flex flex-col'>
      <span className='font-epilogue font-medium text-[14px] leading-[22px] text-gray-500 mb-[10px]'>
        {label}
      </span>
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className={style}
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step='0.1'
          placeholder={placeholder}
          className={style}
        />
      )}
    </label>
  )
}

export default FormField

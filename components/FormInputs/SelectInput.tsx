import type React from "react"
import type { UseFormRegister, FieldErrors } from "react-hook-form"

interface SelectOption {
  value: string
  label: string
}

interface SelectInputProps {
  label: string
  name: string
  register: UseFormRegister<any>
  errors: FieldErrors
  options: SelectOption[]
  placeholder?: string
  className?: string
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  register,
  errors,
  options,
  placeholder = "Select an option",
  className = "",
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        {...register(name, { required: `${label} is required` })}
        id={name}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && <p className="text-red-500 text-sm">{errors[name]?.message as string}</p>}
    </div>
  )
}

export default SelectInput

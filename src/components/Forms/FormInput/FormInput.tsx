interface FormInputProps {
    label?: string
    placeholder?: string
    type?: 'text' | 'email' | 'number' | 'password' | 'date' | 'tel' | 'datetime-local' | 'month' | 'week' | 'time' | 'url' | 'search' | 'color' | 'range' | 'file' | 'image' | 'submit' | 'reset' | 'button' | 'checkbox' | 'radio' | 'hidden'
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void)
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    value?: string,
    name?: string,
    error?: string
}
const FormInput = ({ error, name, value = undefined, onKeyUp, onChange, label, placeholder = "Lütfen doldurunuz", type = "text" }: FormInputProps) => {
    return <div className="flex flex-col w-full">
        {label && <label className="text-[#4E929D] text-[16px] font-nexa-bold">{label}</label>}
        <input value={value} name={name} onChange={onChange} onKeyUp={onKeyUp} className="text-[black] text-[16px] font-nexa-bold rounded-[5px_20px_0px_20px]" type={type} placeholder={placeholder} />
        {error && <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">* {error}</span>}

    </div>
}
//modify for select (onChange, onKeyUp)  Types of property 'onChange' are incompatible.
interface FormInputSelectProps extends Omit<FormInputProps, 'onChange' | 'onKeyUp'> {
    onChange?: ((e: React.ChangeEvent<HTMLSelectElement>) => void),
    onKeyUp?: (e: React.KeyboardEvent<HTMLSelectElement>) => void,
    options?: { value: string, label: string }[]
}

export const FormInputSelect = ({ options, error, name, value = undefined, onChange, label, placeholder = "Lütfen doldurunuz" }: FormInputSelectProps) => {
    return <div className="flex flex-col w-full">
        {label && <label className="text-[#4E929D] text-[16px] font-nexa-bold">{label}</label>}
        <select value={value} name={name} onChange={onChange} className="text-[black] text-[16px] font-nexa-bold rounded-[5px_20px_0px_20px]" placeholder={placeholder} >
            <option value="" disabled>{placeholder}</option>
            {
                options?.map((option, index) => {
                    return <option key={index} value={option.value}>{option.label}
                    </option>
                })
            }

        </select>
        {error && <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">* {error}</span>}
    </div>
}

export default FormInput
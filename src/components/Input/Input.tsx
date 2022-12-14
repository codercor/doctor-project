import Text from "@components/Text";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
type InputProps = {
    text?: string | undefined,
    type?: 'email' | 'password' | 'text' | 'number' | 'datetime-local' | 'datetime',
    placeholder?: string,
    inputClassName?: string,
    value?: string | undefined,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    name?: string,
    disabled?: boolean | undefined,
    max?: number,
    min?: number,
}
const Input = ({ min, max, text, type = "text", placeholder = "", inputClassName = "", value = undefined, onChange = () => { }, onBlur = () => { }, name = "", disabled = false }: InputProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const minMaxForNumber = type == 'number' ? { min, max } : {}
    return <div className="flex flex-col w-full  leading-none">
        {text && <Text type="h4" className="text-deepgreen-100 !text-[14px]  !py-[10px]">{text}</Text>}
        <div className="relative w-full">
            <input disabled={disabled} name={name}
                {...minMaxForNumber}
                value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} className={classNames("disabled:bg-primary disabled:rounded-none duration-500 transition-all  h-[48px] pl-[20px] focus:outline-none w-full placeholder:text-[#3B6369] bg-primary-flat rounded-[5px_20px_0_20px]", inputClassName)} type={type != 'password' ? type : (isVisible ? 'text' : 'password')} />
            {type == 'password' && <div onClick={() => setIsVisible(!isVisible)} className="absolute top-3 w-fit right-4 ">
                <Image src={`/images/svg/visibility_${isVisible ? 'on' : 'off'}.svg`} width={24} height={24} />
            </div>}
        </div>
    </div>
}
export default Input;
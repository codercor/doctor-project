import Text from "@components/Text";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
type InputProps = {
    text?: string | undefined,
    type?: 'email' | 'password' | 'text',
    placeholder?: string,
    inputClassName?: string,
}
const Input = ({ text, type = "text", placeholder = "", inputClassName = "" }: InputProps) => {
    const [isVisible, setIsVisible] = useState(false)
    return <div className="flex flex-col w-full  leading-none">
        {text && <Text type="h4" className="text-deepgreen-100 !text-[14px]  !py-[10px]">{text}</Text>}
        <div className="relative w-full">
            <input placeholder={placeholder} className={classNames("h-[48px] pl-[20px] focus:outline-none w-full placeholder:text-[#3B6369] bg-primary-flat rounded-[5px_20px_0_20px]", inputClassName)} type={type != 'password' ? type : (isVisible ? 'text' : 'password')} />
            {type == 'password' && <div onClick={() => setIsVisible(!isVisible)} className="absolute top-3 w-fit right-4 ">
                <Image src={`/images/svg/visibility_${isVisible ? 'on' : 'off'}.svg`} width={24} height={24} />
            </div>}
        </div>
    </div>
}
export default Input;
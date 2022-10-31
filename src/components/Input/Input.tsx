import Text from "@components/Text";
import Image from "next/image";
import { useState } from "react";

const Input = ({ text, type = "text" }: { text: string, type: 'email' | 'password' | 'text' }) => {
    const [isVisible, setIsVisible] = useState(false)
    return <div className="flex flex-col w-full  leading-none">
        <Text type="h4" className="text-deepgreen-100 !text-[14px]  !py-[10px]">{text}</Text>
        <div className="relative w-full">
            <input className="h-[48px] pl-[20px] focus:outline-none w-full bg-primary-flat rounded-[5px_20px_0_20px]" type={type != 'password' ? type : (isVisible ? 'text' : 'password')} />
            {type == 'password' && <div onClick={() => setIsVisible(!isVisible)} className="absolute top-3 w-fit right-4">
                <Image src={`/images/svg/visibility_${isVisible ? 'on' : 'off'}.svg`} width={24} height={24} />
            </div>}
        </div>
    </div>
}
export default Input;
import Text from "@components/Text";
import { useRouter } from "next/router";
import Button from ".";

export type SettingsMenuButtonProps = {
    text: string,
    href: string,
}
const SettingsMenuButton = ({ text, href }: SettingsMenuButtonProps) => {
    const router = useRouter()
    return <button
        onClick={() => router.push(href)}
        className="flex items-center justify-center mb-[20px] h-[40px] rounded-[5px] md:w-full min-w-[140px] px-[5px] bg-secondary ">
        <p className="text-[white] font-nexa-light w-full text-[10px]">
            {text}
        </p>
    </button>
}
export default SettingsMenuButton;
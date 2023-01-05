import Text from "@components/Text";
import { useRouter } from "next/router";
import Button from ".";

export type SettingsMenuButtonProps = {
    text: string,
    href: string,
}
const SettingsMenuButton = ({ text, href }: SettingsMenuButtonProps) => {
    const router = useRouter()
    return <Button
        onClick={() => router.push(href)}
        className="w-full flex flex-start mb-[20px] gap-2 pl-[16px] py-[15px] !bg-secondary ">
        <Text className="text-[white] text-[12px]">
            {text}
        </Text>
    </Button>
}
export default SettingsMenuButton;
import Text from "@components/Text";
import classNames from "classnames";
import { Router, useRouter } from "next/router";
import Button from ".";
import { Home } from '@mui/icons-material';

export type DNavButtonProps = { text: string, href: string, Icon: typeof Home }

const DNavButton = ({ text = "no text", href = "/dashboard", Icon = Home }: DNavButtonProps) => {
    const router = useRouter()
    const isActive = router.pathname === href;
    const bgClass = isActive ? "bg-[#4E929D] text-[white]" : "bg-[#E8F3F4] text-[#99BCBF]";
    const colorClass = isActive ? "text-[white]" : "text-[#99BCBF]";
    return <Button onClick={() => router.push(href)} className={classNames("flex flex-start mb-[20px] gap-2 pl-[16px] py-[15px]", bgClass)}>
        <Icon className={colorClass} />
        <Text className={colorClass}>
            {text}
        </Text>
    </Button>
}
export default DNavButton;

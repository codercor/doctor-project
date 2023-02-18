import Text from "@components/Text";
import Image from "next/image";
import { Email } from '@mui/icons-material'
import useAuth from "src/hooks/auth.hook";

const DashBoardNavbar = () => {
    const { user } = useAuth();
    
    return <div className="md:min-h-[160px] w-full flex items-center justify-between bg-cover bg-[url(/images/png/panel-navbar.png)] rounded-[20px_5px_20px_5px] px-[32px]">
        <div className="w-[289px] h-[97px] bg-opacity-80 bg-secondary flex items-center  gap-[10px] pl-[20px] rounded-[20px_5px_20px_5px]" >
            <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden ">
                <Image src="/images/png/avatar.png" layout="fill" objectFit="contain" />
            </div>
            <div>
                <Text className="text-[white] text-[14px]">Merhaba,</Text>
                <Text className="text-[white] text-[14px] font-nexa-light">{user.Information.Fullname}</Text>
            </div>
        </div>
    </div>
}

export default DashBoardNavbar;
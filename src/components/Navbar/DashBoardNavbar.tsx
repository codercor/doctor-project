import Text from "@components/Text";
import Image from "next/image";
import { Close, Email } from '@mui/icons-material'
import useAuth from "src/hooks/auth.hook";
import MenuIcon from '@mui/icons-material/Menu';
import classNames from "classnames";
const DashBoardNavbar = ({ setShowMenu, showMenu }: { showMenu: boolean, setShowMenu: (show: boolean) => void }) => {
    const { user } = useAuth();

    return <div className="min-h-[160px] gap-[10px] w-full flex-col flex items-end justify-center bg-cover bg-[url(/images/png/panel-navbar.png)] rounded-[20px_5px_20px_5px] px-[10px] md:px-[32px]">
        <div onClick={() => {
            setShowMenu(!showMenu)
        }} className={classNames("lg:hidden w-[100px]  h-[40px] z-20 flex items-center justify-center gap-4 text-[white] bg-[#99BCBF] rounded-[2px] top-[10px] right-[10px]", {
            "!fixed !z-[400] md:hidden !rounded-full !w-[40px]": showMenu,
        })}>
            {!showMenu ? <> <span className="text-white">MENU</span>
                <MenuIcon /></> : <Close />}
        </div>
        <div className="w-[289px] h-[87px] bg-opacity-80 bg-secondary flex items-center  gap-[10px] pl-[20px] rounded-[20px_5px_20px_5px]" >

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
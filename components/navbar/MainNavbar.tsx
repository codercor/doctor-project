import Image from 'next/image'
import Text from '../atoms/Text';
const MainNavbar = () => {
    return (
        <div className="h-[66px] mx-[23px] flex justify-between items-center md:max-w-[1064px] md:mx-auto">
            <div className='self-start md:hidden'>
                <Image src="/images/png/logo-v1.png" width={100} height={120} />
            </div>
            <div className='self-start hidden md:block'>
                <Image src="/images/png/logo-v1.png" width={98} height={110} layout="fixed" />
            </div>
            <div className='flex items-center gap-[4px] md:hidden'>
                <Text className='text-green-700 '>MENU</Text>
                <Image src="/images/svg/menu.svg" width={24} height={24} />
            </div>
        </div>
    );
}

export default MainNavbar;
import classNames from 'classnames';
import Image from 'next/image'
import { useState } from 'react';
import Text from '../atoms/Text';
const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = ()=> setIsOpen(!isOpen);
    return (
        <div className="h-[66px] border-2 border-black px-[23px] flex justify-between items-center md:max-w-[1064px] md:mx-auto">
            <div className='self-start md:hidden'>
                <Image src="/images/png/logo-v1.png" width={100} height={120} />
            </div>
            <div className='self-start hidden md:block'>
                <Image src="/images/png/logo-v1.png" width={98} height={110} layout="fixed" />
            </div>
            <div className='flex items-center gap-[4px] md:hidden' onClick={toggleMenu}>
                <Text className='text-secondary '>MENU</Text>
                <Image src="/images/svg/menu.svg" width={24} height={24} />
            </div>
            {/* Mobile menu */}
            <div className={classNames(['bg-secondary md:hidden absolute top-0 left-0 w-full h-full px-[20px] flex flex-col'],{
                'hidden': !isOpen,
            })}>
                <div className="h-[66px]  flex justify-between items-center md:max-w-[1064px] md:mx-auto">
                    <Image src="/images/svg/logo-v2.svg" width={85} height={29} layout="fixed" />
                    <div className='flex items-center gap-[9px]' onClick={toggleMenu}>
                        <Text className='text-white text-[12px]' type='bold'> KAPAT </Text>
                        <button>
                            <Image src="/images/svg/close.svg" width={13.8} height={13.8} />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col mt-[50px] gap-[20px]">
                    <Text className='text-white text-[18px]' type='regular'>ANASAYFA</Text>
                    <Text className='text-white text-[18px]' type='regular'>HAKKINDA</Text>
                    <Text className='text-white text-[18px]' type='regular'>EĞİTİMLER</Text>
                </div>
                <div className="flex flex-col mt-[50px]">
                    <Text className='text-white text-[18px]' type='regular'>İLETİŞİM</Text>
                    <Text className='text-onSecondary text-[14px] mt-[16px]' type='regular'>0 (232) 123 45 67</Text>
                    <Text className='text-onSecondary text-[14px] mt-[12px]' type='regular'>merhaba@nazanuysalharzadin.com</Text>
                </div>
                <div className="flex flex-col mt-[50px]">
                    <Text className='text-white text-[18px]' type='regular'>TAKİP ET</Text>
                    <div className='flex gap-[20px] mt-[16px]'>
                        <Image src="/images/svg/instagram.svg" width={24} height={24} />
                        <Image src="/images/svg/youtube.svg" width={24} height={24} />
                        <Image src="/images/svg/medium.svg" width={24} height={24} />
                    </div>

                </div>
                <button className="bg-primary-1 mt-auto mb-[36px] rounded-tl-[20px] rounded-br-[20px] h-[48px] w-full ">
                    <Text className='text-[14px] text-secondary' type='bold'> Giriş Yap </Text>
                </button>
            </div>
        </div>
    );
}

export default MainNavbar;
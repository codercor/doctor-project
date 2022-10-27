import Button from "@components/Button";
import BurgerIcon from "@components/Icon/BurgerIcon";
import Logo from "@components/Logo";
import Text from "@components/Text";
import Router from "next/router";
import React from "react";
import Image from "next/image";
import classNames from "classnames";
import CloseIcon from "@components/Icon/CloseIcon";

type Route = {
    text: string;
    href: string;
}

type NavbarItemProps = {
    route: Route
}
const NavbarItem = ({ route }: NavbarItemProps) => {
    const handleClick = () => Router.push(route.href);
    return (<div onClick={handleClick}><Text type="paragraph" className="text-[white] cursor-pointer font-bold text-[18px]">
        {route.text}
    </Text></div>)
}

const navs = [
    {
        text: "Anasayfa",
        href: "/"
    },
    {
        text: "Hakkımda",
        href: "/hakkimda"
    },
    {
        text: "Eğitimler",
        href: "/egitimler"
    },
]


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <div className="md:h-auto flex  justify-between absolute z-20 w-full top-0 left-0 md:px-0 px-[20px]">
            <Logo />
            <div className="md:flex hidden  flex-col gap-[20px] md:flex-row md:justify-between md:items-center">
                {navs.map((nav: Route) => <NavbarItem key={nav.text} route={nav} />)}
                <div className="flex">
                    <Button onClick={() => {
                        Router.push("/auth/register")
                    }} type="transparent-white" direction="right">
                        <Text type="paragraph">Kayıt Ol</Text>
                    </Button>
                    <Button onClick={() => {
                        Router.push("/auth/login")
                    }} type="secondary" >
                        <Text type="paragraph">Giriş Yap</Text>
                    </Button>
                </div>
            </div>
            <div onClick={() => setIsOpen(true)} className="flex items-center gap-2 mt-[23px] h-fit md:hidden">
                <Text type="overline" className="text-[#DBD8FF]">MENU</Text>
                <BurgerIcon />
            </div>
            {/* mobile menu */}
            <div className={classNames(['bg-purple-200 md:hidden fixed top-0 left-0 w-full h-full px-[20px] flex flex-col z-10'], {
                'hidden': !isOpen,
            })}>
                <div className="h-[66px]  flex justify-between items-center md:max-w-[1064px] md:mx-auto">
                    <Image src="/images/svg/logo-v2.svg" width={85} height={29} layout="fixed" />
                    <div className='flex items-center  justify-center gap-[10px]' onClick={toggleMenu}>
                        <Text className='text-purple-800' type='body'> KAPAT </Text>
                        <CloseIcon />
                    </div>
                </div>
                <div className="flex flex-col mt-[50px] gap-[20px]">
                    {navs.map((nav: Route) => <div key={nav.text} onClick={() => { Router.push(nav.href) }}> <Text className='text-purple-800 text-[18px]' type='h6'> {nav.text.toUpperCase()} </Text></div>)}

                </div>
                <div className="flex flex-col mt-[50px]">
                    <Text className='text-purple-800 text-[18px]' type='h6'>İLETİŞİM</Text>
                    <Text className='text-purple-800 text-[14px] mt-[16px]' type='body'>0 (232) 123 45 67</Text>
                    <Text className='text-purple-800 text-[14px] mt-[12px]' type='body'>merhaba@nazanuysalharzadin.com</Text>
                </div>
                <div className="flex flex-col mt-[50px]">
                    <Text className='text-purple-800 text-[18px]' type='overline'>TAKİP ET</Text>
                    <div className='flex gap-[20px] mt-[16px]'>
                        <Image src="/images/svg/instagram.svg" width={24} height={24} />
                        <Image src="/images/svg/youtube.svg" width={24} height={24} />
                        <Image src="/images/svg/medium.svg" width={24} height={24} />
                    </div>

                </div>
                <button className="bg-quaternary-light mt-auto mb-[36px] rounded-tl-[20px] rounded-br-[20px] h-[48px] w-full ">
                    <Text className='text-[14px] text-purple-800' type='body'> Giriş Yap </Text>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
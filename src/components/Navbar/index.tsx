import Button from "@components/Button";
import BurgerIcon from "@components/Icon/BurgerIcon";
import Logo from "@components/Logo";
import Text from "@components/Text";
import Router from "next/router";
import React from "react";
import Image from "next/image";
import classNames from "classnames";
import CloseIcon from "@components/Icon/CloseIcon";
import useAuth from "src/hooks/auth.hook";
import useUser from "src/hooks/user.hook";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

type Route = {
    text: string;
    href: string;
}

type NavbarItemProps = {
    route: Route
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
    {
        text: "Blog",
        href: "/blog-yazilari"
    },
]

const authendicatedNavs = [
    {
        text: "Eğitimlerim",
        href: "/dashboard"
    },
    {
        text: "Çıkış Yap",
        href: "/logout"
    },
]
const Navbar = ({ backColor = "dark" }: { backColor?: string }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const NavbarItem = ({ route }: NavbarItemProps) => {
        const handleClick = () => Router.push(route.href);
        const color = backColor === "dark" ? "text-[white]" : "text-[black]";
        return (<div onClick={handleClick}><Text type="paragraph" className={classNames("cursor-pointer font-bold text-[18px]", color)}>
            {route.text}
        </Text></div>)
    }
    const { user: { IsAuthenticated } } = useUser()
    const { logout } = useAuth();

    return (
        <div className="md:h-auto flex  justify-between absolute z-[99] w-full top-0 left-0 md:px-0 px-[20px]">
            <Logo />
            <div className="md:flex hidden  flex-col gap-[20px] md:flex-row md:justify-between md:items-center">
                {(navs).map((nav: Route) => <NavbarItem key={nav.text} route={nav} />)}
                <div className="flex">
                    {IsAuthenticated ? <>
                        <><Button onClick={() => {
                            Router.push("/dashboard")
                        }} type={backColor === "light" ? "transparent-secondary" : "transparent-white"}  className="!h-fit" direction="right">
                            <Text type="paragraph" className="!text-[14px] ">Panelim</Text>
                        </Button>
                            <Button onClick={() => {
                                logout();
                            }} type="secondary"  className="!h-fit !px-[28px]" >
                                <Text type="paragraph" className="!text-[14px]">Çıkış Yap</Text>
                            </Button></>

                    </> : <><Button onClick={() => {
                        Router.push("/auth/pre-register")
                    }} type={backColor === "light" ? "transparent-secondary" : "transparent-white"} direction="right">
                        <Text type="paragraph" className="!text-[14px]">Kayıt Ol</Text>
                    </Button>
                        <Button onClick={() => {
                            Router.push("/auth/login")
                        }} type="secondary" >
                            <Text type="paragraph" className="!text-[14px]">Giriş Yap</Text>
                        </Button></>}
                </div>
            </div>
            <div onClick={() => setIsOpen(true)} className="flex items-center gap-2 mt-[23px] h-fit md:hidden">
                <Text type="overline" className="text-[#DBD8FF]">MENU</Text>
                <BurgerIcon />
            </div>
            {/* mobile menu */}
            <div className={classNames(['bg-purple-200 md:hidden fixed top-0 left-0 min-w-full h-full px-[20px] flex flex-col z-10'], {
                'hidden': !isOpen,
            })}>
                <div className="h-[66px] pt-[10px] flex justify-between items-center md:max-w-[1064px] md:mx-auto">
                    <Image src="/images/svg/brandmark4.svg" width={85} height={29} layout="fixed" />
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
                    <Text className='text-purple-800 text-[14px] mt-[12px]' type='body'>merhaba@nazanuysalharzadin.com.tr</Text>
                </div>
                <div className="flex flex-col mt-[50px] mb-[20px]">
                    <Text className='text-purple-800 text-[18px]' type='overline'>TAKİP ET</Text>
                    <div className="flex gap-2">
                        <Instagram onClick={() => {
                            window.open("https://www.instagram.com/nazanuysalharzadin", "_blank")
                        }} className="!text-[32px] cursor-pointer hover:scale-[1.1] text-[white]" />
                        <YouTube onClick={() => {
                            window.open("https://www.youtube.com/channel/UCUXLeXnl9FLy3HziVsoLTKQ?app=desktop", "_blank")
                        }} className="!text-[32px] cursor-pointer hover:scale-[1.1] text-[white]" />
                        <Facebook onClick={() => {
                            window.open("https://www.facebook.com/nazanuysalharzadin?locale=tr_TR", "_blank")
                        }} className="!text-[32px] cursor-pointer hover:scale-[1.1] text-[white]" />
                        <Twitter onClick={() => {
                            window.open("https://twitter.com/nazanuysalharza", "_blank")
                        }} className="!text-[32px] cursor-pointer hover:scale-[1.1] text-[white]" />
                    </div>

                </div>
                {
                    IsAuthenticated ?
                        <>
                            <button onClick={() => {
                                Router.push("/dashboard")
                            }} className="bg-quaternary-light mt-auto mb-[6px] rounded-tl-[20px] rounded-br-[20px] min-h-[40px] h-[48px] w-full ">
                                <Text className='text-[14px] text-purple-800' type='body'> Panel </Text>
                            </button>
                            <button onClick={() => {
                                logout();
                            }} className="bg-quaternary-light  mb-[36px] rounded-tl-[20px] rounded-br-[20px] min-h-[40px] h-[48px] w-full ">
                                <Text className='text-[14px] text-purple-800' type='body'> Çıkış Yap </Text>
                            </button>
                        </>
                        :
                        <>
                            <button onClick={() => {
                                Router.push("/auth/pre-register")
                            }} className="bg-quaternary-light mt-auto mb-[6px] rounded-tl-[20px] rounded-br-[20px] min-h-[40px] h-[48px] w-full ">
                                <Text className='text-[14px] text-purple-800' type='body'> Kayıt Ol </Text>
                            </button>
                            <button onClick={() => {
                                Router.push("/auth/login")
                            }} className="bg-quaternary-light  mb-[36px] rounded-tl-[20px] rounded-br-[20px] min-h-[40px] h-[48px] w-full ">
                                <Text className='text-[14px] text-purple-800' type='body'> Giriş Yap </Text>
                            </button>
                        </>
                }
            </div>
        </div>
    );
}

export default Navbar;
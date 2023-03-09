import Button from "@components/Button";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import Text from "@components/Text";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
    Home,
    Person,
    MarkChatUnread,
    CalendarToday,
    Settings,
    PowerSettingsNew,
    School,
    PeopleAlt,
    Article,
    CheckCircleOutlineSharp,
    TaskSharp,
    TaskOutlined,
    Assignment,
    TaskTwoTone,
    BookmarkSharp,
    BookmarkAdded,
    MenuBook, ErrorOutlined, CloseOutlined
} from '@mui/icons-material';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import { useRouter } from "next/router";
import NavButton, { DNavButtonProps } from "@components/Button/DNavButton";
import DashBoardNavbar from "@components/Navbar/DashBoardNavbar";
import useAuth from "src/hooks/auth.hook";
import { Fab, Menu } from "@mui/material";
import classNames from "classnames";
import useUser from "../../hooks/user.hook";
import toast, { useToasterStore } from "react-hot-toast";
import BurgerIcon from "@components/Icon/BurgerIcon";
import MenuIcon from '@mui/icons-material/Menu';



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { user, logout } = useAuth()
    const { refetchUser } = useUser()

    const [dashboardNavs, setDashboardNavs] = useState<(DNavButtonProps & { admin?: boolean })[]>([])



    useEffect(() => {
        refetchUser()
    }, [])

    useEffect(() => {

        if (user.IsAdmin) {
            setDashboardNavs([
                {
                    text: "Anasayfa",
                    href: "/",
                    Icon: Home,
                    admin: true
                },
                {
                    text: "Eğitimlerim",
                    href: "/dashboard",
                    Icon: Home,
                    admin: true
                },
                {
                    text: "Hesabım",
                    href: "/dashboard/account",
                    Icon: Person,
                    admin: true
                },
                {
                    text: "Eğitimler",
                    href: "/dashboard/trainings",
                    Icon: School,
                    admin: true
                },
                {
                    text: "Eğitim Dökümanları",
                    href: "/dashboard/training-documents",
                    Icon: Article,
                    admin: true
                },
                {
                    text: "Tahliller",
                    href: "/dashboard/assays-management",
                    Icon: Assignment,
                    admin: true
                },
                {
                    text: "Hasta Kabul Formları",
                    href: "/dashboard/forms-management",
                    Icon: TaskTwoTone,
                    admin: true
                },
                {
                    text: 'Reçetele Yönetimi',
                    href: '/dashboard/prescriptions-management',
                    Icon: BookmarkAdded,
                    admin: true
                },
                {
                    text: "Kullanıcı yönetimi",
                    href: "/dashboard/user-management",
                    Icon: PeopleAlt,
                    admin: true
                },

                {
                    text: "Randevu Yönetimi",
                    href: "/dashboard/appointment-management",
                    Icon: CalendarToday,
                    admin: true
                },
                {
                    text: "Chat",
                    href: "/dashboard/chat",
                    Icon: MarkChatUnread,
                    admin: true
                },
                {
                    text: "Blog",
                    href: "/dashboard/blog-management",
                    Icon: ChromeReaderModeIcon,
                    admin: true
                },
                {
                    text: "Ayarlar",
                    href: "/dashboard/settings",
                    Icon: Settings,
                    admin: true
                }
            ])
        } else {
            const userNavs = [
                {
                    text: "Anasayfa",
                    href: "/",
                    Icon: Home
                },
                {
                    text: "Eğitimlerim",
                    href: "/dashboard",
                    Icon: Home
                },
                {
                    text: "Hesabım",
                    href: "/dashboard/account",
                    Icon: Person
                },
                {
                    text: "Chat",
                    href: "/dashboard/chat",
                    Icon: MarkChatUnread
                },
                {
                    text: "Tahliller",
                    href: "/dashboard/assays",
                    Icon: Assignment
                },

                {
                    text: "Reçetelerim",
                    href: "/dashboard/prescriptions",
                    Icon: BookmarkSharp
                },

                {
                    text: "Randevularım",
                    href: "/dashboard/appointment",
                    Icon: CalendarToday
                },
                {
                    text: "Ayarlar",
                    href: "/dashboard/settings",
                    Icon: Settings
                }
            ]
            if (user?.IsPatient) {
                let item = {
                    text: "Hasta Kabul Formları",
                    href: "/dashboard/patient-agreements",
                    Icon: TaskOutlined
                }
                userNavs.splice(4, 0, item)
            }
            setDashboardNavs(userNavs)
        }
    }, [user])

    const router = useRouter();
    useEffect(() => {
        if (!user.IsAuthenticated) {
            router.push("/auth/login")
        }
    }, [user.IsAuthenticated])
    useEffect(() => {
        if (dashboardNavs.length < 1) return;
        if (router.pathname.includes("/dashboard/form")) {
            if (router.pathname != "/dashboard/forms" && !user.IsAdmin) {
                router.push("/dashboard/forms")
            }
            if (!router.pathname.startsWith("/dashboard/forms-management") && user.IsAdmin) {
                router.push("/dashboard/forms-management")
            }
            return;
        }
        if (router.pathname == "/dashboard/last-sales") {
            if (!user.IsAdmin) {
                router.push("/dashboard")
            }
            return
        }
        if (router.pathname == "/dashboard/create-training" || router.pathname == "/dashboard/edit-training") {
            if (!user.IsAdmin) {
                router.push("/dashboard/trainings")
            }
            return;
        }
        if (router.pathname.startsWith("/dashboard/blog-management")) {
            if (!user.IsAdmin) {
                router.push("/dashboard/training-documents")
            }
            return;
        }
        const isExistOnNavs = dashboardNavs.findIndex(x => x?.href == router.pathname) > -1
        if (!router.pathname.includes("/dashboard/settings") && !router.pathname.includes("/dashboard/form") && !isExistOnNavs) {
            router.push("/dashboard")
        }
    }, [router.pathname, dashboardNavs.length, user])
    const [showMenu, setShowMenu] = React.useState(false);
    return (<>
        <Head>
            <title>Panel</title>
        </Head>
        <div onClick={() => {
            if (showMenu) setShowMenu(false)
        }} className="overflow-auto   flex w-full h-screen">
            {  /*  Sidebar Normal */}
            <div
                className={classNames("lg:sticky cursor-pointer hidden lg:block fixed top-0 min-w-[100%] h-[100%] px-[20px] z-[99] md:min-w-[40%]  lg:min-w-[20%] xl:min-w-[20%] md:px-[34px] md:h-[100%] bg-[#D4E5E8]", {

                })}>
                <div onClick={() => {
                    router.push("/")
                }} className="md:w-[125px] md:h-[43px] mx-auto relative md:mt-[40px]">
                    <Image src="/images/svg/brandmark6.svg" layout="fill" objectFit="contain" />
                </div>
                <div
                    className="flex flex-col pr-4 mt-[60px] md:h-[calc(100vh-350px)] h-[calc(100vh-250px)] overflow-scroll scrollbar-thin scrollbar-track-[#d4ee5e8] scrollbar-thumb-[white]">
                    {dashboardNavs.map((nav, index) => <NavButton key={index} {...nav} />)}
                </div>
                <div className="absolute bottom-0  h-[150px] md:h-[200px] flex flex-col justify-end left-0 w-full">
                    <div className="px-[30px] mb-[34px]">
                        <Button onClick={() => logout()}
                            className="w-full flex items-center justify-center gap-2   pl-[16px] py-[15px] !bg-[red]">
                            <PowerSettingsNew className="text-[white]" />
                            <Text className="text-[white]">
                                Çıkış Yap
                            </Text>
                        </Button>
                    </div>
                    <div className="h-[64px] bg-secondary grid place-content-center text-center">
                        <Text className="text-[10px] text-[white]"> Kullanım Koşulları - Gizlilik Politikası</Text>
                        <Text type="overline" className="!font-nexa-light text-[#ACE2EB]">Prof.Dr. Nazan Uysal Harzadın
                            © 2022 </Text>
                    </div>
                </div>
            </div>
            {  /*  Sidebar Mobile */}
            <div
                onClick={(e) => {
                    e.stopPropagation()
                }}
                className={classNames("cursor-pointer lg:hidden fixed top-0 min-w-[100%] h-[100%] px-[20px] z-[99] md:min-w-[50%] md:px-[34px] md:h-[100%] bg-[#D4E5E8]", {
                    hidden: !showMenu
                })}>
                <div onClick={() => {
                    router.push("/")
                }} className="md:w-[125px] mx-auto md:mt-[40px] h-[5%] w-[60px] absolute top-3 left-[40%] md:top-[-30px] md:h-[3%] md:left-[35%]">
                    <Image src="/images/svg/brandmark6.svg" layout="fill" objectFit="contain" />
                </div>
                <div
                    className="flex flex-col pr-4 mt-[60px] h-[80%] overflow-scroll scrollbar-thin scrollbar-track-[#d4ee5e8] scrollbar-thumb-[white]">
                    {dashboardNavs.map((nav, index) => <NavButton key={index} {...nav} />)}
                    <Button onClick={() => logout()}
                        className="w-full flex items-center justify-center gap-2   pl-[16px] py-[15px] !bg-[red]">
                        <PowerSettingsNew className="text-[white]" />
                        <Text className="text-[white]">
                            Çıkış Yap
                        </Text>
                    </Button>
                </div>
                <div className="absolute bottom-0  h-[7%]   flex flex-col justify-end left-0 w-full">
                    <div className="h-full bg-secondary grid place-content-center text-center">
                        <Text className="text-[10px] text-[white]"> Kullanım Koşulları - Gizlilik Politikası</Text>
                        <Text type="overline" className="!font-nexa-light text-[#ACE2EB]">Prof.Dr. Nazan Uysal Harzadın
                            © 2022 </Text>
                    </div>
                </div>
            </div>
            <Container className={classNames("lg:pl-[50px] md:pt-[30px] lg:pr-[50px] lg:w-[80%] md:w-full  h-full flex flex-col gap-[37px]", {
                "md:blur-sm lg:blur-none": showMenu
            })}>
                <DashBoardNavbar showMenu={showMenu} setShowMenu={setShowMenu} />
                {children}
            </Container>
        </div>
    </>
    );
}

export default DashboardLayout;
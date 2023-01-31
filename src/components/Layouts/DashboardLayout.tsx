import Button from "@components/Button";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import Text from "@components/Text";
import Image from "next/image";
import React, {useEffect, useState} from "react";
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
    MenuBook, ErrorOutlined
} from '@mui/icons-material';
import {useRouter} from "next/router";
import NavButton, {DNavButtonProps} from "@components/Button/DNavButton";
import DashBoardNavbar from "@components/Navbar/DashBoardNavbar";
import useAuth from "src/hooks/auth.hook";
import {Fab, Menu} from "@mui/material";
import classNames from "classnames";
import useUser from "../../hooks/user.hook";
import toast, {useToasterStore} from "react-hot-toast";
import BurgerIcon from "@components/Icon/BurgerIcon";


const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    const {user, logout} = useAuth()
    const {refetchUser} = useUser()

    const [dashboardNavs, setDashboardNavs] = useState<DNavButtonProps[]>([])



    useEffect(() => {
        refetchUser()
    }, [])



    useEffect(() => {

        if (user.IsAdmin) {
            setDashboardNavs([
                {
                    text: "Anasayfa",
                    href: "/dashboard",
                    Icon: Home
                },
                {
                    text: "Hesabım",
                    href: "/dashboard/account",
                    Icon: Person
                },
                {
                    text: "Eğitimler",
                    href: "/dashboard/trainings",
                    Icon: School
                },
                {
                    text: "Eğitim Dökümanları",
                    href: "/dashboard/training-documents",
                    Icon: Article
                },
                {
                    text: "Tahliller",
                    href: "/dashboard/assays-management",
                    Icon: Assignment
                },
                {
                    text: "Hasta Kabul Formları",
                    href: "/dashboard/forms-management",
                    Icon: TaskTwoTone
                },
                {
                    text: 'Reçetele Yönetimi',
                    href: '/dashboard/prescriptions-management',
                    Icon: BookmarkAdded
                },
                {
                    text: "Kullanıcı yönetimi",
                    href: "/dashboard/user-management",
                    Icon: PeopleAlt
                },

                {
                    text: "Randevu Yönetimi",
                    href: "/dashboard/appointment-management",
                    Icon: CalendarToday
                },
                {
                    text: "Chat",
                    href: "/dashboard/chat",
                    Icon: MarkChatUnread
                },
                {
                    text: "Ayarlar",
                    href: "/dashboard/settings",
                    Icon: Settings
                }
            ])
        } else {
            const userNavs = [
                {
                    text: "Anasayfa",
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
            if (user?.IsPatient) userNavs.push({
                text: "Hasta Kabul Formları",
                href: "/dashboard/patient-agreements",
                Icon: TaskOutlined
            })

            setDashboardNavs(userNavs)
        }

    }, [user])


    const router = useRouter();
    useEffect(() => {
        if (!user.IsAuthenticated) {
            router.push("/auth/login")
        }
    }, [user])
    const [showMenu, setShowMenu] = React.useState(true);
    return (
        <div className="overflow-auto   flex w-full h-screen">
            <div className="md:hidden w-fit h-fit  absolute bottom-[30px] right-[30px]">
                <Fab size="small" onClick={() => {
                    setShowMenu(!showMenu)
                }} className="bg-primary" aria-label="add">
                    <BurgerIcon color="black" />
                </Fab>
            </div>
            <div
                className={classNames("md:sticky fixed top-0 min-w-[100%] h-[100%] px-[20px] z-[99] md:min-w-[18%] md:px-[34px] md:h-[100%] bg-[#D4E5E8]", {
                    hidden: !showMenu
                })}>
                <div className="md:w-[125px] md:h-[43px] relative md:mt-[40px]">
                    <Image src="/images/svg/brandmark6.svg" layout="fill" objectFit="contain"/>
                </div>
                <div
                    className="flex flex-col pr-4 mt-[60px] md:h-[calc(100vh-350px)] h-[calc(100vh-250px)] overflow-scroll scrollbar-thin scrollbar-track-[#d4ee5e8] scrollbar-thumb-[white]">
                    {dashboardNavs.map((nav, index) => <NavButton key={index} {...nav} />)}
                </div>
                <div className="absolute bottom-0  h-[150px] md:h-[200px] flex flex-col justify-end left-0 w-full">
                    <div className="px-[30px] mb-[34px]">
                        <Button onClick={() => logout()}
                                className="w-full flex items-center justify-center gap-2   pl-[16px] py-[15px] !bg-[red]">
                            <PowerSettingsNew className="text-[white]"/>
                            <Text className="text-[white]">
                                Çıkış Yap
                            </Text>
                        </Button>
                    </div>
                    <div className="h-[64px] bg-secondary grid place-content-center text-center">
                        <Text className="text-[10px] text-[white]"> Kullanım Koşulları - Gizlilik Politikası</Text>
                        <Text type="overline" className="!font-nexa-light text-[#ACE2EB]">Prof.Dr. Nazan Uysal Harzadin
                            © 2022 </Text>
                    </div>
                </div>
            </div>
            <Container className="md:pl-[144px] md:pt-[30px] md:pr-[260px] md:w-[82%] h-[98%] flex flex-col gap-[37px]">
                <DashBoardNavbar/>
                {children}
            </Container>
        </div>

    );
}

export default DashboardLayout;
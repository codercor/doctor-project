import Button from "@components/Button";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import Text from "@components/Text";
import Image from "next/image";
import React, { useEffect } from "react";
import { Home, Person, MarkChatUnread, CalendarToday, Settings, PowerSettingsNew, School, PeopleAlt, Article, CheckCircleOutlineSharp, TaskSharp, TaskOutlined, Assignment, TaskTwoTone, BookmarkSharp, BookmarkAdded } from '@mui/icons-material';
import { useRouter } from "next/router";
import NavButton, { DNavButtonProps } from "@components/Button/DNavButton";
import DashBoardNavbar from "@components/Navbar/DashBoardNavbar";
import useAuth from "src/hooks/auth.hook";




const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { user, logout } = useAuth()
    const dashboardNavs: DNavButtonProps[] = user.IsAdmin ? [
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
            text: "Formlar",
            href: "/dashboard/forms-management",
            Icon: TaskTwoTone
        },
        {
            text:'Reçetele Yönetimi',
            href:'/dashboard/prescriptions-management',
            Icon:BookmarkAdded
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
    ] : [
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
            text: "Formlar",
            href: "/dashboard/forms",
            Icon: TaskOutlined
        },
        {
            text: "Randevu Al",
            href: "/dashboard/appointment",
            Icon: CalendarToday
        },
        {
            text: "Ayarlar",
            href: "/dashboard/settings",
            Icon: Settings
        }
    ]
    const router = useRouter();
    useEffect(() => {
        if (!user.IsAuthenticated) {
            router.push("/auth/login")
        }
    }, [user])
    return (
        <div className="overflow-auto  flex w-full h-screen border-2 border-green-100">
            <div className="sticky top-0  md:min-w-[18%] md:px-[34px] md:h-[100%] bg-[#D4E5E8]">
                <div className="md:w-[125px] md:h-[43px] relative md:mt-[40px]">
                    <Image src="/images/svg/brandmark6.svg" layout="fill" objectFit="contain" />
                </div>
                <div className="flex flex-col pr-4 mt-[60px] h-[calc(100vh-350px)] overflow-scroll scrollbar-thin scrollbar-track-[#d4ee5e8] scrollbar-thumb-[white]">
                    {dashboardNavs.map((nav, index) => <NavButton key={index} {...nav} />)}
                </div>
                <div className="absolute bottom-0  h-[200px] flex flex-col justify-end left-0 w-full">
                    <div className="px-[30px] mb-[34px]">
                        <Button onClick={() => logout()} className="w-full flex items-center justify-center gap-2   pl-[16px] py-[15px] bg-[red]">
                            <PowerSettingsNew className="text-[white]" />
                            <Text className="text-[white]">
                                Çıkış Yap
                            </Text>
                        </Button>
                    </div>
                    <div className="h-[64px] bg-secondary grid place-content-center text-center" >
                        <Text className="text-[10px] text-[white]"> Kullanım Koşulları - Gizlilik Politikası</Text>
                        <Text type="overline" className="!font-nexa-light text-[#ACE2EB]">Prof.Dr. Nazan Uysal Harzadin © 2022 </Text>
                    </div>
                </div>
            </div>
            <Container className="md:pl-[144px] md:pt-[30px] md:pr-[260px] w-[82%] h-[98%] flex flex-col gap-[37px]">
                <DashBoardNavbar />
                {children}
            </Container>
        </div>

    );
}

export default DashboardLayout;
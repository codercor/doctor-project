import SettingsMenuButton from "@components/Button/SettingsMenuButton";
import Text from "@components/Text";
import React, { useEffect } from "react";
import useUser from "src/hooks/user.hook";
import { useRouter } from "next/router";
const adminNavs = [

    { text: "Anasayfa Düzeni", href: "/dashboard/settings/home-page-edit" },
    { text: "Ön Başvuru Kontrol", href: "/dashboard/settings/pre-application-control" },
    { text: "Şifre Güncelleme", href: "/dashboard/settings/change-password" }
]

const userNavs = [
    { text: "Satın Alma Geçmişi", href: "/dashboard/settings/order-history" },
    { text: "Fatura Ayarları", href: "/dashboard/settings/invoice-settings" },
    { text: "Şifre Güncelleme", href: "/dashboard/settings/change-password" }
]
const SettingsSubLayout = ({ children }: { children: React.ReactNode }) => {
    const { user: { IsAdmin } } = useUser()
    const router = useRouter()



    useEffect(() => {
        if (!router.pathname.includes("/dashboard/settings")) return
        if (IsAdmin && adminNavs.findIndex(item => item.href === router.pathname) === -1) {
            router.push("/dashboard/settings")
        } else if (!IsAdmin && userNavs.findIndex(item => item.href === router.pathname) === -1) {
            router.push("/dashboard/settings")
        }
    }, [router.pathname])

    return (
        <div className="md:min-h-[798px] scrollbar-thin scrollbar-thumb-tertiary-flat  flex md:flex-row flex-col overflow-scroll rounded-[30px_5px] bg-[#F4F4F4]">
            <div className="md:w-1/3 h-full flex flex-col text-start items-center justify-start py-[16px] md:py-[26px] px-[30px]">

                <div className="w-full justify-between flex flex-col gap-[0px] overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-zinc-400 ">
                    {IsAdmin && <SettingsMenuButton text="Anasayfa Düzeni" href="/dashboard/settings/home-page-edit" />}
                    {IsAdmin && <SettingsMenuButton text="Ön Başvuru Kontrol" href="/dashboard/settings/pre-application-control" />}
                    {!IsAdmin && <SettingsMenuButton text="Satın Alma Geçmişi" href="/dashboard/settings/order-history" />}
                    {!IsAdmin && <SettingsMenuButton text="Fatura Ayarları" href="/dashboard/settings/invoice-settings" />}
                    <SettingsMenuButton text="Şifre Güncelleme" href="/dashboard/settings/change-password" />
                </div>
            </div>
            {children}
        </div>
    );
}

export default SettingsSubLayout;
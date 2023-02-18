import SettingsMenuButton from "@components/Button/SettingsMenuButton";
import Text from "@components/Text";
import React from "react";
import useUser from "src/hooks/user.hook";

const SettingsSubLayout = ({ children }: { children: React.ReactNode }) => {
    const { user: { IsAdmin } } = useUser()
    return (
        <div className="md:h-[798px] scrollbar-thin scrollbar-thumb-tertiary-flat  flex md:flex-row flex-col overflow-scroll rounded-[30px_5px] bg-[#F4F4F4]">
            <div className="md:w-1/3 h-full flex flex-col text-start items-center justify-start py-[16px] md:py-[26px] px-[30px]">

                <div className="w-full flex md:flex-col flex-row">
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
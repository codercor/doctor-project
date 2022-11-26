import SettingsMenuButton from "@components/Button/SettingsMenuButton";
import Text from "@components/Text";
import React from "react";
import useUser from "src/hooks/user.hook";

const SettingsSubLayout = ({ children }: { children: React.ReactNode }) => {
    const { user: { IsAdmin } } = useUser()
    console.log("IsAdmin", IsAdmin);

    return (
        <div className="md:h-[798px] scrollbar-thin scrollbar-thumb-tertiary-flat flex overflow-scroll rounded-[30px_5px] bg-[#F4F4F4]">
            <div className="w-1/3 h-full flex flex-col text-start items-center justify-start py-[26px] px-[30px]">
                <div className="flex justify-between w-full">
                    <Text type="h3" className="text-secondary !text-[20px] w-full">Ayarlar</Text>

                </div>
                <div className="w-full">
                    {IsAdmin && <SettingsMenuButton text="Anasayfa Düzeni" href="/dashboard/settings/home-page-edit" />}
                    {IsAdmin && <SettingsMenuButton text="Sözleşmeler" href="/dashboard/settings/home-page-edit" />}
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
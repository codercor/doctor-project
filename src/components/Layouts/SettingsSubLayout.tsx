import SettingsMenuButton from "@components/Button/SettingsMenuButton";
import Text from "@components/Text";
import React from "react";

const SettingsSubLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" md:h-[798px] flex  rounded-[30px_5px] bg-[#F4F4F4]">
            <div className="w-1/3 h-full flex flex-col text-start items-center justify-start py-[26px] px-[30px]">
                <div className="flex justify-between w-full">
                    <Text type="h3" className="text-secondary !text-[20px] w-full">Ayarlar</Text>

                </div>
                <div className="w-full">
                    <SettingsMenuButton text="Satın Alma Geçmişi" href="/dashboard/settings/order-history" />
                    <SettingsMenuButton text="Fatura Ayarları" href="/dashboard/settings/invoice-settings" />
                    <SettingsMenuButton text="Şifre Güncelleme" href="/dashboard/settings/change-password" />
                </div>
            </div>
            {children}
        </div>
    );
}

export default SettingsSubLayout;
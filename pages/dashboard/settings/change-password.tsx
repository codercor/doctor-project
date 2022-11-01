import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";

const Settings = () => {
    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[#F9FBFC] p-[32px] flex flex-col rounded-[20px_5px_20px_5px] w-2/3 h-full">
                    <div> <Text>Şifre Güncelleme</Text> </div>
                    <div className="flex flex-col w-full gap-[12px]">
                        <Input text="Mevcut Şifreniz" type="password" />
                        <Input text="Yeni Şifreniz" type="password" />
                        <Input text="Yeni Şifreniz(Tekrar) *" type="password" />
                    </div>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default Settings;
import EditButton from "@components/Button/EditButton";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";

const SettingsInvoiceSettings = () => {
    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[#F9FBFC] p-[32px] flex flex-col rounded-[20px_5px_20px_5px] w-2/3 h-full">
                    <div className="flex justify-between items-center"> <Text>Fatura Ayarları</Text> <EditButton /> </div>
                    <div className="flex flex-col w-full gap-[12px]">
                        <Input text="Fatura Adresi" type="text" />
                        <Input text="Ad Soyad" type="text" />
                        <Input text="E-posta" type="email" />
                        <Input text="TC Kimlik No" type="text" />
                        <div className="flex gap-[41px]">
                            <Input text="Ülke" type="text" />
                            <Input text="Şehir" type="text" />
                        </div>
                    </div>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default SettingsInvoiceSettings;
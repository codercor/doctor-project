import Button from "@components/Button";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import { useRouter } from "next/router";
type SettingsMenuButtonProps = {
    text: string,
    href: string,
}
const SettingsMenuButton = ({ text, href }: SettingsMenuButtonProps) => {
    const router = useRouter()
    return <Button
        onClick={() => router.push(href)}
        className="w-full flex flex-start mb-[20px] gap-2 pl-[16px] py-[15px] bg-secondary ">
        <Text className="text-[white]">
            {text}
        </Text>
    </Button>
}

const Account = () => {
    return (
        <DashboardLayout>
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
                <div className="bg-[url(/images/png/register.png)] grid place-content-center rounded-[20px_5px_20px_5px] bg-cover bg-center  bg-no-repeat w-2/3 h-full">
                    <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.</Text>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Account;
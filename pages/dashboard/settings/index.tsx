import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";

const Settings = () => {
    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[url(/images/png/register.png)] grid place-content-center rounded-[20px_5px_20px_5px] bg-cover bg-center  bg-no-repeat w-2/3 h-full">
                    <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.
                    </Text>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default Settings;
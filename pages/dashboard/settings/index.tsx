import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";

const Settings = () => {
    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[url(/images/png/badem.png)] grid place-content-center rounded-[20px_5px_20px_5px] bg-cover bg-center md:p-0 m-[10px] bg-no-repeat md:w-2/3 h-full">
                    <Text type="paragraph" className="text-[14px] md:mt-0 mt-[70px] px-[30px]  text-center text-[white] h-[186px] w-full">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.
                    </Text>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default Settings;
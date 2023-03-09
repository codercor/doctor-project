import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";

const Settings = () => {
    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[url(/images/png/badem.png)] grid place-content-center rounded-[20px_5px_20px_5px] bg-cover bg-center md:p-0 m-[10px] bg-no-repeat md:w-2/3 min-h-[200px] md:h-full">
                    <p className="!text-[12px] sm:!text-[16px] md:!text-[20px] leading-1 line-clamp-none  !pb-0  md:px-[50px] px-[30px] backdrop-brightness-50 !font-nexa-bold  text-center text-[white] h-full w-full">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.
                    </p>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default Settings;
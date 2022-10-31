import Button from "@components/Button";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import { Edit } from "@mui/icons-material";
import Image from "next/image";

const Account = () => {
    return (
        <DashboardLayout>
            <div className=" md:h-[798px] flex  rounded-[30px_5px] bg-[#F4F4F4]">
                <div className="w-1/2 h-full flex flex-col text-start items-center justify-start py-[26px] px-[30px]">
                    <div className="flex justify-between w-full">
                        <Text type="h3" className="text-[#4E929D] !text-[20px] w-full">Hesabım</Text>
                        <div className="bg-tertiary min-w-[36px] rounded-sm min-h-[36px] grid place-content-center">
                            <Edit className="text-[white] text-[16px]" />
                        </div>
                    </div>
                    <div className="relative w-[132px] h-[132px]">
                        <div className="relative rounded-full overflow-hidden w-full h-full">
                            <Image src="/images/png/avatar.png" alt="Profile Picture" layout="fill" />
                        </div>
                        <div className="bg-tertiary w-[36px] h-[36px] bottom-0 right-3 absolute rounded-sm min-h-[36px] grid place-content-center ">
                            <Edit className="text-[white] text-[16px]" />
                        </div>
                    </div>
                    <div className="max-w-[450px] w-[450px] flex flex-col">
                        <Input text="Ad Soyad" type="text" />
                        <Input text="Eposta" type="email" />
                        <Input text="Telefon" type="text" />
                        <Input text="Adres" type="text" />
                        <Button type="secondary" className="w-[200px] self-end mt-[20px] h-[48px] leading-none flex items-center justify-center">
                            <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Üye ol</Text>
                        </Button>
                    </div>
                </div>
                <div className="bg-[url(/images/png/register.png)] grid place-content-center rounded-[20px_5px_20px_5px] bg-cover bg-center  bg-no-repeat w-1/2 h-full">
                    <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.</Text>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Account;
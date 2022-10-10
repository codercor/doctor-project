import Button from "../button/Button";
import Text from "../atoms/Text";
import Image from 'next/image';
const HomeFirstSectionCard = () => {
    return (
        <div className="relative px-[34px] py-[24px] justify-between  flex flex-col items-start bg-secondary w-[630px] h-[313px] rounded-tl-xl rounded-br-xl rounded-tr-3xl rounded-bl-3xl">
            <Text type="bold" className="text-[34px] text-onSecondary">Fonksiyonel Tıp Yoluyla Sağlığınızı Optimize Edin</Text>
            <Text type="light" className="text-white ">Fonksiyonel Tıp, hastalığın temel nedenlerini ele almak için bütünsel, hasta merkezli bir yaklaşım sunar. Mutlu ve canlı bir yaşam yaratmak için sağlığınızın sorumluluğunu üstlenmenize yardımcı oluyorum.</Text>
            <Button className="bg-onSecondary w-[168px] h-[61px] px-[0px] py-[0px] ">
                <Text className="text-secondary px-0" type="regular">Eğitimlere Göz at</Text>
            </Button>
            <div className="absolute bottom-0 right-0">
                <Image src="/images/svg/logo-v2-for-card.svg" height={134} width={242} />
            </div>
        </div>
    );
}

export default HomeFirstSectionCard;
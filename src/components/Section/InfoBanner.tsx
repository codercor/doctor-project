import Container from "@components/Container";
import Text from "@components/Text";
import Image from "next/image";
const RSCardData = [
    {
        image: "/images/svg/coronavirus.svg",
        text: "Hastalık Değil",
        subText: 'Hasta'
    },
    {
        image: "/images/svg/spa.svg",
        text: "Resmin",
        subText: 'Tamamına Bakar'
    },
    {
        image: "/images/svg/favorite.svg",
        text: "Bilimsel Yaklaşım ile",
        subText: 'Kalıcı ve Kişiye Özel !'
    },
    {
        image: "/images/svg/person.svg",
        text: "Sağlığımızı Geri",
        subText: 'Kazanıyoruz.'
    },
]

const RSCard = (rscardData: any) => <div className="overflow-hidden bg-secondary-light flex items-center rounded-lg w-[278px]">
    <span className="ml-[-40px]" >
        <Image src={rscardData.image} height={120} width={120} />
    </span>
    <div className="flex flex-col">
        <Text type="paragraph" className="text-secondary" >{rscardData.text}</Text>
        <Text type="overline" className="text-secondary">{rscardData.subText}</Text>
    </div>
</div>

const InfoBanner = () => {
    return (
        <Container className="md:h-[415px] px-[20px] md:px-0 overflow-hidden  md:max-w-full flex items-center bg-cover bg-[white] md:py-0 py-4">
            <Container className="md:max-w-[1368px]  flex flex-col md:flex-row items-center justify-around w-fit pt-[14px]">
                <div className="flex flex-col md:max-w-[535px] md:mb-0 mb-5">
                    <Text type="h4" className="text-secondary pr-1" >Neden besleniyoruz?
                        <br />
                        Sadece enerji almak için mi?</Text>
                    <Text type="paragraph" className="text-secondary-flat">Evet vücudumuzun ayakta kalabilmesi için enerjiye ihtiyacımız var, ancak hepsi bu değil! </Text>
                </div>
                <div className="md:grid md:grid-rows-2 md:grid-cols-2 gap-[20px] flex flex-col" >
                    {RSCardData.map((data, index) => <RSCard key={index} {...data} />)}
                </div>
            </Container>
        </Container>
    );
}

export default InfoBanner;
import Section from ".";
import Image from 'next/image';
import Text from "@components/Text/Text";

const RSCardData = [
    {
        image: "/images/svg/coronavirus.svg",
        text: "Hastalık Değil",
        subText: 'Hasta'
    },
    {
        image: "/images/svg/spa.svg",
        text: "Organ Değil",
        subText: 'Organizma'
    },
    {
        image: "/images/svg/favorite.svg",
        text: "Sağlığımızı",
        subText: 'Geri Kazanıyoruz !'
    },
    {
        image: "/images/svg/person.svg",
        text: "Kalıcı ve",
        subText: 'Bireye Özgü'
    },
]

const RSCard = (rscardData: any) => <div className="flex items-center rounded-sm rounded-tr-3xl rounded-bl-3xl w-[90%] mx-auto  md:w-[100%] md:h-[125px] bg-primary-3 overflow-hidden">
    <span className="ml-[-20px]" >
        <Image src={rscardData.image} height={120} width={120} />
    </span>
    <div className="flex flex-col">
        <Text className="text-[18px]" type="light">{rscardData.text}</Text>
        <Text className="text-[18px]" type="bold">{rscardData.subText}</Text>
    </div>
</div>

const HomeFunctionalMedicineSection = () => {
    return (
        <Section className="h-fit pb-10 md:pb-0 w-full md:h-[420px] bg-primary-2">
            <div className="md:flex md:flex-row h-full w-fit md:max-w-[1920px] mx-auto">
                <div className="flex flex-col py-8 md:my-0  w-[90%] mx-auto md:mx-auto md:self-center  md:w-[50%]">
                    <Text className="md:text-[34px] text-[28px] text-active-onPrimary" type="bold">Fonksiyonel Tıp Nedir ?</Text>
                    <Text className="md:text-[18px] text-[16px] text-active-onPrimary" type="light">
                        Fonksiyonel Tıp, kronik hastalıkların kök nedenlerini saptayıp bu sorunların düzeltilmesine odaklanan bütünsel bir tıp bakışıdır. Organ odaklı değil sistem odaklı olarak yaklaşarak hastalık tanılarının tedavilerinden çok, temeldeki sorunun iyileştirmesi amaçlanır.
                    </Text>
                </div>
                <div className="md:place-self-start w-full md:self-center mx-auto md:mx-auto md:grid md:grid-cols-2 md:grid-rows-2 md:gap-[28px] flex flex-col gap-[20px] md:w-fit">
                    {RSCardData.map((data, index) => <RSCard key={index} {...data} />)}
                </div>
            </div>
        </Section>
    );
}

export default HomeFunctionalMedicineSection;
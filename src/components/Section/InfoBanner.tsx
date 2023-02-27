import Container from "@components/Container";
import Text from "@components/Text";
import Image from "next/image";
const RSCardData = [
    {
        image: "/images/svg/favorite2.svg",
        text: "Hastalık Değil",
        subText: 'Hasta'
    },
    {
        image: "/images/svg/puzzle.svg",
        text: "Resmin",
        subText: 'Tamamına Bakar'
    },
    {
        image: "/images/svg/science.svg",
        text: "Bilimsel Yaklaşım ile",
        subText: 'Kalıcı ve Kişiye Özel !'
    },
    {
        image: "/images/svg/person2.svg",
        text: "Sağlığımızı Geri",
        subText: 'Kazanıyoruz.'
    },
]

const RSCard = (rscardData: any) => <div className="overflow-hidden bg-secondary-light flex items-center rounded-lg w-[278px]">
    <span className="ml-[10px]" >
        <Image src={rscardData.image} height={74} width={74} />
    </span>
    <div className="flex flex-col">
        <p className="text-secondary !text-[18px] font-nexa-light" >{rscardData.text}</p>
        <p className="text-secondary !text-[18px] font-nexa-bold">{rscardData.subText}</p>
    </div>
</div>

const InfoBanner = () => {
    return (
        <Container className="md:h-[415px] px-[20px] md:px-0 overflow-hidden  md:max-w-full flex items-center bg-cover bg-[white] md:py-0 py-4">
            <Container className="md:max-w-[1368px]  flex flex-col md:flex-row items-center justify-around w-fit pt-[14px]">
                <div className="flex flex-col md:max-w-[535px] md:mb-2 mb-4">
                    <Text type="h4" className="text-secondary pr-1" >Neden besleniyoruz?
                        <br />
                        Sadece enerji almak için mi?</Text>
                    <p className="text-secondary-flat lg:text-[18px] text-[16px] ">
                        Evet vücudumuzun ayakta kalabilmesi için enerjiye ihtiyacımız var, ancak hepsi bu değil!
                        Yiyeceklerimiz;<br />
                        &emsp;*	Enerjimiz, <br />
                        &emsp;*	Çevreye uyum için bilgi kaynağımız,<br />
                        &emsp;*	Yenilenmek için hammaddemiz,<br />
                        &emsp;*	Sonunda yediklerimiz ilacımız ya da sağlığımızı derinden etkileyen hastalık nedenimiz olur.<br />
                        <span className="mt-[6px] w-full block"> Besinler sürekli yenilenen, onarılan vücudumuza hammadde olurlar, kaliteli besinler yerseniz kaliteli hücreleriniz olur.
                            Diğer taraftan besinler bizi birbirimize yakınlaştırır, bu nedenle beslenmede matematik çoğu zaman işlemez.</span>
                    </p>
                </div>
                <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2 gap-[20px] flex flex-col" >
                    {RSCardData.map((data, index) => <RSCard key={index} {...data} />)}
                </div>
            </Container>
        </Container>
    );
}

export default InfoBanner;
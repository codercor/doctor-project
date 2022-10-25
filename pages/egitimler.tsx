import TrainingCard, { TrainingCardProps } from "@components/Card/TrainingCard";
import Container from "@components/Container";
import Footer from "@components/Footer";
import SearchIcon from "@components/Icon/SearchIcon";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import Text from "@components/Text";
import { v4 } from 'uuid'

const trainings: Array<TrainingCardProps> = [
    {
        image: "/images/png/yesilzemin-muz.png",
        title: "Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 1",
        description: "Misyonum, sağlığını olumlu beslenme ve yaşam tarzı değişikliği yoluyla dönüştürmek isteyen herkese kişiselleştirilmiş, özenli hizmetler sunmaktır. Sağlığınızı iyileştirme ve size faydalı bilgiler sunmak konusunda tutkuluyum.",
        price: "1000",
        backgroundColor: "!bg-[#EFEEF5]",
        detailHref: "/egitimler/1",
        detailOnImage: false,
        detailPos: "br",
        imageRounded: "br",
        boxRounded: "tl",
        priceBackgroundColor: "!bg-[#ffffff]",
        priceOnImage: false,
        pricePos: "bl",
        type: "vertical",
        showBuyButton: true,
        detailButtonDirection: "right",
    },
    {
        image: "/images/png/mavizemin-avakado.png",
        title: "Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 1",
        description: "Misyonum, sağlığını olumlu beslenme ve yaşam tarzı değişikliği yoluyla dönüştürmek isteyen herkese kişiselleştirilmiş, özenli hizmetler sunmaktır. Sağlığınızı iyileştirme ve size faydalı bilgiler sunmak konusunda tutkuluyum.",
        price: "1000",
        backgroundColor: "!bg-[#EFEEF5]",
        detailHref: "/egitimler/1",
        detailOnImage: true,
        detailPos: "bl",
        imageRounded: "br",
        boxRounded: "bl",
        priceBackgroundColor: "!bg-[#ffffff]",
        priceOnImage: false,
        pricePos: "bl",
        type: "horizontal-reverse",
        showBuyButton: true,
        detailButtonDirection: "right",
        height: 254
    },
    {
        image: "/images/png/sarizemin-gevrek.png",
        title: "Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 1",
        description: "Misyonum, sağlığını olumlu beslenme ve yaşam tarzı değişikliği yoluyla dönüştürmek isteyen herkese kişiselleştirilmiş, özenli hizmetler sunmaktır. Sağlığınızı iyileştirme ve size faydalı bilgiler sunmak konusunda tutkuluyum.",
        price: "1000",
        backgroundColor: "!bg-[#EFEEF5]",
        detailHref: "/egitimler/1",
        detailOnImage: true,
        detailPos: "br",
        imageRounded: "bl",
        boxRounded: "tr",
        priceBackgroundColor: "!bg-[#ffffff]",
        priceOnImage: false,
        pricePos: "bl",
        type: "horizontal",
        showBuyButton: true,
        detailButtonDirection: "right",
        height: 254
    }, {
        image: "/images/png/badem.png",
        title: "Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 1",
        description: "Misyonum, sağlığını olumlu beslenme ve yaşam tarzı değişikliği yoluyla dönüştürmek isteyen herkese kişiselleştirilmiş, özenli hizmetler sunmaktır. Sağlığınızı iyileştirme ve size faydalı bilgiler sunmak konusunda tutkuluyum.",
        price: "1000",
        backgroundColor: "!bg-[#EFEEF5]",
        detailHref: "/egitimler/1",
        detailOnImage: false,
        detailPos: "br",
        imageRounded: "br",
        boxRounded: "br",
        priceBackgroundColor: "!bg-[#ffffff]",
        priceOnImage: false,
        pricePos: "bl",
        type: "vertical",
        showBuyButton: true,
        detailButtonDirection: "right",
    }, {
        image: "/images/png/yulaf.png",
        title: "Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 1",
        description: "Misyonum, sağlığını olumlu beslenme ve yaşam tarzı değişikliği yoluyla dönüştürmek isteyen herkese kişiselleştirilmiş, özenli hizmetler sunmaktır. Sağlığınızı iyileştirme ve size faydalı bilgiler sunmak konusunda tutkuluyum.",
        price: "1000",
        backgroundColor: "!bg-[#EFEEF5]",
        detailHref: "/egitimler/1",
        detailOnImage: true,
        detailPos: "br",
        imageRounded: "bl",
        boxRounded: "tr",
        priceBackgroundColor: "!bg-[#ffffff]",
        priceOnImage: false,
        pricePos: "bl",
        type: "horizontal",
        showBuyButton: true,
        detailButtonDirection: "right",
        height: 254
    },


]
const TrainingSearchInput = () => {
    return (<div className="md:w-[546px] h-[52px] mx-auto relative top-[-25px] z-20">
        <input type="text" placeholder="Eğitim Ara" className="w-full h-full pl-[48px] rounded-[20px_5px_20px_5px] bg-white-200 font-nexa-bold text-[16px] text-[#949B64] focus:outline-none" />
        <div className="absolute top-[17px] left-[17px]">
            <SearchIcon />
        </div>
    </div>)
}

const FonksiyonelBeslenme = () => {
    return (
        <div className="overflow-hidden">
            <Container>
                <Container className="md:!max-w-[1455px]">
                    <Navbar />
                </Container>
            </Container>
            <Container className=" h-[300px] md:h-[300px]  w-full bg-cover bg-no-repeat md:max-w-full bg-right-bottom  md:bg-cover bg-[url(/images/png/hakkimda-bg.png)]">
                <Container className="md:!max-w-[1455px] grid  place-items-end  justify-center pb-20 md:pb-22 h-full">
                    <Text className="text-[#F2F2F2] text-[24px] md:text-[34px] font-nexa-bold">Eğitimler</Text>
                </Container>
            </Container>
            <Container className=" md:min-h-[1135px] pb-10  !min-w-full bg-[white] ">
                <Container className="md:!max-w-[1455px] min-h-full bg-no-repeat bg-[position:100%_25%] bg-[url(/images/png/bogurtlen-cilek.png)]">
                    <TrainingSearchInput />
                    <div className="mx-auto h-[936px] w-[1000px] max-w-[1000px]items-center md:items-start flex gap-[20px] md:flex-row  ">
                        <div className="flex flex-col   h-full w-full max-w-full gap-[20px]">
                            {
                                trainings.filter((_, i) => i % 2 == 0).map((training, index) =>
                                    <TrainingCard {...training} key={v4()} />)
                            }
                        </div>
                        <div className="flex flex-col  justify-between min-h-full">
                            {
                                trainings.filter((_, i) => i % 2 == 1).map((training, index) =>
                                    <TrainingCard {...training} key={v4()} />)
                            }
                        </div>


                    </div>
                </Container>
            </Container>
            <BeforeFooter />
            <Footer />
        </div>
    );
}

export default FonksiyonelBeslenme;
import Container from "@components/Container";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import { School, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import TrainingCard, { TrainingCardProps } from "@components/Card/TrainingCard";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { v4 } from "uuid";
import DashBoardNavbar from "@components/Navbar/DashBoardNavbar";



const MyTrainings = () => <div className="h-[462px] bg-[#F4F4F4] p-[32px]">
    <Text className="text-[#4D5628] text-[14px] font-nexa-regular">Eğitimlerim</Text>
    <div className="w-full h-full  grid place-content-center">
        <School className="text-[#BABCAC] mx-auto text-[32px]" />
        <Text className="text-[#BABCAC] text-[14px] font-nexa-regular">Satın aldığınız eğitim bulunmamaktadır.</Text>
    </div>
</div>

const AllTrainingsFloating = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const trainingMock: TrainingCardProps =
    {
        image: "/images/png/yesilzemin-muz.png",
        title: "Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 1",
        description: "Misyonum, sağlığını olumlu beslenme ve yaşam tarzı değişikliği yoluyla dönüştürmek isteyen herkese kişiselleştirilmiş, özenli hizmetler sunmaktır. Sağlığınızı iyileştirme ve size faydalı bilgiler sunmak konusunda tutkuluyum.",
        price: "1000",
        backgroundColor: "!bg-[#EFEEF5]",
        detailHref: "/egitimler/1",
        detailOnImage: true,
        detailPos: "br",
        imageRounded: "br",
        boxRounded: "tl",
        priceBackgroundColor: "!bg-[#ffffff]",
        priceOnImage: true,
        pricePos: "bl",
        type: "vertical",
        showBuyButton: false,
        detailButtonDirection: "right",
        width: 378,
        mWidth: 314,
        height: 328,
        mHeight: 250,
        isMobile,
        sizeType: isMobile ? "sm" : "md"
    }
    const floatingContainerRef = useRef<HTMLDivElement>(null)
    return <div>
        <div className="flex justify-between mb-[34px]">
            <div>
                <Text className="text-[#4D5628] text-[20px] font-nexa-bold">Tüm Eğitimler</Text>
                <Text className="text-[#BFBFBF] text-[14px] font-nexa-regular">Prof.Dr Nazan Uysal Harzadın’in tüm eğitimlerini inceleyin.</Text>
            </div>
            <div className="flex gap-[20px] transition-all">
                <div onClick={() => {
                    floatingContainerRef.current?.scrollTo({ left: floatingContainerRef.current.scrollLeft - 406, behavior: "smooth" })
                }} className="w-[52px] h-[52px] bg-[#7C467B] grid place-content-center text-[white] rounded-[5px_10px_5px_10px] pl-2">  <ArrowBackIos /> </div>
                <div onClick={() => {
                    floatingContainerRef.current?.scrollTo({ left: floatingContainerRef.current.scrollLeft + 406, behavior: "smooth" })
                }} className="w-[52px] h-[52px] bg-[#7C467B] grid place-content-center text-[white] rounded-[5px_10px_5px_10px]">  <ArrowForwardIos /> </div>
            </div>
        </div>
        <div ref={floatingContainerRef} className="flex h-fit overflow-scroll md:flex-row items-center md:items-start scrollbar-thin">
            {
                (new Array(12).fill(trainingMock)).map((training, index) => {
                    return <div key={v4()} className="mx-[14px]">
                        <TrainingCard  {...training} />
                    </div>
                })
            }
        </div>
    </div>
}

const DashBoard = () => {
    return (
        <DashboardLayout>
            <MyTrainings />
            <AllTrainingsFloating />
        </DashboardLayout>
    );
}

export default DashBoard;
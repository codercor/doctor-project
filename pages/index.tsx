import Button from "@components/Button";
import TrainingCard, { TrainingCardProps } from "@components/Card/TrainingCard";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import Banner from "@components/Section/FirstBanner";
import InfoBanner from "@components/Section/InfoBanner";
import Text from "@components/Text";
import { NextPage } from "next";
import Image from "next/image";
import {v4} from 'uuid'



export const trainings: Array<TrainingCardProps> = [
  {
    image: "/images/png/yesilzemin-muz.png",
    title: "Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 1",
    description: "Eğitimlerimizde fonksiyonel beslenmenin neden önemli olduğunu anlatacağız. Sağlıklı mutfak ve sağlıklı tabak nasıl oluşturulur...",
    price: "1000",
    backgroundColor: "!bg-[white]",
    detailHref: "/egitimler/1",
    detailOnImage: false,
    detailPos: "bl",
    imageRounded: "br",
    boxRounded: "tl",
    priceBackgroundColor: "!bg-[#ffffff]",
    priceOnImage: true,
    pricePos: "br",
    type: "vertical",
    showBuyButton: false,
    detailButtonDirection: "left",
    width:314,
    height:328,
    sizeType:"sm"
  },
  {
    image: "/images/png/badem.png",
    title: "Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 1",
    description: "Eğitimlerimizde fonksiyonel beslenmenin neden önemli olduğunu anlatacağız...",
    price: "1000",
    backgroundColor: "!bg-[#FFFFFF]",
    detailHref: "/egitimler/1",
    detailOnImage: false,
    detailPos: "bl",
    imageRounded: "br",
    boxRounded: "bl",
    priceBackgroundColor: "!bg-[#ffffff]",
    priceOnImage: true,
    pricePos: "br",
    type: "vertical",
    showBuyButton: false,
    detailButtonDirection: "left",
    height: 247,
    mHeight: 237,
    width: 314,
    sizeType:"sm"
  },
  {
    image: "/images/png/badem.png",
    title: "Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 1",
    description: "Eğitimlerimizde fonksiyonel beslenmenin neden önemli olduğunu anlatacağız...",
    price: "1000",
    backgroundColor: "!bg-[#FFFFFF]",
    detailHref: "/egitimler/1",
    detailOnImage: false,
    detailPos: "bl",
    imageRounded: "br",
    boxRounded: "bl",
    priceBackgroundColor: "!bg-[#ffffff]",
    priceOnImage: true,
    pricePos: "bl",
    type: "horizontal",
    showBuyButton: false,
    detailButtonDirection: "left",
    height: 188,
    width: 440,
    mHeight: 227,
    sizeType:"sm"
  }
]

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Container>
        <Container className="md:!max-w-[1455px]">
          <Navbar />
        </Container>
      </Container>
      <Banner />
      <InfoBanner />
      <Container className="bg-[#F2F4EE] md:!max-w-[100%] md:h-[704px]">
        <div className="w-full absolute h-full overflow-hidden ">
          <span className="absolute hidden md:block bottom-[-220px] rotate-45 left-[-80px]">
            <Image src="/images/png/tabak.png" layout="fixed" width={600} height={900} />
          </span>
          <span className="absolute hidden md:block bottom-0 right-[-50px]">
            <Image src="/images/png/bogurtlen-cilek.png" layout="fixed" width={800} height={400} />
          </span>
        </div>
        <Container className="md:max-w-[1455px] px-[20px] md:px-0 flex justify-around md:flex-row flex-col">
          <div className="flex gap-4 md:text-left text-center items-center md:items-start mt-[80px] flex-col md:max-w-[535px] md:h-full md:mb-0 mb-5">
            <Text type="h4" className="text-purple-800" >Eğitimler</Text>
            <Text type="paragraph" className="text-secondary-flat">Fonksiyonel Tıp, kronik hastalıkların kök nedenlerini saptayıp bu sorunların düzeltilmesine odaklanan bütünsel bir tıp bakışıdır. Organ odaklı değil sistem odaklı olarak yaklaşarak hastalık tanılarının tedavilerinden çok, temeldeki sorunun iyileştirmesi amaçlanır.</Text>
            <Button type="tertiary-flat" className="w-fit mt-4">
              <Text type="paragraph" className="text-[white]">Tüm Eğitimler</Text>
            </Button>
          </div>
          <div className="mt-[55px] mb-[55px] overflow-hidden items-center md:items-start flex gap-[20px] md:flex-row flex-col ">
            <div className="flex flex-col w-[328px] md:w-[775px]  md:flex-wrap md:h-[750px] h-[1100px] gap-[20px] ">
              {trainings.map((training, index) => <TrainingCard key={v4()} {...training} />)}
              <div className="h-[196px] md:w-[440px] w-[328px] bg-no-repeat bg-cover bg-[url('/images/png/sebzeler.png')] grid place-content-center px-[22px] py-[30px]">
                <div className="leading-none bg-purple-100 bg-opacity-80  rounded-md rounded-tr-[20px] rounded-bl-[20px] py-[20px] px-[43.335px] text-center">
                  <Text type="h6" className="text-[#6D669D]">“Fonksiyonel beslenme ve yaşam tarzı değişikliği ile daha sağlıklı bir yaşam mümkün”</Text>
                </div>
              </div>
            </div>
            

          </div>
        </Container>
      </Container>
      <Container className="bg-primary  md:!max-w-[100%] ">
        <Container className="md:!max-w-[1455px] md:h-[706px] flex ">
          <div className="md:w-1/2 md:px-0 relative h-fit flex flex-col md:mt-[150px] mt-[50px] leading-none">
            <div className="max-w-[540px] w-fit px-[20px]">
              <Text type="h4" className="text-deepgreen-100 text-[34px] ">
                Sıkça Sorulan Sorular
              </Text>
              <Text type="body" className="text-deepgreen-200 mt-[24px] ">
                Misyonum, sağlığını olumlu beslenme ve yaşam tarzı değişikliği yoluyla dönüştürmek isteyen herkese kişiselleştirilmiş, özenli ve empatik hizmetler sunmaktır. Kendi sağlığımı ve hastalarımın sağlığını iyileştirmenin mümkün olduğunu gördükten sonra, bu faydaları size de sunmak konusunda tutkuluyum.
              </Text>
            </div>
            <div className="z-20 pb-10 md:pb-0 mt-[46px] scrollbar-none snap-x  overflow-auto w-screen ">
              <div className="max-w-[540px] select-none cursor-move flex gap-[20px]">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => {
                  return <div key={Math.floor(Math.random() * 1000)} className="md:min-w-[482px] min-w-[370px] snap-start scroll-smooth pt-[26px] pl-[30px] h-[255px] bg-quaternary-light rounded-md ">
                    <div className="bg-[#DEE4C3] mb-[22px]   relative w-[60px] h-[60px] rounded-full grid place-content-center">
                      <Image src="/images/svg/help-green.svg" width={36} height={36} />
                    </div>
                    <Text type="h6" className="text-secondary-flat mb-[16px]">B12 ve Demir takviyeye rağmen yükselmiyorsa sebebi ne olabilir ?</Text>
                    <Text type="body" className="text-[#676344]">Mide asit yetersizliği bu ikisinin de eksikliğine neden olur. Önce yeterli mide asidi için tedavi olmalı.</Text>
                  </div>
                })}

              </div>
            </div>
          </div>
          <div className="w-full  relative h-full">
            <Image src="/images/png/sebzeler.png" layout="fill" objectFit="cover" />
          </div>
        </Container>

      </Container>
      <Container className="bg-[white] md:h-[817px] h-[840px]">
        <Container className="md:!max-w-[1200px] md:h-[706px] items-center flex flex-col px-[20px] md:px-0">
          <Text type="h4" className="text-[34px] mt-[80px] mb-[60px] text-quaternary-flat">Basında Nazan Uysal Harzadın</Text>
          <div className="bg-[url(/images/png/avakado.png)] overflow-visible rounded-xl relative  bg-center h-[460px] w-full">
            <span className="hidden md:block absolute bottom-[-60px] left-[-150px]">
              <Image src="/images/svg/brandmark4.svg" width={392} height={130} />
            </span>
          </div>
        </Container>
      </Container>
      <BeforeFooter />
      <Footer />
    </div>
  );
}



export default Home;
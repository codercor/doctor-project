import Button from "@components/Button";
import TrainingCard, { TrainingCardProps } from "@components/Card/TrainingCard";
import Container from "@components/Container";
import Footer from "@components/Footer";
import LandingLayout from "@components/Layouts/LandingLayout";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import Banner from "@components/Section/FirstBanner";
import InfoBanner from "@components/Section/InfoBanner";
import Text from "@components/Text";
import { NextPage } from "next";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import useTraining from "src/hooks/training.hook";
import { v4 } from 'uuid'


import { Carousel } from 'react-responsive-carousel';
import { getPresses } from "@app/User/user.utils";

const Home: NextPage = () => {

  const [presses, setPresses] = useState<any[]>([]);
  useEffect(() => {
    getPresses().then((data) => {
      setPresses(data);
    }).catch((err) => {
      console.log("presses get err", err)
    })
  }, [])
  return (
    <LandingLayout>
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
        <EducationSection />
      </Container>
      <Container className="bg-primary  md:!max-w-[100%] ">
        <Container className="md:!max-w-[1455px] md:h-[706px] flex ">
          <div className="md:w-1/2 md:px-0 relative h-fit flex flex-col md:mt-[150px] mt-[50px] leading-none">
            <div className="max-w-[540px] w-fit px-[20px]">
              <Text type="h4" className="text-deepgreen-100 text-[34px] ">
                S??k??a Sorulan Sorular
              </Text>
              <Text type="body" className="text-deepgreen-200 mt-[24px] ">
                Misyonum, sa??l??????n?? olumlu beslenme ve ya??am tarz?? de??i??ikli??i yoluyla d??n????t??rmek isteyen herkese ki??iselle??tirilmi??, ??zenli ve empatik hizmetler sunmakt??r. Kendi sa??l??????m?? ve hastalar??m??n sa??l??????n?? iyile??tirmenin m??mk??n oldu??unu g??rd??kten sonra, bu faydalar?? size de sunmak konusunda tutkuluyum.
              </Text>
            </div>
            <div className="z-20 pb-10 md:pb-0 mt-[46px] scrollbar-none snap-x  overflow-auto w-screen ">
              <div className="max-w-[540px] select-none cursor-move flex gap-[20px]">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => {
                  return <div key={Math.floor(Math.random() * 1000)} className="md:min-w-[482px] min-w-[370px] snap-start scroll-smooth pt-[26px] pl-[30px] h-[255px] bg-quaternary-light rounded-md ">
                    <div className="bg-[#DEE4C3] mb-[22px]   relative w-[60px] h-[60px] rounded-full grid place-content-center">
                      <Image src="/images/svg/help-green.svg" width={36} height={36} />
                    </div>
                    <Text type="h6" className="text-secondary-flat mb-[16px]">B12 ve Demir takviyeye ra??men y??kselmiyorsa sebebi ne olabilir ?</Text>
                    <Text type="body" className="text-[#676344]">Mide asit yetersizli??i bu ikisinin de eksikli??ine neden olur. ??nce yeterli mide asidi i??in tedavi olmal??.</Text>
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
          <Text type="h4" className="text-[34px] mt-[80px] mb-[60px] text-quaternary-flat">Bas??nda Nazan Uysal Harzad??n</Text>
          <div className="bg-[url(/images/png/avakado.png)] overflow-visible rounded-xl relative  bg-center h-[460px] w-full">
            <div className="md:w-[630px] w-full h-[315px] absolute md:top-[30px] top-[20%]  md:left-[40%] rounded-2xl overflow-hidden ">
              <Carousel autoPlay >
                {presses.map((item) => <div key={v4()} className=" flex items-center gap-[20px] px-[10px] w-full h-[300px] md:w-[630px] md:h-[315px] relative text-left bg-white-300 bg-opacity-70">
                  <div className="min-w-[170px] h-[170px] relative hover:min-w-[190px] hover:h-[190px]">
                    <Image src={item.Image} layout="fill" objectFit="cover" />
                  </div>
                  <div>
                    <Text type="h5" className="text-[#404720]">{item.Title}</Text>
                    <Text type="paragraph" className=" text-[#404720]"> {item.Description} </Text>
                  </div>
                </div>)}
              </Carousel>
            </div>
            <span className="hidden md:block absolute bottom-[-60px] left-[-150px]">
              <Image src="/images/svg/brandmark4.svg" width={392} height={130} />
            </span>
          </div>
        </Container>
      </Container>
    </LandingLayout>
  );
}

const EducationSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const { publicTrainingsProcess: { loading }, publicTrainings, getPublicTrainings } = useTraining()
  const [trainings, setTrainings] = useState<Array<TrainingCardProps & { Id?: string }>>([])
  useEffect(() => {
    getPublicTrainings(1)
  }, [])

  useEffect(() => {
    console.log(publicTrainings);

    if (publicTrainings.length > 0) {
      let formattedTrainings = publicTrainings.slice(0, 3).map((t, i) => {
        return {
          backgroundColor: "!bg-[white]",
          detailHref: "/training?id=" + t.Id,
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
          height: 328,
          width: 314,
          mWidth: 340,
          mHeight: 257,
          sizeType: "sm",
          isMobile,
          title: publicTrainings[i].Name,
          description: publicTrainings[i].Details,
          price: publicTrainings[i].Price,
          image: publicTrainings[i].Image,
          Id: publicTrainings[i].Id
        }
      })
      console.log(formattedTrainings);

      //@ts-ignore
      setTrainings(formattedTrainings)

    }
  }, [publicTrainings.length])
  return <Container className="md:max-w-[1455px] h-full px-[20px] md:px-0 flex justify-around md:flex-row flex-col">
    <div className="flex  md:ml-28 gap-4 md:text-left text-center items-center md:items-start mt-[80px] flex-col md:max-w-[535px] md:h-full md:mb-0 mb-5">
      <Text type="h4" className="text-purple-800" >E??itimler</Text>
      <Text type="paragraph" className="text-secondary-flat">Fonksiyonel T??p, kronik hastal??klar??n k??k nedenlerini saptay??p bu sorunlar??n d??zeltilmesine odaklanan b??t??nsel bir t??p bak??????d??r. Organ odakl?? de??il sistem odakl?? olarak yakla??arak hastal??k tan??lar??n??n tedavilerinden ??ok, temeldeki sorunun iyile??tirmesi ama??lan??r.</Text>
      <Button
        onClick={() => {
          Router.push("/egitimler")
        }}
        type="tertiary-flat" className="w-fit mt-4">
        <Text type="paragraph" className="text-[white]">T??m E??itimler</Text>
      </Button>
    </div>
    <div className="flex md:pb-0 pb-10 flex-col md:w-[775px] mx-auto w-full justify-start items-start md:h-full   flex-wrap gap-[20px]">
      {
        trainings.length > 0 && trainings.map((training, index) =>
          <TrainingCard {...training} key={v4()} />)
      }
      <div className="h-[196px] md:w-[440px] self-center w-[328px] bg-no-repeat bg-cover bg-[url('/images/png/sebzeler.png')] grid place-content-center px-[22px] py-[30px]">
        <div className="leading-none bg-purple-100 bg-opacity-80  rounded-md rounded-tr-[20px] rounded-bl-[20px] py-[20px] px-[43.335px] text-center">
          <Text type="h6" className="text-[#6D669D]">???Fonksiyonel beslenme ve ya??am tarz?? de??i??ikli??i ile daha sa??l??kl?? bir ya??am m??mk??n???</Text>
        </div>
      </div>
    </div>
  </Container>
}

export default Home;
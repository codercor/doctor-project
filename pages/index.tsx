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
import React, { ElementType, RefObject, useEffect, useId, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import useTraining from "src/hooks/training.hook";
import { v4, v5 } from 'uuid'


import { Carousel } from 'react-responsive-carousel';
import { getPresses } from "@app/User/user.utils";
import useDrag from "src/hooks/useDrag.hook";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
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
      <Head>
        <title> Anasayfa | Nazan Uysal Harzadın </title>
      </Head>
      <Banner />
      <InfoBanner />
      <div className="bg-[#F2F4EE]  relative w-full lg:h-[840px] h-[1600px] h-auto min-h-[400px]">
        <div className="w-full absolute bottom-0 h-full overflow-hidden ">
          <span className="absolute hidden z-[0] md:block bottom-[-220px] rotate-45 left-[-80px]">
            <Image src="/images/png/tabak.png" layout="fixed" width={600} height={900} />
          </span>
          <span className="absolute hidden z-[1] lg:block bottom-0 right-[-50px]">
            <Image src="/images/png/bogurtlen-cilek.png" layout="fixed" width={800} height={400} />
          </span>
        </div>
        <EducationSection />
      </div>
      <Container className="bg-primary  md:!max-w-[100%] ">
        <Container className="md:!max-w-[1455px] md:h-[706px] flex ">
          <div className="md:w-1/2 md:px-0 relative h-fit flex flex-col md:mt-[150px] mt-[50px] leading-none">
            <div className="max-w-[540px] w-fit px-[20px]">
              <Text type="h4" className="text-deepgreen-100 text-[34px] ">
                Sıkça Sorulan Sorular
              </Text>
              <Text type="body" className="text-deepgreen-200 mt-[24px] ">
              </Text>
            </div>
            <FAQ />
          </div>
          <div className="w-full  relative h-full">
            <Image src="/images/png/faq.png" layout="fill" objectFit="cover" />
          </div>
        </Container>
      </Container>
      <Container className="bg-[white] md:h-[817px] h-[840px]">
        <Container className="md:!max-w-[1200px] md:h-[706px] items-center flex flex-col px-[20px] md:px-0">
          <Text type="h4" className="text-[34px] mt-[80px] mb-[60px] text-quaternary-flat">Basında Nazan Uysal Harzadın</Text>
          <div className="bg-[url(/images/png/avakado.png)]  overflow-visible rounded-xl relative bg-cover  bg-center h-[460px] w-full">
            <div className="md:w-[630px] w-full h-[315px] absolute md:top-[30px] top-[20%]  md:left-[40%] rounded-2xl overflow-hidden ">
              <Carousel autoPlay infiniteLoop >
                {presses.map((item) => <div key={v4()} className="flex items-center gap-[20px] px-[10px] w-full h-[300px] md:w-[630px] md:h-[315px] relative text-left bg-white-300 bg-opacity-70">
                  <div className="min-w-[170px] h-[170px] relative transition-all hover:min-w-[190px] hover:h-[190px]">
                    <Image src={item.Image} layout="fill" objectFit="cover" />
                  </div>
                  <div className="max-h-[200px] ">
                    <Text type="h5" className="text-[#404720] md:text-[25px] !text-[14px]">{item.Title}</Text>
                    <Text type="paragraph" className=" text-[#404720] text-[10px] md:text-[16px]  line-clamp-6"> {item.Description} </Text>
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
          image: t.Image as string || '',
          title: t.Name as string || '',
          description: t.Details as string || '',
          price: t.Price, // (t.Price * ((100 - t.DiscountRate) / 100)).toFixed(1).toString()
          detailHref: `/training?id=${t.Id}`,
          Id: t.Id,
          DiscountRate: t.DiscountRate
        }
      })
      // if (formattedTrainings.length < 3) {
      //   formattedTrainings = [...formattedTrainings, formattedTrainings[0]]
      // }
      //@ts-ignore
      setTrainings(formattedTrainings)

    }
  }, [publicTrainings.length])
  return <div className="lg:max-w-[1368px] mx-auto h-full px-[20px] md:px-0 flex  lg:flex-row flex-col">
    <div className="flex md:ml-28 gap-4 md:flex-1  text-left items-center md:items-start mt-[80px] flex-col md:mb-0 mb-5">
      <Text type="h4" className="text-purple-800 w-full text-left" >Eğitimler</Text>
      <p className="text-secondary-flat font-nexa-regular md:font-[18px]  font-[16px]">
        Vücudumuz harika çalışan bir makine, çevreden aldığımız bilgilerle genlerimizde bulunan kodları kullanarak sürekli yenilenerek yeniden şekillenir.
        Bu yeniden şekillenme, yenilenme hatta onarılmada yaşam şeklimiz çok önemli.
        Eğitim planımızda sağlığımızı korumak için beslenmenin ve yaşam şeklinin önemine odaklanacağız.
        Yaşam şeklimizi bizim bünyemize uygun hale getirmek için yapabileceklerimizi öğreneceğiz.
        Yaşam şeklinin önemli bileşenlerinden olan beslenme konusunda yapabileceğimiz çok şey var.
        Besinleri tanıyarak, doğru besinleri seçmeyi, doğru besin kombinasyonlarını oluşturulmayı, doğru pişirme tekniklerini kullanarak mutfağımızı sağlığımızı iyileştirmede nasıl kullanacağımızı konuşacağız.
        Böylece sağlıklı kalmak, hastalıklara gidişi engellemek, hatta hastalıklarımızı iyileştirmek için ipuçlarını bulacaksınız.
        Tüm bunları öğrenirken vücudumuzu da tanıyacağız, vücudumuzdan gelen gidişatın ipuçlarını öğreneceğiz.
      </p>
      <Button
        onClick={() => {
          Router.push("/egitimler")
        }}
        type="tertiary-flat" className="w-fit mt-4">
        <Text type="paragraph" className="text-[white]">Tüm Eğitimler</Text>
      </Button>
    </div>
    <div className="flex content-center py-8 flex-col h-full flex-wrap  gap-4 itesm-start justify-start  md:flex-1">
      {
        trainings.length > 0 && trainings.map((training, index) =>
          <div className="lg:w-1/2  self-center justify-self-center w-fit z-[3] h-[380px]" key={v4()}><TrainingCard {...training} /></div>)
      }
    </div>
  </div>
}
import { ScrollContainer, MouseButton } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import Head from "next/head";

const FAQ = () => {


  const childRef = useRef<HTMLDivElement>(null)
  const parentRef = useRef<HTMLDivElement>(null)
  const sss = [
    { title: "Vücudumuzdaki inflamasyonu nasıl azaltırız?", description: "İnflamasyona neden olan besinleri, alışkanlıkları, olayları, kişileri hayatınızdan çıkarmalısınız. İnflamasyona neden olan besinler; işlenmiş, rafine, katkı koruyucu içeren besinler, kızartmalar, fastfood, şekerli, glisemik indeksi yüksek besinler, glüten, tarım ilacı ve toksin içeren besinler." },
    { title: "Kan B12 vitamini ve Demir seviyesi takviyeye rağmen yükselmiyorsa sebebi ne olabilir?", description: "Bu iki mikrobesin de yetersiz ise mide asit yetersizliğinden şüphelenmek gerekir. Önce yeterli mide asidi için tedavi etmeli." },
    { title: "Daha fonksiyonel hale getirmek için brokoli çorbasına neler ekleyelim?", description: "Pişirmeden önce doğrayıp 10-15 dakika bekleyin ki sülforafan açığı çıksın. Kemik suyu, kükürtlü guruptan soğan, sarımsak içindeki allicin ile, havuçtan beta karoten, kuru domatesten likopen, börülce içindeki birçok polifenol, filizlendirilmiş karabuğday, zerdeçal, karabiber, ve muhakkak bolca myrozinaz enzimi içeren hardal ekleyin" },
    { title: "Lahanagilleri menopoz döneminde yiyelim mi?", description: "Brokoli, kırmızı ve beyaz lahana, bürüksel lahanası, karnabahar, alabaş, turp, roka, tere, suteresi, kale, bokchoy yani lahana ailesini menopoz döneminde özellikle yemelisiniz, östrojen hormon dengesine yardım eder. Günün sonunda toplam 250gram yemiş olun." },
    { title: "Homosistein takviye, diyet ve egzersize rağmen düşmüyorsa ne yapalım?", description: "Homosistein metilasyonu değerlendirmemizde önemli bir parametre. Homosistein yüksekliğine neden olan 4 başlığa odaklanırız: metil donörlerinin yeterli olmasına (B grubu vitamin eksikliği, kötü beslenme, sindirim/emilim problemi), metil donör ihtiyacının artması (stres, menopoz, gebelik, ergenlik), metilasyon enzimlerinde gen defekti, yaşlanmak." },
    { title: "Sık sık söylendiği gibi demli çay, kahve demir eksikliği yapar mı?", description: "Çayın ve kahvenin içindeki polifenoller besinlerimizdeki demiri ve başka birçok mikrobesini bağlar. Böylece besinlerin içindeki faydalı birçok vitamin ve minerali alamayız. Bu nedenle çay ve kahveyi yemekten en az 1 saat sonra içelim." },
    { title: "Kanda Ferritin seviyesi yüksek, düşürmek için ne yapmalıyım?", description: "Depo demiri ferritin yüksekliğinin iki nedeni vardır; kronik derin inflamasyon (romatoid artrit, hipertiroidi, karaciğer hastalıkları, bazı kanserler vb) ve demir fazlalığı. Nedeni tespit edip onu tedavi etmeli. Neden inflamasyon değilse kan bağışı yapmayı öneririm." },
    { title: "Kemik suyu faydalı mı, içindeki kollajen bağırsaklardan emilebilir mi?", description: "Kemik suyu içinde kollajenin yanı sıra, kalsiyum, magnezyum ve birçok diğer mikrobesinler bulunur. Emilebilmesi için mide asidinizin, mide, ince bağırsak ve pankreas enzimlerinizin yeterli olması gereklidir." },
    { title: "Kahve içmek magnezyumun etkisini azaltır mı?", description: "Kafein magnezyum ihtiyacını arttırır. Çünkü kafein magnezyum emilimini bozar. Ayrıca kafeinin vücutta işlenmesi ve atılması sürecinde bolca magnezyum kullanılır, kafein ile artan stres hormonları idrar aracılığı ile magnezyum kaybına neden olur." },
    { title: "Ayak tabanımda nasır var, neden olur, ne yapmalıyım?", description: "Nasırın kök nedeni omega3 yağ asidi eksikliğidir. Haftada 1-2 kez uskumru, sardalye, hamsi gibi yağlı yüzey balıklarından, her gün ketentohumu, ceviz yiyebilirsiniz. Günlük en az 1gram IFOs onayı olan omega3 takviyesi alabilirsiniz." },
    { title: "Memedeki fibrokistleri nasıl azaltabiliriz?", description: "Memenin fibrokistik hastalığının kök nedenleri insülin direnci, iyot eksikliği, östrojen dominansı. Nedenlerin tespit edilip ortadan kaldırılması, fibrokistlerin yok olmasını sağlayabilir." },
    { title: "İnsülin değerimiz kaç olmalı? İnsülin direncinden kurtulmanın altın kuralı nedir?", description: "İdeal insülin seviyesi 5 mIU/ml altında olmalı. İnsülin direncinden kurtulmada altın kural, düşük glisemik indeksli beslenmek ve aralıklı açlık uygulamak." },
    { title: "Sarımsağın içindeki allicini nasıl açığa çıkaralım?", description: "Kuru sarımsağı ezelim ve 5-10 dakika bekleyelim. Taze sarımsağı minik minik doğrayalım ve 5-10 dakika bekleyelim. Doğrudan çiğnerek yerken de allicinin açığa çıkar." },
  ]


  const scrollForward = () => {
    if (childRef?.current && parentRef?.current) {
      const boxWidth = childRef.current.getBoundingClientRect().width
      parentRef.current.scrollBy({ left: Number(boxWidth), behavior: 'smooth' })
    }
  }

  const scrollBackward = () => {
    if (childRef?.current && parentRef?.current) {
      const boxWidth = childRef.current.getBoundingClientRect().width
      parentRef.current.scrollBy({ left: -(Number(boxWidth)), behavior: 'smooth' })
    }
  }

  return (<>
    <div className="z-20  pb-4 md:pb-0 mt-[46px] scrollbar-none snap-x overflow-auto w-screen">
      {/* @ts-ignore-next-line */}
      <ScrollContainer component="div" ref={parentRef} className="!min-w-full snap-mandatory snap-center  select-none cursor-move flex md:gap-[20px]">
        {sss.map((i, index) => {
          return (
            <div
              key={v4()}
              ref={childRef}
              className="md:min-w-[482px]  min-w-[100vw] snap-start scroll-smooth pb-[26px] pt-[26px] px-[30px] h-[290px] bg-quaternary-light rounded-md"
            >
              <div className="bg-[#DEE4C3] mb-[22px] relative w-[70px] h-[60px] rounded-full grid place-content-center">
                <Image src="/images/svg/help-green.svg" width={36} height={36} />
              </div>
              <Text type="h6" className="text-secondary-flat mb-[16px]">{i.title}</Text>
              <Text type="body" className="text-[#676344]">{i.description}</Text>
            </div>
          );
        })}
      </ScrollContainer>
    </div>
    <div className="inline-flex  md:hidden w-screen items-center  gap-[12px] justify-end pb-[44px] px-[20px] ">
      <button
        onClick={() => {
          scrollBackward()
        }}
        className="min-w-[42px] text-[white] rounded-full min-h-[42px] bg-[#5B623D]"> <ArrowBack /> </button>
      <button onClick={() => {
        scrollForward()
      }} className="min-w-[42px] text-[white] rounded-full min-h-[42px] bg-[#5B623D]"> <ArrowForward /> </button>
    </div>
  </>
  );
};


export default Home;
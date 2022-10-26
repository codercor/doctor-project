import Container from "@components/Container";
import FloatingImages from "@components/FloatingImages";
import Footer from "@components/Footer";
import LandingLayout from "@components/Layouts/LandingLayout";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import FirstBanner from "@components/Section/FirstBanner";
import InfoBanner from "@components/Section/InfoBanner";
import Text from "@components/Text";
import { NextPage } from "next";
import Image from "next/image";

const Hakkimda: NextPage = () => {
    return <LandingLayout>
        <Container className=" h-[300px] md:h-[300px]  w-full bg-cover bg-no-repeat md:!max-w-full bg-right-bottom  md:bg-cover bg-[url(/images/png/hakkimda-bg.png)]">
            <Container className="md:!max-w-[1455px] grid  place-items-end  justify-center pb-20 md:pb-22 h-full">
                <Text className="text-[#F2F2F2] text-[24px] md:text-[34px] font-nexa-bold">Prof.Dr. Nazan Uysal Harzadin</Text>
            </Container>
        </Container>
        <Container className="flex  flex-col  mt-[20px] md:mt-[46px]">
            <div className="md:block hidden absolute right-0 top-[330px] rotate-[-50deg] z-10 h-[527px] md:w-[473px]">
                <Image src="/images/png/tabak2.png" layout="fill" />
            </div>
            <div className="flex md:flex-row flex-col md:mb-0 mb-[20px]">
                <div className="md:min-h-[533px] md:min-w-[946px] min-h-[250px] px-[20px] relative">
                    <Image src="/images/png/hakkimda-ayakta.png" layout="fill" />
                </div>
                <div className="flex flex-col md:max-w-[584px] gap-4 md:ml-[50px] md:mt-0 mt-[20px] md:mx-0 mx-[20px]  justify-center">
                    <Text type="body" className="!font-nexa-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text type="body" className="!font-nexa-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <div className="relative md:w-[123px] h-[41px] mt-[30px] rotate-[-12deg]">
                        <Image src="/images/svg/brandmark3.svg" layout="fill" />
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col mb-[20px] md:mx-0 mx-[20px] justify-center items-center md:mt-[60px] md:mb-[77px]">
                <div className="flex flex-col md:max-w-[584px] gap-4 md:ml-[50px]  justify-center">
                    <Text type="body" className="!font-nexa-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text type="body" className="!font-nexa-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </Text>

                </div>
                <div className="leading-none rounded-md rounded-bl-3xl bg-opacity-80 overflow-hidden md:min-h-[264px] md:max-h-[264px] md:min-w-[710px] md:max-w-[710px] relative bg-secondary-flat">
                    <div className="absolute right-0 bottom-0 rotate-[-13deg] h-[120px] w-[280px]">
                        <Image src="/images/svg/brandmark5.svg" layout="fill" />
                    </div>
                    <Text type="h5" className="text-[white] !font-nexa-regular !text-[34px] mt-[20px] md:mt-[52px] ml-[34px] mr-[61px] md:mb-[44px] mb-[100px]">
                        “Doğru beslenme ile herkes daha
                        iyi sağlığın keyfini çıkarabilir.
                        Yolculuğunuza rehberlik etmek için buradayım.”
                    </Text>
                </div>
            </div>
        </Container>
        <Container className="!max-w-[100vw] h-[245px] mb-[40px]" >
            <Container className=" h-full">
                <FloatingImages images={[
                    "f1.png",
                    "f2.png",
                    "f3.png",
                    "f4.png",
                    "f5.png",
                    "f6.png",
                    "f7.png",
                    "f8.png",
                ]} to="right" />
            </Container>
        </Container>
        <Container className="!max-w-[100vw] h-[245px] mb-[40px]" >
            <Container className=" h-full">
                <FloatingImages images={[
                    "f3.png",
                    "f4.png",
                    "f8.png",
                    "f2.png",
                    "f6.png",
                    "f1.png",
                    "f5.png",
                    "f7.png",
                ]} to="left" />
            </Container>
        </Container>
    </LandingLayout>
}

export default Hakkimda;


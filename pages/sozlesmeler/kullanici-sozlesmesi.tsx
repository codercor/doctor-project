import Container from "@components/Container";
import UserContract from "@components/ContractContents/UserContract";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import Text from "@components/Text";
import axios from "axios";
import { useEffect, useState } from "react";

const Sozlesmeler = () => {
    const [sozlesme, setSozlesme] = useState("");


    return (
        <div className="overflow-hidden md:bg-none bg-primary-light">
            <Container>
                <Container className="md:!max-w-[1455px]">
                    <Navbar />
                </Container>
            </Container>
            <Container className=" h-[300px] md:h-[300px]  !w-full bg-cover bg-no-repeat md:!max-w-full bg-right-bottom   md:bg-cover bg-[url(/images/png/kullanimkurallari.jpeg)]">
                <div className="backdrop-brightness-[65%] w-full h-full">
                    <Container className="md:!max-w-[1455px] grid  place-items-end   justify-center pb-20 md:pb-22 h-full">
                        <Text className="text-[#F2F2F2] text-[24px] md:text-[34px] font-nexa-regular"> Kullanıcı Sözleşmesi </Text>
                    </Container>
                </div>

            </Container>
            <Container className="mx-auto !min-w-full  md:bg-[white] ">
                <Container className="md:!max-w-[1455px] flex flex-col text-left gap-[20px] md:!min-h-[1115px] py-[40px] md:pr-[70px] px-[20px] md:pl-[70px] bg-primary-light">
                    <UserContract />
                </Container>
            </Container>
            <BeforeFooter />
            <Footer />
        </div>
    );
}

export default Sozlesmeler;
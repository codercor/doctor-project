import Container from "@components/Container";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import Text from "@components/Text";

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
            <BeforeFooter/>
            <Footer/>
        </div>
    );
}

export default FonksiyonelBeslenme;
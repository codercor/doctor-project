import Button from "@components/Button";
import Container from "@components/Container";
import Text from "@components/Text";

const BeforeFooter = () => {
    return (
        <Container className="!max-w-[100vw]  h-[304px] bg-[url(/images/png/kara-uzum.png)] bg-center">
            <Container className="!max-w-full backdrop-brightness-75 h-full bg-center">
                <Container className="md:!max-w-[1200px] h-full items-center  flex flex-col justify-center px-[20px] md:px-0">
                    <Text type="paragraph" className="text-[26px] text-[white]">İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.</Text>
                    <Button className="mt-[40px]" type="tertiary-flat" >Tüm Eğitimler</Button>
                </Container>
            </Container>
        </Container>
    );
}

export default BeforeFooter;
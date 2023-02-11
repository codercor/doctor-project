import Button from "@components/Button";
import Container from "@components/Container";
import Text from "@components/Text";
import Router from 'next/router'

const BeforeFooter = () => {
    return (
        <Container className="!max-w-[100vw]  h-[304px] bg-[url(/images/png/drn1.png)] bg-top">
            <Container className="!max-w-full backdrop-brightness-[55%] h-full bg-center">
                <Container className="md:!max-w-[1200px] h-full items-center  flex flex-col justify-center px-[20px] md:px-0">
                    <Text type="paragraph" className="md:text-[26px]  text-[white]">İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.</Text>
                    <Button onClick={()=>Router.push('/egitimler')} className="mt-[40px]" type="tertiary-flat" >Tüm Eğitimler</Button>
                </Container>
            </Container>
        </Container>
    );
}

export default BeforeFooter;
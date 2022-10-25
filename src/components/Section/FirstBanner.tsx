import Button from "@components/Button";
import Container from "@components/Container";
import Text from "@components/Text";
import Image from "next/image";

const FirstBanner = () => {
    return (
        <Container className=" md:h-[1040px] h-[324px] brightness-[80%]  w-full bg-cover bg-no-repeat md:!max-w-full bg-[url(/images/png/nazan-mobile.png)]  md:bg-cover md:bg-[url(/images/png/nazan.png)]">
            <Container className="md:!max-w-[1455px] md:flex flex-col hidden items-end pt-[314px] ">
                <div className="bg-primary-flat flex flex-col items-start gap-[10px]  bg-opacity-60 w-[630px] h-auto pl-[34px] rounded-t-[5px] rounded-b-[20px] py-[42px]">
                    <Text className="text-[white] " type="h4">Fonksiyonel Beslenme Yoluyla Sağlığınızı Optimize Edin</Text>
                    <Text className="text-[white] " type="paragraph">Fonksiyonel Beslenme, hastalığın temel nedenlerini ele almak için bütünsel, hasta merkezli bir yaklaşım sunar. Mutlu ve canlı bir yaşam yaratmak için sağlığınızın sorumluluğunu üstlenmenize yardımcı oluyorum.</Text>
                    <Button type="secondary"  >Eğitimlere Göz At</Button>
                </div>
                <div className="w-[630px] h-fit">
                    <Image src="/images/svg/cert.svg" height={120} width={400} />
                </div>
            </Container>
        </Container>
    );
}

export default FirstBanner;
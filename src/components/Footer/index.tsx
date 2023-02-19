import Container from "@components/Container";
import ArrowIcon from "@components/Icon/ArrowIcon";
import Logo from "@components/Logo";
import Text from "@components/Text";
import Image from "next/image";
import { useRouter } from "next/router"


const Nav = ({ text, to }: { text: string, to?: string }) => {
    const router = useRouter()
    return (<button onClick={() => {
        if (to) router.push(to)
    }} className="flex  justify-between ">
        <Text type="body" className="text-[white] md:text-[16px] text-[12px]">
            {text}
        </Text>
        <ArrowIcon color="white"></ArrowIcon>
    </button>)
}

const Footer = () => {
    return (
        <Container className="!max-w-[100vw]  md:h-[452px] bg-primary-flat ">
            <Container className="h-[calc(100%-48px)] !max-w-[100vw] bg-primary-flat">
                <Container className="h-[calc(100%-48px)] flex flex-col  !max-w-[1240px] bg-primary-flat">
                    <div className="flex md:flex-row flex-col md:items-start items-center">
                        <div className="md:block flex flex-col items-center ">
                            <Logo />
                            <div className="mt-4">
                                <Image src="/images/svg/cert.svg" width={140} height={36} />
                            </div>

                        </div>
                        <div className="md:ml-[60px] mt-[77px] flex flex-col gap-4 h-fit w-[200px]">
                            <Nav to="/" text="ANASAYFA" />
                            <Nav to="/hakkimda" text="HAKKIMDA" />
                            <Nav to="/egitimler" text="EĞİTİMLER" />
                        </div>
                        <div className="md:ml-[160px] mt-[77px] flex flex-col gap-4 h-fit w-[200px]">
                            <Nav text="Gizlilik Politikası" to="/sozlesmeler/gizlilik" />
                            <Nav text="Kullanıcı Şartları" to="/sozlesmeler/kullanici-sozlesmesi/" />
                            <Nav text="KVKK Metni" to="/sozlesmeler/kvkk" />
                            <Nav text="Aydınlatma Metni" to="/sozlesmeler/aydinlatma-metni/" />
                        </div>
                        <div className="md:ml-[160px] mt-[77px] leading-none flex flex-col gap-4 h-fit w-[250px]">
                            <Text type="paragraph" className="text-[white]">
                                İLETİŞİM
                            </Text>
                            <Text type="paragraph" className="text-[white] font-nexa-light text-[14px]">
                                <a href="tel:+90 554 797 14 97">+90 554 797 14 97</a>
                            </Text>
                            <Text type="paragraph" className="text-[white] font-nexa-light !text-[14px]">
                                info@nazanuysalharzadin.com
                            </Text>
                            <div className="pt-0">
                                <Image src="/images/svg/iyzico_white.svg" width={90} height={36} />
                            </div>
                            <Text type="paragraph" className="text-[white] mt-[2px] md:mt-[7px]">TAKİP ET</Text>
                            <div className="flex gap-2">
                                <Image onClick={() => {
                                    window.open("https://www.instagram.com/nazanuysalharzadin", "_blank")
                                }} src="/images/svg/instagram.svg" width={24} height={24} />
                                <Image onClick={() => {
                                    window.open("https://www.youtube.com/channel/UCUXLeXnl9FLy3HziVsoLTKQ?app=desktop", "_blank")
                                }} src="/images/svg/youtube.svg" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[992px] w-[300px] md:self-end self-center md:mb-0 mb-3">
                        <Text className="text-[white] !text-[12px]  md:h-[48px] self-end mt-[30px]" type="paragraph">
                            Bu site sağlık hizmeti vermemektedir, kişileri bilgilendirmek ve site sahibi hakkında bilgi vermek amacı ile hazırlanmıştır. Sitedeki bilgiler hastalıkların tanı veya tedavisinde kullanılmak üzere verilmemiştir. Tanı ve tedaviler mutlaka bir hekim tarafından yapılması gereken işlemlerdir. Site içeriğinin bir şekilde tanı ve tedavi amacıyla kullanımından doğacak sorumluluk ziyaretçiye aittir.
                        </Text>
                    </div>
                </Container>
            </Container>
            <Container className="h-[48px] !max-w-[100vw] bg-secondary">
                <Container className="h-full flex  !max-w-[1240px]  items-center">
                    <Text type="overline" className="text-[white] md:ml-0 ml-[40px]">Prof.Dr. Nazan Uysal Harzadın © 2022</Text>
                </Container>
            </Container>
        </Container>
    );
}



export default Footer;
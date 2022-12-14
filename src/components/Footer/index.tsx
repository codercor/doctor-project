import Container from "@components/Container";
import ArrowIcon from "@components/Icon/ArrowIcon";
import Logo from "@components/Logo";
import Text from "@components/Text";
import Image from "next/image";


const Nav = ({ text }: { text: string }) => <button className="flex  justify-between ">
    <Text type="body" className="text-[white] md:text-[16px] text-[12px]">
        {text}
    </Text>
    <ArrowIcon color="white"></ArrowIcon>
</button>

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
                            <Nav text="ANASAYFA" />
                            <Nav text="HAKKIMDA" />
                            <Nav text="EĞİTİMLER" />
                        </div>
                        <div className="md:ml-[160px] mt-[77px] flex flex-col gap-4 h-fit w-[200px]">
                            <Nav text="Gizlilik Politikası" />
                            <Nav text="Kullanıcı Şartları" />
                            <Nav text="Aydınlanma Metni" />
                            <Nav text="Çerez Politikası" />
                        </div>
                        <div className="md:ml-[160px] mt-[77px] leading-none flex flex-col gap-4 h-fit w-[250px]">
                            <Text type="paragraph" className="text-[white]">
                                İLETİŞİM
                            </Text>
                            <Text type="paragraph" className="text-[white] font-nexa-light text-[14px]">
                                0 (232) 123 45 67
                            </Text>
                            <Text type="paragraph" className="text-[white] font-nexa-light !text-[14px]">
                                merhaba@nazanuysalharzadin.com
                            </Text>
                            <div className="pt-0">
                                <Image src="/images/svg/iyzico_white.svg" width={90} height={36} />
                            </div>
                            <Text type="paragraph" className="text-[white] mt-[2px] md:mt-[7px]">TAKİP ET</Text>
                            <div className="flex gap-2">
                                <Image src="/images/svg/instagram.svg" width={24} height={24} />
                                <Image src="/images/svg/youtube.svg" width={24} height={24} />
                                <Image src="/images/svg/medium.svg" width={24} height={24} />
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
                    <Text type="overline" className="text-[white] md:ml-0 ml-[40px]">Prof.Dr. Nazan Uysal Harzadin © 2022</Text>
                </Container>
            </Container>
        </Container>
    );
}



export default Footer;
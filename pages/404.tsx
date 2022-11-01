import Container from "@components/Container";
import Logo from "@components/Logo";
import Text from "@components/Text";
import classNames from "classnames";
import Image from "next/image";

const _404 = () => {
    const bgImages = ["bg-[url(/images/png/404-bg.png)]", "bg-[url(/images/png/404-bg-2.png)]", "bg-[url(/images/png/404-bg-3.png)]"];
    const className = classNames("relative min-w-full h-screen bg-cover", bgImages[Math.floor(Math.random() * bgImages.length)]);
    return (
        <Container className={className}>
            <Container className="absolute !w-[1260px] mx-auto">
                <Logo />
            </Container>
            <div className="md:w-[652px] backdrop-blur-sm bg-secondary bg-opacity-40 md:h-[632px] flex flex-col items-center justify-center text-center mt-[0px] mx-auto">
                <div className="relative  w-[120px] h-[50px] rotate-[0deg]">
                    <Image src="/images/svg/brandmark3.svg" layout="fill" />
                </div>
                <Text type="h1" className="text-[white]">404 Error</Text>
                <Text type="h5" className="text-[white]">Üzgünüz! Aradığınız sayfa bulunamadı.</Text>
            </div>
        </Container>
    );
}

export default _404;
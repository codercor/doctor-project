import Button from "@components/Button";
import Container from "@components/Container";
import Text from "@components/Text";
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from "react";

const BeforeFooter = () => {
    const router = useRouter();
    const path = router.pathname;

    const [text, setText] = useState("Sağlıklı ve uzun yaşamın temelleri; fonksiyonel beslenme, kaliteli uyku, stresi yönetebilmek, çevremiz ile sağlıklı ilişkiler içinde olmayı ve uygun bir hareket programında yatmaktadır. Sağlığımızı iyileştirecek mekanizmaları, fonksiyonel beslenmeyi birlikte öğrenelim.")

    useEffect(() => {
        if (path == "/hakkimda") {
            setText(`Beslenme doğru ise, ilaca gerek yok!
            Beslenme yanlış ise, ilacın faydası yok!
            <br/>
            -Hipokrat`)
        }
    }, [path])

    return (
        <Container className="!max-w-[100vw]  h-[304px] bg-[url(/images/png/kara-uzum.png)] bg-top">
            <Container className="!max-w-full backdrop-brightness-[55%] h-full bg-center">
                <Container className="md:!max-w-[1200px] h-full items-center  flex flex-col justify-center px-[20px] md:px-0">
                    <Text type="paragraph" className="md:text-[26px] text-center  text-[white]"> <span dangerouslySetInnerHTML={{ __html: text }} >
                    </span> </Text>
                    <Button onClick={() => Router.push('/egitimler')} className="mt-[40px]" type="tertiary-flat" >Tüm Eğitimler</Button>
                </Container>
            </Container>
        </Container>
    );
}

export default BeforeFooter;
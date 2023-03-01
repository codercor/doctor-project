import Button from "@components/Button";
import Container from "@components/Container";
import Text from "@components/Text";
import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import request, { BANNER } from "@config";
//bg-[url(/images/png/nazan.png)]
const FirstBanner = () => {
    const [data, setData] = useState({
        Image: '',
        Title: '',
        Description: '',
    });
    useEffect(() => {
        request.get(BANNER).then((res: any) => {
            setData(res.data);
        })
    }, [])
    return (
        data.Image ? <Container className=" md:h-[1040px] relative border-2 borded-red-500 h-[324px] brightness-[80%] md:rotate-y-0 rotate-y-180  w-full bg-cover bg-no-repeat md:!max-w-full  ">
            <Image src={data.Image} layout="fill" objectFit="cover" objectPosition="top" />
            <Container className="md:!max-w-[1455px] md:!relative !absolute bottom-4 !right-4 md:right-0 md:bottom-0  flex-col flex items-end md:pt-[314px] ">
                <div className="bg-primary-flat flex flex-col items-start gap-[10px]  bg-opacity-60 w-[200px]  md:rotate-y-0 rotate-y-180 md:w-[630px] break-words h-auto  py-[10px] md:px-[34px] rounded-t-[5px] md:rounded-b-[20px]  px-[10px] md:py-[42px]">
                    <p className="text-[white] break-words text-start text-[12px] md:text-[31px] w-full font-nexa-bold">{data.Title}</p>
                    <p className="text-[white] break-words w-full text-start text-[8px] md:text-[16px] font-nexa-light">{data.Description}</p>
                    <Text className="text-[white] hidden md:block break-words w-full text-[13px] mt-[10px]" type="paragraph">
                        "Sabahları ruhunun yorgun olmasına ve kemiklerinin ağrımasına rağmen kalkman cesurca, <br />
                        Nasıl yapılacağından tereddüt etsen de, yaşamaya devam etmen cesurca <br />
                        Hergün yuvarlanan dalgaları itip, savaşmaya karar vermen cesurca <br />
                        Vazgeçmek istediğin günler olduğunu biliyorum, ama asla vazgeçmemen cesurca <br />
                        YENİ BİR SEN İÇİN BURADA OLMAN CESURCA" <br />
                        - Lana Rafaela</Text>
                    {/* <Button type="secondary" onClick={() => Router.push('/egitimler')}  >Eğitimlere Göz At</Button> */}
                </div>
                <div onClick={() => {
                    window.open("https://www.ifm.org/practitioners/nazan-uysal-harzadin/", "_blank")
                }} className="w-[630px] md:block hidden h-fit cursor-pointer">
                    <Image src="/images/svg/cert.svg" height={120} width={400} />
                </div>
            </Container>
        </Container> : <div></div>
    );
}

export default FirstBanner;
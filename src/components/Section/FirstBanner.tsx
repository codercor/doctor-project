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
        data.Image ? <Container className=" md:h-[1040px] h-[324px] brightness-[80%]  w-full bg-cover bg-no-repeat md:!max-w-full  ">
            <Image src={data.Image} layout="fill" objectFit="cover" />
            <Container className="md:!max-w-[1455px] md:flex flex-col hidden items-end pt-[314px] ">
                <div className="bg-primary-flat flex flex-col items-start gap-[10px]  bg-opacity-60 w-[630px] h-auto pl-[34px] rounded-t-[5px] rounded-b-[20px] py-[42px]">
                    <Text className="text-[white] " type="h4">{data.Title}</Text>
                    <Text className="text-[white] " type="paragraph">{data.Description}</Text>
                    <Button type="secondary" onClick={() => Router.push('/egitimler')}  >Eğitimlere Göz At</Button>
                </div>
                <div className="w-[630px] h-fit">
                    <Image src="/images/svg/cert.svg" height={120} width={400} />
                </div>
            </Container>
        </Container> : <div></div>
    );
}

export default FirstBanner;
import Button from "@components/Button";
import ArrowIcon from "@components/Icon/ArrowIcon";
import Text from "@components/Text";
import TL from "@components/Text/TL";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import Router from "next/router";
import { ArrowForwardIos } from "@mui/icons-material";
export type TrainingCardProps = {
    image: string;
    title: string;
    description: string;
    price?: string;
    showBuyButton?: boolean;
    DiscountRate?: number;
    Id: string;
}

const TrainingCard = ({
    image,
    title,
    description,
    price,
    Id,
    DiscountRate = 0
}: TrainingCardProps) => {
    const calculatedPrice = (DiscountRate > 0 ? (Number(price) * ((100 - DiscountRate) / 100)).toFixed(2).toString() : Number(price).toFixed(2).toString())
    return <div className="flex w-full z-[2]  max-w-[482px] justify-between  max-h-[380px] rounded-[20px_0px] overflow-clip h-full flex-col bg-[#EFEEF5]" >
        <div className="relative w-full min-w-full rounded-br-[20px] overflow-clip min-h-[47%]">
            <Image src={image} layout="fill" objectFit="cover" />
            {price != undefined && <button className="bg-[#FFFFFF] min-w-[110px] items-center justify-center absolute  bottom-2 right-2 flex-col flex font-nexa-bold bg-opacity-95 text-[#3A356B] py-[8px] px-[15px] rounded-[20px_5px]">
                {calculatedPrice != "0.00" && <span className="text-[10px] text-start font-nexa-bold"> *KDV Dahil </span>}
                <div className="flex items-center justify-center gap-2">
                    <span className=" text-[16px] "> {calculatedPrice == "0.00" ? "Ücretsiz" : <>{calculatedPrice}<TL /> </>}
                    </span>
                    {DiscountRate > 0 && <span className="text-[10px] line-through text-[#c22d2d]"> {Number(price).toFixed(2).toString()} <TL /> </span>}
                </div>
            </button>}
        </div>
        <div className="relative flex-col flex  px-[25px] pt-[20px]">
            <p className="text-[#3A356B] text-[16px] font-nexa-bold">{title}</p>
            <p className="text-[#7A7C6D] font-nexa-regular text-[14px] line-clamp-4 leading-[14px] ">
                {description}
                Misyonum, sağlığını olumlu beslenme ve yaşam tarzı değişikliği yoluyla dönüştürmek isteyen herkese kişiselleştirilmiş, özenli hizmetler sunmaktır. Sağlığınızı iyileştirme ve size faydalı bilgiler sunmak konusunda tutkuluyum.
            </p>
        </div>
        <div onClick={() => {
            Router.push(`/training?id=${Id}`)
        }} className="flex justify-between px-[25px] pt-[10px] justify-self-end pb-[20px]">
            <button className="bg-[#3A356B] pl-[20px] font-nexa-bold text-[14px] text-[white] p-[10px] rounded-[20px_5px]"> Detaylar <ArrowForwardIos className="scale-[0.7]" fontSize={"small"} /> </button>
        </div>
    </div >
}
export default TrainingCard;
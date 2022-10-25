import Button from "@components/Button";
import ArrowIcon from "@components/Icon/ArrowIcon";
import Text from "@components/Text";
import TL from "@components/Text/TL";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from 'react-responsive'
export type TrainingCardProps = {
    width?: number;
    height?: number;
    mWidth?: number;
    mHeight?: number;
    image: string;
    title: string;
    description: string;
    price: string;
    detailHref: string;
    detailOnImage: boolean;
    priceOnImage: boolean;
    pricePos: "bl" | "br" | "tl" | "tr";
    detailPos: "bl" | "br" | "tl" | "tr";
    type: "vertical" | "horizontal" | "horizontal-reverse";
    imageRounded: "none" | "tl" | "tr" | "bl" | "br" | "all";
    boxRounded?: "none" | "tl" | "tr" | "bl" | "br" | "all";
    backgroundColor: string;
    priceBackgroundColor: string;
    showBuyButton?: boolean;
    detailButtonDirection: "left" | "right";
    sizeType?: "sm" | "md";
    isMobile?: boolean;
}

const TrainingCard = ({
    width = 482,
    height = 380,
    mWidth = 314,
    mHeight = 328,
    image,
    title,
    description,
    price,
    detailHref,
    detailOnImage,
    priceOnImage,
    pricePos,
    detailPos,
    type,
    imageRounded,
    boxRounded = "none",
    backgroundColor,
    priceBackgroundColor,
    showBuyButton = false,
    detailButtonDirection = "right",
    sizeType = "md",
    isMobile = false
}: TrainingCardProps) => {



    const _width = (!isMobile ? width : mWidth)
    const _height = (!isMobile ? height : mHeight)


    console.log("isDesktopOrLaptop", isMobile, _width, _height);

    const buttonSizeMixin = {
        "w-[113px] h-[36px] !pl-[24px]": sizeType == "sm",
        "w-[134px] h-[48px]": sizeType == "md"
    }
    const descriptionMixin = {
        "!text-[12px] mt-[7px]": sizeType == "sm",
        "!text-[14px] mt-[14px] ": sizeType == "md"
    }
    const titleMixin = {
        "!text-[14px]": sizeType == "sm",
        "!text-[16px]": sizeType == "md"
    }


    const boxClassName = classNames({
        "relative flex overflow-hidden !leading-none": true,
        "flex-col": type === "vertical",
        "flex-row-reverse": type === "horizontal",
        "flex-row": type === "horizontal-reverse",
        "rounded-tl-[30px]": boxRounded === "tl",
        "rounded-tr-[30px]": boxRounded === "tr",
        "rounded-bl-[30px]": boxRounded === "bl",
        "rounded-br-[30px]": boxRounded === "br",
        "rounded-[30px]": boxRounded === "all",
        "rounded-none": boxRounded === "none" || !boxRounded,
        [backgroundColor]: backgroundColor,
    })


    const imageClassName = classNames({
        "relative": true,
        "min-h-[45%] w-full relative overflow-hidden": type === "vertical",
        "min-h-full min-w-[40%] relative overflow-hidden ": type === "horizontal" || type === "horizontal-reverse",
        "rounded-tl-[30px]": imageRounded === "tl",
        "rounded-tr-[30px]": imageRounded === "tr",
        "rounded-bl-[30px]": imageRounded === "bl",
        "rounded-br-[30px]": imageRounded === "br",
        "rounded-[30px]": imageRounded === "all",
        "rounded-none": imageRounded === "none" || !imageRounded,
    });

    const priceClassName = classNames({
        "absolute  border-none m-[18px]": true,
        ...buttonSizeMixin,
        "bg-purple-800 leading-none": true,
        "overflow-visible flex items-center text-center justify-between": true,
        "bottom-0 left-0": pricePos === "bl",
        "bottom-0 right-0": pricePos === "br",
        "top-0 left-0": pricePos === "tl",
        "top-0 right-0": pricePos === "tr",
        [priceBackgroundColor]: priceBackgroundColor || "bg-transparent",
    });

    const detailClassName = classNames({
        "absolute  m-[18px]": true,
        ...buttonSizeMixin,
        "bg-purple-800 leading-none": true,
        "overflow-hidden flex items-center text-center justify-between": true,
        "bottom-0 left-0": detailPos === "bl",
        "bottom-0 right-0": detailPos === "br",
        "top-0 left-0": detailPos === "tl",
        "top-0 right-0": detailPos === "tr",
    });

    const contentClassName = classNames("relative flex flex-col items-center  justify-between  p-[18px] ", {
        "h-[55%]": type === "vertical",
        "h-full w-[60%]": type === "horizontal" || type === "horizontal-reverse",
        "pt-[24px]": sizeType == "md",
        "pt-[16px]": sizeType == "sm",
    })

    const DetailButton = () => <Button direction={detailButtonDirection} type="quaternary-flat" className={detailClassName}>
        <Text type="body" className="!text-[14px] text-[white]">Detaylar</Text>
        <span>
            <ArrowIcon color="#ffffff" />
        </span>
    </Button>;
    const PriceWithBuyButton = () => <Button direction="right" type="transparent-white" className={priceClassName}>
        <Text type="body" className="!text-[20px] text-[#3A356B]">{price}<TL /></Text>
        {showBuyButton &&
            <Button type="tertiary-flat" className={classNames("absolute flex items-center bottom-0 left-[120px] !bg-[#C3BFE8] !border-none", {
                ...buttonSizeMixin
            })}  >Satın Al</Button>
        }
    </Button>
    const PriceButtonOnImage = () => <Button direction="right" type="transparent-white" className={priceClassName}>
        <Text type="body" className={classNames(" text-[#3A356B]", {
            "!text-[20px]": sizeType == "md",
            "!text-[16px]": sizeType == "sm",
        })}>{price}<TL /></Text>
    </Button>
    return <div className={boxClassName} style={{
        minWidth: _width + "px",
        minHeight: _height + "px",
        height: _height + "px",
        width: _width + "px",
    }}>
        <span className="hidden"> {_width} {_height} </span>
        <div className={imageClassName} >
            <Image src={image} layout="fill" objectFit="cover" />
            {priceOnImage && <PriceButtonOnImage />}
            {detailOnImage && <DetailButton />}
        </div>
        <div className={contentClassName}>
            <div>
                <Text type="h4" className={classNames("text-[#3A356B]", { ...titleMixin })}>{title}</Text>
                <Text type="h5" className={classNames("text-[#7A7C6D]  font-nexa-regular", {
                    ...descriptionMixin
                })}>{description}</Text>
            </div>
            {!detailOnImage && <DetailButton />}
            {!priceOnImage &&
                <PriceWithBuyButton />
            }

        </div>
    </div >
}
export default TrainingCard;
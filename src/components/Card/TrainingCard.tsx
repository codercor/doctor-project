import Button from "@components/Button";
import ArrowIcon from "@components/Icon/ArrowIcon";
import Text from "@components/Text";
import TL from "@components/Text/TL";
import classNames from "classnames";
import Image from "next/image";

export type TrainingCardProps = {
    width?: number;
    height?: number;
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
}
const TrainingCard = ({
    width = 482,
    height = 380,
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
}: TrainingCardProps) => {

    const boxClassName = classNames({
        "relative flex overflow-hidden !leading-none": true,
        [`w-[${width}px] min-w-[${width}px] h-[${height}px] !min-h-[${height}px] !max-h-[${height}px]`]: true,
        "flex flex-col": type === "vertical",
        "flex flex-row-reverse": type === "horizontal",
        "flex flex-row": type === "horizontal-reverse",
        "rounded-tl-[30px]": boxRounded === "tl",
        "rounded-tr-[30px]": boxRounded === "tr",
        "rounded-bl-[30px]": boxRounded === "bl",
        "rounded-br-[30px]": boxRounded === "br",
        "rounded-[30px]": boxRounded === "all",
        "rounded-none": boxRounded === "none" || !boxRounded,
        [backgroundColor]: backgroundColor,
    });

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
        "absolute w-[134px] h-[48px] border-none m-[18px]": true,
        "bg-purple-800 leading-none": true,
        "overflow-visible flex items-center text-center justify-between": true,
        "bottom-0 left-0": pricePos === "bl",
        "bottom-0 right-0": pricePos === "br",
        "top-0 left-0": pricePos === "tl",
        "top-0 right-0": pricePos === "tr",
        [priceBackgroundColor]: priceBackgroundColor || "bg-transparent",
    });

    const detailClassName = classNames({
        "absolute w-[134px] h-[48px] m-[18px]": true,
        "bg-purple-800 leading-none": true,
        "overflow-hidden flex items-center text-center justify-between": true,
        "bottom-0 left-0": detailPos === "bl",
        "bottom-0 right-0": detailPos === "br",
        "top-0 left-0": detailPos === "tl",
        "top-0 right-0": detailPos === "tr",
    });

    const contentClassName = classNames("relative flex flex-col items-center  justify-between  p-[18px] pt-[24px]", {
        "h-[55%]": type === "vertical",
        "h-full w-[60%]": type === "horizontal" || type === "horizontal-reverse",
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
            <Button type="tertiary-flat" className="absolute bottom-0 left-[120px] !bg-[#C3BFE8] !border-none  w-[134px] h-[48px]">Satın Al</Button>
        }
    </Button>
    const PriceButtonOnImage = () => <Button direction="right" type="transparent-white" className={priceClassName}>
        <Text type="body" className="!text-[20px] text-[#3A356B]">{price}<TL /></Text>
    </Button>
    return <div className={boxClassName}>
        <div className={imageClassName} >
            <Image src={image} layout="fill" objectFit="cover" />
            {priceOnImage && <PriceButtonOnImage />}
            {detailOnImage && <DetailButton />}
        </div>
        <div className={contentClassName}>
            <div>
                <Text type="h4" className="!text-[16px] text-[#3A356B]">{title}</Text>
                <Text type="h5" className="text-[#7A7C6D] mt-[14px] !text-[14px] font-nexa-regular">{description}</Text>
            </div>
            {!detailOnImage && <DetailButton />}
            {!priceOnImage &&
                <PriceWithBuyButton />
            }

        </div>
    </div >
}
export default TrainingCard;
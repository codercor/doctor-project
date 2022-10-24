import Button from "@components/Button";
import ArrowIcon from "@components/Icon/ArrowIcon";
import Text from "@components/Text";
import classNames from "classnames";
import Image from "next/image";

type TrainingCardProps = {
    image: string;
    title: string;
    description: string;
    price: string;
    className?: string;
    imageClassName?: string;
    type?: "column" | "row";
    contentClassName?: string;
}
const TrainingCard = ({ image, title, description, price, imageClassName, className, contentClassName = "" }: TrainingCardProps) => {

    const mainClassName = classNames("bg-[white] w-full h-fit overflow-hidden justify-center items-top flex-col", className);

    return <div className={mainClassName}>
        <div className={classNames(imageClassName)}>
            <Image src={image} layout="fill" objectFit="cover" />
        </div>
        <div className={classNames("  ", contentClassName)}>
            <div className="leading-none">
                <Text type="body" className="text-quaternary-flat">
                    {title}
                </Text>
            </div>
            <div className="leading-none mt-[7px]">
                <Text type="paragraph" className="text-gray-text font-nexa-regular text-[12px] ">
                    {description}
                </Text>
            </div>
            <Button type="quaternary-flat" className="mt-[12px] pt-[5px] pb-[5px] pl-[20px] pr-[10px] flex gap-2 items-center rounded-[5px]">
                <Text className="text-[#C3BFE8] font-nexa-regular text-[14px]">Detaylar</Text>
                <ArrowIcon color="#C3BFE8" />
            </Button>
        </div>
    </div>
}
export default TrainingCard;
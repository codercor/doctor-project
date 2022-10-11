import Button from "@components/button/Button";
import CartIcon from "@components/icon/CartIcon";
import Text from "@components/Text/Text";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

const TrainingCard = ({
    title,
    description,
    price,
    imagename
}: any) => {
    return (
        <div className="bg-primary-3 w-[278px] h-[320px] flex flex-col pb-2 justify-between rounded-2xl overflow-hidden">
            <div className={classNames("flex justify-end p-2 h-[135px] w-full bg-cover",imagename)}>
                <CartIcon />
            </div>
            <div className="px-4">
                <Text className="text-active-onPrimary text-[16px]" type="bold"> {title} </Text>
            </div>
            <div className="px-4">
                <Text className="text-[10px]" type="light">
                    {description}
                </Text>
            </div>
            <div className="px-4 flex justify-between">
                <Button className="py-[4px] px-[16px] bg-onPrimary-2 text-active-onPrimary font-regular">
                    <Text className="text-active-onPrimary text-[16px]" type="light"> {price} </Text>
                </Button>
                <Button className="py-[4px] px-[16px]" style={{ height: 'fit-content' }}>
                    <Text className="text-white text-[16px]" type="light"> Detaylar </Text>
                </Button>
            </div>
        </div>
    );
}

export default TrainingCard;
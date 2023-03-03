import Button from "@components/Button";
import Text from "@components/Text";
import { Download } from "@mui/icons-material";

export type OrderHistoryCardProp = {
    orderNumber: string;
    date: string;
    price: string;
    name: string;
    type: string;
    invoiceURL: string | null
}

const OrderHistoryCard = ({ orderNumber, date, price, name, type, invoiceURL }: OrderHistoryCardProp) => {
    return <div className="flex flex-col w-full px-[26px] py-[20px] bg-[white]">
        <Text className="text-[10px] text-[#9F9F9F]">11.10.2022 15.52</Text>
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <Text className="text-[#C17B32] text-[12px] md:text-[18px]"> Tarih </Text>
                <Text className="text-[black] text-[12px] sm:text-[16px]"> {name} </Text>
            </div>
            <div className="flex flex-col">
                <Text className="text-[#C17B32] text-[12px] md:text-[18px]">Tutar</Text>
                <Text className="text-[black] text-[12px] sm:text-[16px]">{price}₺</Text>
            </div>
            <Button disabled={
                !invoiceURL
            } onClick={
                () => {
                    if (invoiceURL) {
                        window.open(invoiceURL, "_blank");
                    }
                }
            } className="!p-0 !px-[10px]  sm:w-[146px] h-[50px] flex items-center justify-center !bg-secondary text-[12px]">
                <Download className="text-[white]" />
                <Text className="text-[white] hidden sm:block text-[12px]">E-Fatura</Text>
            </Button>
        </div>
    </div>
}
export default OrderHistoryCard;

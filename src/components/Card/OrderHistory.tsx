import Button from "@components/Button";
import Text from "@components/Text";
import { Download } from "@mui/icons-material";

export type OrderHistoryCardProp = {
    orderNumber: string;
    date: string;
    price: string;
    name: string;
    type: string;
    invoiceURL: string;
}

const OrderHistoryCard = ({ orderNumber, date, price, name, type, invoiceURL }: OrderHistoryCardProp) => {
    return <div className="flex flex-col w-full px-[26px] py-[20px] bg-[white]">
        <Text className="text-[12px] text-[#9F9F9F]">11.10.2022 15.52</Text>
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <Text className="text-[#C17B32] text-[18px]">Eğitim</Text>
                <Text className="text-[black] text-[16px]">Fonksiyonel Beslenme - 2</Text>
            </div>
            <div className="flex flex-col">
                <Text className="text-[#C17B32] text-[18px]">Ödenen Tutar</Text>
                <Text className="text-[black] text-[16px]">1000₺</Text>
            </div>
            <Button className="!p-0  w-[146px] h-[50px] flex items-center justify-center !bg-secondary text-[12px]">
                <Download className="text-[white]" />
                <Text className="text-[white] text-[12px]">E-Fatura</Text>
            </Button>
        </div>
    </div>
}
export default OrderHistoryCard;

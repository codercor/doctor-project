import Button from "@components/Button";
import Text from "@components/Text";
import request from "@config";
import { BackpackSharp, Download, Replay } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import useUser from "src/hooks/user.hook";

export type OrderHistoryCardProp = {
    orderNumber: string;
    date: string;
    price: string;
    name: string;
    type: string;
    invoiceURL: string | null
    Id: string;
    IsCanceled: boolean;
    startDate: string;
}

const OrderHistoryCard = ({ orderNumber, date, price, name, type, invoiceURL, Id, IsCanceled, startDate }: OrderHistoryCardProp) => {
    const { getOrderHistory, user: { orderHistory } } = useUser();
    const refundRequest = () => {
        let toastId = toast.loading("İade talebiniz gönderiliyor...");
        request.post("/purchase/refund", {
            PurchaseId: Id
        }).then((res) => {
            toast.dismiss(toastId);
            getOrderHistory();
            toast.success("İade talebiniz başarıyla gönderildi.");
        }).catch((err) => {
            toast.dismiss(toastId);
            getOrderHistory();
            toast.error("İade talebiniz gönderilirken bir hata oluştu.");
        })
    }
    return <div className="flex flex-col w-full min-w-[280px] relative px-[26px] py-[20px] bg-[white]">
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
            <div className="text-[10px] flex-col  flex font-nexa-light">
                <Text className="text-[#C17B32] text-[10px] md:text-[18px]">İade</Text>
                <button className="disabled:opacity-30" disabled={
                    (Number(price) == 0 || IsCanceled || (new Date(startDate).getTime() < new Date().getTime()))
                } onClick={
                    () => {
                        refundRequest()
                    }}>
                    <Replay className="!text-slate-50  !text-[36px] bg-secondary p-2 rounded-[20px_5px] cursor-pointer" />
                </button>
            </div>
            <Button disabled={
                !invoiceURL || IsCanceled
            }
                onClick={
                    () => {
                        if (invoiceURL) {
                            window.open(invoiceURL, "_blank");
                        }
                    }
                } className="!p-0 !px-[10px]  sm:w-[146px] h-[50px] flex items-center justify-center !bg-secondary text-[12px]">
                <Download className="text-[white]" />
                <Text className="text-[white] hidden sm:block text-[12px]">E-Fatura</Text>
            </Button>
            {IsCanceled && <span className="text-[12px] absolute text-red-500 bottom-0 right-1 z-9"> İade edilmiştir </span>}
        </div>
    </div>
}
export default OrderHistoryCard;

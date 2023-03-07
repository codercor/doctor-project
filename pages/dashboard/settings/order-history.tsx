import Button from "@components/Button";
import OrderHistoryCard from "@components/Card/OrderHistory";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";
import { useEffect } from "react";
import useUser from "src/hooks/user.hook";



const SettingsOrderHistory = () => {
    const { getOrderHistory, user: { orderHistory } } = useUser();

    useEffect(() => {
        getOrderHistory();
    }, [])

    useEffect(() => {
        console.log("his", orderHistory);
    }, [orderHistory])

    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[#F9FBFC] p-[32px] flex flex-col rounded-[20px_5px_20px_5px] w-full md:w-2/3 h-full">
                    <div> <Text>Satın Alma Geçmişi</Text> </div>
                    <div className="flex flex-col w-full gap-[12px]">
                        {
                            orderHistory?.length === 0 && <div className="flex flex-col items-center justify-center w-full h-full">
                                <Text type="h3" className="text-[#4D5628] !text-[12px] w-full">Satın alım geçmişiniz bulunmamaktadır.</Text>
                            </div>
                        }
                        {orderHistory?.map((item, index) => (
                            <OrderHistoryCard
                                key={item.Id}
                                orderNumber={item.Detail.PurchaseId}
                                date={item.Date}
                                price={item.Detail.Price}
                                name={new Date(item.Date).toLocaleDateString("tr-TR", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit",
                                })}
                                Id={item.Id}
                                type={"TYPE"}
                                invoiceURL={item.Detail.EInvoiceLink}
                            />
                        ))}
                    </div>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default SettingsOrderHistory;
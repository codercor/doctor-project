import Button from "@components/Button";
import OrderHistoryCard from "@components/Card/OrderHistory";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";

const mockData = [
    {
        orderNumber: "123456",
        date: "11.10.2022 15.52",
        price: "1000₺",
        name: "Fonksiyonel Beslenme - 2",
        type: "Eğitim",
        invoiceURL: "https://www.google.com",
    },
    {
        orderNumber: "789465",
        date: "10.11.2020 20.52",
        price: "2000₺",
        name: "Fonksiyonel Beslenme - 1",
        type: "Eğitim",
        invoiceURL: "https://www.google.com",
    },
]

const SettingsOrderHistory = () => {
    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[#F9FBFC] p-[32px] flex flex-col rounded-[20px_5px_20px_5px] w-2/3 h-full">
                    <div> <Text>Satın Alma Geçmişi</Text> </div>
                    <div className="flex flex-col w-full gap-[12px]">
                        {mockData.map((item, index) => (
                            <OrderHistoryCard
                                key={item.orderNumber}
                                orderNumber={item.orderNumber}
                                date={item.date}
                                price={item.price}
                                name={item.name}
                                type={item.type}
                                invoiceURL={item.invoiceURL}
                            />
                        ))}
                    </div>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default SettingsOrderHistory;
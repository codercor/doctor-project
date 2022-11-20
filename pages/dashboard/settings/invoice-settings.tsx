import Button from "@components/Button";
import EditButton from "@components/Button/EditButton";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";
import { useState } from "react";
import useUser from "src/hooks/user.hook";

const SettingsInvoiceSettings = () => {

    const [isEdit, setIsEdit] = useState(false);
    const { user, updateUserBillingDetail } = useUser();
    const BillingDetail = user.BillingDetail;
    const [billingDetail, setBillingDetail] = useState(BillingDetail);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBillingDetail({ ...billingDetail, [name]: value })
    }

    const handleSave = () => {
        setIsEdit(!isEdit);
        updateUserBillingDetail(billingDetail);
    }

    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[#F9FBFC] p-[32px] flex flex-col rounded-[20px_5px_20px_5px] w-2/3 h-full">
                    <div className="flex justify-between items-center"> <Text>Fatura Ayarları</Text><div onClick={() => setIsEdit(!isEdit)}> <EditButton /> </div></div>
                    <div className="flex flex-col w-full gap-[12px]">
                        <Input onChange={handleChange} value={billingDetail.RegistrationAddress} disabled={!isEdit} name="RegistrationAddress" text="Fatura Adresi" type="text" />
                        <div className="flex gap-[41px]">
                            <Input onChange={handleChange} value={billingDetail.Name} disabled={!isEdit} name="Name" text="Ad" type="text" />
                            <Input onChange={handleChange} value={billingDetail.Surname} disabled={!isEdit} name="Surname" text="Soyad" type="text" />
                        </div>
                        <Input onChange={handleChange} value={billingDetail.Email} disabled={!isEdit} name="Email" text="E-posta" type="email" />
                        <Input onChange={handleChange} value={billingDetail.IdentityNumber} disabled={!isEdit} name="IdentityNumber" text="TC Kimlik No" type="text" />
                        <div className="flex gap-[41px]">
                            <Input onChange={handleChange} value={billingDetail.Country} name="Country" disabled={!isEdit} text="Ülke" type="text" />
                            <Input onChange={handleChange} value={billingDetail.City} name="City" disabled={!isEdit} text="Şehir" type="text" />
                        </div>
                        <Button onClick={handleSave} type="tertiary-flat" className="text-center mt-5" >Kaydet</Button>
                    </div>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default SettingsInvoiceSettings;
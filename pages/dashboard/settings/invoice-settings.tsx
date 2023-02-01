import Button from "@components/Button";
import EditButton from "@components/Button/EditButton";
import FormInput from "@components/Forms/FormInput/FormInput";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";
import { Formik } from "formik";
import { Router, useRouter } from "next/dist/client/router";
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
    const router = useRouter()
    const handleSave = () => {
        setIsEdit(!isEdit);
        updateUserBillingDetail(billingDetail);
        if (localStorage.getItem("after-complete-billing-details")) {
            let to = localStorage.getItem("after-complete-billing-details");
            router.push(to as string);
            localStorage.removeItem("after-complete-billing-details");
        }
    }

    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[#F9FBFC] p-[32px] flex flex-col rounded-[20px_5px_20px_5px] w-full md:w-2/3 h-full">
                    <div className="flex justify-between items-center"> <Text>Fatura Ayarları (Satın alım için bu alanları doldurmak zorunludur) </Text><div onClick={() => setIsEdit(!isEdit)}> <EditButton /> </div></div>
                    <div className="flex flex-col w-full gap-[12px]">
                        <Formik onSubmit={() => { }} initialValues={billingDetail}>
                            {
                                ({ values, handleChange: _handleChange, handleSubmit, submitForm, errors }) => {

                                    return <form onSubmit={handleSubmit} >
                                        <FormInput error={errors.RegistrationAddress} onChange={_handleChange} value={values.RegistrationAddress} disabled={!isEdit} name="RegistrationAddress" label="Fatura Adresi" type="text" />


                                        <div className="flex gap-[41px]">
                                            <FormInput onChange={_handleChange} value={billingDetail.Name} disabled={!isEdit} name="Name" label="Ad" type="text" />
                                            <FormInput onChange={_handleChange} value={billingDetail.Surname} disabled={!isEdit} name="Surname" label="Soyad" type="text" />
                                        </div>
                                        <FormInput onChange={_handleChange} value={billingDetail.Email} disabled={!isEdit} name="Email" label="E-posta" type="email" />
                                        <FormInput onChange={_handleChange} value={billingDetail.IdentityNumber} disabled={!isEdit} name="IdentityNumber" label="TC Kimlik No" type="text" />
                                        <div className="flex gap-[41px]">
                                            <FormInput onChange={_handleChange} value={billingDetail.Country} name="Country" disabled={!isEdit} label="Ülke" type="text" />
                                            <FormInput onChange={_handleChange} value={billingDetail.City} name="City" disabled={!isEdit} label="Şehir" type="text" />
                                        </div>
                                        <Button onClick={() => {
                                            submitForm();
                                        }} type="tertiary-flat" className="text-center mt-5" >Kaydet</Button>
                                    </form>
                                }
                            }

                        </Formik>
                    </div>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default SettingsInvoiceSettings;
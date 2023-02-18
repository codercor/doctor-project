import Button from "@components/Button";
import EditButton from "@components/Button/EditButton";
import FormInput, { FormInputRadio, FormInputSelect } from "@components/Forms/FormInput/FormInput";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";
import { Formik } from "formik";
import { Router, useRouter } from "next/dist/client/router";
import { FC, useEffect, useState } from "react";
import useUser from "src/hooks/user.hook";
import * as Yup from "yup";
//@ts-ignore
import CountryCityService from "countries-cities";
import ililce from '../../../src/il-ilce';
import FormInputSelectOne from "@components/Forms/FormInput/FormInputSelectOne";
import request from "@config";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
    Name: Yup.string().nullable().required("Ad zorunludur"),
    Surname: Yup.string().nullable().required("Soyad zorunludur"),
    Phone: Yup.string().matches(/^\+?[0-9\s]+$/, "+ işareti ve sayılar ve boşluklar kullanılabilir").min(10, "Telefon numarası en az 10 haneli olmalı").required("Telefon zorunludur").nullable().max(20, "Telefon numarası en fazla 20 haneli olabilir"),
    BirthDate: Yup.string().required("Doğum tarihi zorunludur").nullable(),
    Country: Yup.string().required("Ülke zorunludur").nullable(),
    Email: Yup.string().email("Geçerli bir e-posta adresi giriniz").required("E-posta zorunludur").nullable(),
    District: Yup.string().when("Country", {
        is: "Turkey",
        then: Yup.string().required("Şehir zorunludur").nullable(),
        otherwise: Yup.string().nullable()
    }),
    City: Yup.string().when("Country", {
        is: "Turkey",
        then: Yup.string().required("Şehir zorunludur").nullable(),
        otherwise: Yup.string().nullable()
    }),
    RegistrationAddress: Yup.string().required("Adres zorunludur").nullable(),
    TaxNumber: Yup.string().nullable().when("ContactType", {
        is: "company",
        then: Yup.string().min(10, "10 haneli").max(10, "10").required("Vergi numarası zorunludur").nullable(),
        otherwise: Yup.string().nullable()
    }),
    IdentityNumber: Yup.string().nullable().when("ContactType", {
        is: "person",
        then: Yup.string().required("T.C. Kimlik numarası zorunludur").nullable(),
        otherwise: Yup.string().when("ContactType", {
            is: "company",
            then: Yup.string().required("Vergi numarası zorunludur").nullable().length(10, "Vergi numarası 10 haneli olmalıdır").matches(/^[0-9]+$/, "Vergi numarası sadece sayılardan oluşmalıdır"),
            otherwise: Yup.string().nullable()
        })
    }),
    TaxOffice: Yup.string().nullable().when("ContactType", {
        is: "company",
        then: Yup.string().required("Vergi dairesi zorunludur"),
        otherwise: Yup.string().nullable()
    }),
    ContactType: Yup.string().required("Faturalandırma tipi zorunludur")
});

const SettingsInvoiceSettings = () => {

    const [isEdit, setIsEdit] = useState(false);
    const { user, updateUserBillingDetail } = useUser();
    const BillingDetail = user.BillingDetail;
    const [billingDetail, setBillingDetail] = useState(BillingDetail);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setBillingDetail({ ...billingDetail, [name]: value })
    // }
    const router = useRouter()
    // const handleSave = () => {
    //     setIsEdit(!isEdit);
    //     updateUserBillingDetail(billingDetail);
    //     if (localStorage.getItem("after-complete-billing-details")) {
    //         let to = localStorage.getItem("after-complete-billing-details");
    //         router.push(to as string);
    //         localStorage.removeItem("after-complete-billing-details");
    //     }
    // }

    const [nextPage, setNextPage] = useState("");

    useEffect(() => {
        if (router.query.nextPage) {
            setNextPage(router.query.nextPage as string);
            setIsEdit(true);
        }
    }, [router.query.nextPage])
    const FormContent = ({ values, handleChange: _handleChange, handleSubmit, submitForm, errors, setFieldValue }: any) => {
        const countries = CountryCityService.getCountries().map((country: string) => {
            if (country === "Turkey") {
                return { value: country, label: "Türkiye" };
            }
            return { value: country, label: country };
        });

        const [cities, setCities] = useState<any[]>([]);

        const [districts, setDistricts] = useState<any[]>(
            []
        );
        useEffect(() => {
            if (values.Country == "Turkey") {
                setCities(ililce.map((city) => {
                    return { value: city.il_adi, label: city.il_adi };
                }));
            } else {
                setCities([]);
            }
            if (values.Country == "Turkey" && values.City) {
                setDistricts((ililce.find((city) => city.il_adi === values.City)?.ilceler as any[])?.map((district) => {
                    return { value: district.ilce_adi, label: district.ilce_adi };
                }));
            } else {
                setDistricts([]);
            }

        }, [values.Country, values.City]);
        return <form onSubmit={(e) => {
            e.preventDefault();
            console.log("submit edildi", values);
            if(!values.Surname) values.Surname = " "
            const updateUrl = `/user/billing/${user.Id}`;
            request.put(updateUrl, values).then((res) => {
                toast.success("Fatura bilgileriniz başarıyla güncellendi");
                console.log("billing detail update success", res);
                if (nextPage) {
                    setTimeout(() => {
                        router.push(nextPage);
                    }, 1000)
                }
            }).catch((err) => {
                console.log("billing detail update error", err);
                toast.error("Fatura bilgileriniz güncellenirken bir hata oluştu lütfen geçerli bilgiler girdiğinizden emin olun.");
            })

        }} >
            <FormInputSelectOne onChange={_handleChange} error={errors.ContactType} value={values.ContactType} disabled={!isEdit} name="ContactType" label="Fatura Tipi" options={[{ label: "Bireysel", value: "person" }, { label: "Kurumsal", value: "company" }]} />
            <FormInput error={errors.RegistrationAddress} onChange={_handleChange} value={values.RegistrationAddress} disabled={!isEdit} name="RegistrationAddress" label="Fatura Adresi" type="text" />
            <div className="flex gap-[41px]">
                <FormInput onChange={_handleChange} value={values.Name} error={errors.Name} disabled={!isEdit} name="Name" label={values.ContactType != "company"? "Ad":"Firma Adı"} type="text" />
                {
                    values.ContactType != "company" && <FormInput onChange={_handleChange} value={values.Surname} error={errors.Surname} disabled={!isEdit} name="Surname" label="Soyad" type="text" />
                }
            </div>
            <FormInput onChange={_handleChange} value={values.Email} disabled={!isEdit} error={errors.Email} name="Email" label="E-posta" type="email" />
            <FormInput onChange={_handleChange} value={values.IdentityNumber} disabled={!isEdit} error={errors.IdentityNumber} name="IdentityNumber" label={(values.ContactType == 'person' ? 'Tc Kimlik Numarası' : 'Vergi numarası')} type="text" />
            <FormInput disabled={!isEdit} name="Phone" error={errors.Phone} value={values.Phone} onChange={_handleChange} label="Telefon" type="tel" />
            <FormInputSelect
                disabled={!isEdit}
                error={errors.Country}
                name="Country"
                value={values.Country}
                onChange={(e) => {
                    const selectedCountry = e.currentTarget.value;
                    if (selectedCountry != "Turkey") {
                        setCities([]);
                        setDistricts([]);
                        setFieldValue("City", "");
                        setFieldValue("District", "");
                        _handleChange(e);
                        return;
                    }
                    setFieldValue("City", "Istanbul");
                    _handleChange(e);
                }}
                label="Ülkeniz"
                type="text"
                options={countries}
            />
            {values.Country == "Turkey" && <FormInputSelect
                disabled={!isEdit}
                error={errors.City}
                name="City"
                value={values.City}
                onChange={((e) => {
                    _handleChange(e);
                })}
                label="Şehir"
                type="text"
                options={cities}
            />}
            {values.City && <> <FormInputSelect
                disabled={!isEdit}
                error={errors.District}
                name="District"
                value={values.District}
                onChange={_handleChange}
                label="İlçe"
                type="text"
                options={districts}
            />
            </>}
            {
                values.ContactType == 'company' && <FormInput onChange={_handleChange} value={values.TaxOffice} disabled={!isEdit} error={errors.TaxOffice} name="TaxOffice" label="Vergi Dairesi" type="text" />}
            <button type="submit" disabled={!isEdit} onClick={() => {
                console.log("values", values);

                submitForm().then((res: any) => {
                    console.log("res", res);
                }).catch((err: any) => {
                    console.log("err", err);
                });
            }} className="disabled:opacity-60 text-center mt-5 w-full h-[50px] rounded-[20px_5px] text-[white] font-nexa-regular bg-tertiary-flat" >
                {
                    nextPage ? 'Kaydet Ve Ödeme Adımına Geç' : 'Kaydet'
                }
            </button>
        </form>
    }
    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[#F9FBFC] p-[32px] flex flex-col rounded-[20px_5px_20px_5px] w-full md:w-2/3 h-full">
                    <div className="flex justify-between items-center"> <Text>Fatura Ayarları (Satın alım için bu alanları doldurmak zorunludur) </Text><div onClick={() => setIsEdit(!isEdit)}> <EditButton /> </div></div>
                    <div className="flex flex-col w-full gap-[12px]">
                        <Formik onSubmit={(values) => {

                        }}
                            validationSchema={validationSchema}
                            initialValues={{
                                Name: BillingDetail.Name || "",
                                Surname: BillingDetail.Surname || "",
                                Phone: BillingDetail.Phone || "",
                                Country: BillingDetail.Country || "Turkey",
                                Email: BillingDetail.Email || "",
                                District: BillingDetail.District || "",
                                City: BillingDetail.City || "",
                                RegistrationAddress: BillingDetail.RegistrationAddress || "",
                                TaxOffice: BillingDetail.TaxOffice || "",
                                IdentityNumber: BillingDetail.IdentityNumber || "",
                                ContactType: BillingDetail.ContactType || "person",
                            }}>
                            {
                                FormContent
                            }

                        </Formik>
                    </div>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default SettingsInvoiceSettings;
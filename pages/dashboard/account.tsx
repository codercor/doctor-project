// @ts-nocheck
/* tslint:disable */
import { UserInformation } from "@app/User/user.types";
import Button from "@components/Button";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import { Edit } from "@mui/icons-material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useAuth from "src/hooks/auth.hook";
import useUser from "src/hooks/user.hook";
import { useRouter } from "next/router";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "yup-phone";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import FormInput, { FormInputSelect } from "@components/Forms/FormInput/FormInput";
//@ts-ignore
import CountryCityService from "countries-cities";
import ililce from '../../src/il-ilce'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Account = () => {
    const { user } = useAuth(); //TODO ADD -> update user
    const { updateUser, refetchUser } = useUser();
    const router = useRouter();
    const [isEdit, setIsEdit] = React.useState(true);
    const [_userInfo, setUserInfo] = React.useState<UserInformation>({
        Id: user.Information?.Id,
        Fullname: user.Information.Fullname,
        Phone: user.Information.Phone,
        Email: user.Email,
        BirthDate: user.Information.BirthDate,
        Gender: user.Information.Gender,
        Country: user.Information.Country,
        City: user.Information.City,
        District: user.Information.District,
    });

    useEffect(() => {
        let birthDate = user.Information.BirthDate as string || "";
        console.log("user.Information.BirthDate", user.Information.BirthDate);

        setUserInfo({ ..._userInfo, BirthDate: (birthDate).replaceAll(".", "-") })
    }, [user.Information.BirthDate])

    useEffect(() => {
        refetchUser()
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo({ ..._userInfo, ..._userInfo, [name]: value })
    }


    const handleEdit = () => {
        setIsEdit(!isEdit);
    }

    const handleSave = (values: any) => {
        values.BirthDate = (values.BirthDate as string).replaceAll("-", ".");
        updateUser(values).then(() => {
            refetchUser();
        })
        //setIsEdit(!isEdit);
    }

    const validationSchema = Yup.object().shape({
        Name: Yup.string().nullable().required("Ad zorunludur"),
        Surname: Yup.string().nullable().required("Soyad zorunludur"),
        Phone: Yup.string().matches(/^\+?[0-9\s]+$/, "+ işareti ve sayılar ve boşluklar kullanılabilir").min(10, "Telefon numarası en az 10 haneli olmalı").required("Telefon zorunludur").nullable().max(20, "Telefon numarası en fazla 20 haneli olabilir"),
        BirthDate: Yup.string().required("Doğum tarihi zorunludur").nullable(),
        Gender: Yup.string().required("Cinsiyet zorunludur").nullable(),
        Country: Yup.string().required("Ülke zorunludur").nullable(),
        District: Yup.string().when("Country", {
            is: "Turkey",
            then: Yup.string().required("İlçe zorunludur").nullable(),
            otherwise: Yup.string().nullable()
        }),
        City: Yup.string().when("Country", {
            is: "Turkey",
            then: Yup.string().required("Şehir zorunludur").nullable(),
            otherwise: Yup.string().nullable()
        }),

    });
    const Surname = _userInfo.Fullname?.split(" ").slice(-1).join(" ") || "";
    const Name = _userInfo.Fullname?.split(" ").slice(0, -1).join(" ") || "";

    const FormContent = ({ errors, values, submitForm, handleChange: _handleChange, validateForm, handleSubmit, setFieldValue }) => {
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
            if (!values.Country && !values.City && !values.District) {
                setFieldValue("Country", "Turkey");
                setFieldValue("City", "İstanbul");
                setFieldValue("District", "Beyoğlu");
                setTimeout(() => {
                    validateForm();
                }, 50);
            }
        }, []);

        useEffect(() => {
            if (values.Country == "Turkey") {
                setCities(ililce.map((city) => {
                    return { value: city.il_adi, label: city.il_adi };
                }));
            } else {
                setCities([]);
            }
            if (values.Country == "Turkey" && values.City?.length > 0) {
                setDistricts((ililce.find((city) => city.il_adi === values.City)?.ilceler as any[])?.map((district) => {
                    return { value: district.ilce_adi, label: district.ilce_adi };
                }));
            } else {
                setDistricts([]);
            }
        }, [values.Country, values.City]);

        const [phoneCode, setPhoneCode] = useState<string>("+90");
        return <form onSubmit={handleSubmit}>
            <div className="flex  flex-col lg:flex-row max-w-full gap-[16px]">
                <FormInput inputClass="w-full" disabled={!isEdit} name="Name" error={errors.Name} value={values.Name} onChange={_handleChange} label="Ad" type="text" />
                <FormInput inputClass="w-full" disabled={!isEdit} name="Surname" error={errors.Surname} value={values.Surname} onChange={_handleChange} label="Soyad" type="text" />
            </div>
            <FormInput disabled={true} name="Email" error={errors.Email} value={values.Email} onChange={_handleChange} label="E-Posta" type="email" />
            {/* <FormInput disabled={!isEdit} name="Phone" error={errors.Phone} value={values.Phone} onChange={_handleChange} label="Telefon" type="tel" /> */}
            <label className="text-[#4E929D] text-[16px] font-nexa-bold">
                Telefon
            </label>
            <PhoneInput
                country={'tr'}
                value={values.Phone}
                inputProps={{
                    name: 'Phone',
                    className: 'text-[black] text-[16px] w-full pl-[50px] font-nexa-bold rounded-[5px_20px_0px_20px] disabled:opacity-60',
                    // onChange: (e) => { setFieldValue("Phone", phoneCode + e.target.value) },
                    value: values.Phone
                }}
                containerClass="w-full"

                onChange={phone => setFieldValue("Phone", phone)}
            />
            {errors.Phone && (
                <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">
                    * {errors.Phone}
                </span>
            )}
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
                    setFieldValue("City", "İstanbul");
                    _handleChange(e);
                }}
                label="Ülke"
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
            <FormInput disabled={!isEdit} name="BirthDate" value={((values.BirthDate as string || "").replaceAll(".", "-"))}
                onChange={_handleChange} label="Doğum Tarihi" type="date" error={errors.BirthDate} />
            <Text type="h4" className="text-deepgreen-100 !text-[14px]  !py-[10px]">Cinsiyet</Text>
            <RadioGroup
                title="Cinsiyet"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Erkek"
                onChange={_handleChange}
                value={values?.Gender}
                name="Gender"
            >
                <div className="flex items-center  w-full justify-center">
                    <div>
                        <FormControlLabel name="Gender" disabled={!isEdit} className="block" value="Erkek" control={<Radio className="block" />} label="Erkek" />
                    </div>
                    <div>
                        <FormControlLabel name="Gender" disabled={!isEdit} className="block" value="Kadın" control={<Radio className="block" />} label="Kadın" />
                    </div>
                </div>
            </RadioGroup>
            {errors?.Gender && <p className="text-red-500 !text-[14px]  !py-[10px]">{errors.BirthDate}</p>}
            <button onClick={(e) => {
                console.log("values", values);

                console.log("errors", errors);
                if (Object.keys(errors).length > 0) {
                    toast.error("Lütfen tüm alanları doğru şekilde doldurunuz")
                } else submitForm()

            }}
                type="button"
                disabled={!isEdit}
                className="disabled:opacity-40 rounded-br-[20px] rounded-tl-[20px] text-[white] !bg-secondary text-white  border-secondary w-[200px] self-end mt-[20px] h-[48px] leading-none flex items-center justify-center">
                <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Güncelle</Text>
            </button>
        </form>
    }

    return (
        <DashboardLayout>
            <div className=" md:h-[798px] flex  rounded-[30px_5px] bg-[#F4F4F4]">
                <div className="md:w-1/2 w-full h-full flex flex-col text-start items-center justify-start py-[26px] px-[30px]">
                    <div className="flex justify-between w-full">
                        <Text type="h3" className="text-[#4E929D] !text-[20px] w-full">Hesabım</Text>
                        {/* <div onClick={handleEdit}
                            className="bg-tertiary min-w-[36px] hover:cursor-pointer rounded-sm min-h-[36px] grid place-content-center">
                            <Edit className="text-[white] text-[16px]" />
                        </div> */}
                    </div>

                    <div className="md:max-w-[450px] w-full flex flex-col">
                        <Formik validationSchema={validationSchema} initialValues={{ ..._userInfo, Fullname: undefined, Name, Surname }} onSubmit={(values) => {
                            values.Fullname = `${values.Name} ${values.Surname}`
                            handleSave(values)
                        }}>

                            {FormContent}
                        </Formik>
                    </div>
                </div>
                <div
                    className="bg-[url(/images/png/nazanlogin.jpeg)] hidden md:grid place-content-center rounded-[20px_5px_20px_5px] bg-cover bg-center  bg-no-repeat w-1/2 h-full">
                    <Text type="paragraph" className="!xl:text-[25px] !md:text-[16px] text-center text-[white] h-[186px] w-full">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir
                        hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza
                        başlayın.</Text>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Account;
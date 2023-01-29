import { UserInformation } from "@app/User/user.types";
import Button from "@components/Button";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import { Edit } from "@mui/icons-material";
import Image from "next/image";
import React, { useEffect } from "react";
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
const Account = () => {
    const { user } = useAuth(); //TODO ADD -> update user
    const { updateUser, refetchUser } = useUser();
    const router = useRouter();
    const [isEdit, setIsEdit] = React.useState(false);
    const [_userInfo, setUserInfo] = React.useState<UserInformation>({
        Id: user.Information?.Id,
        Fullname: user.Information.Fullname,
        Phone: user.Information.Phone,
        Address: user.Information.Address,
        Email: user.Email,
        BirthDate: user.Information.BirthDate,
        Gender: user.Information.Gender
    });

    useEffect(() => {
        let birthDate = user.Information.BirthDate as string || "";
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
        values.BirthDate = (values.BirthDate as string).replaceAll("-", ".")
        updateUser(values).then(() => {

        })
        setIsEdit(!isEdit);
    }

    const validationSchema = Yup.object().shape({
        Fullname: Yup.string().nullable().required("Ad Soyad zorunludur"),
        Phone: Yup.string().matches(/^\+?[0-9\s]+$/, "+ işareti ve sayılar ve boşluklar kullanılabilir").min(10, "Telefon numarası en az 10 haneli olmalı").required("Telefon zorunludur").nullable().max(20, "Telefon numarası en fazla 20 haneli olabilir"),
        Address: Yup.string().required("Adres zorunludur").nullable(),
        BirthDate: Yup.string().required("Doğum tarihi zorunludur").nullable(),
        Gender: Yup.string().required("Cinsiyet zorunludur").nullable()
    });

    return (
        <DashboardLayout>
            <div className=" md:h-[798px] flex  rounded-[30px_5px] bg-[#F4F4F4]">
                <div className="md:w-1/2 w-full h-full flex flex-col text-start items-center justify-start py-[26px] px-[30px]">
                    <div className="flex justify-between w-full">
                        <Text type="h3" className="text-[#4E929D] !text-[20px] w-full">Hesabım</Text>
                        <div onClick={handleEdit}
                            className="bg-tertiary min-w-[36px] rounded-sm min-h-[36px] grid place-content-center">
                            <Edit className="text-[white] text-[16px]" />
                        </div>
                    </div>

                    <div className="md:max-w-[450px] w-full flex flex-col">
                        <Formik validationSchema={validationSchema} initialValues={{ ..._userInfo }} onSubmit={(values) => {
                            handleSave(values)
                        }}>
                            {({ errors, values, submitForm, handleChange: _handleChange, validateForm, handleSubmit }) => <form onSubmit={handleSubmit}>
                                <Input disabled={!isEdit} name="Fullname" value={values.Fullname} onChange={_handleChange}
                                    text="Ad Soyad" type="text" />
                                {errors?.Fullname && <p className="text-red-500 !text-[14px]  !py-[10px]">{errors.Fullname}</p>}
                                <Input disabled={true} name="Email" value={values.Email} text="Eposta" type="email" />
                                <Input disabled={!isEdit} name="Phone" value={values.Phone} onChange={_handleChange}
                                    text="Telefon" type="tel" />
                                {errors?.Phone && <p className="text-red-500 !text-[14px]  !py-[10px]">{errors.Phone}</p>}
                                <Input disabled={!isEdit} name="Address" value={values.Address} onChange={_handleChange}
                                    text="Adres" type="text" />
                                {errors?.Address && <p className="text-red-500 !text-[14px]  !py-[10px]">{errors.Address}</p>}
                                <Input disabled={!isEdit} name="BirthDate" value={((values.BirthDate as string))}
                                    onChange={_handleChange} text="Doğum Tarihi" type="date" />
                                {errors?.BirthDate && <p className="text-red-500 !text-[14px]  !py-[10px]">{errors.BirthDate}</p>}
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
                                    <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Kaydet</Text>
                                </button>
                            </form>}
                        </Formik>
                    </div>
                </div>
                <div
                    className="bg-[url(/images/png/register.png)] hidden md:grid place-content-center rounded-[20px_5px_20px_5px] bg-cover bg-center  bg-no-repeat w-1/2 h-full">
                    <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir
                        hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza
                        başlayın.</Text>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Account;
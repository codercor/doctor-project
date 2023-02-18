import React, { useEffect, useState } from "react";
//import FormDivider from " ../FormDivider/FormDivider";
import FormDivider from "@components/Forms/FormDivider/FormDivider";
import FormInput, {
    FormInputSelect,
    FormInputTextArea,
} from "@components/Forms/FormInput/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import FormSectionHeader from "@components/Forms/FormSectionHeader/FormSectionHeader";
// @ts-ignore-next-line
import CountryCityService from "countries-cities";
import FormInputSelectOne from "@components/Forms/FormInput/FormInputSelectOne";
import { flow1FormValidationSchema, textValidationSchema } from "@components/Forms/validationSchemes";
import { useRouter } from 'next/router'
import request from "@config";
import useUser from "src/hooks/user.hook";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import axios from "axios";
import { toast } from "react-hot-toast";
import { CreateAppointmentModal } from "@components/CreateAppointmentModal/CreateAppointmentModal";
import { flow1FormInitialValues } from "@components/Forms/BasvuruForms/config/initialValues";
import { LocalLoading } from "../appointment";
import { CircularProgress } from "@mui/material";
import { Close } from "@mui/icons-material";

const initialValues = flow1FormInitialValues;
const countries = CountryCityService.getCountries().map((country: string) => {
    if (country === "Turkey") {
        return { value: country, label: "Türkiye" };
    }
    return { value: country, label: country };
});

const validationSchema = flow1FormValidationSchema;

export default function InspectFirstForm() {
    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
    const [ownerUserId, setOwnerUserId] = useState<string>("")
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<typeof initialValues>(initialValues)
    const router = useRouter()
    const [formStatus, setFormStatus] = useState<null | string>("")
    const flowId = router.query.flow_id
    const fetchFlow = async () => {
        if (!flowId) return;
        let response = await request.get(`/userflows/form/${flowId}`)
        console.log("response.data ", response.data);
        setOwnerUserId(response.data.user.Id)
        setFormStatus(response.data.Status)
        return response.data.Link

    }

    const getData = async () => {
        setLoading(true);
        const dataUrl = await fetchFlow();
        if (!dataUrl) return;
        axios.get(dataUrl).then((res) => {
            console.log("res.data ", res.data);
            setData((res.data))
            setLoading(false);
        })
    }

    useEffect(() => {
        getData();
    }, [flowId])

    const finalizeTheForm = async (isDone: boolean, message?: string) => {
        request.put(`/userflows/${flowId}`, {
            Status: (isDone ? "Done" : "Reject"),
            Message: message
        }).then(() => {
            toast.success("Form değerlendirmesi kaydedildi !");
            setTimeout(() => {
                !isDone ? router.push("/dashboard/forms-management") : ''
            }, 1000);
        })
    }

    const [areYouSure, setAreYouSure] = useState({
        open: false,
        isPositive: false,
    })

    const AreYouSureModal = ({ finish, isPositive }: {
        finish: (finishValue: {
            confirmed: boolean,
            message?: string
        }) => void, isPositive: boolean
    }) => {
        const [rejectMessage, setRejectMessage] = useState<string | undefined>(undefined)
        return <>
            <div onClick={(e) => {
                e.stopPropagation();
                finish({
                    confirmed: false,
                })
            }} className='fixed top-0 z-[2] grid place-content-center left-0 w-screen h-screen bg-opacity-50 bg-black-100'>
                <div onClick={(e) => {
                    e.stopPropagation()
                }} className="w-[504px] relative  px-[32px] py-[40px] bg-[white] rounded-[10px] flex flex-col">
                    <h1 className="text-[#4E929D] !text-[24px] font-nexa-bold"> Emin misiniz ? </h1>
                    <p className='text-[#5C5C5C] text-[16px] mb-[20px]'>
                        {isPositive ? 'Onaylamak' : 'Reddetmek'} istediğinize emin misiniz ?
                    </p>
                    {!isPositive && <FormInputTextArea maxLength={200} label="Reddetme sebebi" value={rejectMessage} onChange={(e) => {
                        setRejectMessage(e.target.value)
                    }} />}
                    <div className="flex justify-between mt-[20px]">
                        <button onClick={() => {
                            finish({
                                confirmed: true,
                                message: rejectMessage
                            })
                        }}
                            className='text-[white] mt-auto rounded-[20px_5px] font-nexa-bold bg-[#4e9d89] w-[172px] h-[50px] disabled:opacity-[50%]'>
                            Evet
                        </button>
                        <button onClick={() => {
                            finish({
                                confirmed: false,
                            })
                        }}
                            className='text-[white] mt-[10px] rounded-[20px_5px] font-nexa-bold bg-[#9d4e61] w-[172px] h-[50px] disabled:opacity-[50%]'>
                            Hayır
                        </button>
                    </div>
                    <button onClick={() => {
                        finish({
                            confirmed: false,
                        })
                    }}
                        className='w-[50px] right-[20px] top-[20px] absolute text-[white] h-[50px] hover:bg-[#df7676] hover:shadow-deepgreen-100 duration-200 grid place-content-center hover:animate-spin transition-all hover:shadow-inner bg-[#4E929D] rounded-full'>
                        <Close />
                    </button>

                </div>
            </div>
        </>
    }

    const [cities, setCities] = useState<any[]>(
        CountryCityService.getCities("Turkey").map((city: string) => {
            return { value: city, label: city };
        })
    );
    return (<>
        {
            loading && <LocalLoading message="Yükleniyor" />
        }
        {areYouSure.open && <AreYouSureModal finish={(finishValue) => {
            if (!finishValue.confirmed) {
                setAreYouSure({
                    open: false,
                    isPositive: false,
                })
            } else {
                finalizeTheForm(areYouSure.isPositive, finishValue.message).then(() => {
                    if (areYouSure.isPositive) setIsAppointmentModalOpen(true)
                    else {
                        toast.success("Form değerlendirmesi kaydedildi !");
                        router.push("/dashboard/forms-management")
                    }
                })
            }
        }} isPositive={areYouSure.isPositive} />}
        <DashboardLayout>
            {isAppointmentModalOpen && <CreateAppointmentModal finish={() => {
                setIsAppointmentModalOpen(false);
                setAreYouSure({
                    ...areYouSure,
                    open: false,
                })
                router.push("/dashboard/forms-management");
            }} UserId={ownerUserId} />}
            <Formik
                initialValues={data}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log("values ", values);
                }}
                enableReinitialize={true}
            >
                {({ handleSubmit, handleChange, values, errors, submitForm, dirty }) => {
                    return (
                        <form
                            onSubmit={handleSubmit}>
                            <div className="w-full">
                                <FormSectionHeader> Kişisel Bilgiler </FormSectionHeader>
                                <div className="flex h-[120px] gap-[30px]  w-[full]">
                                    <FormInput
                                        error={errors.fullName}
                                        name="fullName"
                                        value={values.fullName}
                                        onChange={handleChange}
                                        label="Adınız ve Soyadınız"
                                        type="text"
                                        disabled={true}
                                    />
                                    <FormInput
                                        error={errors.age}
                                        name="age"
                                        value={values.age}
                                        onChange={handleChange}
                                        label="Yaşınız"
                                        type="number"
                                        disabled={true}
                                    />
                                    <FormInputSelect
                                        error={errors.gender}
                                        name="gender"
                                        value={values.gender}
                                        onChange={handleChange}
                                        label="Cinsiyetiniz"
                                        options={[
                                            { value: "kadın", label: "Kadın" },
                                            { value: "erkek", label: "Erkek" },
                                            { value: "diger", label: "Diğer" },
                                        ]}
                                        disabled={true}
                                    />
                                </div>
                                {" "}
                                <div className="flex h-[120px] gap-[30px]  w-[full]">
                                    <FormInput
                                        error={errors?.email}
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        label="Eposta adresiniz"
                                        type="email"
                                        disabled={true}
                                    />
                                    <FormInput
                                        error={errors.phone}
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        label="Telefon numaranız"
                                        type="text"
                                        disabled={true}
                                    />
                                </div>
                                {" "}
                                <div className="flex h-[120px] gap-[30px]  w-[full]">
                                    <FormInputSelect
                                        error={errors.country}
                                        name="country"
                                        value={values.country}
                                        onChange={(e) => {
                                            const selectedCountry = e.currentTarget.value;
                                            let cities =
                                                CountryCityService.getCities(selectedCountry) || [];
                                            setCities(
                                                cities.map((city: string) => {
                                                    return { value: city, label: city };
                                                })
                                            );
                                            handleChange(e);
                                        }}
                                        label="Ülkeniz"
                                        type="text"
                                        options={countries}
                                        disabled={true}
                                    />
                                    <FormInputSelect
                                        error={errors.city}
                                        name="city"
                                        value={values.city}
                                        onChange={handleChange}
                                        label="Şehir"
                                        type="text"
                                        options={cities}
                                        disabled={true}
                                    />
                                </div>
                                <div className="flex h-[120px] gap-[30px]  w-[full]">
                                    <FormInputTextArea
                                        error={errors.identifiedDiseases}
                                        name="identifiedDiseases"
                                        value={values.identifiedDiseases}
                                        onChange={handleChange}
                                        label="Tanımlanan hastalıklarınız"
                                        type="text"
                                        disabled={true}
                                    />
                                </div>
                                <div className="flex h-[200px] gap-[30px]  w-[full]">
                                    <FormInputTextArea
                                        error={errors.currentMedicationsAndTreatments}
                                        name="currentMedicationsAndTreatments"
                                        value={values.currentMedicationsAndTreatments}
                                        onChange={handleChange}
                                        label="Kullandığınız ilaçlar ve tedaviler"
                                        type="text"
                                        disabled={true}
                                    />
                                </div>
                                <div className="flex min-h-[120px]  w-[full]">
                                    <FormInputTextArea
                                        error={errors.usedSupplementsAndTime}
                                        name="usedSupplementsAndTime"
                                        value={values.usedSupplementsAndTime}
                                        onChange={handleChange}
                                        label="Kullandığınız takviyeler ve süreleri"
                                        type="text"
                                        disabled={true}
                                    />
                                </div>
                                {" "}
                                <FormDivider />
                                <div className="flex h-[120px] gap-[30px]  w-[full]">
                                    <FormInputTextArea
                                        error={errors.shortStory}
                                        name="shortStory"
                                        value={values.shortStory}
                                        onChange={handleChange}
                                        label="Kısa bir öykünüz"
                                        type="text"
                                        disabled={true}
                                    />
                                </div>
                                <div className="flex h-[120px] w-[full]">
                                    <FormInputTextArea
                                        error={errors.purposeOfMeeting}
                                        name="purposeOfMeeting"
                                        value={values.purposeOfMeeting}
                                        onChange={handleChange}
                                        label="Randevu amacı"
                                        type="text"
                                        disabled={true}
                                    />
                                </div>
                                <div className="flex h-[120px] w-[full]">
                                    <FormInputSelectOne
                                        error={errors.meetingType}
                                        name="meetingType"
                                        value={values.meetingType}
                                        onChange={handleChange}
                                        label="Görüşme şekli tercihiniz ?"
                                        options={[
                                            { value: "yuzyuze", label: "Yüz yüze" },
                                            { value: "online", label: "Online" },
                                            { value: "farkmaz", label: "Fark etmez" },
                                        ]}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                            {formStatus == "Waiting" && <div className="flex mb-[60px] gap-[30px] w-[full]">
                                <button onClick={() => {
                                    setAreYouSure({
                                        isPositive: true,
                                        open: true,
                                    })
                                }}
                                    className="bg-[#4e9d89] !rounded-[20px_5px] w-[200px] h-[50px] text-[14px] text-[white] flex items-center justify-center">
                                    Onayla
                                </button>
                                <button onClick={() => {
                                    setAreYouSure({
                                        isPositive: false,
                                        open: true,
                                    })
                                }}
                                    className="bg-[#9d4e61] !rounded-[20px_5px] w-[200px] h-[50px] text-[14px] text-[white] flex items-center justify-center">
                                    Reddet
                                </button>
                            </div>}
                        </form>
                    );
                }}
            </Formik>
        </DashboardLayout>
    </>);
}

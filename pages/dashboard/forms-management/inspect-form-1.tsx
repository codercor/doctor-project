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
    const flowId = router.query.flow_id
    const fetchFlow = async () => {
        if (!flowId) return;
        let response = await request.get(`/userflows/form/${flowId}`)
        console.log("response.data ", response.data);
        setOwnerUserId(response.data.user.Id)
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
    }, [])

    const finalizeTheForm = async (isDone: boolean) => {
        request.put(`/userflows/${flowId}`, {
            Status: isDone ? "Done" : "Reject"
        }).then(() => {
            toast.success("Form değerlendirmesi kaydedildi !");
            setTimeout(() => {
                !isDone ? router.push("/dashboard/forms-management") : ''
            }, 1000);
        })
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
        <DashboardLayout>
            {isAppointmentModalOpen && <CreateAppointmentModal finish={() => {
                setIsAppointmentModalOpen(false);
                router.push("/dashboard/forms-management")
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
                                        ]}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                            <div className="flex flex mb-[60px] gap-[30px] w-[full]">
                                <button onClick={() => {
                                    setIsAppointmentModalOpen(true)
                                    finalizeTheForm(true)
                                }}
                                    className="bg-[green] w-[200px] h-[50px] text-[14px] text-[white] flex items-center justify-center">
                                    Onayla
                                </button>
                                <button onClick={() => {
                                    finalizeTheForm(false)
                                }}
                                    className="bg-[red] w-[200px] h-[50px] text-[14px] text-[white] flex items-center justify-center">
                                    Reddet
                                </button>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </DashboardLayout>
    </>);
}

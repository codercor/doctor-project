import React, {useState} from "react";
import FormDivider from "../FormDivider/FormDivider";
import FormInput, {
    FormInputSelect,
    FormInputTextArea,
} from "../FormInput/FormInput";
import {Formik} from "formik";
import * as Yup from "yup";
import FormSectionHeader from "../FormSectionHeader/FormSectionHeader";
// @ts-ignore-next-line
import CountryCityService from "countries-cities";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";
import {flow1FormValidationSchema, textValidationSchema} from "../validationSchemes";
import request from "@config";
import toast from "react-hot-toast";
import {Router, useRouter} from "next/router";
import useUser from "src/hooks/user.hook";
import {flow1FormInitialValues} from "@components/Forms/BasvuruForms/config/initialValues";

const initialValues = flow1FormInitialValues;
const countries = CountryCityService.getCountries().map((country: string) => {
    if (country === "Turkey") {
        return {value: country, label: "Türkiye"};
    }
    return {value: country, label: country};
});

const validationSchema = flow1FormValidationSchema;

export default function FirstForm() {
    const [cities, setCities] = useState<any[]>(
        CountryCityService.getCities("Turkey").map((city: string) => {
            return {value: city, label: city};
        })
    );
    const router = useRouter()
    const {user: {Id: UserId}} = useUser()
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                request.post("/userflows", {
                    UserId,
                    Step: 1,
                    Document: values
                }).then(res => {
                    toast.success("Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçilecektir.")
                    setTimeout(() => {
                        router.reload();
                    }, 2000)
                })
            }}
        >
            {({handleSubmit, handleChange, values, errors, submitForm, dirty}) => {
                return (
                    <form onSubmit={handleSubmit}>
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
                                />
                                <FormInput
                                    error={errors.age}
                                    name="age"
                                    value={values.age}
                                    onChange={handleChange}
                                    label="Yaşınız"
                                    type="number"
                                />
                                <FormInputSelect
                                    error={errors.gender}
                                    name="gender"
                                    value={values.gender}
                                    onChange={handleChange}
                                    label="Cinsiyetiniz"
                                    options={[
                                        {value: "kadın", label: "Kadın"},
                                        {value: "erkek", label: "Erkek"},
                                        {value: "diger", label: "Diğer"},
                                    ]}
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
                                />
                                <FormInput
                                    error={errors.phone}
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    label="Telefon numaranız"
                                    type="text"
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
                                                return {value: city, label: city};
                                            })
                                        );
                                        handleChange(e);
                                    }}
                                    label="Ülkeniz"
                                    type="text"
                                    options={countries}
                                />
                                <FormInputSelect
                                    error={errors.city}
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    label="Şehir"
                                    type="text"
                                    options={cities}
                                />
                            </div>
                            <div className="flex h-[120px] gap-[30px]  w-[full]">
                                <FormInputTextArea
                                    error={errors.identifiedDiseases}
                                    name="identifiedDiseases"
                                    value={values.identifiedDiseases}
                                    onChange={handleChange}
                                    label="Tanı aldığınız hastalıklarınız"
                                    type="text"
                                />
                            </div>
                            <div className="flex h-[200px] gap-[30px]  w-[full]">
                                <FormInputTextArea
                                    error={errors.currentMedicationsAndTreatments}
                                    name="currentMedicationsAndTreatments"
                                    value={values.currentMedicationsAndTreatments}
                                    onChange={handleChange}
                                    label="Şu an görmekte olduğunuz tedaviler ve kullandığınız ilaçlar"
                                    type="text"
                                />
                            </div>
                            <div className="flex min-h-[120px]  w-[full]">
                                <FormInputTextArea
                                    error={errors.usedSupplementsAndTime}
                                    name="usedSupplementsAndTime"
                                    value={values.usedSupplementsAndTime}
                                    onChange={handleChange}
                                    label="Kullandığınız takviyeleri ve en son ne zaman aldığınızı belirtiniz"
                                    type="text"
                                />
                            </div>
                            {" "}
                            <FormDivider/>
                            <div className="flex h-[120px] gap-[30px]  w-[full]">
                                <FormInputTextArea
                                    error={errors.shortStory}
                                    name="shortStory"
                                    value={values.shortStory}
                                    onChange={handleChange}
                                    label="Kısaca rahatsızlığınızın öyküsünü anlatınız"
                                    type="text"
                                />
                            </div>
                            <div className="flex h-[120px] w-[full]">
                                <FormInputTextArea
                                    error={errors.purposeOfMeeting}
                                    name="purposeOfMeeting"
                                    value={values.purposeOfMeeting}
                                    onChange={handleChange}
                                    label="Bizimle yapacağınız görüşmede ne elde etmeyi umuyorsunuz?"
                                    type="text"
                                />
                            </div>
                            <div className="flex h-[120px] w-[full]">
                                <FormInputSelectOne
                                    error={errors.meetingType}
                                    name="meetingType"
                                    value={values.meetingType}
                                    label="Görüşme şekli tercihiniz ?"
                                    onChange={handleChange}
                                    options={[
                                        {value: "yuzyuze", label: "Yüz yüze"},
                                        {value: "online", label: "Online"},
                                        {value: "farkmaz", label: "Fark etmez"},
                                    ]}
                                />
                            </div>
                            <button
                                className="w-[250px] rounded-[20px_5px] text-[white] bg-[#4E929D] h-[50px] border-2"
                                value="Formu Gönder"
                                onClick={(e) => {
                                    console.log("values", values);
                                    console.log("errors", errors);
                                    console.log("dirty", dirty);

                                    e.preventDefault();
                                    //if dirty go to dirt fields
                                    if (Object.keys(errors).length > 0) {
                                        let dirtyField = Object.keys(errors)[0];
                                        let element =
                                            window.document.getElementsByName(dirtyField)[0];
                                        if (element) {
                                            element.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                            });
                                        }
                                    } else {
                                        console.log("form is valid");
                                        submitForm();
                                    }
                                }}
                            >
                                Formu Gönder
                            </button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
}

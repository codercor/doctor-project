import React, { useState } from "react";
import FormDivider from "../../FormDivider/FormDivider";
import FormInput, {
  FormInputSelect,
  FormInputTextArea,
} from "../../FormInput/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import FormSectionHeader from "../../FormSectionHeader/FormSectionHeader";
// @ts-ignore-next-line
import CountryCityService from "countries-cities";
import FormSteps, { FormSubSteps } from "@components/Forms/FormSteps/FormSteps";

const initialValues = {
  fullName: "",
  age: "0",
  gender: "",
  email: "",
  phone: "",
  country: "Turkey",
  city: "Istanbul",
  identifiedDiseases: "",
  currentMedicationsAndTreatments: "",
  usedSupplementsAndTime: "",
  shortStory: "",
  purposeOfMeeting: "",
};
const countries = CountryCityService.getCountries().map((country: string) => {
  if (country === "Turkey") {
    return { value: country, label: "Türkiye" };
  }
  return { value: country, label: country };
});

const validationSchema = Yup.object({
  //min >= 2 words required
  fullName: Yup.string()
    .required("Zorunlu alan") //min 2 max 3 words
    .matches(
      /^[a-zA-ZşŞıİçÇöÖüÜ]+(?:[\s-][a-zA-ZşŞıİçÇöÖüÜ]+){1,3}$/,
      "Geçerli bir isim giriniz"
    ),
  age: Yup.number()
    .required("Zorunlu alan")
    .min(10, "Yaşınız 10'dan küçük olamaz"),
  gender: Yup.string()
    .required("Zorunlu alan")
    .oneOf(["kadın", "erkek", "diger"], "Cinsiyet seçiniz"),
  email: Yup.string()
    .email("Geçerli bir email giriniz")
    .required("Zorunlu alan"),
  phone: Yup.string().required("Zorunlu alan"),
  country: Yup.string().required("Zorunlu alan"),
  city: Yup.string().required("Zorunlu alan"),
  identifiedDiseases: Yup.string().required("Zorunlu alan"),
  currentMedicationsAndTreatments: Yup.string().required("Zorunlu alan"),
  usedSupplementsAndTime: Yup.string().required("Zorunlu alan"),
  shortStory: Yup.string().required("Zorunlu alan"),
  purposeOfMeeting: Yup.string().required("Zorunlu alan"),
});

export default function SecondForm({ selectedStep, setSelectedStep }: any) {
  const [cities, setCities] = useState<any[]>(
    CountryCityService.getCities("Turkey").map((city: string) => {
      return { value: city, label: city };
    })
  );
  return (
    <>
      <FormSubSteps
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("values ", values);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          submitForm,
          dirty,
        }) => {
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
                      { value: "kadın", label: "Kadın" },
                      { value: "erkek", label: "Erkek" },
                      { value: "diger", label: "Diğer" },
                    ]}
                  />
                </div>{" "}
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
                </div>{" "}
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
                    label="Tanımlanan hastalıklarınız"
                    type="text"
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
                  />
                </div>
                <div className="flex h-[120px]  w-[full]">
                  <FormInputTextArea
                    error={errors.usedSupplementsAndTime}
                    name="usedSupplementsAndTime"
                    value={values.usedSupplementsAndTime}
                    onChange={handleChange}
                    label="Kullandığınız takviyeler ve süreleri"
                    type="text"
                  />
                </div>{" "}
                <FormDivider />
                <div className="flex h-[120px] gap-[30px]  w-[full]">
                  <FormInputTextArea
                    error={errors.shortStory}
                    name="shortStory"
                    value={values.shortStory}
                    onChange={handleChange}
                    label="Kısa bir öykünüz"
                    type="text"
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
                  />
                </div>
                <button
                  className="w-[250px] rounded-[20px_5px] text-[white] bg-[#4E929D] h-[50px] border-2"
                  value="Formu Gönder"
                  onClick={(e) => {
                    e.preventDefault();
                    //if dirty go to dirt fields
                    if (dirty) {
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
    </>
  );
}

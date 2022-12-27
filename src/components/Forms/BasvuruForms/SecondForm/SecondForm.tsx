import React, { useState } from "react";
import FormDivider from "../../FormDivider/FormDivider";
import FormInput, {
  FormInputSelect,
  FormInputTextArea,
} from "../../FormInput/FormInput";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import FormSectionHeader from "../../FormSectionHeader/FormSectionHeader";
// @ts-ignore-next-line
import FormSteps, { FormSubSteps } from "@components/Forms/FormSteps/FormSteps";
import { v4 } from "uuid";
import FormInputSelectMulti from "@components/Forms/FormInput/FormInputSelectMulti";
import FormInputSelectOne from "@components/Forms/FormInput/FormInputSelectOne";
import {
  multiSelectValidationSchema,
  singleSelectValidationSchema,
  textValidationSchema,
} from "@components/Forms/validationSchemes";
import classNames from "classnames";
import Form2Footer from "@components/Forms/Form2Footer/Form2Footer";
import SubStep2Part1 from "@components/Forms/SubSteps/SubStep2Part1";
import SubStep1Part1 from "@components/Forms/SubSteps/SubStep1Part1";
import SubStep1Part2 from "@components/Forms/SubSteps/SubStep1Part2";
import SubStep1Part3 from "@components/Forms/SubSteps/SubStep1Part3";
import SubStep1Part4 from "@components/Forms/SubSteps/SubStep1Part4";
/* 
#1 Şu anda bir yeme bozukluğunuz var mı? Veya yiyecek ve bedenle ilgili rahatsız edici veya sorunlu davranışlar yaşıyor musunuz?
(örneğin; tıkanırcasına yeme, yiyecek kısıtlama, telafi edici egzersiz, kronik diyet, yo-yo veya hızlı kilo verme diyetleri, "temiz" yemeye verimsiz saplantı v patolojik saplantı vb.)
#2  En sevdiğin yiyecek ne?
#3  En sık yediğin yiyecekler hangileri?
#4  Yiyeceklerinizi kim hazırlıyor?
#5  Yediklerinizi kim satın alıyor?
#6  Hangi sıklıkla yemek pişiriyorsunuz?
#7  Sence en besleyici gıdayı hayatında ne zaman yedin?
#8  Sence en az besleyici gıdayı hayatında ne zaman yedin?
*/
const initialValues = {
  subStep1: {
    parrentTolarance: "",
    motherMilk: "",
    solidFood: "",
    babyAllergy: "",
    childFoodReact: "",
    childFoodAccess: "",
    childFoodDisorder: "",
    foodDisorder: "",
    favoriteFood: "",
    mostEatenFood: "",
    foodPreparedBy: "",
    foodPurchasedBy: "",
    cookingFrequency: "",
    mostNutritiousFood: "",
    leastNutritiousFood: "",
    extraInfo: "",
    purposeOfFinal: "",
  },
  subStep2: {
    name: "",
    age: "",
    date: "",
    birthDate: "",
    email: "",
    address: "",
    city: "",
    phoneCell: "",
    geneticHistory: "",
    geneticHistoryOther: "",
    lastHealt: "",
    emergencyContact: "",
    emergencyContactRelation: "",
    emergencyContactPhoneCell: "",
    whereDidYouHear: "",
  },
};

const validationSchema = Yup.object({
  subStep1: Yup.object({
    parrentTolarance: singleSelectValidationSchema,
    motherMilk: singleSelectValidationSchema,
    solidFood: singleSelectValidationSchema,
    babyAllergy: singleSelectValidationSchema,
    childFoodReact: singleSelectValidationSchema,
    childFoodAccess: singleSelectValidationSchema,
    childFoodDisorder: singleSelectValidationSchema,
    foodDisorder: textValidationSchema,
    favoriteFood: textValidationSchema,
    mostEatenFood: textValidationSchema,
    foodPreparedBy: textValidationSchema,
    foodPurchasedBy: textValidationSchema,
    cookingFrequency: textValidationSchema,
    mostNutritiousFood: textValidationSchema,
    leastNutritiousFood: textValidationSchema,
    extraInfo: textValidationSchema,
    purposeOfFinal: textValidationSchema,
  }),
  subStep2: Yup.object({
    name: textValidationSchema,
    age: textValidationSchema,
    date: textValidationSchema,
    birthDate: textValidationSchema,
    email: textValidationSchema,
    address: textValidationSchema,
    city: textValidationSchema,
    phoneCell: textValidationSchema,
    geneticHistory: textValidationSchema,
    geneticHistoryOther: Yup.string().when("geneticHistory", {
      is: (geneticHistory: string) => geneticHistory === "Diğer",
      then: Yup.string().required("Bu alan zorunludur"),
    }),
    lastHealt: textValidationSchema,
    emergencyContact: textValidationSchema,
    emergencyContactRelation: textValidationSchema,
    emergencyContactPhoneCell: textValidationSchema,
    whereDidYouHear: textValidationSchema,
  }),
});

export const OPTIONS_EHB = [
  { value: "evet", label: "Evet" },
  { value: "hayır", label: "Hayır" },
  { value: "bilmiyorum", label: "Bilmiyorum" },
];

export default function SecondForm({ selectedStep, setSelectedStep }: any) {
  const [part, setPart] = useState(1);
  const [isMale, setIsMale] = useState(false);
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
              <div className="w-full flex flex-col gap-[10px]">
                {selectedStep == 2 && (
                  <>
                    {part == 1 && (
                      <SubStep1Part1
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                      />
                    )}
                    {part == 2 && (
                      <SubStep1Part2
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                      />
                    )}
                    {part == 3 && (
                      <SubStep1Part3
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                      />
                    )}
                    {part == 4 && (
                      <SubStep1Part4
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                      />
                    )}
                  </>
                )}
                {selectedStep == 3 && (
                  <>
                    <button
                      className="border-2 border-red-500"
                      onClick={() => setIsMale(!isMale)}
                    >
                      {isMale ? "Erkek" : "Kadın"}
                    </button>
                    {part == 1 && (
                      <SubStep2Part1
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                      />
                    )}
                  </>
                )}
              </div>
              <Form2Footer parts={
                selectedStep == 2 ? 4 : selectedStep == 3 ? 23 : 0

              } setter={setPart} active={part} />
            </form>
          );
        }}
      </Formik>
    </>
  );
}

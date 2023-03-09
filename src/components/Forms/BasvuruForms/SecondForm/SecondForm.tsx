import React, { useEffect, useState } from "react";
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
import SubStep2Part2 from "@components/Forms/SubSteps/SubStep2Part2";
import SubStep2Part3 from "@components/Forms/SubSteps/SubStep2Part3";
import SubStep2Part4 from "@components/Forms/SubSteps/SubStep2Part4";
import { toast } from "react-hot-toast";
import request from "@config";
import useUser from "src/hooks/user.hook";
import { useRouter } from "next/router";

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
    //name: "",
    //age: "",
    //date: "",
    //birthDate: "",
    //email: "",
    //address: "",
    //city: "",
    //phoneCell: "",
    geneticHistory: "",
    geneticHistoryOther: "",
    lastHealt: "",
    emergencyContact: "",
    emergencyContactRelation: "",
    emergencyContactPhoneCell: "",
    whereDidYouHear: "",
    whereDidYouHearOther: "",
    currentDisease: [
      {
        problem: "",
        severity: "",
        treatment: "",
        success: "",
      }
    ],
    allergies: [
      {
        food: "",
        reaction: "",
      }
    ],
    sleepHours: "",
    sleepDifficulty: "",
    sleepQuality: "",
    sleepProblem: "",
    snore: "",
    wakeUp: "",
    sleepPills: "",
    sleepPillsDetail: "",
    diet: [],
    foodSensitivity: "",
    foodSensitivityDetail: "",
    foodAvoid: "",
    foodAvoidDetail: "",
    foodsReaction: [],
    foodsReactionDetail: "",
    foodsLike: "",
    foodsLikeDetail: "",
    threeMeal: "",
    threeMealDetail: "",
    skipMeal: "",
    skipMealDetail: "",
    outsideMeal: "",
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
    //name: textValidationSchema,
    //age: textValidationSchema,
    //date: textValidationSchema,
    //birthDate: textValidationSchema,
    //email: textValidationSchema,
    //address: textValidationSchema,
    //city: textValidationSchema,
    //phoneCell: textValidationSchema,
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
    whereDidYouHearOther: Yup.string().when("whereDidYouHear", {
      is: (whereDidYouHear: string) => whereDidYouHear === "Diğer",
      then: Yup.string().required("Bu alan zorunludur"),
    }),
    currentDisease: Yup.array().of(
      Yup.object().shape({
        problem: Yup.string().required("Zorunlu"),
        severity: Yup.string().required("Zorunlu"),
        treatment: Yup.string().required("Zorunlu"),
        success: Yup.string().required("Zorunlu"),
      })
    ),
    allergies: Yup.array().of(
      Yup.object().shape({
        food: Yup.string().required("Zorunlu"),
        reaction: Yup.string().required("Zorunlu"),
      })
    ),
    sleepHours: Yup.string().required("Bu alan zorunludur"),
    sleepDifficulty: Yup.string().required("Bu alan zorunludur"),
    sleepQuality: Yup.string().required("Bu alan zorunludur"),
    sleepProblem: Yup.string().required("Bu alan zorunludur"),
    snore: Yup.string().required("Bu alan zorunludur"),
    wakeUp: Yup.string().required("Bu alan zorunludur"),
    sleepPills: Yup.string().required("Bu alan zorunludur"),
    sleepPillsDetail: Yup.string().when("sleepPills", {
      is: (sleepPills: string) => sleepPills === "evet",
      then: Yup.string().required("Bu alan zorunludur"),
    }),
    diet: Yup.array().of(
      Yup.string().required("Bu alan zorunludur")
    ),
    foodSensitivity: Yup.string().required("Bu alan zorunludur"),
    foodSensitivityDetail: Yup.string().when("foodSensitivity", {
      is: "evet",
      then: Yup.string().required("Bu alan zorunludur")
    }),
    foodAvoid: Yup.string().required("Bu alan zorunludur"),
    foodAvoidDetail: Yup.string().when("foodAvoid", {
      is: "evet",
      then: Yup.string().required("Bu alan zorunludur")
    }),
    foodsReaction: Yup.array().required("Bu alan zorunludur"),
    foodsReactionDetail: Yup.string().when("foodsReaction", {
      is: (val: any) => val.includes("diğer"),
      then: Yup.string().required("Bu alan zorunludur")
    }),
    foodsLike: Yup.string().required("Bu alan zorunludur"),
    foodsLikeDetail: Yup.string().when("foodsLike", {
      is: "evet",
      then: Yup.string().required("Bu alan zorunludur")
    }),
    threeMeal: Yup.string().required("Bu alan zorunludur"),
    threeMealDetail: Yup.string().when("threeMeal", {
      is: "hayır",
      then: Yup.string().required("Bu alan zorunludur")
    }),
    skipMeal: Yup.string().required("Bu alan zorunludur"),
    skipMealDetail: Yup.string().when("skipMeal", {
      is: "evet",
      then: Yup.string().required("Bu alan zorunludur")
    }),
    outsideMeal: Yup.string().required("Bu alan zorunludur"),
  }),
});

export const OPTIONS_EHB = [
  { value: "evet", label: "Evet" },
  { value: "hayır", label: "Hayır" },
  { value: "bilmiyorum", label: "Bilmiyorum" },
];

export default function SecondForm({ selectedStep, setSelectedStep }: any) {
  const [part, setPart] = useState(Number(localStorage.getItem("part")) || 1);
  useEffect(() => {
    localStorage.setItem("part", part.toString());
  }, [part]);
  const { user: { Id: UserId } } = useUser()
  const router = useRouter()
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
          console.log("values", values);

          request.post("/userflows", {
            UserId,
            Step: 1,
            Document: values
          }).then(res => {
            toast.success("Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçilecektir.")
            setTimeout(() => {
              router.push("/dashboard")
            }, 2000)
          })
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          submitForm,
          setFieldValue,
          setSubmitting,
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
                    {part == 2 && (
                      <SubStep2Part2
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                      />
                    )}
                    {part == 3 && (
                      <SubStep2Part3
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                      />
                    )}
                    {part == 4 && (
                      <SubStep2Part4
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                      />
                    )}

                  </>
                )}
              </div>
              <Form2Footer parts={
                selectedStep == 2 ? 4 : selectedStep == 3 ? 23 : 0

              } setter={setPart} active={part} />

              <button
                onClick={() => {
                  console.log("submit");
                  console.log(values);
                  request.post("/userflows", {
                    UserId,
                    Step: 2,
                    Document: values.subStep1
                  }).then(res => {
                    toast.success("Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçilecektir.")
                    setTimeout(() => {
                      router.push("/dashboard")
                    }, 2000)
                  })
                  // if (Object.keys(errors).length == 0) {
                  //   submitForm();
                  // } else {
                  //   toast.error("Lütfen formu eksiksiz doldurunuz");
                  // }
                }}
                className={classNames(
                  "rounded-[20px_5px] min-w-[52px] min-h-[56px] hover:bg-[white] transition-all shadow-2xl duration-100 hover:shadow-inner hover:text-[#83895E] bg-[#83895E] text-[#FFFFFF]"
                )}
              >
                OK
              </button>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

import React, {useEffect, useState} from "react";
import FormDivider from "@components/Forms/FormDivider/FormDivider";
import FormInput, {
    FormInputSelect,
    FormInputTextArea,
} from "@components/Forms/FormInput/FormInput";
import {Field, Formik} from "formik";
import * as Yup from "yup";
import FormSectionHeader from "@components/Forms/FormSectionHeader/FormSectionHeader";
// @ts-ignore-next-line
import FormSteps, {FormSubSteps} from "@components/Forms/FormSteps/FormSteps";
import {v4} from "uuid";
import FormInputSelectMulti from "@components/Forms/FormInput/FormInputSelectMulti";
import FormInputSelectOne from "@components/Forms/FormInput/FormInputSelectOne";
import {
    flow2FormValidationSchema, flow4FormValidationSchema,
    multiSelectValidationSchema,
    singleSelectValidationSchema,
    textValidationSchema,
} from "@components/Forms/validationSchemes";
import classNames from "classnames";
import Form2Footer from "@components/Forms/Form2Footer/Form2Footer";
import {toast} from "react-hot-toast";
import request from "@config";
import useUser from "src/hooks/user.hook";
import {useRouter} from "next/router";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import axios from "axios";
import SubstepViever from "@components/Forms/SubSteps/SubStepContainer";
import {
    flow4FormInitialValues
} from "@components/Forms/BasvuruForms/config/initialValues";
import SubStep3Part1 from "@components/Forms/SubSteps/SubStep3Part1";
import SubStep3Part2 from "@components/Forms/SubSteps/SubStep3Part2";
import SubStep3Part3 from "@components/Forms/SubSteps/SubStep3Part3";
import SubStep3Part4 from "@components/Forms/SubSteps/SubStep3Part4";

const initialValues = flow4FormInitialValues;

const validationSchema = flow4FormValidationSchema;

export const OPTIONS_EHB = [
    {value: "evet", label: "Evet"},
    {value: "hayır", label: "Hayır"},
    {value: "bilmiyorum", label: "Bilmiyorum"},
];

export default function SecondForm({}: any) {
    const [part, setPart] = useState(Number(localStorage.getItem("part")) || 1);
    useEffect(() => {
        localStorage.setItem("part", part.toString());
    }, [part]);
    const {user: {Id: UserId}} = useUser()
    const router = useRouter()
    const [isMale, setIsMale] = useState(false);
    const [data, setData] = useState<typeof initialValues>(initialValues)
    const flowId = router.query.flow_id
    const fetchFlow = async () => {
        console.log("fetchFlow start", flowId)
        if (!flowId) return;
        let response = await request.get(`/userflows/form/${flowId}`)
        console.log("response.data ", response.data);
        return response.data.Link
    }

    const getData = async () => {
        console.log("getData start")
        const dataUrl = await fetchFlow();

        if (!dataUrl) return;
        axios.get(dataUrl).then((res) => {
            console.log("res.data ", res.data);
            setData((res.data))
        }).catch((err) => {
            console.log("getData err ", err);
        })
    }
    const finalizeTheForm = async () => {
        request.put(`/userflows/${flowId}`, {
            Status: "Done"
        }).then(() => {
            toast.success("Form değerlendirmesi kaydedildi !");
            setTimeout(() => {
                router.push("/dashboard/forms-management")
            }, 1000);
        })
    }

    useEffect(() => {
        getData();
    }, [flowId])

    return (
        <>
            <DashboardLayout>

                <Formik
                    initialValues={data}
                    validationSchema={validationSchema}
                    enableReinitialize
                    onSubmit={(values) => {
                        console.log("values", values);
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
                        const subSteps = {
                            1: <SubStep3Part1
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            2: <SubStep3Part2
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            3: <SubStep3Part3
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            4: <SubStep3Part4
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                        }
                        const countOfSubSteps = Object.keys(subSteps).length;
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className="w-full flex flex-col gap-[10px]">
                                    {(
                                        <SubstepViever subSteps={subSteps} activeSubStep={part}/>
                                    )}
                                </div>
                                <Form2Footer parts={countOfSubSteps} setter={setPart} active={part}/>
                                <button onClick={() => {
                                    finalizeTheForm()
                                }}
                                        className="bg-[green] w-[200px] h-[50px] text-[14px] text-[white] flex items-center justify-center">
                                    Onayla
                                </button>
                            </form>

                        );
                    }}
                </Formik>
            </DashboardLayout>
        </>
    );
}

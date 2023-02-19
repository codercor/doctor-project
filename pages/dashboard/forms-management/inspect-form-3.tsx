import React, { useEffect, useState } from "react";
import FormDivider from "@components/Forms/FormDivider/FormDivider";
import FormInput, {
    FormInputSelect,
    FormInputTextArea,
} from "@components/Forms/FormInput/FormInput";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import FormSectionHeader from "@components/Forms/FormSectionHeader/FormSectionHeader";
// @ts-ignore-next-line
import FormSteps, { FormSubSteps } from "@components/Forms/FormSteps/FormSteps";
import { v4 } from "uuid";
import FormInputSelectMulti from "@components/Forms/FormInput/FormInputSelectMulti";
import FormInputSelectOne from "@components/Forms/FormInput/FormInputSelectOne";
import {
    flow2FormValidationSchema,
    multiSelectValidationSchema,
    singleSelectValidationSchema,
    textValidationSchema,
} from "@components/Forms/validationSchemes";
import classNames from "classnames";
import Form2Footer from "@components/Forms/Form2Footer/Form2Footer";
import SubStep2Part1 from "@components/Forms/SubSteps/SubStep2Part1";
import SubStep2Part2 from "@components/Forms/SubSteps/SubStep2Part2";
import SubStep2Part3 from "@components/Forms/SubSteps/SubStep2Part3";
import SubStep2Part4 from "@components/Forms/SubSteps/SubStep2Part4";
import { toast } from "react-hot-toast";
import request from "@config";
import useUser from "src/hooks/user.hook";
import { useRouter } from "next/router";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import axios from "axios";
import SubstepViever from "@components/Forms/SubSteps/SubStepContainer";
import { flow2FormInitialValues } from "@components/Forms/BasvuruForms/config/initialValues";
import { LocalLoading } from "../appointment";
import SubStep2Part5 from "@components/Forms/SubSteps/SubStep2Part5";
import SubStep2Part6 from "@components/Forms/SubSteps/SubStep2Part6";
import SubStep2Part7 from "@components/Forms/SubSteps/SubStep2Part7";
import SubStep2Part8 from "@components/Forms/SubSteps/SubStep2Part8";
import SubStep2Part9 from "@components/Forms/SubSteps/SubStep2Part9";
import SubStep2Part10 from "@components/Forms/SubSteps/SubStep2Part10";
import SubStep2Part11 from "@components/Forms/SubSteps/SubStep2Part11";

const initialValues = flow2FormInitialValues;

const validationSchema = flow2FormValidationSchema;

export const OPTIONS_EHB = [
    { value: "evet", label: "Evet" },
    { value: "hayır", label: "Hayır" },
    { value: "bilmiyorum", label: "Bilmiyorum" },
];

export default function SecondForm({ }: any) {
    const [part, setPart] = useState(1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        localStorage.setItem("part", part.toString());
    }, [part]);
    const { user: { Id: UserId } } = useUser()
    const router = useRouter()
    const [isMale, setIsMale] = useState(false);
    const [ownerGender, setOwnerGender] = useState<undefined | "Erkek" | "Kadın">(undefined)
    const [data, setData] = useState<typeof initialValues>(initialValues)
    const flowId = router.query.flow_id
    const fetchFlow = async () => {
        if (!flowId) return;
        let response = await request.get(`/userflows/form/${flowId}`)
        console.log("response.data ", response.data);
        localStorage.setItem(flowId + "-Gender", response.data.user.information.Gender)
        return response.data.Link
    }

    const getData = async () => {
        setLoading(true);
        const dataUrl = await fetchFlow();
        if (!dataUrl) {
            setLoading(false);
            return;
        }
        axios.get(dataUrl).then((res) => {
            console.log("res.data ", res.data);
            setData((res.data))
            setLoading(false);
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

    const readOnly = true;
    return (
        <> {
            loading && <LocalLoading message="Yükleniyor" />
        }
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
                            1: <SubStep2Part1
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                            />,
                            2: <SubStep2Part2
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            3: <SubStep2Part3
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            4: <SubStep2Part4
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            5: <SubStep2Part5
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            6: <SubStep2Part6
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            7: <SubStep2Part7
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            8: <SubStep2Part8
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            9: <SubStep2Part9
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            10: <SubStep2Part10
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />,
                            11: <SubStep2Part11
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />
                        }
                        const countOfSubSteps = Object.keys(subSteps).length;
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className="w-full relative flex flex-col gap-[10px]">
                                    {(
                                        <SubstepViever subSteps={subSteps} activeSubStep={part} />
                                    )}
                                    <div className='bg-[red] opacity-[0.01] w-full h-full absolute top-0 left-0'></div>
                                </div>
                                <Form2Footer parts={countOfSubSteps} setter={setPart} active={part} />
                                <button onClick={() => {
                                    finalizeTheForm()
                                }}
                                    className="bg-[#4e9d89] !rounded-[20px_5px] w-[200px] h-[50px] text-[14px] text-[white] flex items-center justify-center">
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

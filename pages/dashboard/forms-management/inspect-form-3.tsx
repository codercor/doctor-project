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
import DashboardLayout from "@components/Layouts/DashboardLayout";
import axios from "axios";
import SubstepViever from "@components/Forms/SubSteps/SubStepContainer";
import { flow2FormInitialValues } from "@components/Forms/BasvuruForms/config/initialValues";
import { LocalLoading } from "../appointment";

const initialValues = flow2FormInitialValues;

const validationSchema = flow2FormValidationSchema;

export const OPTIONS_EHB = [
    { value: "evet", label: "Evet" },
    { value: "hayır", label: "Hayır" },
    { value: "bilmiyorum", label: "Bilmiyorum" },
];

export default function SecondForm({ }: any) {
    const [part, setPart] = useState(Number(localStorage.getItem("part")) || 1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        localStorage.setItem("part", part.toString());
    }, [part]);
    const { user: { Id: UserId } } = useUser()
    const router = useRouter()
    const [isMale, setIsMale] = useState(false);
    const [data, setData] = useState<typeof initialValues>(initialValues)
    const flowId = router.query.flow_id
    const fetchFlow = async () => {
        if (!flowId) return;
        let response = await request.get(`/userflows/form/${flowId}`)
        console.log("response.data ", response.data);
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
    }, [])
                        
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
                            1: <SubStep1Part1
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                            />,
                            2: <SubStep1Part2
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                            />,
                            3: <SubStep1Part3
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                            />,
                            4: <SubStep1Part4
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                            />,
                        }
                        const countOfSubSteps = Object.keys(subSteps).length;
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className="w-full flex flex-col gap-[10px]">
                                    {(
                                        <SubstepViever subSteps={subSteps} activeSubStep={part} />
                                    )}
                                </div>
                                <Form2Footer parts={countOfSubSteps} setter={setPart} active={part} />
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

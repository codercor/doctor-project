import React, { useEffect, useState } from "react";
import { Formik } from "formik";
// @ts-ignore-next-line
import { flow4FormValidationSchema } from "@components/Forms/validationSchemes";
import Form2Footer from "@components/Forms/Form2Footer/Form2Footer";
import { toast } from "react-hot-toast";
import request from "@config";
import { useRouter } from "next/router";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import axios from "axios";
import SubstepViever from "@components/Forms/SubSteps/SubStepContainer";
import {
    flow4FormInitialValues
} from "@components/Forms/BasvuruForms/config/initialValues";
import SubStep4Part1 from "@components/Forms/SubSteps/SubStep4Part1";
import SubStep4Part2 from "@components/Forms/SubSteps/SubStep4Part2";
import SubStep4Part3 from "@components/Forms/SubSteps/SubStep4Part3";
import SubStep4Part4 from "@components/Forms/SubSteps/SubStep4Part4";
import SubStep4Part5 from "@components/Forms/SubSteps/SubStep4Part5";
import { LocalLoading } from "../appointment";

const initialValues = flow4FormInitialValues;

const validationSchema = flow4FormValidationSchema;

export const OPTIONS_EHB = [
    { value: "evet", label: "Evet" },
    { value: "hayır", label: "Hayır" },
    { value: "bilmiyorum", label: "Bilmiyorum" },
];

export default function FifthForm({ }: any) {
    const [part, setPart] = useState(1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        localStorage.setItem("part", part.toString());
    }, [part]);
    const router = useRouter()
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
    }, [flowId])
    const readOnly = true;
    return (
        <>
            {
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
                            1: <SubStep4Part1
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                                readOnly={readOnly}
                            />,
                            2: <SubStep4Part2
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                                readOnly={readOnly}
                            />,
                            3: <SubStep4Part3
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                                readOnly={readOnly}
                            />,
                            4: <SubStep4Part4
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                                readOnly={readOnly}
                            />,
                            5: <SubStep4Part5
                                values={values}
                                errors={errors}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                                readOnly={readOnly}
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

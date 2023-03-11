import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import {
    flow3FormValidationSchema
} from "@components/Forms/validationSchemes";
import { flow3FormInitialValues } from "@components/Forms/BasvuruForms/config/initialValues";
import useUser from "../../../hooks/user.hook";
import { useRouter } from "next/router";
import { FormSubSteps } from "@components/Forms/FormSteps/FormSteps";
import { Formik } from "formik";
import request from "@config";
import { toast } from "react-hot-toast";
import SubStep2Part1 from "@components/Forms/SubSteps/SubStep2Part1";
import SubStep2Part2 from "@components/Forms/SubSteps/SubStep2Part2";
import SubStep2Part3 from "@components/Forms/SubSteps/SubStep2Part3";
import SubStep2Part4 from "@components/Forms/SubSteps/SubStep2Part4";
import SubStep2Part5 from "@components/Forms/SubSteps/SubStep2Part5";
import Form2Footer from "@components/Forms/Form2Footer/Form2Footer";
import classNames from "classnames";
import SubstepViever from "@components/Forms/SubSteps/SubStepContainer";
import { PropsCanSelectStep } from "@components/Forms/BasvuruForms/Flow2Form";
import SubStep2Part6 from '../SubSteps/SubStep2Part6';
import SubStep2Part7 from '../SubSteps/SubStep2Part7';
import SubStep2Part8 from '../SubSteps/SubStep2Part8';
import SubStep2Part9 from '../SubSteps/SubStep2Part9';
import SubStep2Part10 from '../SubSteps/SubStep2Part10';
import SubStep2Part11 from '../SubSteps/SubStep2Part11';

const validationSchema = flow3FormValidationSchema;
const initialValues = flow3FormInitialValues;


function Flow3Form({ setSelectedStep }: PropsCanSelectStep) {
    const { user: { Id: UserId } } = useUser()
    let key = `flow-3-data-${UserId}`;
    const [data, setData] = useState(JSON.parse(localStorage.getItem(key) as string) || initialValues);
    const [part, setPart] = useState(Number(localStorage.getItem("flow-3-part" + UserId)) || 1);
    useEffect(() => {
        localStorage.setItem("flow-3-part" + UserId, part.toString());
    }, [part]);
    const router = useRouter()
    const [isMale, setIsMale] = useState(false);


    return (
        <Formik
            initialValues={data}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("values", values);

                let key = `flow-3-data-${UserId}`;
                localStorage.setItem(key, JSON.stringify(values));
                toast.success("Form kaydedildi. Tıbbi şikayet değerlendirme formuna geçiniz...")
                setSelectedStep(4)
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                errors,
                submitForm,
                setFieldValue
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
                        <div className="w-full flex  flex-col gap-[10px]">
                            {(
                                <SubstepViever subSteps={subSteps} activeSubStep={part} />
                            )}

                        </div>

                        <Form2Footer parts={countOfSubSteps} setter={setPart} active={part} />
                        {
                            part == countOfSubSteps && (<div
                                className="min-h-[112px] my-[10px] w-full px-[40px] rounded-[20px_5px] p-2 flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-center">
                                <button type="button"
                                    onClick={() => {
                                        console.log(errors,"hatalar");
                                        if (Object.keys(errors).length > 0) {
                                            console.log("flow 3 errors", errors);

                                            toast.error("Lütfen tüm alanları doldurunuz.")
                                        } else submitForm()
                                    }}
                                    className="w-[250px] rounded-[20px_5px] text-[white] bg-[#4E929D] h-[50px] border-2"
                                >
                                    Formu Kaydet
                                </button>
                            </div>)
                        }
                    </form>
                );
            }}
        </Formik>
    );
}

export default Flow3Form;
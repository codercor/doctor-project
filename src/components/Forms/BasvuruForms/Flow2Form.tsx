import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import {
    flow2FormValidationSchema,
    singleSelectValidationSchema,
    textValidationSchema
} from "@components/Forms/validationSchemes";
import { flow2FormInitialValues } from "@components/Forms/BasvuruForms/config/initialValues";
import useUser from "../../../hooks/user.hook";
import { useRouter } from "next/router";
import { FormSubSteps } from "@components/Forms/FormSteps/FormSteps";
import { Formik } from "formik";
import request from "@config";
import { toast } from "react-hot-toast";
import SubStep1Part1 from "@components/Forms/SubSteps/SubStep1Part1";
import SubStep1Part2 from "@components/Forms/SubSteps/SubStep1Part2";
import SubStep1Part3 from "@components/Forms/SubSteps/SubStep1Part3";
import SubStep1Part4 from "@components/Forms/SubSteps/SubStep1Part4";
import SubStep2Part1 from "@components/Forms/SubSteps/SubStep2Part1";
import SubStep2Part2 from "@components/Forms/SubSteps/SubStep2Part2";
import SubStep2Part3 from "@components/Forms/SubSteps/SubStep2Part3";
import SubStep2Part4 from "@components/Forms/SubSteps/SubStep2Part4";
import Form2Footer from "@components/Forms/Form2Footer/Form2Footer";
import classNames from "classnames";
import ErrorHanglings from './hanglings/Form2Hangling';

const validationSchema = flow2FormValidationSchema;
const initialValues = flow2FormInitialValues;

const SubstepViever = ({ subSteps, activeSubStep }: { subSteps: any, activeSubStep: number }) => {
    return <>
        {subSteps[activeSubStep]}
    </>
}

export interface PropsCanSelectStep {
    setSelectedStep: (step: number) => void
}
function Flow2Form({ setSelectedStep }: PropsCanSelectStep) {

    const { user: { Id: UserId } } = useUser()
    let key = `flow-2-data-${UserId}`;
    const [data, setData] = useState(JSON.parse(localStorage.getItem(key) as string) || initialValues);
    const [part, setPart] = useState(Number(localStorage.getItem("flow-2-part-" + UserId)) || 1);
    useEffect(() => {
        localStorage.setItem("flow-2-part" + UserId, part.toString());
    }, [part]);
    const router = useRouter()
    const [isMale, setIsMale] = useState(false);

    return (
        <Formik
            initialValues={data}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(values) => {

                localStorage.setItem(key, JSON.stringify(values));
                toast.success("Form kaydedildi IFM Değerlendirme Formuna geçiniz.")
                setSelectedStep(3)
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                errors,
                submitForm,
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
                        {
                            part == countOfSubSteps && (<div
                                className="min-h-[112px] my-[10px] w-full px-[40px] rounded-[20px_5px] p-2 flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-center">
                                <button
                                    //  onClick={() => {
                                    //     console.log(errors, "hatalar");
                                    //     if (Object.keys(errors).length > 0) {
                                    //         console.log("flow 3 errors", errors);

                                    //         toast.error("Lütfen tüm alanları doldurunuz.")
                                    //     } else submitForm()
                                    // }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        console.log("errors", errors);
                                        const invalidKeys = Object.keys(errors).filter(key => {
                                            return ErrorHanglings.some(item => item.Key === key);
                                        });
                                        if (invalidKeys.length > 0) {
                                            invalidKeys.forEach(key => {
                                                const errorItem = ErrorHanglings.find(item => item.Key === key);
                                                console.log("test", errorItem);
                                                const page = errorItem != null ? errorItem.Page : 1;
                                                setPart(page as number);
                                            });
                                            toast.error("Lütfen tüm alanları doldurunuz.")
                                        }

                                        else submitForm()
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



export default Flow2Form;
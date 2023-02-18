import React, { useEffect, useState } from 'react';
import { flow5FormValidationSchema } from "@components/Forms/validationSchemes";
import { flow5FormInitialValues } from "@components/Forms/BasvuruForms/config/initialValues";
import useUser from "../../../hooks/user.hook";
import { useRouter } from "next/router";
import { Formik } from "formik";
import request from "@config";
import { toast } from "react-hot-toast";
import Form2Footer from "@components/Forms/Form2Footer/Form2Footer";
import SubstepViever from "@components/Forms/SubSteps/SubStepContainer";
import SubStep3Part1 from "@components/Forms/SubSteps/SubStep3Part1";
import SubStep4Part1 from '../SubSteps/SubStep4Part1';
import SubStep4Part2 from '../SubSteps/SubStep4Part2';
import SubStep4Part3 from '../SubSteps/SubStep4Part3';
import SubStep4Part4 from '../SubSteps/SubStep4Part4';
import SubStep4Part5 from '../SubSteps/SubStep4Part5';

const validationSchema = flow5FormValidationSchema;
const initialValues = flow5FormInitialValues;


function Flow5Form() {
    const { user: { Id: UserId } } = useUser()
    const [part, setPart] = useState(Number(localStorage.getItem("flow-5-part" + UserId)) || 1);
    useEffect(() => {
        localStorage.setItem("flow-5-part" + UserId, part.toString());
        console.log("flow-5-part --", localStorage.getItem("flow-5-part" + UserId));
        console.log("seleced step", localStorage.getItem("selectedStep-" + UserId));

    }, [part]);
    const router = useRouter()
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("values", values);
                request.post("/userflows", {
                    UserId,
                    Step: 5,
                    Document: values
                }).then(res => {
                    toast.success("Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçilecektir.")
                    setTimeout(() => {
                        router.reload()
                    }, 2000)
                }).catch((err) => {
                    console.log("err", err);
                    toast.error(err.response.data.Message)
                })
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
                    1: <SubStep4Part1
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue} readOnly={false}                    />,
                    2: <SubStep4Part2
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    3: <SubStep4Part3
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    4: <SubStep4Part4
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    5: <SubStep4Part5
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
                                <SubstepViever subSteps={subSteps} activeSubStep={part} />
                            )}
                        </div>

                        <Form2Footer parts={countOfSubSteps} setter={setPart} active={part} />
                        {
                            part == countOfSubSteps && (<div
                                className="min-h-[112px] my-[10px] w-full px-[40px] rounded-[20px_5px] p-2 flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-center">
                                <button type="button"
                                    onClick={() => {
                                        if (Object.keys(errors).length > 0) {
                                            toast.error("Lütfen tüm alanları doldurunuz.")
                                        } else submitForm()
                                    }}
                                    className="w-[250px] rounded-[20px_5px] text-[white] bg-[#4E929D] h-[50px] border-2"
                                >
                                    Formu Gönder
                                </button>
                            </div>)
                        }
                    </form>
                );
            }}
        </Formik>
    );
}

export default Flow5Form;
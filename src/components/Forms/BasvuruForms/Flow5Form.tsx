import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {
    flow3FormValidationSchema
} from "@components/Forms/validationSchemes";
import {flow3FormInitialValues} from "@components/Forms/BasvuruForms/config/initialValues";
import useUser from "../../../hooks/user.hook";
import {useRouter} from "next/router";
import {FormSubSteps} from "@components/Forms/FormSteps/FormSteps";
import {Formik} from "formik";
import request from "@config";
import {toast} from "react-hot-toast";
import SubStep2Part1 from "@components/Forms/SubSteps/SubStep2Part1";
import SubStep2Part2 from "@components/Forms/SubSteps/SubStep2Part2";
import SubStep2Part3 from "@components/Forms/SubSteps/SubStep2Part3";
import SubStep2Part4 from "@components/Forms/SubSteps/SubStep2Part4";
import SubStep2Part5 from "@components/Forms/SubSteps/SubStep2Part5";
import Form2Footer from "@components/Forms/Form2Footer/Form2Footer";
import classNames from "classnames";
import SubstepViever from "@components/Forms/SubSteps/SubStepContainer";
import SubStep3Part1 from "@components/Forms/SubSteps/SubStep3Part1";

const validationSchema = flow3FormValidationSchema;
const initialValues = flow3FormInitialValues;


function Flow5Form() {
    const {user: {Id: UserId}} = useUser()
    const [part, setPart] = useState(Number(localStorage.getItem("flow-5-part" + UserId)) || 1);
    useEffect(() => {
        localStorage.setItem("flow-5-part" + UserId, part.toString());
    }, [part]);
    const router = useRouter()
    const [isMale, setIsMale] = useState(false);


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("values", values);
                request.post("/userflows", {
                    UserId,
                    Step: 3,
                    Document: values
                }).then(res => {
                    toast.success("Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçilecektir.")
                    setTimeout(() => {
                        router.push("/dashboard")
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
                    1: <SubStep3Part1
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    2: <SubStep3Part1
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
                        {
                            part == countOfSubSteps && (<div
                                className="min-h-[112px] my-[10px] w-full px-[40px] rounded-[20px_5px] p-2 flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-center">
                                <button
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
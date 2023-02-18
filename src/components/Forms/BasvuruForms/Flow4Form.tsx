import React, {useEffect, useState} from 'react';
import {flow4FormValidationSchema} from "@components/Forms/validationSchemes";
import {flow4FormInitialValues} from "@components/Forms/BasvuruForms/config/initialValues";
import useUser from "../../../hooks/user.hook";
import {useRouter} from "next/router";
import {Formik} from "formik";
import request from "@config";
import {toast} from "react-hot-toast";
import Form2Footer from "@components/Forms/Form2Footer/Form2Footer";
import SubstepViever from "@components/Forms/SubSteps/SubStepContainer";
import SubStep3Part1 from "@components/Forms/SubSteps/SubStep3Part1";
import SubStep3Part3 from "@components/Forms/SubSteps/SubStep3Part3";
import SubStep3Part2 from "@components/Forms/SubSteps/SubStep3Part2";
import SubStep3Part4 from "@components/Forms/SubSteps/SubStep3Part4";

const validationSchema = flow4FormValidationSchema;
const initialValues = flow4FormInitialValues;


function Flow4Form() {
    const {user: {Id: UserId}} = useUser()
    const [part, setPart] = useState(Number(localStorage.getItem("flow-4-part" + UserId)) || 1);
    useEffect(() => {
        localStorage.setItem("flow-4-part" + UserId, part.toString());
    }, [part]);
    const router = useRouter()
    const [isMale, setIsMale] = useState(false);

    const sendForm = ({step, values, userId}: { step: number, values: any, userId: string }) => {
        return request.post("/userflows", {
            UserId: userId,
            Step: step,
            Document: values
        })
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("values", values);
                let flow2DataKey = `flow-2-data-${UserId}`;
                let flow3DataKey = `flow-3-data-${UserId}`;
                let flow2Data = JSON.parse(localStorage.getItem(flow2DataKey) as string);
                let flow3Data = JSON.parse(localStorage.getItem(flow3DataKey) as string);
                if (!flow2Data) {
                    toast("Lütfen önce 1. adımı tamamlayınız.")
                }
                if (!flow3Data) {
                    toast("Lütfen önce 2. adımı tamamlayınız.")
                }
                if (flow2Data && flow3Data) {
                    sendForm({step: 2, values: flow2Data, userId: UserId}).then(() => {
                        toast.success("IFM Beslenme Öykünüz başarıyla alınmıştır.")
                        localStorage.removeItem(flow2DataKey)
                        return sendForm({step: 3, values: flow3Data, userId: UserId})
                    }).then(() => {
                        toast.success("IFM Değerlendirme formunuz başarıyla alınmıştır.")
                        localStorage.removeItem(flow3DataKey)
                        return sendForm({step: 4, values: values, userId: UserId})
                    }).then(() => {
                        toast.success("Tıbbi Şikayet değerlendirme formunuz başarıyla alınmıştır.")
                        localStorage.removeItem(flow3DataKey);
                        toast.success("Onaylandığında MSQ formunu doldurabilirsiniz.")
                        setTimeout(() => {
                            router.reload();
                        }, 1500)
                    })
                }

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
                        {
                            part == countOfSubSteps && (<div
                                className="min-h-[112px] my-[10px] w-full px-[40px] rounded-[20px_5px] p-2 flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-center">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
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

export default Flow4Form;
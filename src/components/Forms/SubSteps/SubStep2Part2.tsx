import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";
import * as Yup from "yup";
import Combined4Input from "../FormInput/Combined4Input";
import Combined2Input from "../FormInput/Combined2Input";


export default function SubStep2Part2({
    errors,
    values,
    handleChange,
    setFieldValue,
}: {
    errors: any;
    values: any;
    handleChange: any;
    setFieldValue: any;
}) {
    return (
        <>
            <div className="min-h-[60px] w-full  pl-[20px] flex-col flex bg-[#E9EDD9]  text-[#5B623D] items-start justify-center">
                <h2 className="font-nexa-regular text-[18px]">Şu anki sağlık durumunuz:</h2>

                <h3 className="font-nexa-regular text-[14px]">Lütfen mevcut ve devam eden sağlık sorunlarınızı öncelik sırasına göre sıralayın</h3>
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <Combined4Input
                    errors={errors}
                    values={values}
                    options2={[
                        { value: "Hafif", label: "Hafif" },
                        { value: "Orta", label: "Orta" },
                        { value: "Şiddeti", label: "Şiddeti" },
                    ]}
                    options1={[
                        { value: "Zayıf", label: "Zayıf" },
                        { value: "İyi", label: "İyi" },
                        { value: "Mükemmel", label: "Mükemmel" },
                    ]}
                    fieldNames={["problem", "severity", "treatment", "success"]}
                    labels={["Problem", "Şiddeti", "Tedavi/yaklaşım", "Başarı"]}
                    name="subStep2.currentDisease"
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                />


            </div>

        </>
    );
}

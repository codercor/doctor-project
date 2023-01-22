import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";
import * as Yup from "yup";
import Combined4Input from "../FormInput/Combined4Input";
import Combined2Input from "../FormInput/Combined2Input";


export default function SubStep2Part3({
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
                <h3 className="font-nexa-regular text-[14px]">Alerjiler</h3>
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <Combined2Input
                    errors={errors}
                    values={values}
                    fieldNames={["food", "reaction"]}
                    labels={["İlaç/Takviye/Besin", "Reaksiyon"]}
                    name="allergies"
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                />
            </div>
        </>
    );
}

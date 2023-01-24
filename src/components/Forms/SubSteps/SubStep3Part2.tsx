import {Add} from "@mui/icons-material";
import React from "react";
import FormInput, {FormInputTextArea} from "../FormInput/FormInput";
import {generateForm, getSectionTitle, getTurkishTitle, Sections} from "@components/Forms/SubSteps/Utils/SubStep3Util";


export default function SubStep3Part2({
                                          errors,
                                          values,
                                          handleChange,
                                          setFieldValue
                                      }: {
                                          errors: any;
                                          values: any;
                                          handleChange: any;
                                          setFieldValue: any;
                                      }
) {


    return (
        <>
            <div
                className="min-h-[60px] w-full  px-[20px] flex-col flex bg-[#E9EDD9]  text-[#5B623D] items-start justify-center">
                <h2 className="font-nexa-regular text-[18px]">Son 14 gündeki sağlık durumunuza göre aşağıdaki
                    semptomların her birini değerlendirin</h2>
                <div className="font-nexa-regular text-[12px]">
                    <p>0 – Semptom yok veya neredeyse yok</p>
                    <p>1 – Arasıra var, etkisi şiddetli değil</p>
                    <p>2 – Bazen var, etkisi şiddetli</p>
                    <p>3 – Sıklıkla var, etkisi şiddetli değil</p>
                    <p>4 – Sıklıkla var, etkisi şiddetli</p>
                </div>
                <div className="w-full flex">
                    <div
                        className="flex flex-col gap-[20px] mb-[5px] py-[5px]  bg-[#F9F9F9] items-center px-[20px] w-full">
                        {generateForm(Sections[3], values, errors, handleChange)}
                    </div>
                    <div
                        className="flex flex-col gap-[20px] py-[5px] mb-[5px] bg-[#F9F9F9] items-center px-[20px] w-full">
                        {generateForm(Sections[4], values, errors, handleChange)}
                    </div>
                    <div
                        className="flex flex-col gap-[20px] py-[5px] mb-[5px] bg-[#F9F9F9] items-center px-[20px] w-full">
                        {generateForm(Sections[5], values, errors, handleChange)}
                    </div>
                </div>
            </div>
        </>
    )
        ;
}




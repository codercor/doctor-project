import { Add } from "@mui/icons-material";
import React from "react";
import FormInput, { FormInputTextArea } from "../FormInput/FormInput";
import { generateForm, getSectionTitle, getTurkishTitle, Sections } from "@components/Forms/SubSteps/Utils/SubStep3Util";


export default function SubStep4Part5({
    errors,
    values,
    handleChange,
    setFieldValue,
    readOnly = false
}: {
    errors: any;
    values: any;
    handleChange: any;
    setFieldValue: any;
    readOnly?: boolean;
}
) {


    return (
        <>
            <div
                className="min-h-[60px] w-full  px-[20px] flex-col flex bg-[#E9EDD9]  text-[#5B623D] items-start justify-center">
                <h2 className="font-nexa-regular text-[18px]">Son 30 gündeki sağlık durumunuza göre aşağıdaki
                    semptomların her birini değerlendirin</h2>
                <div className="font-nexa-regular text-[12px]">
                    <p>0 – Semptom yok veya neredeyse yok</p>
                    <p>1 – Arasıra var, etkisi şiddetli değil</p>
                    <p>2 – Bazen var, etkisi şiddetli</p>
                    <p>3 – Sıklıkla var, etkisi şiddetli değil</p>
                    <p>4 – Sıklıkla var, etkisi şiddetli</p>
                </div>
                <div className="w-full flex my-[20px]">
                    <FormInputTextArea disabled={readOnly} value={values.textLast2Week} onChange={handleChange} error={errors.textLast2Week} name="textLast2Week" label="Bu geçen 2 hafta nasıldı?" />
                </div>
                <div className="w-full flex my-[20px]">
                    <FormInputTextArea disabled={readOnly} value={values.textLifeStyleChange} onChange={handleChange} error={errors.textLifeStyleChange} name="textLifeStyleChange" label="Yaşam şeklinizi dönüştürürken nerelerde zorlandınız?" />
                </div>
                <div className="w-full flex my-[20px]">
                    <FormInputTextArea disabled={readOnly} value={values.textHaveAProblem} onChange={handleChange} error={errors.textHaveAProblem} name="textHaveAProblem" label="Eğer sorun yaşadıysanız, çözmek için nasıl bir yol izlemeliyiz?" />
                </div>
                <div className="w-full flex my-[20px]">
                    <FormInputTextArea disabled={readOnly} value={values.textSomethingElse} onChange={handleChange} error={errors.textSomethingElse} name="textSomethingElse" label="Bana iletmek istediğiniz başka bir şey var mı?" />
                </div>

            </div>
        </>
    )
        ;
}




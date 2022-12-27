import React from "react";
import { OPTIONS_EHB } from "../BasvuruForms/SecondForm/SecondForm";
import FormInput, { FormInputTextArea } from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";

export default function SubStep1Part4({
  errors,
  values,
  handleChange,
}: {
  errors: any;
  values: any;
  handleChange: any;
}) {
  return (
    <>
      <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start">
        <h2 className="font-nexa-regular text-[18px]">
          DOĞUM ÖNCESİ, DOĞUM VE DOĞUM SONRASI BESLENME
        </h2>
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInputTextArea
          label="Sizin hakkınızda, yeme alışkanlıklarınız, beslenme geçmişiniz ve/veya gıda ve vücutla ilişkiniz hakkında başka neler bilmemi istersiniz?"
          value={values.subStep1?.extraInfo}
          error={errors.subStep1?.extraInfo}
          name="subStep1.extraInfo"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInputTextArea
          label="Benimle çalışmanın sonucunda ne elde etmeyi umuyorsunuz?"
          value={values.subStep1?.purposeOfFinal}
          error={errors.subStep1?.purposeOfFinal}
          name="subStep1.purposeOfFinal"
          type="text"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

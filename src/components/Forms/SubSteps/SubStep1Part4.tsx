import React from "react";
import { OPTIONS_EHB } from "../BasvuruForms/SecondForm/SecondForm";
import FormInput, { FormInputTextArea } from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";

export default function SubStep1Part4({
  errors,
  values,
  handleChange,
  readOnly = false
}: {
  errors: any;
  values: any;
  handleChange: any;
  readOnly?: boolean;
}) {
  return (
    <>
      <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start">
        <h2 className="font-nexa-regular text-[18px]">
          DOĞUM ÖNCESİ, DOĞUM VE DOĞUM SONRASI BESLENME
        </h2>
      </div>
      <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
        <FormInputTextArea
          label="Sizin hakkınızda, yeme alışkanlıklarınız, beslenme geçmişiniz ve/veya gıda ve vücutla ilişkiniz hakkında başka neler bilmemi istersiniz?"
          value={values.extraInfo}
          error={errors.extraInfo}
          name="extraInfo"
          type="text"
          onChange={handleChange}
          disabled={readOnly}
        />
      </div>
      <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
        <FormInputTextArea
          label="Benimle çalışmanın sonucunda ne elde etmeyi umuyorsunuz?"
          value={values.purposeOfFinal}
          error={errors.purposeOfFinal}
          name="purposeOfFinal"
          type="text"
          onChange={handleChange}
          disabled={readOnly}
        />
      </div>
    </>
  );
}

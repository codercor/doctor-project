import React from "react";
import FormInput from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";

export default function SubStep1Part1({
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
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInputSelectOne
          label="Biyolojik ebeveynlerinizin herhangi bir besine karşı alerji, intolerans veya hassasiyeti var mı ?"
          options={[
            { value: "evet", label: "Evet" },
            { value: "hayır", label: "Hayır" },
            { value: "bilmiyorum", label: "Bilmiyorum" },
          ]}
          value={values.parrentTolarance}
          error={errors.parrentTolarance}
          name="parrentTolarance"
          onChange={handleChange}
          disabled={readOnly}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInputSelectOne
          onChange={handleChange}
          label="Bebeklik döneminde ne ile beslendiniz, annesütü mü, formül mama mı?"
          options={[
            { value: "anne sutu", label: "Anne Sütü" },
            { value: "formül mama", label: "Formül Mama" },
            {
              value: "Anne Sütü ve Formül Mama",
              label: "Anne Sütü ve Formül Mama",
            },
            { value: "Bilmiyorum", label: "Bilmiyorum" },
          ]}
          value={values.motherMilk}
          error={errors?.motherMilk}
          name="motherMilk"
          disabled={readOnly}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInputSelectOne
          onChange={handleChange}
          label="Katı gıda yemeye kaç yaşında başladığınızı biliyor musunuz?"
          options={[
            { value: "evet", label: "Evet" },
            { value: "hayır", label: "Hayır" },
          ]}
          value={values?.solidFood}
          error={errors?.solidFood}
          name="solidFood"
          disabled={readOnly}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInputSelectOne
          onChange={handleChange}
          label="Bebeklik döneminde herhangi bir besin alerjisi, intoleransı, hassasiyeti yaşadınız mı?"
          options={[
            { value: "evet", label: "Evet" },
            { value: "hayır", label: "Hayır" },
            { value: "bilmiyorum", label: "Bilmiyorum" },
          ]}
          value={values?.babyAllergy}
          error={errors?.babyAllergy}
          name="babyAllergy"
          disabled={readOnly}
        />
      </div>
    </>
  );
}

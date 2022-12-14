import React from "react";
import { OPTIONS_EHB } from "../BasvuruForms/SecondForm/SecondForm";
import FormInput from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";

export default function SubStep1Part2({
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
          ÇOCUKLUK DÖNEMİ BESLENME VE YEME DÜZENİ
        </h2>
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInputSelectOne
          label="Çocukken veya ergenlikte, herhangi bir besine vücudunuzun tepki verdiğini hatırlıyor musunuz?"
          options={OPTIONS_EHB}
          value={values.subStep1?.childFoodReact}
          error={errors.subStep1?.childFoodReact}
          name="subStep1.childFoodReact"
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInputSelectOne
          label="Çocukken ve ergenlikte sağlıklı gıdalara (yani, taze meyveler, sebzeler ve diğer besin açısından yoğun gıdalar) tutarlı ve güvenilir bir şekilde erişebildiniz mi?"
          options={OPTIONS_EHB}
          value={values.subStep1?.childFoodAccess}
          error={errors.subStep1?.childFoodAccess}
          name="subStep1.childFoodAccess"
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInputSelectOne
          label="Çocukken veya ergenlikte, herhangi bir yeme bozukluğu Teşhisi kondu mu veya besin ve vücut tepkisi ile ilgili olumsuz bir deneyiminiz oldu mu? (sık diyet yapmak, fazla egzersiz yapmak vb.)?"
          options={OPTIONS_EHB}
          value={values.subStep1?.childFoodDisorder}
          error={errors.subStep1?.childFoodDisorder}
          name="subStep1.childFoodDisorder"
        />
      </div>
    </>
  );
}

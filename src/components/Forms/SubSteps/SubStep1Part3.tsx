import React from "react";
import { OPTIONS_EHB } from "../BasvuruForms/SecondForm/SecondForm";
import FormInput from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";

export default function SubStep1Part3({
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
          ERİŞKİN DÖNEMDE BESLENME VE YEME DÜZENİ
        </h2>
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label={` Şu anda bir yeme bozukluğunuz var mı? Veya yiyecek ve bedenle ilgili rahatsız edici veya sorunlu davranışlar yaşıyor musunuz?
        (örneğin; tıkanırcasına yeme, yiyecek kısıtlama, telafi edici egzersiz, kronik diyet, yo-yo veya hızlı kilo verme diyetleri, "temiz" yemeye verimsiz saplantı v patolojik saplantı vb.)
        (Cevabınız evet ise açıklayınız)`}
          value={values.subStep1?.foodDisorder}
          error={errors.subStep1?.foodDisorder}
          name="subStep1.foodDisorder"
          type="text"
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="En sevdiğin yiyecek ne?"
          value={values.subStep1?.favoriteFood}
          error={errors.subStep1?.favoriteFood}
          name="subStep1.favoriteFood"
          type="text"
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="En sık yediğin yiyecekler hangileri?"
          value={values.subStep1?.mostEatenFood}
          error={errors.subStep1?.mostEatenFood}
          name="subStep1.mostEatenFood"
          type="text"
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Yiyeceklerinizi kim hazırlıyor?"
          value={values.subStep1?.foodPreparedBy}
          error={errors.subStep1?.foodPreparedBy}
          name="subStep1.foodPreparedBy"
          type="text"
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Yediklerinizi kim satın alıyor?"
          value={values.subStep1?.foodPurchasedBy}
          error={errors.subStep1?.foodPurchasedBy}
          name="subStep1.foodPurchasedBy"
          type="text"
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Hangi sıklıkla yemek pişiriyorsunuz?"
          value={values.subStep1?.cookingFrequency}
          error={errors.subStep1?.cookingFrequency}
          name="foodCookingFrequency"
          type="text"
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Sence en besleyici gıdayı hayatında ne zaman yedin?"
          value={values.subStep1?.mostNutritiousFood}
          error={errors.subStep1?.mostNutritiousFood}
          name="subStep1.mostNutritiousFood"
          type="text"
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Sence en az besleyici gıdayı hayatında ne zaman yedin?"
          value={values.subStep1?.leastNutritiousFood}
          error={errors.subStep1?.leastNutritiousFood}
          name="subStep1.leastNutritiousFood"
          type="text"
        />
      </div>
    </>
  );
}

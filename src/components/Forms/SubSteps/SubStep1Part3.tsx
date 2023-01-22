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
          value={values.foodDisorder}
          error={errors.foodDisorder}
          name="foodDisorder"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="En sevdiğin yiyecek ne?"
          value={values.favoriteFood}
          error={errors.favoriteFood}
          name="favoriteFood"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="En sık yediğin yiyecekler hangileri?"
          value={values.mostEatenFood}
          error={errors.mostEatenFood}
          name="mostEatenFood"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Yiyeceklerinizi kim hazırlıyor?"
          value={values.foodPreparedBy}
          error={errors.foodPreparedBy}
          name="foodPreparedBy"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Yediklerinizi kim satın alıyor?"
          value={values.foodPurchasedBy}
          error={errors.foodPurchasedBy}
          name="foodPurchasedBy"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Hangi sıklıkla yemek pişiriyorsunuz?"
          value={values.cookingFrequency}
          error={errors.cookingFrequency}
          name="cookingFrequency"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Sence en besleyici gıdayı hayatında ne zaman yedin?"
          value={values.mostNutritiousFood}
          error={errors.mostNutritiousFood}
          name="mostNutritiousFood"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Sence en az besleyici gıdayı hayatında ne zaman yedin?"
          value={values.leastNutritiousFood}
          error={errors.leastNutritiousFood}
          name="leastNutritiousFood"
          type="text"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

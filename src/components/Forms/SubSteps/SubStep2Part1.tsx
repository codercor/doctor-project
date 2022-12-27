import React from "react";
import FormInput from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";

export default function SubStep2Part1({
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
        <h2 className="font-nexa-regular text-[18px]">Genel Bilgiler</h2>
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="İsim"
          value={values.subStep2?.name}
          error={errors.subStep2?.name}
          name="subStep2.name"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Yaş"
          value={values.subStep2?.age}
          error={errors.subStep2?.age}
          name="subStep2.age"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Tarih"
          value={values.subStep2?.date}
          error={errors.subStep2?.date}
          name="subStep2.date"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Doğum Tarihi"
          value={values.subStep2?.birthDate}
          error={errors.subStep2?.birthDate}
          name="subStep2.birthDate"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          value={values.subStep2?.email}
          error={errors.subStep2?.email}
          name="subStep2.email"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Adres"
          value={values.subStep2?.address}
          error={errors.subStep2?.address}
          name="subStep2.address"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Telefon"
          value={values.subStep2?.phoneCell}
          error={errors.subStep2?.phoneCell}
          name="subStep2.phoneCell"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col min-h-[150px] py-[10px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <div>
          <FormInputSelectOne
            label="Genetik geçmiş"
            value={values.subStep2?.geneticHistory}
            error={errors.subStep2?.geneticHistory}
            name="subStep2.geneticHistory"
            options={[
              /*  Afrikan Amerikan  İspanyol  Akdeniz  Asyalı Amerikalı Kafkas Kuzey Avrupalı*/
              { label: "Afrikan Amerikan", value: "Afrikan Amerikan" },
              { label: "İspanyol", value: "İspanyol" },
              { label: "Akdeniz", value: "Akdeniz" },
              { label: "Asyalı", value: "Asyalı" },
              { label: "Amerikalı", value: "Amerikalı" },
              { label: "Kafkas", value: "Kafkas" },
              { label: "Kuzey Avrupalı", value: "Kuzey Avrupalı" },
              {
                label: "Diğer",
                value: "Diğer",
              },
            ]}
          />
        </div>
        {values.subStep2.geneticHistory == "Diğer" && (
          <FormInput
            label="Diğer"
            name="subStep2.geneticHistoryOther"
            value={values.subStep2?.geneticHistoryOther}
            error={errors.subStep2?.geneticHistoryOther}
            type="text"
            onChange={handleChange}
          />
        )}
      </div>
      <div className="flex min-h-[150px] py-[10px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Sağlık hizmetini en son nerede, ne zaman ve kimden aldınız?"
          value={values.subStep2?.lastHealt}
          error={errors.subStep2?.lastHealt}
          name="subStep2.lastHealt"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex  min-h-[150px] py-[10px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Sağlık hizmetini en son nerede, ne zaman ve kimden aldınız?"
          value={values.subStep2?.lastHealt}
          error={errors.subStep2?.lastHealt}
          name="subStep2.lastHealt"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Acil durumlarda ulaşılacak kişi:"
          value={values.subStep2?.emergencyContact}
          error={errors.subStep2?.emergencyContact}
          name="subStep2.emergencyContact"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Acil durumlarda ulaşılacak kişi Telefon:"
          value={values.subStep2?.emergencyContactPhoneCell}
          error={errors.subStep2?.emergencyContactPhoneCell}
          name="subStep2.emergencyContactPhoneCell"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Acil durumlarda ulaşılacak kişi Yakınlığı:"
          value={values.subStep2?.emergencyContactRelation}
          error={errors.subStep2?.emergencyContactRelation}
          name="subStep2.emergencyContactRelation"
          type="text"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

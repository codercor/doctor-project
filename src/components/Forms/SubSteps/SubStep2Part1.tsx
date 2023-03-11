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
      <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start mt-3">
        <h2 className="font-nexa-regular text-[18px]">Genel Bilgiler</h2>
      </div>
      {/* <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="İsim"
          value={values.name}
          error={errors.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
        
        <FormInput
          label="Yaş"
          value={values.age}
          error={errors.age}
          name="age"
          type="number"
          onChange={handleChange}
          onKeyUp={(e) => {
            if (e.charCode < 48) {
              e.preventDefault();
            }
          }}
        />
      </div> */}
      {/* <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Doğum Tarihi"
          value={values.birthDate}
          error={errors.birthDate}
          placeholder="01/01/2023"
          name="birthDate"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          value={values.email}
          error={errors.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
      </div> */}
      {/* <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Adres"
          value={values.address}
          error={errors.address}
          name="address"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Şehir"
          value={values.city}
          error={errors.city}
          name="city"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Telefon"
          value={values.phoneCell}
          error={errors.phoneCell}
          name="phoneCell"
          type="text"
          onChange={handleChange}
        />
      </div> */}
      <div className="flex  min-h-[150px] py-[10px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Sağlık hizmetini en son nerede, ne zaman ve kimden aldınız?"
          value={values.lastHealt}
          error={errors.lastHealt}
          name="lastHealt"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex  min-h-[150px] py-[10px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
        <FormInput
          label="Acil durumlarda ulaşılacak kişi:"
          value={values.emergencyContact}
          error={errors.emergencyContact}
          name="emergencyContact"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Acil durumlarda ulaşılacak kişi Yakınlığı:"
          value={values.emergencyContactRelation}
          error={errors.emergencyContactRelation}
          name="emergencyContactRelation"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex  min-h-[150px] py-[10px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">


        <FormInput
          label="Acil durumlarda ulaşılacak kişi Telefon (Cep):"
          value={values.emergencyContactPhoneCell}
          error={errors.emergencyContactPhoneCell}
          name="emergencyContactPhoneCell"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Acil durumlarda ulaşılacak kişi Telefon (Ev):"
          value={values.emergencyContactPhoneCellHome}
          error={errors.emergencyContactPhoneCellHome}
          name="emergencyContactPhoneCellHome"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          label="Acil durumlarda ulaşılacak kişi Telefon (İş):"
          value={values.emergencyContactPhoneCellWork}
          error={errors.emergencyContactPhoneCellWork}
          name="emergencyContactPhoneCellWork"
          type="text"
          onChange={handleChange}
        />

      </div>
      <div className="flex py-4 py-[10px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
        <div>
          <FormInputSelectOne
            label="Beni nereden duydunuz?"
            value={values.whereDidYouHear}
            error={errors.whereDidYouHear}
            name="whereDidYouHear"
            options={[
              { label: "üniversiteden", value: "Üniversiteden" },
              { label: "IFM web sitesi", value: "IFM web sitesi" },
              { label: "Bir doktor önerdi", value: "Bir doktor önerdi" },
              { label: "Bir arkadaş/aile üyelerinden biri önerdi", value: "Bir arkadaş/aile üyelerinden biri önerdi" },
              { label: "Sosyal medya", value: "Sosyal medya" },
              {
                label: "Diğer",
                value: "Diğer",
              },
            ]}
            onChange={handleChange}
          />
        </div>
        {values.whereDidYouHear == "Diğer" && (
          <FormInput
            label="Diğer"
            name="whereDidYouHearOther"
            value={values.whereDidYouHearOther}
            error={errors.whereDidYouHearOther}
            type="text"
            onChange={handleChange}
          />
        )}
      </div>
    </>
  );
}

import { Add } from "@mui/icons-material";
import React from "react";
import FormInput, { FormInputTextArea } from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";
import FormInputSelectMulti from "../FormInput/FormInputSelectMulti";
import useUser from "src/hooks/user.hook";

const EH = [
    { value: "evet", label: "Evet" },
    { value: "hayır", label: "Hayır" },
]

const EOH = [
    { value: "evet", label: "Evet" },
    { value: "önce", label: "Önce" },
    { value: "hayır", label: "Hayır" },
]

const HOS = [
    { value: "hafif", label: "Hafif" },
    { value: "orta", label: "Orta" },
    { value: "şiddetli", label: "Şiddetli" },
]

const Quantity = [
    { value: "1", label: "1" },
    { value: "2-4", label: "2-4" },
    { value: ">4", label: ">4" },
]

let currentDiet = [
    { value: "vejetaryan", label: "Vejetaryan" },
    { value: "vegan", label: "Vegan" },
    { value: "alergi", label: "Alerji" },
    { value: "eliminasyon", label: "Eliminasyon" },
    { value: "kan grubu", label: "Kan grubu" },
    { value: "dusuk sodyum", label: "Düşük sodyum" },
    { value: "mandira yok", label: "Mandıra yok" },
    { value: "bugday yok", label: "Buğday yok" },
    { value: "glutensiz", label: "Glutensiz" },
    { value: "dusuk yagli", label: "Düşük yağlı" },
    { value: "dusuk karbonhidratli", label: "Düşük karbonhidratlı" },
    { value: "yuksek proteinli", label: "Yüksek Proteinli" },
    { value: "diğer", label: "Diğer" },
]

let livePoint = [
    { value: "n/a", label: "N/A" },
    { value: "1", label: "1" },
    { value: "2", label: "3" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
]

export default function SubStep2Part6({
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
    const { user } = useUser()
    return (
        <>
            <h3 className="font-nexa-regular text-[16px]">Stres</h3>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Çok fazla stres altında olduğunuzu hissediyor musunuz?"
                    options={EH}
                    name="stress"
                    value={values.stress}
                    error={errors?.stress}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Stres ile kolayca başa çıkabileceğinizi düşünüyor musunuz?"
                    options={EH}
                    name="copeWithStress"
                    value={values.copeWithStress}
                    error={errors?.copeWithStress}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center gap-[30px] pt-5 w-[full]">
            <label> Aşağıdakilerden her biri günlük ne kadar strese neden olur? (1-10 arası puan verin, 10 en çok)</label>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center gap-[30px] w-[full]">
                <div className="min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[150px]">
                    <FormInput
                        label={`İş`}
                        value={values.workStress}
                        error={errors.workStress}
                        name="workStress"
                        type="number"
                        onChange={handleChange}
                    />
                </div>
                <div className="min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[150px]">
                    <FormInput
                        label={`Aile`}
                        value={values.familyStress}
                        error={errors.familyStress}
                        name="familyStress"
                        type="number"
                        onChange={handleChange}
                    />
                </div>
                <div className="min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[150px]">
                    <FormInput
                        label={`Sağlık`}
                        value={values.healtyStress}
                        error={errors.healtyStress}
                        name="healtyStress"
                        type="number"
                        onChange={handleChange}
                    />
                </div>
                <div className="min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[150px]">
                    <FormInput
                        label={`Sosyal`}
                        value={values.socialStress}
                        error={errors.socialStress}
                        name="socialStress"
                        type="number"
                        onChange={handleChange}
                    />
                </div>
                <div className="min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[150px]">
                    <FormInput
                        label={`Maddi`}
                        value={values.materialStress}
                        error={errors.materialStress}
                        name="materialStress"
                        type="number"
                        onChange={handleChange}
                    />
                </div>
                <div className="min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[150px]">
                    <FormInput
                        label={`Diğer`}
                        value={values.otherStress}
                        error={errors.otherStress}
                        name="otherStress"
                        type="number"
                        onChange={handleChange}
                    />
                </div>
            </div>
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Gevşeme teknikleri kullanıyor musunuz?"
                    options={EH}
                    name="relaxationTechniques"
                    value={values.relaxationTechniques}
                    error={errors?.relaxationTechniques}
                    onChange={handleChange}
                />
                {
                    values.relaxationTechniques === "evet" && <>
                        <FormInput
                            label={`Hangi Sıklıkla`}
                            value={values.relaxationTechniquesDesc}
                            error={errors.relaxationTechniquesDesc}
                            name="relaxationTechniquesDesc"
                            type="text"
                            onChange={handleChange}
                        />
                        <FormInputSelectMulti
                            label="Hangi teknikleri kullanırsınız? (Birden fazla işaretleyebilirsiniz)"
                            options={[
                                { value: "meditasyon", label: "Meditasyon" },
                                { value: "nefes", label: "Nefes" },
                                { value: "tai Chi", label: "Tai Chi" },
                                { value: "yoga", label: "Yoga" },
                                { value: "ibadet", label: "İbadet" },
                                { value: "diğer", label: "Diğer" },
                            ]}
                            name="techniques"
                            value={values.techniques}
                            error={errors?.techniques}
                        />
                        {
                            values.techniques.includes("diğer") &&
                            <FormInput
                                label={`Açıklayınız.`}
                                value={values.techniquesDesc}
                                error={errors.techniquesDesc}
                                name="techniquesDesc"
                                type="text"
                                onChange={handleChange}
                            />
                        }
                    </>
                }
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">

                <FormInputSelectOne
                    label="Hiç danışmanlık aldınız mı?"
                    options={EH}
                    name="consultancy"
                    value={values.consultancy}
                    error={errors?.consultancy}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">

                <FormInputSelectOne
                    label="Şu an terapi alıyor musunuz? "
                    options={EH}
                    name="therapy"
                    value={values.therapy}
                    error={errors?.therapy}
                    onChange={handleChange}
                /> {
                    values.therapy === "evet" && <FormInput
                        label={`Açıklayınız.`}
                        value={values.therapyDesc}
                        error={errors.therapyDesc}
                        name="therapyDesc"
                        type="text"
                        onChange={handleChange}
                    />
                }
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">

                <FormInputSelectOne
                    label="Hiç tacize uğradınız mı, mağduriyet yaşadınız mı veya önemli bir travma yaşadınız mı? "
                    options={EH}
                    name="molestation"
                    value={values.molestation}
                    error={errors?.molestation}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">

                <FormInput
                    label="Hobileriniz/boş zamanlarınızda ne yaparsınız? "
                    name="hobbies"
                    value={values.hobbies}
                    error={errors?.hobbies}
                    onChange={handleChange}
                />
            </div>

            <h3 className="font-nexa-regular text-[16px]">İlişkiler</h3>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Medeni durum:"
                    options={[
                        { value: "bekar", label: "Bekar" },
                        { value: "evli", label: "Evli" },
                        { value: "boşanmış", label: "Boşanmış" },
                        { value: "gay/lezbiyen", label: "Gay/Lezbiyen" },
                        { value: "uzun süreli ilişki ", label: "Uzun süreli ilişki" },
                        { value: "dul-eş vefatı", label: "Dul-eş vefatı" },]}
                    name="maritalStatus"
                    value={values.maritalStatus}
                    error={errors?.maritalStatus}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Kiminle yaşıyorsunuz? (Eş, çocuklar, ebeveynler, akrabalar, arkadaşlar, evcil hayvanlar dahil)"
                    name="liveWith"
                    value={values.liveWith}
                    error={errors?.liveWith}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Şu anki işiniz:"
                    name="job"
                    value={values.job}
                    error={errors?.job}
                    onChange={handleChange}
                />
            </div>


            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Şu anki işiniz:"
                    name="oldJob"
                    value={values.oldJob}
                    error={errors?.oldJob}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">

                <FormInputSelectOne
                    label="Duygusal destek alabileceğiniz kaynaklarınız var mı ?"
                    options={EH}
                    name="emotionalSupport"
                    value={values.emotionalSupport}
                    error={errors?.emotionalSupport}
                    onChange={handleChange}
                />
                {
                    values.emotionalSupport === "evet" &&
                    <>
                        <FormInputSelectMulti
                            label="birden fazla işaretleyebilirsiniz"
                            options={[
                                { value: "eş/partner", label: "Eş/partner" },
                                { value: "aile", label: "Aile" },
                                { value: "arkadaşlar", label: "Arkadaşlar" },
                                { value: "dini/Manevi", label: "Dini/Manevi" },
                                { value: "evcil hayvan", label: "Evcil hayvan" },
                                { value: "diger", label: "Diğer" },
                            ]}
                            name="emotionalSupportSelect"
                            value={values.emotionalSupportSelect}
                            error={errors?.emotionalSupportSelect}
                        />
                        {
                            values.emotionalSupportSelect.includes("diger") &&
                            <FormInput
                                label="Açıklayınız:"
                                name="emotionalSupportOther"
                                value={values.emotionalSupportOther}
                                error={errors?.emotionalSupportOther}
                                onChange={handleChange}
                            />
                        }
                    </>
                }
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="İbadet eder misiniz veya manevi rutininiz var mı? "
                    options={EH}
                    name="worship"
                    value={values.worship}
                    error={errors?.worship}
                    onChange={handleChange}
                />{
                    values.worship === "evet" && <FormInput
                        label={`Açıklayınız `}
                        value={values.worshipDesc}
                        error={errors.worshipDesc}
                        name="worshipDesc"
                        type="text"
                        onChange={handleChange}
                    />
                }
            </div>
        </>
    );
}

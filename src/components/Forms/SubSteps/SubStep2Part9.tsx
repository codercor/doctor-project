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

export default function SubStep2Part9({
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
        <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start">
                    <h2 className=" text-[18px]">Tıbbi Özgeçmiş: Hastalıklar/Durumlar</h2>
                </div>
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
               <label className="font-nexa-bold text-[20px] text-[#4E929D]">EVET&apos; i işaretle = Şu anda varsa, ÖNCE&apos; yi işaretle = geçmişte varsa, Hayır&apos; ı işaretle = yok ise.</label>

               <label className="font-nexa-bold text-[20px] text-[#4E929D]">sindirim</label>
                <FormInputSelectOne
                    label="Hassas bağırsak sendromu"
                    name="medicalResumeDigestionQuestion1"
                    options={EOH}
                    value={values.medicalResumeDigestionQuestion1}
                    error={errors?.medicalResumeDigestionQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Reflü"
                    name="medicalResumeDigestionQuestion2"
                    options={EOH}
                    value={values.medicalResumeDigestionQuestion2}
                    error={errors?.medicalResumeDigestionQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Crohn hastalığı/ülseratif kolit"
                    name="medicalResumeDigestionQuestion3"
                    options={EOH}
                    value={values.medicalResumeDigestionQuestion3}
                    error={errors?.medicalResumeDigestionQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Peptik ülser"
                    name="medicalResumeDigestionQuestion4"
                    options={EOH}
                    value={values.medicalResumeDigestionQuestion4}
                    error={errors?.medicalResumeDigestionQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çölyak hastalığı"
                    name="medicalResumeDigestionQuestion5"
                    options={EOH}
                    value={values.medicalResumeDigestionQuestion5}
                    error={errors?.medicalResumeDigestionQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Safrakesesi taşı"
                    name="medicalResumeDigestionQuestion6"
                    options={EOH}
                    value={values.medicalResumeDigestionQuestion6}
                    error={errors?.medicalResumeDigestionQuestion6}
                    onChange={handleChange}
                />
                {/* <FormInput
                    label={`Diğer`}
                    value={values.medicalResumeDigestionQuestion7Desc}
                    error={errors.medicalResumeDigestionQuestion7Desc}
                    name="medicalResumeDigestionQuestionDesc"
                    type="text"
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer"
                    name="medicalResumeDigestionQuestion7"
                    options={EOH}
                    value={values.medicalResumeDigestionQuestion7}
                    error={errors?.medicalResumeDigestionQuestion7}
                    onChange={handleChange}
                /> */}
               <label className="font-nexa-bold text-[20px] text-[#4E929D]">Solunum</label>
                <FormInputSelectOne
                    label="Bronşit"
                    name="medicalResumeBreathingQuestion1"
                    options={EOH}
                    value={values.medicalResumeBreathingQuestion1}
                    error={errors?.medicalResumeBreathingQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Astım"
                    name="medicalResumeBreathingQuestion2"
                    options={EOH}
                    value={values.medicalResumeBreathingQuestion2}
                    error={errors?.medicalResumeBreathingQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Amfizem"
                    name="medicalResumeBreathingQuestion3"
                    options={EOH}
                    value={values.medicalResumeBreathingQuestion3}
                    error={errors?.medicalResumeBreathingQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Zatürre"
                    name="medicalResumeBreathingQuestion4"
                    options={EOH}
                    value={values.medicalResumeBreathingQuestion4}
                    error={errors?.medicalResumeBreathingQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sinüzit"
                    name="medicalResumeBreathingQuestion5"
                    options={EOH}
                    value={values.medicalResumeBreathingQuestion5}
                    error={errors?.medicalResumeBreathingQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Uyku apnesi"
                    name="medicalResumeBreathingQuestion6"
                    options={EOH}
                    value={values.medicalResumeBreathingQuestion6}
                    error={errors?.medicalResumeBreathingQuestion6}
                    onChange={handleChange}
                />
                {/* <FormInput
                    label={`Diğer`}
                    value={values.anotherTestDesc}
                    error={errors.anotherTestDesc}
                    name="medicalResumeBreathingQuestion7Desc"
                    type="text"
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer"
                    name="anotherTest"
                    options={EOH}
                    value={values.medicalResumeBreathingQuestion7}
                    error={errors?.medicalResumeBreathingQuestion7}
                    onChange={handleChange}
                /> */}

               <label className="font-nexa-bold text-[20px] text-[#4E929D]">Boşaltım/Genital</label>
                <FormInputSelectOne
                    label="Böbrek taşı"
                    name="medicalResumeGenitalQuestion1"
                    options={EOH}
                    value={values.medicalResumeGenitalQuestion1}
                    error={errors?.medicalResumeGenitalQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gut"
                    name="medicalResumeGenitalQuestion2"
                    options={EOH}
                    value={values.medicalResumeGenitalQuestion2}
                    error={errors?.medicalResumeGenitalQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Interstisyel sistit"
                    name="medicalResumeGenitalQuestion3"
                    options={EOH}
                    value={values.medicalResumeGenitalQuestion3}
                    error={errors?.medicalResumeGenitalQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sık mantar enfeksiyonu geçirmek"
                    name="medicalResumeGenitalQuestion4"
                    options={EOH}
                    value={values.medicalResumeGenitalQuestion4}
                    error={errors?.medicalResumeGenitalQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sık idrar yolu enfeksiyonu geçirmek"
                    name="medicalResumeGenitalQuestion5"
                    options={EOH}
                    value={values.medicalResumeGenitalQuestion5}
                    error={errors?.medicalResumeGenitalQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Cinsel işlev bozukluğu"
                    name="medicalResumeGenitalQuestion6"
                    options={EOH}
                    value={values.medicalResumeGenitalQuestion6}
                    error={errors?.medicalResumeGenitalQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="UCinsel yol ile bulaşan hastalık"
                    name="medicalResumeGenitalQuestion7"
                    options={EOH}
                    value={values.medicalResumeGenitalQuestion7}
                    error={errors?.medicalResumeGenitalQuestion7}
                    onChange={handleChange}
                />
                {/* <FormInput
                    label={`Diğer`}
                    value={values.anotherTestDesc}
                    error={errors.anotherTestDesc}
                    name="anotherTestDesc"
                    type="text"
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                /> */}


               <label className="font-nexa-bold text-[20px] text-[#4E929D]">Endokrin/Metabolik</label>
                <FormInputSelectOne
                    label="Diyabet"
                    name="medicalResumeMetabolicQuestion1"
                    options={EOH}
                    value={values.medicalResumeMetabolicQuestion1}
                    error={errors?.medicalResumeMetabolicQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hipotiroidi (Düşük tiroid hormonları)"
                    name="medicalResumeMetabolicQuestion2"
                    options={EOH}
                    value={values.medicalResumeMetabolicQuestion2}
                    error={errors?.medicalResumeMetabolicQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hipertiroidi (Yüksek tiroid hormonları)"
                    name="medicalResumeMetabolicQuestion3"
                    options={EOH}
                    value={values.medicalResumeMetabolicQuestion3}
                    error={errors?.medicalResumeMetabolicQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kısırlık"
                    name="medicalResumeMetabolicQuestion4"
                    options={EOH}
                    value={values.medicalResumeMetabolicQuestion4}
                    error={errors?.medicalResumeMetabolicQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Metabolik sendrom/insulin direnc"
                    name="medicalResumeMetabolicQuestion5"
                    options={EOH}
                    value={values.medicalResumeMetabolicQuestion5}
                    error={errors?.medicalResumeMetabolicQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yeme bozukluğu"
                    name="medicalResumeMetabolicQuestion6"
                    options={EOH}
                    value={values.medicalResumeMetabolicQuestion6}
                    error={errors?.medicalResumeMetabolicQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hipoglisemi"
                    name="medicalResumeMetabolicQuestion7"
                    options={EOH}
                    value={values.medicalResumeMetabolicQuestion7}
                    error={errors?.medicalResumeMetabolicQuestion7}
                    onChange={handleChange}
                />
                {/* <FormInput
                    label={`Diğer`}
                    value={values.anotherTestDesc}
                    error={errors.anotherTestDesc}
                    name="anotherTestDesc"
                    type="text"
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                /> */}
               <label className="font-nexa-bold text-[20px] text-[#4E929D]">Inflamatuvar/İmmün</label>
                <FormInputSelectOne
                    label="Romatoid artrit"
                    name="medicalResumeInflammatoryQuestion1"
                    options={EOH}
                    value={values.medicalResumeInflammatoryQuestion1}
                    error={errors?.medicalResumeInflammatoryQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kronik yorgunluk sendromu"
                    name="medicalResumeInflammatoryQuestion2"
                    options={EOH}
                    value={values.medicalResumeInflammatoryQuestion2}
                    error={errors?.medicalResumeInflammatoryQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Besin alerjileri"
                    name="medicalResumeInflammatoryQuestion3"
                    options={EOH}
                    value={values.medicalResumeInflammatoryQuestion3}
                    error={errors?.medicalResumeInflammatoryQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çevresel alerjiler"
                    name="medicalResumeInflammatoryQuestion4"
                    options={EOH}
                    value={values.medicalResumeInflammatoryQuestion4}
                    error={errors?.medicalResumeInflammatoryQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çoklu kimyasal hassasiyeti"
                    name="medicalResumeInflammatoryQuestion5"
                    options={EOH}
                    value={values.medicalResumeInflammatoryQuestion5}
                    error={errors?.medicalResumeInflammatoryQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Otoimmün hastalık"
                    name="medicalResumeInflammatoryQuestion6"
                    options={EOH}
                    value={values.medicalResumeInflammatoryQuestion6}
                    error={errors?.medicalResumeInflammatoryQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İmmün yetersizlik"
                    name="medicalResumeInflammatoryQuestion7"
                    options={EOH}
                    value={values.medicalResumeInflammatoryQuestion7}
                    error={errors?.medicalResumeInflammatoryQuestion7}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mononükleozis"
                    name="medicalResumeInflammatoryQuestion8"
                    options={EOH}
                    value={values.medicalResumeInflammatoryQuestion8}
                    error={errors?.medicalResumeInflammatoryQuestion8}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hepatiti"
                    name="medicalResumeInflammatoryQuestion9"
                    options={EOH}
                    value={values.medicalResumeInflammatoryQuestion9}
                    error={errors?.medicalResumeInflammatoryQuestion9}
                    onChange={handleChange}
                />
                {/* <FormInput
                    label={`Diğer`}
                    value={values.anotherTestDesc}
                    error={errors.anotherTestDesc}
                    name="anotherTestDesc"
                    type="text"
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                /> */}

               <label className="font-nexa-bold text-[20px] text-[#4E929D]">Kasiskelet</label>
                <FormInputSelectOne
                    label="Fibromiyalji"
                    name="medicalResumeMusculoskeletalQuestion1"
                    options={EOH}
                    value={values.medicalResumeMusculoskeletalQuestion1}
                    error={errors?.medicalResumeMusculoskeletalQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Osteoartrit"
                    name="medicalResumeMusculoskeletalQuestion2"
                    options={EOH}
                    value={values.medicalResumeMusculoskeletalQuestion2}
                    error={errors?.medicalResumeMusculoskeletalQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kronik ağrı"
                    name="medicalResumeMusculoskeletalQuestion3"
                    options={EOH}
                    value={values.medicalResumeMusculoskeletalQuestion3}
                    error={errors?.medicalResumeMusculoskeletalQuestion3}
                    onChange={handleChange}
                />
                {/* <FormInput
                    label={`Diğer`}
                    value={values.anotherTestDesc}
                    error={errors.anotherTestDesc}
                    name="anotherTestDesc"
                    type="text"
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                /> */}

               <label className="font-nexa-bold text-[20px] text-[#4E929D]">Deri</label>
                <FormInputSelectOne
                    label="Egzema"
                    name="medicalResumeLeatherQuestion1"
                    options={EOH}
                    value={values.medicalResumeLeatherQuestion1}
                    error={errors?.medicalResumeLeatherQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Psoriyazis (sedef)"
                    name="medicalResumeLeatherQuestion2"
                    options={EOH}
                    value={values.medicalResumeLeatherQuestion2}
                    error={errors?.medicalResumeLeatherQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Akne (sivilce)"
                    name="medicalResumeLeatherQuestion3"
                    options={EOH}
                    value={values.medicalResumeLeatherQuestion3}
                    error={errors?.medicalResumeLeatherQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Deri kanseri"
                    name="medicalResumeLeatherQuestion4"
                    options={EOH}
                    value={values.medicalResumeLeatherQuestion4}
                    error={errors?.medicalResumeLeatherQuestion4}
                    onChange={handleChange}
                />
                {/* <FormInput
                    label={`Diğer`}
                    value={values.anotherTestDesc}
                    error={errors.anotherTestDesc}
                    name="anotherTestDesc"
                    type="text"
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                /> */}
               <label className="font-nexa-bold text-[20px] text-[#4E929D]">Kalp-damar</label>
                <FormInputSelectOne
                    label="Göğüs ağrısı"
                    name="medicalResumeHeartQuestion1"
                    options={EOH}
                    value={values.medicalResumeHeartQuestion1}
                    error={errors?.medicalResumeHeartQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kalp krizi"
                    name="medicalResumeHeartQuestion2"
                    options={EOH}
                    value={values.medicalResumeHeartQuestion2}
                    error={errors?.medicalResumeHeartQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kalp yetmezliği"
                    name="medicalResumeHeartQuestion3"
                    options={EOH}
                    value={values.medicalResumeHeartQuestion3}
                    error={errors?.medicalResumeHeartQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hipertansiyon (yüksek kan basıncı)"
                    name="medicalResumeHeartQuestion4"
                    options={EOH}
                    value={values.medicalResumeHeartQuestion4}
                    error={errors?.medicalResumeHeartQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İnme"
                    name="medicalResumeHeartQuestion5"
                    options={EOH}
                    value={values.medicalResumeHeartQuestion5}
                    error={errors?.medicalResumeHeartQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yüksek kan yağları (kolesterol, trigliserit)"
                    name="medicalResumeHeartQuestion6"
                    options={EOH}
                    value={values.medicalResumeHeartQuestion6}
                    error={errors?.medicalResumeHeartQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Romatizmal ateş"
                    name="medicalResumeHeartQuestion7"
                    options={EOH}
                    value={values.medicalResumeHeartQuestion7}
                    error={errors?.medicalResumeHeartQuestion7}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Aritmi (düzensiz kalp hızı)"
                    name="medicalResumeHeartQuestion8"
                    options={EOH}
                    value={values.medicalResumeHeartQuestion8}
                    error={errors?.medicalResumeHeartQuestion8}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Murmur"
                    name="medicalResumeHeartQuestion9"
                    options={EOH}
                    value={values.medicalResumeHeartQuestion9}
                    error={errors?.medicalResumeHeartQuestion9}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mitral kapak prolapsusu"
                    name="medicalResumeHeartQuestion10"
                    options={EOH}
                    value={values.medicalResumeHeartQuestion10}
                    error={errors?.medicalResumeHeartQuestion10}
                    onChange={handleChange}
                />
                {/* <FormInput
                    label={`Diğer`}
                    value={values.anotherTestDesc}
                    error={errors.anotherTestDesc}
                    name="anotherTestDesc"
                    type="text"
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                /> */}

               <label className="font-nexa-bold text-[20px] text-[#4E929D]">Nörolojik/Duygusal</label>
                <FormInputSelectOne
                    label="Epilepsi/Nöbet"
                    name="medicalResumeNeurologicalQuestion1"
                    options={EOH}
                    value={values.medicalResumeNeurologicalQuestion1}
                    error={errors?.medicalResumeNeurologicalQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="ADD/ADHD (dikkat eksikliği)"
                    name="medicalResumeNeurologicalQuestion2"
                    options={EOH}
                    value={values.medicalResumeNeurologicalQuestion2}
                    error={errors?.medicalResumeNeurologicalQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Başağrısı"
                    name="medicalResumeNeurologicalQuestion3"
                    options={EOH}
                    value={values.medicalResumeNeurologicalQuestion3}
                    error={errors?.medicalResumeNeurologicalQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Migren"
                    name="medicalResumeNeurologicalQuestion4"
                    options={EOH}
                    value={values.medicalResumeNeurologicalQuestion4}
                    error={errors?.medicalResumeNeurologicalQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Depresyon"
                    name="medicalResumeNeurologicalQuestion5"
                    options={EOH}
                    value={values.medicalResumeNeurologicalQuestion5}
                    error={errors?.medicalResumeNeurologicalQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Anksiyete"
                    name="medicalResumeNeurologicalQuestion6"
                    options={EOH}
                    value={values.medicalResumeNeurologicalQuestion6}
                    error={errors?.medicalResumeNeurologicalQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Otizm"
                    name="medicalResumeNeurologicalQuestion7"
                    options={EOH}
                    value={values.medicalResumeNeurologicalQuestion7}
                    error={errors?.medicalResumeNeurologicalQuestion7}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Multiple skleroz"
                    name="medicalResumeNeurologicalQuestion8"
                    options={EOH}
                    value={values.medicalResumeNeurologicalQuestion8}
                    error={errors?.medicalResumeNeurologicalQuestion8}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Parkinson"
                    name="medicalResumeNeurologicalQuestion9"
                    options={EOH}
                    value={values.medicalResumeNeurologicalQuestion9}
                    error={errors?.medicalResumeNeurologicalQuestion9}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Demans (bunama)"
                    name="medicalResumeNeurologicalQuestion10"
                    options={EOH}
                    value={values.medicalResumeNeurologicalQuestion10}
                    error={errors?.medicalResumeNeurologicalQuestion10}
                    onChange={handleChange}
                />
                {/* <FormInput
                    label={`Diğer`}
                    value={values.anotherTestDesc}
                    error={errors.anotherTestDesc}
                    name="anotherTestDesc"
                    type="text"
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                /> */}
               <label className="font-nexa-bold text-[20px] text-[#4E929D]">Kanser</label>
                <FormInputSelectOne
                    label="Akciğer"
                    name="medicalResumeCancerQuestion1"
                    options={EOH}
                    value={values.medicalResumeCancerQuestion1}
                    error={errors?.medicalResumeCancerQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Meme"
                    name="medicalResumeCancerQuestion2"
                    options={EOH}
                    value={values.medicalResumeCancerQuestion2}
                    error={errors?.medicalResumeCancerQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kalın bağırsak"
                    name="medicalResumeCancerQuestion3"
                    options={EOH}
                    value={values.medicalResumeCancerQuestion3}
                    error={errors?.medicalResumeCancerQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Prostat"
                    name="medicalResumeCancerQuestion4"
                    options={EOH}
                    value={values.medicalResumeCancerQuestion4}
                    error={errors?.medicalResumeCancerQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Deri"
                    name="medicalResumeCancerQuestion5"
                    options={EOH}
                    value={values.medicalResumeCancerQuestion5}
                    error={errors?.medicalResumeCancerQuestion5}
                    onChange={handleChange}
                />
                {/* <FormInput
                    label={`Diğer`}
                    value={values.anotherTestDesc}
                    error={errors.anotherTestDesc}
                    name="anotherTestDesc"
                    type="text"
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                /> */}
            </div>
        </>
    );
}

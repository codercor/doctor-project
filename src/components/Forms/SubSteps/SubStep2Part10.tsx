import { Add } from "@mui/icons-material";
import React from "react";
import FormInput, { FormInputTextArea } from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";
import FormInputSelectMulti from "../FormInput/FormInputSelectMulti";
import useUser from "src/hooks/user.hook";
import { Field } from "formik";
import { useRouter } from "next/dist/client/router";

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

export default function SubStep2Part10({
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
    const { query: { flow_id } } = useRouter()

    const patientGender = localStorage.getItem(flow_id + "-Gender") || user.Information?.Gender;

    console.log("GENDER", patientGender);

    return (
        <>
            <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start">
                <h2 className="font-nexa-regular text-[18px]">Belirtilerin İncelenmesi</h2>
            </div>

            <div className="flex flex-col  justify-center border-2 min-h-[150px] bg-[#F9F9F9] items-start pl-[30px] gap-[30px]  w-[full]">
                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Şu anda veya son 6 ay içinde bulunan şikayetleri ve şiddetini işaretleyin..</label>
                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Genel</label>
                <FormInputSelectOne
                    label="Soğuk eller ve ayaklar"
                    name="examinationOfSymptomsGeneralQuestion1"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion1}
                    error={errors?.examinationOfSymptomsGeneralQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Soğuğa tahammülsüzlük"
                    name="examinationOfSymptomsGeneralQuestion2"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion2}
                    error={errors?.examinationOfSymptomsGeneralQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gündüz uyuklama"
                    name="examinationOfSymptomsGeneralQuestion3"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion3}
                    error={errors?.examinationOfSymptomsGeneralQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Uykuya dalmada güçlük"
                    name="examinationOfSymptomsGeneralQuestion4"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion4}
                    error={errors?.examinationOfSymptomsGeneralQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Erken uyanma"
                    name="examinationOfSymptomsGeneralQuestion5"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion5}
                    error={errors?.examinationOfSymptomsGeneralQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yorgunluk"
                    name="examinationOfSymptomsGeneralQuestion6"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion6}
                    error={errors?.examinationOfSymptomsGeneralQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ateş"
                    name="examinationOfSymptomsGeneralQuestion7"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion7}
                    error={errors?.examinationOfSymptomsGeneralQuestion7}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ateşbasması"
                    name="examinationOfSymptomsGeneralQuestion8"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion8}
                    error={errors?.examinationOfSymptomsGeneralQuestion8}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sıcağa tahammülsüzlük"
                    name="examinationOfSymptomsGeneralQuestion9"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion9}
                    error={errors?.examinationOfSymptomsGeneralQuestion9}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gece uyanmak"
                    name="examinationOfSymptomsGeneralQuestion10"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion10}
                    error={errors?.examinationOfSymptomsGeneralQuestion10}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kabus görmek"
                    name="examinationOfSymptomsGeneralQuestion11"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion11}
                    error={errors?.examinationOfSymptomsGeneralQuestion11}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Rüyalarımı hatırlamıyorum"
                    name="examinationOfSymptomsGeneralQuestion12"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion12}
                    error={errors?.examinationOfSymptomsGeneralQuestion12}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Düşük vücut sıcaklığı"
                    name="examinationOfSymptomsGeneralQuestion13"
                    options={HOS}
                    value={values.examinationOfSymptomsGeneralQuestion13}
                    error={errors?.examinationOfSymptomsGeneralQuestion13}
                    onChange={handleChange}
                />
                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Baş, gözler ve kulaklar</label>
                <FormInputSelectOne
                    label="Konjuktivit"
                    name="examinationOfSymptomsEyesAndEarQuestion1"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion1}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Koku almada bozulma"
                    name="examinationOfSymptomsEyesAndEarQuestion2"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion2}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Tat almada bozulma"
                    name="examinationOfSymptomsEyesAndEarQuestion3"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion3}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İşitme kaybı"
                    name="examinationOfSymptomsEyesAndEarQuestion4"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion4}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çınlama/işitme sorunlar"
                    name="examinationOfSymptomsEyesAndEarQuestion5"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion5}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gözde çapaklanma"
                    name="examinationOfSymptomsEyesAndEarQuestion6"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion6}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gözde ağrı"
                    name="examinationOfSymptomsEyesAndEarQuestion7"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion7}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion7}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gözkapağı kenarında kızarıklık"
                    name="examinationOfSymptomsEyesAndEarQuestion8"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion8}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion8}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Başağrısı"
                    name="examinationOfSymptomsEyesAndEarQuestion9"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion9}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion9}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İşitme kaybı"
                    name="examinationOfSymptomsEyesAndEarQuestion10"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion10}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion10}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İşitme problemleri"
                    name="examinationOfSymptomsEyesAndEarQuestion11"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion11}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion11}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Migren"
                    name="examinationOfSymptomsEyesAndEarQuestion12"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion12}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion12}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yüksek seslere hassasiyet"
                    name="examinationOfSymptomsEyesAndEarQuestion13"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion13}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion13}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Görme problemleri"
                    name="examinationOfSymptomsEyesAndEarQuestion14"
                    options={HOS}
                    value={values.examinationOfSymptomsEyesAndEarQuestion14}
                    error={errors?.examinationOfSymptomsEyesAndEarQuestion14}
                    onChange={handleChange}
                />

                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Kas-iskelet</label>
                <FormInputSelectOne
                    label="Sırt kasında spazm"
                    name="examinationOfSymptomsSkeletonQuestion1"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion1}
                    error={errors?.examinationOfSymptomsSkeletonQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bacaklarda kramplar"
                    name="examinationOfSymptomsSkeletonQuestion2"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion2}
                    error={errors?.examinationOfSymptomsSkeletonQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Göğüste sıkışma"
                    name="examinationOfSymptomsSkeletonQuestion3"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion3}
                    error={errors?.examinationOfSymptomsSkeletonQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ayak krampları"
                    name="examinationOfSymptomsSkeletonQuestion4"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion4}
                    error={errors?.examinationOfSymptomsSkeletonQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Eklem deformitesi"
                    name="examinationOfSymptomsSkeletonQuestion5"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion5}
                    error={errors?.examinationOfSymptomsSkeletonQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Eklem ağrısı"
                    name="examinationOfSymptomsSkeletonQuestion6"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion6}
                    error={errors?.examinationOfSymptomsSkeletonQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Eklemde kızarıklık"
                    name="examinationOfSymptomsSkeletonQuestion7"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion7}
                    error={errors?.examinationOfSymptomsSkeletonQuestion7}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Eklemde şişlik"
                    name="examinationOfSymptomsSkeletonQuestion8"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion8}
                    error={errors?.examinationOfSymptomsSkeletonQuestion8}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kas ağrısı"
                    name="examinationOfSymptomsSkeletonQuestion9"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion9}
                    error={errors?.examinationOfSymptomsSkeletonQuestion9}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kas spazmı"
                    name="examinationOfSymptomsSkeletonQuestion10"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion10}
                    error={errors?.examinationOfSymptomsSkeletonQuestion10}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kas şişliği"
                    name="examinationOfSymptomsSkeletonQuestion11"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion11}
                    error={errors?.examinationOfSymptomsSkeletonQuestion11}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kas seyrimes"
                    name="examinationOfSymptomsSkeletonQuestion12"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion12}
                    error={errors?.examinationOfSymptomsSkeletonQuestion12}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gözler çevresinde"
                    name="examinationOfSymptomsSkeletonQuestion13"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion13}
                    error={errors?.examinationOfSymptomsSkeletonQuestion13}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kollar veya bacaklarda"
                    name="examinationOfSymptomsSkeletonQuestion14"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion14}
                    error={errors?.examinationOfSymptomsSkeletonQuestion14}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kas güçsüzlüğü"
                    name="examinationOfSymptomsSkeletonQuestion15"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion15}
                    error={errors?.examinationOfSymptomsSkeletonQuestion15}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Boyun kas spazmı"
                    name="examinationOfSymptomsSkeletonQuestion16"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion16}
                    error={errors?.examinationOfSymptomsSkeletonQuestion16}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Tendinit"
                    name="examinationOfSymptomsSkeletonQuestion17"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion17}
                    error={errors?.examinationOfSymptomsSkeletonQuestion17}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gerilim başarısı"
                    name="examinationOfSymptomsSkeletonQuestion18"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion18}
                    error={errors?.examinationOfSymptomsSkeletonQuestion18}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çene eklemi uyumsuzluğu"
                    name="examinationOfSymptomsSkeletonQuestion19"
                    options={HOS}
                    value={values.examinationOfSymptomsSkeletonQuestion19}
                    error={errors?.examinationOfSymptomsSkeletonQuestion19}
                    onChange={handleChange}
                />


                <label className="font-nexa-bold text-[20px] text-left  text-[#4E929D]">Duygudurum/Sinirler</label>
                <FormInputSelectOne
                    label="Agorafobi"
                    name="examinationOfSymptomsNervesQuestion1"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion1}
                    error={errors?.examinationOfSymptomsNervesQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Anksiyete"
                    name="examinationOfSymptomsNervesQuestion2"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion2}
                    error={errors?.examinationOfSymptomsNervesQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İşitsel halüsinasyonlar"
                    name="examinationOfSymptomsNervesQuestion3"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion3}
                    error={errors?.examinationOfSymptomsNervesQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bilinç kaybı"
                    name="examinationOfSymptomsNervesQuestion4"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion4}
                    error={errors?.examinationOfSymptomsNervesQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Depresyon"
                    name="examinationOfSymptomsNervesQuestion5"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion5}
                    error={errors?.examinationOfSymptomsNervesQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Konsantre olmada(Zorluk)"
                    name="examinationOfSymptomsNervesQuestion6"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion6}
                    error={errors?.examinationOfSymptomsNervesQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dengeyi sağlamada(Zorluk)"
                    name="examinationOfSymptomsNervesQuestion7"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion7}
                    error={errors?.examinationOfSymptomsNervesQuestion7}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Düşünmede(Zorluk)"
                    name="examinationOfSymptomsNervesQuestion8"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion8}
                    error={errors?.examinationOfSymptomsNervesQuestion8}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Muhakeme yapmada(Zorluk)"
                    name="examinationOfSymptomsNervesQuestion9"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion9}
                    error={errors?.examinationOfSymptomsNervesQuestion9}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Konuşmada(Zorluk)"
                    name="examinationOfSymptomsNervesQuestion10"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion10}
                    error={errors?.examinationOfSymptomsNervesQuestion10}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hafızada(Zorluk)"
                    name="examinationOfSymptomsNervesQuestion11"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion11}
                    error={errors?.examinationOfSymptomsNervesQuestion11}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Baş dönmesi"
                    name="examinationOfSymptomsNervesQuestion12"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion12}
                    error={errors?.examinationOfSymptomsNervesQuestion12}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bayılma"
                    name="examinationOfSymptomsNervesQuestion13"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion13}
                    error={errors?.examinationOfSymptomsNervesQuestion13}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Korkmak"
                    name="examinationOfSymptomsNervesQuestion14"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion14}
                    error={errors?.examinationOfSymptomsNervesQuestion14}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gerginlik"
                    name="examinationOfSymptomsNervesQuestion15"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion15}
                    error={errors?.examinationOfSymptomsNervesQuestion15}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sersemlik"
                    name="examinationOfSymptomsNervesQuestion16"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion16}
                    error={errors?.examinationOfSymptomsNervesQuestion16}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Uyuşma"
                    name="examinationOfSymptomsNervesQuestion17"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion17}
                    error={errors?.examinationOfSymptomsNervesQuestion17}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer fobiler"
                    name="examinationOfSymptomsNervesQuestion18"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion18}
                    error={errors?.examinationOfSymptomsNervesQuestion18}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Panik atak"
                    name="examinationOfSymptomsNervesQuestion19"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion19}
                    error={errors?.examinationOfSymptomsNervesQuestion19}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Paranoya"
                    name="examinationOfSymptomsNervesQuestion20"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion20}
                    error={errors?.examinationOfSymptomsNervesQuestion20}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Nöbet geçirmek"
                    name="examinationOfSymptomsNervesQuestion21"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion21}
                    error={errors?.examinationOfSymptomsNervesQuestion21}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İntihar düşünces"
                    name="examinationOfSymptomsNervesQuestion22"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion22}
                    error={errors?.examinationOfSymptomsNervesQuestion22}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karıncalanma"
                    name="examinationOfSymptomsNervesQuestion23"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion23}
                    error={errors?.examinationOfSymptomsNervesQuestion23}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Tremor/titreme"
                    name="examinationOfSymptomsNervesQuestion24"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion24}
                    error={errors?.examinationOfSymptomsNervesQuestion24}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Görsel halüsinasyonlar"
                    name="examinationOfSymptomsNervesQuestion25"
                    options={HOS}
                    value={values.examinationOfSymptomsNervesQuestion25}
                    error={errors?.examinationOfSymptomsNervesQuestion25}
                    onChange={handleChange}
                />


                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Kalp-damar</label>
                <FormInputSelectOne
                    label="Anjina/Göğüs ağrısı"
                    name="examinationOfSymptomsHeartQuestion1"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion1}
                    error={errors?.examinationOfSymptomsHeartQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Nefes darlığı"
                    name="examinationOfSymptomsHeartQuestion2"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion2}
                    error={errors?.examinationOfSymptomsHeartQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kalp krizi"
                    name="examinationOfSymptomsHeartQuestion3"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion3}
                    error={errors?.examinationOfSymptomsHeartQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kalpte üfürüm"
                    name="examinationOfSymptomsHeartQuestion4"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion4}
                    error={errors?.examinationOfSymptomsHeartQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yüksek kan basıncı"
                    name="examinationOfSymptomsHeartQuestion5"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion5}
                    error={errors?.examinationOfSymptomsHeartQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ritim bozukluğu"
                    name="examinationOfSymptomsHeartQuestion6"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion6}
                    error={errors?.examinationOfSymptomsHeartQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mitral kapak prolapsusu"
                    name="examinationOfSymptomsHeartQuestion7"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion7}
                    error={errors?.examinationOfSymptomsHeartQuestion7}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çarpıntı"
                    name="examinationOfSymptomsHeartQuestion8"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion8}
                    error={errors?.examinationOfSymptomsHeartQuestion8}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Flebit"
                    name="examinationOfSymptomsHeartQuestion9"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion9}
                    error={errors?.examinationOfSymptomsHeartQuestion9}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Şişmişbilekler/ayaklar"
                    name="examinationOfSymptomsHeartQuestion10"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion10}
                    error={errors?.examinationOfSymptomsHeartQuestion10}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Varis"
                    name="examinationOfSymptomsHeartQuestion11"
                    options={HOS}
                    value={values.examinationOfSymptomsHeartQuestion11}
                    error={errors?.examinationOfSymptomsHeartQuestion11}
                    onChange={handleChange}
                />

                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">İdrar yolları</label>

                <FormInputSelectOne
                    label="Yatağııslatma"
                    name="examinationOfSymptomsPeeQuestion1"
                    options={HOS}
                    value={values.examinationOfSymptomsPeeQuestion1}
                    error={errors?.examinationOfSymptomsPeeQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İdrarı başlatmada zorluk"
                    name="examinationOfSymptomsPeeQuestion2"
                    options={HOS}
                    value={values.examinationOfSymptomsPeeQuestion2}
                    error={errors?.examinationOfSymptomsPeeQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Enfeksiyon"
                    name="examinationOfSymptomsPeeQuestion3"
                    options={HOS}
                    value={values.examinationOfSymptomsPeeQuestion3}
                    error={errors?.examinationOfSymptomsPeeQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Böbrek hastalığı"
                    name="examinationOfSymptomsPeeQuestion4"
                    options={HOS}
                    value={values.examinationOfSymptomsPeeQuestion4}
                    error={errors?.examinationOfSymptomsPeeQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Böbrek taşı"
                    name="examinationOfSymptomsPeeQuestion5"
                    options={HOS}
                    value={values.examinationOfSymptomsPeeQuestion5}
                    error={errors?.examinationOfSymptomsPeeQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İdrarını tutamama"
                    name="examinationOfSymptomsPeeQuestion6"
                    options={HOS}
                    value={values.examinationOfSymptomsPeeQuestion6}
                    error={errors?.examinationOfSymptomsPeeQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ağrı/yanma"
                    name="examinationOfSymptomsPeeQuestion7"
                    options={HOS}
                    value={values.examinationOfSymptomsPeeQuestion7}
                    error={errors?.examinationOfSymptomsPeeQuestion7}
                    onChange={handleChange}
                />
                {patientGender === "Erkek" && <><FormInputSelectOne
                    label="Prostat büyümesi"
                    name="examinationOfSymptomsPeeQuestion8"
                    options={HOS}
                    value={values.examinationOfSymptomsPeeQuestion8}
                    error={errors?.examinationOfSymptomsPeeQuestion8}
                    onChange={handleChange}
                />

                    <FormInputSelectOne
                        label="Prostat enfeksiyonu"
                        name="examinationOfSymptomsPeeQuestion9"
                        options={HOS}
                        value={values.examinationOfSymptomsPeeQuestion9}
                        error={errors?.examinationOfSymptomsPeeQuestion9}
                        onChange={handleChange}
                    />
                </>}
                <FormInputSelectOne
                    label="Sıkışma"
                    name="examinationOfSymptomsPeeQuestion10"
                    options={HOS}
                    value={values.examinationOfSymptomsPeeQuestion10}
                    error={errors?.examinationOfSymptomsPeeQuestion10}
                    onChange={handleChange}
                />

                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Sindirim</label>

                <FormInputSelectOne
                    label="Anal spazm"
                    name="examinationOfSymptomsDigestionQuestion1"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion1}
                    error={errors?.examinationOfSymptomsDigestionQuestion1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diş problemleri"
                    name="examinationOfSymptomsDigestionQuestion2"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion2}
                    error={errors?.examinationOfSymptomsDigestionQuestion2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dişeti kanaması"
                    name="examinationOfSymptomsDigestionQuestion3"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion3}
                    error={errors?.examinationOfSymptomsDigestionQuestion3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karnın alt bölümünde(Gaz)"
                    name="examinationOfSymptomsDigestionQuestion4"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion4}
                    error={errors?.examinationOfSymptomsDigestionQuestion4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bütün karında(Gaz)"
                    name="examinationOfSymptomsDigestionQuestion5"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion5}
                    error={errors?.examinationOfSymptomsDigestionQuestion5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yemekten hemen sonra(Gaz)"
                    name="examinationOfSymptomsDigestionQuestion6"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion6}
                    error={errors?.examinationOfSymptomsDigestionQuestion6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dışkıda kan"
                    name="examinationOfSymptomsDigestionQuestion7"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion7}
                    error={errors?.examinationOfSymptomsDigestionQuestion7}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Geğirmek"
                    name="examinationOfSymptomsDigestionQuestion8"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion8}
                    error={errors?.examinationOfSymptomsDigestionQuestion8}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ülser"
                    name="examinationOfSymptomsDigestionQuestion9"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion9}
                    error={errors?.examinationOfSymptomsDigestionQuestion9}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dudakta/ağızda uçuk"
                    name="examinationOfSymptomsDigestionQuestion10"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion10}
                    error={errors?.examinationOfSymptomsDigestionQuestion10}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kabızlık"
                    name="examinationOfSymptomsDigestionQuestion11"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion11}
                    error={errors?.examinationOfSymptomsDigestionQuestion11}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dudak kenarında çatlak"
                    name="examinationOfSymptomsDigestionQuestion12"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion12}
                    error={errors?.examinationOfSymptomsDigestionQuestion12}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dişprotezi/çiğneme sorunu"
                    name="examinationOfSymptomsDigestionQuestion13"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion13}
                    error={errors?.examinationOfSymptomsDigestionQuestion13}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İshal"
                    name="examinationOfSymptomsDigestionQuestion14"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion14}
                    error={errors?.examinationOfSymptomsDigestionQuestion14}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yutma güçlüğü"
                    name="examinationOfSymptomsDigestionQuestion15"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion15}
                    error={errors?.examinationOfSymptomsDigestionQuestion15}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kuru ağız"
                    name="examinationOfSymptomsDigestionQuestion16"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion16}
                    error={errors?.examinationOfSymptomsDigestionQuestion16}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gaz çıkarma (rektumdan)"
                    name="examinationOfSymptomsDigestionQuestion17"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion17}
                    error={errors?.examinationOfSymptomsDigestionQuestion17}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Anüste çatlak"
                    name="examinationOfSymptomsDigestionQuestion18"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion18}
                    error={errors?.examinationOfSymptomsDigestionQuestion18}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Reflü"
                    name="examinationOfSymptomsDigestionQuestion19"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion19}
                    error={errors?.examinationOfSymptomsDigestionQuestion19}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Göğüste ağrı/yanma"
                    name="examinationOfSymptomsDigestionQuestion20"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion20}
                    error={errors?.examinationOfSymptomsDigestionQuestion20}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hemoroid"
                    name="examinationOfSymptomsDigestionQuestion21"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion21}
                    error={errors?.examinationOfSymptomsDigestionQuestion21}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Laktoz(İntolerans)"
                    name="examinationOfSymptomsDigestionQuestion22"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion22}
                    error={errors?.examinationOfSymptomsDigestionQuestion22}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mandıra ürünler(İntolerans)"
                    name="examinationOfSymptomsDigestionQuestion23"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion23}
                    error={errors?.examinationOfSymptomsDigestionQuestion23}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gluten (buğday)(İntolerans)"
                    name="examinationOfSymptomsDigestionQuestion24"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion24}
                    error={errors?.examinationOfSymptomsDigestionQuestion24}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mısır(İntolerans)"
                    name="examinationOfSymptomsDigestionQuestion25"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion25}
                    error={errors?.examinationOfSymptomsDigestionQuestion25}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yumurta(İntolerans)"
                    name="examinationOfSymptomsDigestionQuestion26"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion26}
                    error={errors?.examinationOfSymptomsDigestionQuestion26}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yağlı besinler(İntolerans)"
                    name="examinationOfSymptomsDigestionQuestion27"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion27}
                    error={errors?.examinationOfSymptomsDigestionQuestion27}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Maya(İntolerans)"
                    name="examinationOfSymptomsDigestionQuestion28"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion28}
                    error={errors?.examinationOfSymptomsDigestionQuestion28}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karaciğer hastalığı/sarılık(sarı gözler ve cilt)"
                    name="examinationOfSymptomsDigestionQuestion29"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion29}
                    error={errors?.examinationOfSymptomsDigestionQuestion29}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karının alt bölümünde ağrı"
                    name="examinationOfSymptomsDigestionQuestion30"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion30}
                    error={errors?.examinationOfSymptomsDigestionQuestion30}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dışkıda mucus (sümüksü)"
                    name="examinationOfSymptomsDigestionQuestion31"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion31}
                    error={errors?.examinationOfSymptomsDigestionQuestion31}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bulantı"
                    name="examinationOfSymptomsDigestionQuestion32"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion32}
                    error={errors?.examinationOfSymptomsDigestionQuestion32}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diş/dişeti hastalığı"
                    name="examinationOfSymptomsDigestionQuestion33"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion33}
                    error={errors?.examinationOfSymptomsDigestionQuestion33}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dilde ağrı"
                    name="examinationOfSymptomsDigestionQuestion34"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion34}
                    error={errors?.examinationOfSymptomsDigestionQuestion34}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kokulu dışkı"
                    name="examinationOfSymptomsDigestionQuestion35"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion35}
                    error={errors?.examinationOfSymptomsDigestionQuestion35}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dışkıda sindirilmemişbesinler"
                    name="examinationOfSymptomsDigestionQuestion36"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion36}
                    error={errors?.examinationOfSymptomsDigestionQuestion36}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Üst karın ağrısı"
                    name="examinationOfSymptomsDigestionQuestion37"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion37}
                    error={errors?.examinationOfSymptomsDigestionQuestion37}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kusma"
                    name="examinationOfSymptomsDigestionQuestion38"
                    options={HOS}
                    value={values.examinationOfSymptomsDigestionQuestion38}
                    error={errors?.examinationOfSymptomsDigestionQuestion38}
                    onChange={handleChange}
                />

                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Yeme Alışkanlığı</label>
                <FormInputSelectOne
                    label="Çok fazla yemek"
                    name="anotherTest1"
                    options={HOS}
                    value={values.anotherTest1}
                    error={errors?.anotherTest1}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bulimia"
                    name="anotherTest2"
                    options={HOS}
                    value={values.anotherTest2}
                    error={errors?.anotherTest2}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kilo alamama"
                    name="anotherTest3"
                    options={HOS}
                    value={values.anotherTest3}
                    error={errors?.anotherTest3}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kilo verememe"
                    name="anotherTest4"
                    options={HOS}
                    value={values.anotherTest4}
                    error={errors?.anotherTest4}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karbonhidrat özlemi"
                    name="anotherTest5"
                    options={HOS}
                    value={values.anotherTest5}
                    error={errors?.anotherTest5}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karbonhidrat intoleransı"
                    name="anotherTest6"
                    options={HOS}
                    value={values.anotherTest6}
                    error={errors?.anotherTest6}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İştahsızlık"
                    name="anotherTest7"
                    options={HOS}
                    value={values.anotherTest7}
                    error={errors?.anotherTest7}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Tuz/tuzlu aşermek"
                    name="anotherTest8"
                    options={HOS}
                    value={values.anotherTest8}
                    error={errors?.anotherTest8}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sık beslenmek"
                    name="anotherTest9"
                    options={HOS}
                    value={values.anotherTest9}
                    error={errors?.anotherTest9}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Tatlı aşermek"
                    name="anotherTest10"
                    options={HOS}
                    value={values.anotherTest10}
                    error={errors?.anotherTest10}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kafein bağımlılığı"
                    name="anotherTest11"
                    options={HOS}
                    value={values.anotherTest11}
                    error={errors?.anotherTest11}
                    onChange={handleChange}
                />

                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Solunum</label>
                <FormInputSelectOne
                    label="Ağız kokusu"
                    name="anotherTest12"
                    options={HOS}
                    value={values.anotherTest12}
                    error={errors?.anotherTest12}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Burunda kötü koku"
                    name="anotherTest13"
                    options={HOS}
                    value={values.anotherTest13}
                    error={errors?.anotherTest13}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kuru öksürük"
                    name="anotherTest14"
                    options={HOS}
                    value={values.anotherTest14}
                    error={errors?.anotherTest14}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Balgamlı öksürük"
                    name="anotherTest15"
                    options={HOS}
                    value={values.anotherTest15}
                    error={errors?.anotherTest15}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İlkbahar Nezlesi"
                    name="anotherTest16"
                    options={HOS}
                    value={values.anotherTest16}
                    error={errors?.anotherTest16}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yaz Nezlesi"
                    name="anotherTest17"
                    options={HOS}
                    value={values.anotherTest17}
                    error={errors?.anotherTest17}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sonbahar Nezlesi"
                    name="anotherTest18"
                    options={HOS}
                    value={values.anotherTest18}
                    error={errors?.anotherTest18}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mevsim geçişlerinde"
                    name="anotherTest19"
                    options={HOS}
                    value={values.anotherTest19}
                    error={errors?.anotherTest19}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ses kısıklığı"
                    name="anotherTest20"
                    options={HOS}
                    value={values.anotherTest20}
                    error={errors?.anotherTest20}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Burun tıkanıklığı"
                    name="anotherTest21"
                    options={HOS}
                    value={values.anotherTest21}
                    error={errors?.anotherTest21}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Burun kanaması"
                    name="anotherTest22"
                    options={HOS}
                    value={values.anotherTest22}
                    error={errors?.anotherTest22}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Geniz akıntısı"
                    name="anotherTest23"
                    options={HOS}
                    value={values.anotherTest23}
                    error={errors?.anotherTest23}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sinüslerde dolgunluk"
                    name="anotherTest24"
                    options={HOS}
                    value={values.anotherTest24}
                    error={errors?.anotherTest24}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sinus enfeksiyonu"
                    name="anotherTest25"
                    options={HOS}
                    value={values.anotherTest25}
                    error={errors?.anotherTest25}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Horlamak"
                    name="anotherTest26"
                    options={HOS}
                    value={values.anotherTest26}
                    error={errors?.anotherTest26}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Boğaz ağrısı"
                    name="anotherTest27"
                    options={HOS}
                    value={values.anotherTest27}
                    error={errors?.anotherTest27}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hırıltı"
                    name="anotherTest28"
                    options={HOS}
                    value={values.anotherTest28}
                    error={errors?.anotherTest28}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kışın solunum sıkıntısı"
                    name="anotherTest29"
                    options={HOS}
                    value={values.anotherTest29}
                    error={errors?.anotherTest29}
                    onChange={handleChange}
                />

                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Tırnaklar</label>


                <FormInputSelectOne
                    label="Kemirilmiş"
                    name="anotherTest30"
                    options={HOS}
                    value={values.anotherTest30}
                    error={errors?.anotherTest30}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kırılgan"
                    name="anotherTest31"
                    options={HOS}
                    value={values.anotherTest31}
                    error={errors?.anotherTest31}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kıvrılmış"
                    name="anotherTest32"
                    options={HOS}
                    value={values.anotherTest32}
                    error={errors?.anotherTest32}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yıpranmış"
                    name="anotherTest33"
                    options={HOS}
                    value={values.anotherTest33}
                    error={errors?.anotherTest33}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mantar – el parmaklarında"
                    name="anotherTest34"
                    options={HOS}
                    value={values.anotherTest34}
                    error={errors?.anotherTest34}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mantar – ayak parmaklarında"
                    name="anotherTest35"
                    options={HOS}
                    value={values.anotherTest35}
                    error={errors?.anotherTest35}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çukurlaşma"
                    name="anotherTest36"
                    options={HOS}
                    value={values.anotherTest36}
                    error={errors?.anotherTest36}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Düzensiz tırnak etleri"
                    name="anotherTest37"
                    options={HOS}
                    value={values.anotherTest37}
                    error={errors?.anotherTest37}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çizgiler"
                    name="anotherTest38"
                    options={HOS}
                    value={values.anotherTest38}
                    error={errors?.anotherTest38}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yumuşak"
                    name="anotherTest39"
                    options={HOS}
                    value={values.anotherTest39}
                    error={errors?.anotherTest39}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="El tırnakları(Kalınlaşma)"
                    name="anotherTest40"
                    options={HOS}
                    value={values.anotherTest40}
                    error={errors?.anotherTest40}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ayak tırnakları(Kalınlaşma)"
                    name="anotherTest41"
                    options={HOS}
                    value={values.anotherTest41}
                    error={errors?.anotherTest41}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Beyaz noktalar/çizgiler"
                    name="anotherTest42"
                    options={HOS}
                    value={values.anotherTest42}
                    error={errors?.anotherTest42}
                    onChange={handleChange}
                />


                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Lenf Bezleri</label>


                <FormInputSelectOne
                    label="Büyümüş/boyunda"
                    name="anotherTest43"
                    options={HOS}
                    value={values.anotherTest43}
                    error={errors?.anotherTest43}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hassas/boyunda"
                    name="anotherTest44"
                    options={HOS}
                    value={values.anotherTest44}
                    error={errors?.anotherTest44}
                    onChange={handleChange}
                />


                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Deri, Kuruluk</label>


                <FormInputSelectOne
                    label="Gözler"
                    name="anotherTest45"
                    options={HOS}
                    value={values.anotherTest45}
                    error={errors?.anotherTest45}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ayak çatlakları var mı?"
                    name="anotherTest46"
                    options={HOS}
                    value={values.anotherTest46}
                    error={errors?.anotherTest46}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ayakta soyulma var mı?"
                    name="anotherTest47"
                    options={HOS}
                    value={values.anotherTest47}
                    error={errors?.anotherTest47}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Saçta kontrol dışı durum var mı?"
                    name="anotherTest48"
                    options={HOS}
                    value={values.anotherTest48}
                    error={errors?.anotherTest48}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ellerde çatlama var mı ?"
                    name="anotherTest49"
                    options={HOS}
                    value={values.anotherTest49}
                    error={errors?.anotherTest49}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ellerde soyulma var mı ?"
                    name="anotherTest50"
                    options={HOS}
                    value={values.anotherTest50}
                    error={errors?.anotherTest50}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ağız/boğaz"
                    name="anotherTest51"
                    options={HOS}
                    value={values.anotherTest51}
                    error={errors?.anotherTest51}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kafa derisinde kepek var mı?"
                    name="anotherTest52"
                    options={HOS}
                    value={values.anotherTest52}
                    error={errors?.anotherTest52}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Genel olarak cilt"
                    name="anotherTest53"
                    options={HOS}
                    value={values.anotherTest53}
                    error={errors?.anotherTest53}
                    onChange={handleChange}
                />


                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Deri Problemleri</label>

                <FormInputSelectOne
                    label="Sırtta sivilce"
                    name="anotherTest54"
                    options={HOS}
                    value={values.anotherTest54}
                    error={errors?.anotherTest54}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Göğüste sivilce"
                    name="anotherTest55"
                    options={HOS}
                    value={values.anotherTest55}
                    error={errors?.anotherTest55}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yüzde sivilce"
                    name="anotherTest56"
                    options={HOS}
                    value={values.anotherTest56}
                    error={errors?.anotherTest56}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Omuzlarda sivilce"
                    name="anotherTest57"
                    options={HOS}
                    value={values.anotherTest57}
                    error={errors?.anotherTest57}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Atlet ayağı"
                    name="anotherTest58"
                    options={HOS}
                    value={values.anotherTest58}
                    error={errors?.anotherTest58}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Üst kolların arkasında çarpma"
                    name="anotherTest59"
                    options={HOS}
                    value={values.anotherTest59}
                    error={errors?.anotherTest59}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Selülit"
                    name="anotherTest60"
                    options={HOS}
                    value={values.anotherTest60}
                    error={errors?.anotherTest60}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gözlerin altında koyu halka"
                    name="anotherTest61"
                    options={HOS}
                    value={values.anotherTest61}
                    error={errors?.anotherTest61}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kırmızı kulaklar"
                    name="anotherTest62"
                    options={HOS}
                    value={values.anotherTest62}
                    error={errors?.anotherTest62}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kolay morarma"
                    name="anotherTest63"
                    options={HOS}
                    value={values.anotherTest63}
                    error={errors?.anotherTest63}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Egzema"
                    name="anotherTest64"
                    options={HOS}
                    value={values.anotherTest64}
                    error={errors?.anotherTest64}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Herpes (uçuk) – genital"
                    name="anotherTest65"
                    options={HOS}
                    value={values.anotherTest65}
                    error={errors?.anotherTest65}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kurdeşen"
                    name="anotherTest66"
                    options={HOS}
                    value={values.anotherTest66}
                    error={errors?.anotherTest66}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kasık mantarı"
                    name="anotherTest67"
                    options={HOS}
                    value={values.anotherTest67}
                    error={errors?.anotherTest67}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mat deri"
                    name="anotherTest68"
                    options={HOS}
                    value={values.anotherTest68}
                    error={errors?.anotherTest68}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Benlerde değişiklik"
                    name="anotherTest69"
                    options={HOS}
                    value={values.anotherTest69}
                    error={errors?.anotherTest69}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yağlı cilt"
                    name="anotherTest70"
                    options={HOS}
                    value={values.anotherTest70}
                    error={errors?.anotherTest70}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Soluk cilt"
                    name="anotherTest71"
                    options={HOS}
                    value={values.anotherTest71}
                    error={errors?.anotherTest71}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Cilt lekeleri"
                    name="anotherTest72"
                    options={HOS}
                    value={values.anotherTest72}
                    error={errors?.anotherTest72}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Psoriazis (sedef)"
                    name="anotherTest73"
                    options={HOS}
                    value={values.anotherTest73}
                    error={errors?.anotherTest73}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Döküntü"
                    name="anotherTest74"
                    options={HOS}
                    value={values.anotherTest74}
                    error={errors?.anotherTest74}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kırmızı yüz"
                    name="anotherTest75"
                    options={HOS}
                    value={values.anotherTest75}
                    error={errors?.anotherTest75}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Böcek ısırıklıklarına duyarlılık"
                    name="anotherTest76"
                    options={HOS}
                    value={values.anotherTest76}
                    error={errors?.anotherTest76}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Zehirli sarmaşık vb duyarlılık"
                    name="anotherTest77"
                    options={HOS}
                    value={values.anotherTest77}
                    error={errors?.anotherTest77}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Zona"
                    name="anotherTest78"
                    options={HOS}
                    value={values.anotherTest78}
                    error={errors?.anotherTest78}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Deri kanseri"
                    name="anotherTest79"
                    options={HOS}
                    value={values.anotherTest79}
                    error={errors?.anotherTest79}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Deride koyulaşma"
                    name="anotherTest80"
                    options={HOS}
                    value={values.anotherTest80}
                    error={errors?.anotherTest80}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kötükokulu terleme"
                    name="anotherTest81"
                    options={HOS}
                    value={values.anotherTest81}
                    error={errors?.anotherTest81}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Nasır"
                    name="anotherTest82"
                    options={HOS}
                    value={values.anotherTest82}
                    error={errors?.anotherTest82}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Vitiligo"
                    name="anotherTest83"
                    options={HOS}
                    value={values.anotherTest83}
                    error={errors?.anotherTest83}
                    onChange={handleChange}
                />


                <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Deride Kaşıntı</label>

                <FormInputSelectOne
                    label="Anüste"
                    name="anotherTest84"
                    options={HOS}
                    value={values.anotherTest84}
                    error={errors?.anotherTest84}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kollarda"
                    name="anotherTest85"
                    options={HOS}
                    value={values.anotherTest85}
                    error={errors?.anotherTest85}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dış kulak yolunda"
                    name="anotherTest86"
                    options={HOS}
                    value={values.anotherTest86}
                    error={errors?.anotherTest86}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ayaklarda"
                    name="anotherTest87"
                    options={HOS}
                    value={values.anotherTest87}
                    error={errors?.anotherTest87}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ellerde"
                    name="anotherTest88"
                    options={HOS}
                    value={values.anotherTest88}
                    error={errors?.anotherTest88}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bacaklarda"
                    name="anotherTest89"
                    options={HOS}
                    value={values.anotherTest89}
                    error={errors?.anotherTest89}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Meme başında"
                    name="anotherTest90"
                    options={HOS}
                    value={values.anotherTest90}
                    error={errors?.anotherTest90}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Burunda"
                    name="anotherTest91"
                    options={HOS}
                    value={values.anotherTest91}
                    error={errors?.anotherTest91}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Genital bölgede"
                    name="anotherTest92"
                    options={HOS}
                    value={values.anotherTest92}
                    error={errors?.anotherTest92}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Damakta"
                    name="anotherTest93"
                    options={HOS}
                    value={values.anotherTest93}
                    error={errors?.anotherTest93}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kafa derisinde"
                    name="anotherTest94"
                    options={HOS}
                    value={values.anotherTest94}
                    error={errors?.anotherTest94}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Genel olarak deride"
                    name="anotherTest95"
                    options={HOS}
                    value={values.anotherTest95}
                    error={errors?.anotherTest95}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Boğazda"
                    name="anotherTest96"
                    options={HOS}
                    value={values.anotherTest96}
                    error={errors?.anotherTest96}
                    onChange={handleChange}
                />
                {
                    patientGender === "Erkek" && <>

                        <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Erkek Üreme sistemi</label>

                        <FormInputSelectOne
                            label="Penisten boşalma"
                            name="anotherTest97"
                            options={HOS}
                            value={values.anotherTest97}
                            error={errors?.anotherTest97}
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="Boşalma problemi"
                            name="anotherTest98"
                            options={HOS}
                            value={values.anotherTest98}
                            error={errors?.anotherTest98}
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="Genital ağrı"
                            name="anotherTest99"
                            options={HOS}
                            value={values.anotherTest99}
                            error={errors?.anotherTest99}
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="Sertleşme sorunu"
                            name="anotherTest100"
                            options={HOS}
                            value={values.anotherTest100}
                            error={errors?.anotherTest100}
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="Enfeksiyon"
                            name="anotherTest101"
                            options={HOS}
                            value={values.anotherTest101}
                            error={errors?.anotherTest101}
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="Testiste kitle"
                            name="anotherTest102"
                            options={HOS}
                            value={values.anotherTest102}
                            error={errors?.anotherTest102}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Düşük libido (sex isteğinde azalma)"
                            name="anotherTest103"
                            options={HOS}
                            value={values.anotherTest103}
                            error={errors?.anotherTest103}
                            onChange={handleChange}
                        />
                    </>

                }

                {
                    patientGender === "Kadın" && <>
                        <label className="font-nexa-bold text-[20px] text-left text-[#4E929D]">Kadın üreme</label>
                        <FormInputSelectOne
                            label="Memede kistler"
                            name="anotherTest104"
                            options={HOS}
                            value={values.anotherTest104}
                            error={errors?.anotherTest104}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Memede yumru"
                            name="anotherTest104"
                            options={HOS}
                            value={values.anotherTest104}
                            error={errors?.anotherTest104}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Memelerde hassasiyet"
                            name="anotherTest105"
                            options={HOS}
                            value={values.anotherTest105}
                            error={errors?.anotherTest105}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Yumurtalık kisti"
                            name="anotherTest106"
                            options={HOS}
                            value={values.anotherTest106}
                            error={errors?.anotherTest106}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Düşük Libido (cinsel istekte azalma)"
                            name="anotherTest107"
                            options={HOS}
                            value={values.anotherTest107}
                            error={errors?.anotherTest107}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Endometriyozis"
                            name="anotherTest108"
                            options={HOS}
                            value={values.anotherTest108}
                            error={errors?.anotherTest108}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Myom"
                            name="anotherTest109"
                            options={HOS}
                            value={values.anotherTest109}
                            error={errors?.anotherTest109}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Üreme problemi"
                            name="anotherTest110"
                            options={HOS}
                            value={values.anotherTest110}
                            error={errors?.anotherTest110}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Vajinal akıntı"
                            name="anotherTest111"
                            options={HOS}
                            value={values.anotherTest111}
                            error={errors?.anotherTest111}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Vajinal koku"
                            name="anotherTest112"
                            options={HOS}
                            value={values.anotherTest112}
                            error={errors?.anotherTest112}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Vajinal kaşıntı"
                            name="anotherTest113"
                            options={HOS}
                            value={values.anotherTest113}
                            error={errors?.anotherTest113}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Vajinal ağrı"
                            name="anotherTest114"
                            options={HOS}
                            value={values.anotherTest114}
                            error={errors?.anotherTest114}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi şişkinlik"
                            name="anotherTest115"
                            options={HOS}
                            value={values.anotherTest115}
                            error={errors?.anotherTest115}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi memelerde hassasiyet"
                            name="anotherTest116"
                            options={HOS}
                            value={values.anotherTest116}
                            error={errors?.anotherTest116}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi karbohidrat özlemi"
                            name="anotherTest117"
                            options={HOS}
                            value={values.anotherTest117}
                            error={errors?.anotherTest117}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi çikolata özlemi"
                            name="anotherTest118"
                            options={HOS}
                            value={values.anotherTest118}
                            error={errors?.anotherTest118}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi kabızlık"
                            name="anotherTest119"
                            options={HOS}
                            value={values.anotherTest119}
                            error={errors?.anotherTest119}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi uykusuzluk"
                            name="anotherTest120"
                            options={HOS}
                            value={values.anotherTest120}
                            error={errors?.anotherTest120}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi ishal"
                            name="anotherTest121"
                            options={HOS}
                            value={values.anotherTest121}
                            error={errors?.anotherTest121}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi yorgunluk/tükenmişlik"
                            name="anotherTest122"
                            options={HOS}
                            value={values.anotherTest122}
                            error={errors?.anotherTest122}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi daha çok uyumak"
                            name="anotherTest123"
                            options={HOS}
                            value={values.anotherTest123}
                            error={errors?.anotherTest123}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi sinirlilik"
                            name="anotherTest124"
                            options={HOS}
                            value={values.anotherTest124}
                            error={errors?.anotherTest124}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet dönemi kramplar"
                            name="anotherTest125"
                            options={HOS}
                            value={values.anotherTest125}
                            error={errors?.anotherTest125}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet dönemi çok kanamalı"
                            name="anotherTest126"
                            options={HOS}
                            value={values.anotherTest126}
                            error={errors?.anotherTest126}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet dönemi düzensiz"
                            name="anotherTest127"
                            options={HOS}
                            value={values.anotherTest127}
                            error={errors?.anotherTest127}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet dönemi adet görmeme"
                            name="anotherTest128"
                            options={HOS}
                            value={values.anotherTest128}
                            error={errors?.anotherTest128}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet dönemi kısa adet dönemi"
                            name="anotherTest129"
                            options={HOS}
                            value={values.anotherTest129}
                            error={errors?.anotherTest129}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Ara kanama/lekelenme"
                            name="anotherTest130"
                            options={HOS}
                            value={values.anotherTest130}
                            error={errors?.anotherTest130}
                            onChange={handleChange}
                        />
                    </>
                }
            </div>
            <HKITP1 values={values} handleChange={handleChange} />
            <GTP1 values={values} handleChange={handleChange} />
            <FormInputSelectOne
                options={EH}
                name="pillEffect1"
                onChange={handleChange}
                value={values.pillEffect1}
                label="İlaç veya takviyeler olağan dışı yan etki veya sorunlara neden oldu mu?" />
            {
                values.pillEffect1 === "evet" && <>
                    <FormInput type="text"
                        name="pillEffect1Desc"
                        onChange={handleChange}
                        value={values.pillEffect1Desc}
                        label="Evet ise açıklayınız:" />
                </>
            }
            <p className="font-nexa-bold">
                Bunlardan herhangi birini düzenli olarak veya uzun süre kullandınız mı:
            </p>
            <FormInputSelectOne
                options={EH}
                name="pillUse1"
                onChange={handleChange}
                value={values.pillUse1}
                label="NSAID (Brufen, apranax vb), Aspirin?" />
            <FormInputSelectOne
                options={EH}
                name="pillUse2"
                onChange={handleChange}
                value={values.pillUse2}
                label="Parol (parasetamol)?" />
            <FormInputSelectOne
                options={EH}
                name="pillUse3"
                onChange={handleChange}
                value={values.pillUse3}
                label="Basit bloke edici ilaç (Lansor, Aprozol, Helicol, Nexium vb.)?" />
            <p className="font-nexa-bold">
                Kaç kez antibiyotik kullandınız?
            </p>
            <AKN values={values} handleChange={handleChange} />
            <FormInputSelectOne
                options={EH}
                name="ABUse1"
                onChange={handleChange}
                value={values.ABUse1}
                label="Daha önce hiç uzun süreli antibiyotik kullandınız mı?" />
            {
                values.ABUse1 === "evet" && <>
                    <FormInput type="text"
                        name="ABUse1Desc"
                        onChange={handleChange}
                        value={values.ABUse1Desc}
                        label="Evet ise açıklayınız:" />
                </>
            }
            <p className="font-nexa-bold">
                Oral steroid, kullandıysanız hangi sıklıkla (kortizon, prednizon vb.)?
            </p>
            <STK values={values} handleChange={handleChange} />
        </>
    );
}
const AKN = ({ values, handleChange }: { values: any, handleChange: any }) => {
    return (<div className="w-full flex flex-col py-4 font-nexa-regular h-[300px] my-1">
        <table className="table-auto w-full  row-span-4 col-span-1">
            <thead className="table-header-group text-left">
                <tr className="table-row border-2">
                    <th> </th>
                    <th> Kullanım </th>
                    <th> Kullanma Nedeni </th>
                </tr>
            </thead>
            <tbody className="table-row-group">
                {
                    [
                        {
                            title: "Bebeklik/Çocukluk",
                            name: "akn1",
                        },
                        {
                            title: "Gençlik",
                            name: "akn2",
                        },
                        {
                            title: "Eriskinlik",
                            name: "akn3",
                        }
                    ].map((item) => {
                        return (<tr key={item.title} className="table-row border-2">
                            <td className="table-cell"> {item.title} </td>
                            <td className="table-cell">
                                <FormInputSelectOne
                                    options={[
                                        {
                                            label: "<5",
                                            value: "lt5"
                                        },
                                        {
                                            label: ">5",
                                            value: "gt5"
                                        }
                                    ]}
                                    label=" "
                                    name={item.name + "5"}
                                    onChange={handleChange}
                                    value={values[item.name + "5"]}
                                />
                            </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values[item.name + 'Why']} name={item.name + 'Why'} type="text" /> </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)
}

const STK = ({ values, handleChange }: { values: any, handleChange: any }) => {
    return (<div className="w-full flex flex-col py-4 font-nexa-regular h-[300px] my-1">
        <table className="table-auto w-full  row-span-4 col-span-1">
            <thead className="table-header-group text-left">
                <tr className="table-row border-2">
                    <th> </th>
                    <th> Kullanım </th>
                    <th> Kullanma Nedeni </th>
                </tr>
            </thead>
            <tbody className="table-row-group">
                {
                    [
                        {
                            title: "Bebeklik/Çocukluk",
                            name: "stk1",
                        },
                        {
                            title: "Gençlik",
                            name: "stk2",
                        },
                        {
                            title: "Eriskinlik",
                            name: "stk3",
                        }
                    ].map((item) => {
                        return (<tr key={item.title} className="table-row border-2">
                            <td className="table-cell"> {item.title} </td>
                            <td className="table-cell">
                                <FormInputSelectOne
                                    options={[
                                        {
                                            label: "<5",
                                            value: "lt5"
                                        },
                                        {
                                            label: ">5",
                                            value: "gt5"
                                        }
                                    ]}
                                    label=" "
                                    name={item.name + "5"}
                                    onChange={handleChange}
                                    value={values[item.name + "5"]}
                                />
                            </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values[item.name + 'Why']} name={item.name + 'Why'} type="text" /> </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)
}

const HKITP1 = ({ values, handleChange }: { values: any, handleChange: any }) => {
    return (<div className="w-full flex flex-col py-4 font-nexa-regular h-[400px] my-1">
        <p className="font-nexa-bold text-[20px] my-4 text-[#4E929D]">Halen kullandığın ilaçlar (reçeteli ve reçetesiz ilaçlar dahil)</p>
        <table className="table-auto w-full  row-span-4 col-span-1">
            <thead className="table-header-group text-left">
                <tr className="table-row border-2 bg-[#82b5bd] h-[40px]">
                    <th>İlaç</th>
                    <th>Doz</th>
                    <th>Başlama zamanı(ay/yıl) </th>
                    <th>Kullanma nedeni </th>
                </tr>
            </thead>
            <tbody className="table-row-group">
                {
                    [
                        { name: "hkitp1", },
                        { name: "hkitp2", },
                        { name: "hkitp3" },
                        { name: "hkitp4" },
                        { name: "hkitp5" },
                        { name: "hkitp6" },
                    ].map((item) => {
                        return (<tr key={item.name} className="table-row border-2">
                            <td className="table-cell">  <FormInput onChange={handleChange} value={values?.[item.name + 'Pill']} name={item.name + 'Pill'} type="text" /> </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values?.[item.name + 'Dose']} name={item.name + 'Dose'} type="text" /> </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values?.[item.name + 'Time']} name={item.name + 'Time'} type="text" /> </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values?.[item.name + 'Why']} name={item.name + 'Why'} type="text" /> </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)
}

const GTP1 = ({ values, handleChange }: { values: any, handleChange: any }) => {
    return (<div className="w-full flex flex-col py-4 font-nexa-regular h-[400px] my-1">
        <p className="font-nexa-bold text-[20px] my-4 text-[#4E929D]">Halen kullandığın ilaçlar (reçeteli ve reçetesiz ilaçlar dahil)</p>
        <table className="table-auto w-full  row-span-4 col-span-1">
            <thead className="table-header-group text-left">
                <tr className="table-row border-2 bg-[#82b5bd] h-[40px]">
                    <th>İlaç</th>
                    <th>Doz</th>
                    <th>Başlama zamanı(ay/yıl) </th>
                    <th>Kullanma nedeni </th>
                </tr>
            </thead>
            <tbody className="table-row-group">
                {
                    [
                        { name: "gtp1" },
                        { name: "gtp2" },
                        { name: "gtp3" },
                        { name: "gtp4" },
                        { name: "gtp5" },
                        { name: "gtp6" },
                    ].map((item) => {
                        return (<tr key={item.name} className="table-row border-2">
                            <td className="table-cell">  <FormInput onChange={handleChange} value={values?.[item.name + 'Pill']} name={item.name + 'Pill'} type="text" /> </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values?.[item.name + 'Dose']} name={item.name + 'Dose'} type="text" /> </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values?.[item.name + 'Time']} name={item.name + 'Time'} type="text" /> </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values?.[item.name + 'Why']} name={item.name + 'Why'} type="text" /> </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)
}
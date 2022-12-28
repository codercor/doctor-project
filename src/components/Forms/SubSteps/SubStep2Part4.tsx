import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import FormInput, { FormInputTextArea } from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";
import * as Yup from "yup";
import Combined4Input from "../FormInput/Combined4Input";
import Combined2Input from "../FormInput/Combined2Input";
import FormInputSelectMulti from "../FormInput/FormInputSelectMulti";

const EH = [
    { value: "evet", label: "Evet" },
    { value: "hayır", label: "Hayır" },
]

/*
Vejetaryan Vegan Alerji Eliminasyon
Kan grubu Düşük sodyum Mandıra yok Buğday yok Glutensiz
Düşük yağlı Düşük
karbonhidratlı Yüksek Proteinli 
diğer

*/
let diet = [
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
/*      -Monosodyum glutamat (MSG)
                -Yapay tatlandırıcı
                -Soğan/sarımsak
                -peynir
                -Narenciye
                -Çikolata
                -Alkol
                -kımızı şarap
                -sülfit içeren besinler(şarap,kuru meyve,salata)
                -koruyucular
                -gıda boyası
                -diğer
                (foodsReaction)*/
let foodsReaction = [
    { value: "monosodyum glutamat (MSG)", label: "Monosodyum glutamat (MSG)" },
    { value: "yapay tatlandırıcı", label: "Yapay tatlandırıcı" },
    { value: "soğan/sarımsak", label: "Soğan/sarımsak" },
    { value: "peynir", label: "Peynir" },
    { value: "narenciye", label: "Narenciye" },
    { value: "çikolata", label: "Çikolata" },
    { value: "alkol", label: "Alkol" },
    { value: "kımızı şarap", label: "Kımızı şarap" },
    { value: "sülfit içeren besinler(şarap,kuru meyve,salata)", label: "Sülfit içeren besinler(şarap,kuru meyve,salata)" },
    { value: "koruyucular", label: "Koruyucular" },
    { value: "gıda boyası", label: "Gıda boyası" },
    { value: "diğer", label: "Diğer" },
]
let LifestyleAboutEating = [
    { value: "hızlı yerim", label: "Hızlı yerim" },
    { value: "çok yerim", label: "Çok yerim" },
    { value: "gece geç saatlerde yerim", label: "Gece geç saatlerde yerim" },
    { value: "sağlıklı besinleri sevmem", label: "Sağlıklı besinleri sevmem" },
    { value: "zaman sorunum var", label: "Zaman sorunum var" },
    { value: "sık seyahat ederim", label: "Sık seyahat ederim" },
    { value: "öğünlerin %50' den fazlasını dışarda yerim", label: "Öğünlerin %50' den fazlasını dışarda yerim" },
    { value: "sağlıklı gıda her zaman hazır değil", label: "Sağlıklı gıda her zaman hazır değil" },
    { value: "atıştırma seçenekleri kötü", label: "Atıştırma seçenekleri kötü" },
    { value: "aile üyeleri sağlıklı yiyeceklerden hoşlanmaz", label: "Aile üyeleri sağlıklı yiyeceklerden hoşlanmaz" },
    { value: "aile üyesinin veya yakın arkadaşımın özel diyet ihtiyacı var", label: "Aile üyesinin veya yakın arkadaşımın özel diyet ihtiyacı var" },
    { value: "yemeyi severim", label: "Yemeyi severim" },
    { value: "yemek zorundayım", label: "Yemek zorundayım" },
    { value: "gıda ile olumsuz ilişkim var", label: "Gıda ile olumsuz ilişkim var" },
    { value: "yeme sorunları ile mücadele ediyorum", label: "Yeme sorunları ile mücadele ediyorum" },
    { value: "duygusal yiyici (üzgünken, yalnızken, sıkıldığında vb)", label: "Duygusal yiyici (üzgünken, yalnızken, sıkıldığında vb)" },
    { value: "stres altında çok yerim", label: "Stres altında çok yerim" },
    { value: "stres altında az yerim", label: "Stres altında az yerim" },
    { value: "yemek pişirmeyi sevmem", label: "Yemek pişirmeyi sevmem" },
    { value: "beslenme tavsiyeleri konusunda kafam karışık", label: "Beslenme tavsiyeleri konusunda kafam karışık" },
];

export default function SubStep2Part4({
    errors,
    values,
    handleChange,
    setFieldValue,
}: {
    errors: any;
    values: any;
    handleChange: any;
    setFieldValue: any;
}) {



    return (
        <>
            <div className="min-h-[60px] w-full  pl-[20px] flex-col flex bg-[#E9EDD9]  text-[#5B623D] items-start justify-center">
                <h2 className="font-nexa-regular text-[18px]">Yaşam şeklinin değerlendirilmesi</h2>
            </div>
            <h3 className="font-nexa-regular text-[16px]">Uyku</h3>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Genelde geceleri ortalama kaç saat uyuyorsunuz?"
                    name="subStep2.sleepHours"
                    type="number"
                    error={errors.subStep2?.sleepHours}
                    value={values.subStep2?.sleepHours}
                    onChange={handleChange}



                />
                <FormInputSelectOne
                    label="Uykuya dalmakta zorluk çekiyor musunuz?"
                    options={EH}
                    name="subStep2.sleepDifficulty"
                    value={values.subStep2?.sleepDifficulty}
                    error={errors.subStep2?.sleepDifficulty}
                />
                <FormInputSelectOne
                    label="Kesintisiz mi?"
                    options={EH}
                    name="subStep2.sleepQuality"
                    value={values.subStep2?.sleepQuality}
                    error={errors.subStep2?.sleepQuality}
                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Uykusuzluk sorununuz var mı?"
                    options={EH}
                    name="subStep2.sleepProblem"
                    value={values.subStep2?.sleepProblem}
                    error={errors.subStep2?.sleepProblem}

                />
                <FormInputSelectOne
                    label="Horlar mısınız?"
                    options={EH}
                    name="subStep2.snore"
                    value={values.subStep2?.snore}
                    error={errors.subStep2?.snore}

                />
                <FormInputSelectOne
                    label="Dinlenmiş olarak mı uyanırsınız?"
                    options={EH}
                    name="subStep2.wakeUp"
                    value={values.subStep2?.wakeUp}
                    error={errors.subStep2?.wakeUp}

                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Uyku ilacı kullanıyor musunuz?"
                    options={EH}
                    name="subStep2.sleepPills"
                    value={values.subStep2?.sleepPills}
                    error={errors.subStep2?.sleepPills}

                />
                {
                    //son soru evet ise input açılacak
                }
                {
                    values.subStep2?.sleepPills === "evet" && (
                        <FormInput
                            label="Hangi ilaçları kullanıyorsunuz?"
                            name="subStep2.sleepPillsDetail"
                            type="text"
                            error={errors.subStep2?.sleepPillsDetail}
                            value={values.subStep2?.sleepPillsDetail}
                            onChange={handleChange}
                        />
                    )
                }

            </div>
            <h3 className="font-nexa-regular text-[16px]">Egzersiz</h3>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputTextArea
                    label="Şuanki egzersiz düzeniniz hakkında bilgi veriniz"
                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <div className="flex flex-col">
                    <FormInputSelectOne
                        label="Egzersiz yapmaya istekli misiniz?"
                        options={[...EH, { value: "biraz", label: "Biraz" }]}
                        name="subStep2.sleeping"
                    />
                    {
                        //son soru evet ise input açılacak
                        values.subStep2.sleeping === "evet" && (
                            <FormInput
                                label="Evet ise açıklama"
                            />)
                    }
                </div>
                <div className="flex flex-col">
                    <FormInputSelectOne
                        label="Egzersiz sonrası aşırı yorgunluk ve ağrı hisseder misiniz?"
                        options={[...EH]}
                        name="subStep2.sleeping"
                        value={values.subStep2.sleeping}
                    />
                    {
                        //son soru evet ise input açılacak
                        values.subStep2.sleeping === "evet" && (
                            <FormInput
                                label="Evet ise açıklama"
                            />)
                    }
                </div>
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectMulti
                    label="Şu anda uyguladığınız özel bir diyet veya beslenme programı var mı? (Uygun olanı/olanları işaretleyiniz"
                    options={diet}
                    name="subStep2.diet"
                    value={values.subStep2?.diet}
                    error={errors?.subStep2?.diet}
                />
                {
                    values.subStep2.diet?.includes("diğer") && (
                        <FormInput
                            label="Diğer ise açıklayınız"

                        />)
                }
            </div>


            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Belli bir besine hassasiyetiniz var mı?"
                    options={EH}
                    name="subStep2.foodSensitivity"
                    value={values.subStep2?.foodSensitivity}
                    error={errors?.subStep2?.foodSensitivity}
                />
                {
                    values.subStep2.foodSensitivity === "evet" && (
                        <FormInput
                            label="Evet ise açıklama"
                            name="subStep2.foodSensitivityDetail"
                            type="text"
                            error={errors?.subStep2?.foodSensitivityDetail}
                            value={values.subStep2?.foodSensitivityDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Yemediğiniz besinler var mı?"
                    options={EH}
                    name="subStep2.foodAvoid"
                    value={values.subStep2?.foodAvoid}
                    error={errors?.subStep2?.foodAvoid}
                />
                {
                    values.subStep2.foodAvoid === "evet" && (
                        <FormInput
                            label="Evet ise açıklama"
                            name="subStep2.foodAvoidDetail"
                            type="text"
                            error={errors?.subStep2?.foodAvoidDetail}
                            value={values.subStep2?.foodAvoidDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectMulti
                    label="Aşağıdakilere olumsuz tepkiniz oldu mu : (Uygun olan tüm seçenecekleri işaretleyiniz)"
                    options={foodsReaction}
                    name="subStep2.foodsReaction"
                    value={values.subStep2?.foodsReaction}
                    error={errors?.subStep2?.foodsReaction}
                />
                {
                    values.subStep2.foodsReaction?.includes("diğer") && (
                        <FormInput
                            label="Diğer ise açıklayınız"
                            name="subStep2.foodsReactionDetail"
                            type="text"
                            error={errors?.subStep2?.foodsReactionDetail}
                            value={values.subStep2?.foodsReactionDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Canınızın çektiği/sık yediğiniz yiyecekler var mı?"
                    options={EH}
                    name="subStep2.foodsLike"
                    value={values.subStep2?.foodsLike}
                    error={errors?.subStep2?.foodsLike}
                />
                {
                    values.subStep2.foodsLike === "evet" && (
                        <FormInput
                            label="Evet ise açıklama"
                            name="subStep2.foodsLikeDetail"
                            type="text"
                            error={errors?.subStep2?.foodsLikeDetail}
                            value={values.subStep2?.foodsLikeDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Günde 3 öğün mü yersiniz?"
                    options={EH}
                    name="subStep2.threeMeal"
                    value={values.subStep2?.threeMeal}
                    error={errors?.subStep2?.threeMeal}
                />
                {
                    values.subStep2.threeMeal === "hayır" && (
                        <FormInput
                            label="Hayır ise açıklama"
                            name="subStep2.threeMealDetail"
                            type="text"
                            error={errors?.subStep2?.threeMealDetail}
                            value={values.subStep2?.threeMealDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Öğün atlamak sizi etkiliyor mu?"
                    options={EH}
                    name="subStep2.skipMeal"
                    value={values.subStep2?.skipMeal}
                    error={errors?.subStep2?.skipMeal}
                />
                {
                    values.subStep2.skipMeal === "evet" && (
                        <FormInput
                            label="Evet ise açıklama"
                            name="subStep2.skipMealDetail"
                            type="text"
                            error={errors?.subStep2?.skipMealDetail}
                            value={values.subStep2?.skipMealDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Haftada kaç gün dışarıda yemek yersiniz?"
                    name="subStep2.outsideMeal"
                    type="number"
                    error={errors?.subStep2?.outsideMeal}
                    value={values.subStep2?.outsideMeal}
                    onChange={handleChange}
                />
            </div>

            {

            }
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectMulti
                    label="Mevcut yaşam şekliniz ve yeme alışkanlıklarınız ile ilgili olanları işaretleyiniz:"
                    options={LifestyleAboutEating}
                    name="subStep2.lifestyleAboutEating"
                    value={values.subStep2?.lifestyleAboutEating}
                    error={errors?.subStep2?.lifestyleAboutEating}
                />
            </div>

        </>

    );
}

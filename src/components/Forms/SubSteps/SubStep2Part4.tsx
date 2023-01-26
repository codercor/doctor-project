import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import FormInput, { FormInputTextArea } from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";
import FormInputSelectMulti from "../FormInput/FormInputSelectMulti";

const EH = [
    { value: "evet", label: "Evet" },
    { value: "hayır", label: "Hayır" },
]

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
let foodsReaction = [
    { value: "monosodyum glutamat (MSG)", label: "Monosodyum glutamat (MSG)" },
    { value: "yapay tatlandırıcı", label: "Yapay tatlandırıcı" },
    { value: "soğan/sarımsak", label: "Soğan/sarımsak" },
    { value: "peynir", label: "Peynir" },
    { value: "narenciye", label: "Narenciye" },
    { value: "çikolata", label: "Çikolata" },
    { value: "alkol", label: "Alkol" },
    { value: "kımızı şarap", label: "Kımızı şarap" },
    {
        value: "sülfit içeren besinler(şarap,kuru meyve,salata)",
        label: "Sülfit içeren besinler(şarap,kuru meyve,salata)"
    },
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
    {
        value: "aile üyesinin veya yakın arkadaşımın özel diyet ihtiyacı var",
        label: "Aile üyesinin veya yakın arkadaşımın özel diyet ihtiyacı var"
    },
    { value: "yemeyi severim", label: "Yemeyi severim" },
    { value: "yemek zorundayım", label: "Yemek zorundayım" },
    { value: "gıda ile olumsuz ilişkim var", label: "Gıda ile olumsuz ilişkim var" },
    { value: "yeme sorunları ile mücadele ediyorum", label: "Yeme sorunları ile mücadele ediyorum" },
    {
        value: "duygusal yiyici (üzgünken, yalnızken, sıkıldığında vb)",
        label: "Duygusal yiyici (üzgünken, yalnızken, sıkıldığında vb)"
    },
    { value: "stres altında çok yerim", label: "Stres altında çok yerim" },
    { value: "stres altında az yerim", label: "Stres altında az yerim" },
    { value: "yemek pişirmeyi sevmem", label: "Yemek pişirmeyi sevmem" },
    { value: "beslenme tavsiyeleri konusunda kafam karışık", label: "Beslenme tavsiyeleri konusunda kafam karışık" },
];

export default function SubStep2Part4({
    errors,
    values,
    handleChange,
}
    :
    {
        errors: any;
        values: any;
        handleChange: any;
        setFieldValue: any;
    }) {


    return (
        <>
            <div
                className="min-h-[60px] w-full  pl-[20px] flex-col flex bg-[#E9EDD9]  text-[#5B623D] items-start justify-center">
                <h2 className="font-nexa-regular text-[18px]">Yaşam şeklinin değerlendirilmesi</h2>
            </div>
            <h3 className="font-nexa-regular text-[16px]">Uyku</h3>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Genelde geceleri ortalama kaç saat uyuyorsunuz?"
                    name="sleepHours"
                    type="number"
                    error={errors.sleepHours}
                    value={values.sleepHours}
                    onChange={handleChange}


                />
                <FormInputSelectOne
                    label="Uykuya dalmakta zorluk çekiyor musunuz?"
                    options={EH}
                    name="sleepDifficulty"
                    value={values.sleepDifficulty}
                    error={errors.sleepDifficulty}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kesintisiz mi?"
                    options={EH}
                    name="sleepQuality"
                    value={values.sleepQuality}
                    error={errors.sleepQuality}
                    onChange={handleChange}
                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Uykusuzluk sorununuz var mı?"
                    options={EH}
                    name="sleepProblem"
                    value={values.sleepProblem}
                    error={errors.sleepProblem}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Horlar mısınız?"
                    options={EH}
                    name="snore"
                    value={values.snore}
                    error={errors.snore}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dinlenmiş olarak mı uyanırsınız?"
                    options={EH}
                    name="wakeUp"
                    value={values.wakeUp}
                    error={errors?.wakeUp}
                    onChange={handleChange}

                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Uyku ilacı kullanıyor musunuz?"
                    options={EH}
                    name="sleepPills"
                    value={values.sleepPills}
                    error={errors?.sleepPills}
                    onChange={handleChange}
                />
                {
                    //son soru evet ise input açılacak
                }
                {
                    values.sleepPills === "evet" && (
                        <FormInput
                            label="Hangi ilaçları kullanıyorsunuz?"
                            name="sleepPillsDetail"
                            type="text"
                            error={errors?.sleepPillsDetail}
                            value={values.sleepPillsDetail}
                            onChange={handleChange}
                        />
                    )
                }

            </div>
            <h3 className="font-nexa-regular text-[16px]">Egzersiz</h3>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputTextArea
                    label="Şuanki egzersiz düzeniniz hakkında bilgi veriniz"
                    name="exercise"
                    error={errors?.exercise}
                    value={values.exercise}
                    onChange={handleChange}
                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <div className="flex flex-col">
                    <FormInputSelectOne
                        label="Egzersiz yapmaya istekli misiniz?"
                        options={[...EH, { value: "biraz", label: "Biraz" }]}
                        name="exerciseWant"
                        onChange={handleChange}
                        value={values.exerciseWant}
                        error={errors?.exerciseWant}
                    />
                    {
                        //son soru evet ise input açılacak
                        values.exerciseWant === "evet" && (
                            <FormInput
                                label="Evet ise açıklama"
                                name="exerciseWantDesc"
                                value={values.exerciseWantDesc}
                                onChange={handleChange}
                                error={errors?.exerciseWantDesc}
                            />)
                    }
                </div>
                <div className="flex flex-col">
                    <FormInputSelectOne
                        label="Egzersiz sonrası aşırı yorgunluk ve ağrı hisseder misiniz?"
                        options={[...EH]}
                        name="exerciseLater"
                        value={values.exerciseLater}
                        error={errors?.exerciseLater}
                        onChange={handleChange}
                    />
                    {
                        //son soru evet ise input açılacak
                        values.sleeping === "evet" && (
                            <FormInput
                                label="Evet ise açıklama"
                                name="exerciseLaterDesc"
                                value={values.exerciseLaterDesc}
                                onChange={handleChange}
                                error={errors?.exerciseLaterDesc}
                            />)
                    }
                </div>
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectMulti
                    label="Şu anda uyguladığınız özel bir diyet veya beslenme programı var mı? (Uygun olanı/olanları işaretleyiniz"
                    options={diet}
                    name="diet"
                    value={values.diet}
                    error={errors?.diet}
                />
                {
                    values.diet?.includes("diğer") && (
                        <FormInput
                            label="Diğer ise açıklayınız"
                            name="dietDesc"
                            type="text"
                            error={errors?.dietDesc}
                            value={values.dietDesc}
                            onChange={handleChange}
                        />)
                }
            </div>


            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Belli bir besine hassasiyetiniz var mı?"
                    options={EH}
                    name="foodSensitivity"
                    value={values.foodSensitivity}
                    error={errors?.foodSensitivity}
                    onChange={handleChange}
                />
                {
                    values.foodSensitivity === "evet" && (
                        <FormInput
                            label="Evet ise açıklama"
                            name="foodSensitivityDetail"
                            type="text"
                            error={errors?.foodSensitivityDetail}
                            value={values.foodSensitivityDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Yemediğiniz besinler var mı?"
                    options={EH}
                    name="foodAvoid"
                    value={values.foodAvoid}
                    error={errors?.foodAvoid}
                    onChange={handleChange}
                />
                {
                    values.foodAvoid === "evet" && (
                        <FormInput
                            label="Evet ise açıklama"
                            name="foodAvoidDetail"
                            type="text"
                            error={errors?.foodAvoidDetail}
                            value={values.foodAvoidDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectMulti
                    label="Aşağıdakilere olumsuz tepkiniz oldu mu : (Uygun olan tüm seçenecekleri işaretleyiniz)"
                    options={foodsReaction}
                    name="foodsReaction"
                    value={values.foodsReaction}
                    error={errors?.foodsReaction}
                />
                {
                    values.foodsReaction?.includes("diğer") && (
                        <FormInput
                            label="Diğer ise açıklayınız"
                            name="foodsReactionDetail"
                            type="text"
                            error={errors?.foodsReactionDetail}
                            value={values.foodsReactionDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Canınızın çektiği/sık yediğiniz yiyecekler var mı?"
                    options={EH}
                    name="foodsLike"
                    value={values.foodsLike}
                    error={errors?.foodsLike}
                />
                {
                    values.foodsLike === "evet" && (
                        <FormInput
                            label="Evet ise açıklama"
                            name="foodsLikeDetail"
                            type="text"
                            error={errors?.foodsLikeDetail}
                            value={values.foodsLikeDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Günde 3 öğün mü yersiniz?"
                    options={EH}
                    name="threeMeal"
                    value={values.threeMeal}
                    error={errors?.threeMeal}
                />
                {
                    values.threeMeal === "hayır" && (
                        <FormInput
                            label="Hayır ise açıklama"
                            name="threeMealDetail"
                            type="text"
                            error={errors?.threeMealDetail}
                            value={values.threeMealDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Öğün atlamak sizi etkiliyor mu?"
                    options={EH}
                    name="skipMeal"
                    value={values.skipMeal}
                    error={errors?.skipMeal}
                />
                {
                    values.skipMeal === "evet" && (
                        <FormInput
                            label="Evet ise açıklama"
                            name="skipMealDetail"
                            type="text"
                            error={errors?.skipMealDetail}
                            value={values.skipMealDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Haftada kaç gün dışarıda yemek yersiniz?"
                    name="outsideMeal"
                    type="number"
                    error={errors?.outsideMeal}
                    value={values.outsideMeal}
                    onChange={handleChange}
                />
            </div>

            {

            }
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectMulti
                    label="Mevcut yaşam şekliniz ve yeme alışkanlıklarınız ile ilgili olanları işaretleyiniz:"
                    options={LifestyleAboutEating}
                    name="lifestyleAboutEating"
                    value={values.lifestyleAboutEating}
                    error={errors?.lifestyleAboutEating}
                />
            </div>

        </>

    );
}

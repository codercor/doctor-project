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
            <h3 className="font-nexa-regular text-[22px] text-[#4E929D]">Uyku</h3>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
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
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
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
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Uyku ilacı kullanıyor musunuz?"
                    options={EH}
                    name="sleepPills"
                    value={values.sleepPills}
                    error={errors?.sleepPills}
                    onChange={handleChange}
                />
                {
                    values.sleepPills === "evet" && (
                        <FormInput
                            label="Açıklayınız"
                            name="sleepPillsDetail"
                            type="text"
                            error={errors?.sleepPillsDetail}
                            value={values.sleepPillsDetail}
                            onChange={handleChange}
                        />
                    )
                }

            </div>
            <h3 className="font-nexa-regular text-[22px] text-[#4E929D]">Egzersiz</h3>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <EGZ values={values} handleChange={handleChange} />
            </div>

            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <div className="flex flex-col">
                    <FormInputSelectOne
                        label="Egzersiz yapmaya istekli misiniz?"
                        options={[...EH, { value: "biraz", label: "Biraz" }]}
                        name="exerciseWant"
                        onChange={handleChange}
                        value={values.exerciseWant}
                        error={errors?.exerciseWant}
                    />

                </div>
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <div className="flex flex-col">
                    <FormInputSelectOne
                        label="Egzersiz yapmanızı engelleyen sorun var mı?"
                        options={EH}
                        name="exerciseDisability"
                        onChange={handleChange}
                        value={values.exerciseDisability}
                        error={errors?.exerciseDisability}
                    />
                    {
                        //son soru evet ise input açılacak
                        values.exerciseDisability === "evet" && (
                            <FormInput
                                label="Açıklayınız"
                                name="exerciseDisabilityDesc"
                                value={values.exerciseDisabilityDesc}
                                onChange={handleChange}
                                error={errors?.exerciseDisabilityDesc}
                            />)
                    }
                </div>
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
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
                        values.exerciseLater === "evet" && (
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

            <h3 className="font-nexa-regular text-[22px] text-[#4E929D]">Beslenme</h3>
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectMulti
                    label="Şu anda uyguladığınız özel bir diyet veya beslenme programı var mı? (Uygun olanı/olanları işaretleyiniz)"
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
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
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
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
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
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
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
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Canınızın çektiği/sık yediğiniz yiyecekler var mı?"
                    options={EH}
                    name="foodsLike"
                    value={values.foodsLike}
                    error={errors?.foodsLike}
                    onChange={handleChange}
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
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Günde 3 öğün mü yersiniz?"
                    options={EH}
                    name="threeMeal"
                    value={values.threeMeal}
                    error={errors?.threeMeal}
                    onChange={handleChange}
                />
                {
                    values.threeMeal === "hayır" && (
                        <FormInput
                            label="Kaç ?"
                            name="threeMealDetail"
                            type="text"
                            error={errors?.threeMealDetail}
                            value={values.threeMealDetail}
                            onChange={handleChange}
                        />)
                }
            </div>
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Öğün atlamak sizi etkiliyor mu?"
                    options={EH}
                    name="skipMeal"
                    value={values.skipMeal}
                    error={errors?.skipMeal}
                    onChange={handleChange}
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
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Haftada kaç gün dışarıda yemek yersiniz?"
                    options={[
                        { value: "0-1", label: "0-1" },
                        { value: "1-3", label: "1-3" },
                        { value: "3-5", label: "3-5" },
                        { value: ">5ogunhaftada", label: ">5 öğün, haftada" },
                    ]}
                    name="outsideMeal"
                    value={values.outsideMeal}
                    error={errors?.outsideMeal}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
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


const EGZ = ({ values, handleChange }: { values: any, handleChange: any }) => {
    return (<div className="w-full flex flex-col py-4 font-nexa-regular h-[400px] my-1">
        <p className="font-nexa-bold text-[20px] my-4 text-[#4E929D]">Şuanki Egzersiz Programınız:</p>
        <table className="table-auto w-full  row-span-4 col-span-1">
            <thead className="table-header-group text-left">
                <tr className="table-row border-2 bg-[#82b5bd] h-[40px]">
                    <th>Aktivite</th>
                    <th>Egzersiz Tipi</th>
                    <th>Haftada Kaç Kez </th>
                    <th>Süre/Sıklık (Dakika) </th>
                </tr>
            </thead>
            <tbody className="table-row-group">
                {
                    [
                        { title: 'Kardiyo/Aerobik', name: "egz1" },
                        { title: 'Kuvvet/Dayanıklılık', name: "egz2" },
                        { title: 'Esneme/Germe', name: "egz3" },
                        { title: 'Denge', name: "egz4" },
                        { title: 'Spor/Hobi (örnek: golf)', name: "egz5" },
                        { title: 'Diğer:', name: "egz6" },
                    ].map((item) => {
                        return (<tr key={item.name} className="table-row border-2">
                            <td className="table-cell"> {item.title} </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values?.[item.name + 'E']} name={item.name + 'E'} type="text" /> </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values?.[item.name + 'H']} name={item.name + 'H'} type="text" /> </td>
                            <td className="table-cell"> <FormInput onChange={handleChange} value={values?.[item.name + 'S']} name={item.name + 'S'} type="text" /> </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)
}
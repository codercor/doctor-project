import { Add } from "@mui/icons-material";
import React from "react";
import FormInput, { FormInputTextArea } from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";
import FormInputSelectMulti from "../FormInput/FormInputSelectMulti";
import useUser from "src/hooks/user.hook";
import { Field } from "formik";

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

export default function SubStep2Part8({
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
            <label>Çevresel/Detoksifikasyon Öyküsü</label>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectMulti
                    label="Bunlardan hangileri sizi önemli derecede etkiler?"
                    options={[
                        { value: "sigara dumanı", label: "Sigara dumanı" },
                        { value: "Parfüm/kolonya", label: "Parfüm/kolonya" },
                        { value: "egzoz dumanı", label: "Egzoz dumanı" },
                        { value: "diğer", label: "Diğer" },

                    ]}
                    name="affectsYouSignificantly"
                    value={values.affectsYouSignificantly}
                    error={errors?.affectsYouSignificantly}

                />
                {
                    values.affectsYouSignificantly?.includes("diğer") &&
                    <FormInput
                        label={`Açıklayınız ?`}
                        value={values.affectsYouSignificantlyDesc}
                        error={errors.affectsYouSignificantlyDesc}
                        name="affectsYouSignificantlyDesc"
                        type="text"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectMulti
                    label="İşyerinde veya evde sürekli maruz kaldıklarınızı işaretleyiniz: (Birden fazla işaretleyebilirsiniz)"
                    options={[
                        { value: "küf", label: "Küf" },
                        { value: "su sızıntısı", label: "Su sızıntısı" },
                        { value: "tadilat", label: "Tadilat" },
                        { value: "elektromanyetik radyasyon", label: "Elektromanyetik radyasyon" },
                        { value: "nemli ortamlar", label: "Nemli ortamlar" },
                        { value: "halı veya kilim", label: "Halı veya kilim" },
                        { value: "eski boya", label: "Eski boya" },
                        { value: "havasız ortam ", label: "Havasız ortam" },
                        { value: "sigara dumanı", label: "Sigara dumanı" },
                        { value: "Pestisit", label: "Pestisit" },
                        { value: "herbisit", label: "Herbisit" },
                        { value: "yoğun kimyasal", label: "Yoğun kimyasal (çözücü, yapıştırıcı, gaz, asit vb)" },
                        { value: "temizlik kimyasalları", label: "Temizlik kimyasalları" },
                        { value: "ağır metaller", label: "Ağır metaller (kurşun, civa vb.)" },
                        { value: "boya", label: "Boya" },
                        { value: "uçak yolculuğu", label: "Uçak yolculuğu" },
                        { value: "diğer", label: "Diğer" },
                    ]}
                    name="exposedToAtWorkOrAtHome"
                    value={values.exposedToAtWorkOrAtHome}
                    error={errors?.exposedToAtWorkOrAtHome}
                />{
                    values.exposedToAtWorkOrAtHome?.includes("diğer") &&
                    <FormInput
                        label={`Açıklayınız ?`}
                        value={values.exposedToAtWorkOrAtHomeDesc}
                        error={errors.exposedToAtWorkOrAtHomeDesc}
                        name="exposedToAtWorkOrAtHomeDesc"
                        type="text"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Herhangi bir zararlı kimyasala önemli ölçüde maruz kaldınız mı?"
                    name="significantExposureToHarmfulChemical"
                    options={EH}
                    value={values.significantExposureToHarmfulChemical}
                    error={errors?.significantExposureToHarmfulChemical}
                    onChange={handleChange}
                />{
                    values.significantExposureToHarmfulChemical === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.significantExposureToHarmfulChemicalDesc}
                        error={errors.significantExposureToHarmfulChemicalDesc}
                        name="significantExposureToHarmfulChemicalDesc"
                        type="text"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Evcil hayvanınız veya çiftlik hayvanınız var mı ?"
                    name="petOrFarmAnimal"
                    options={EH}
                    value={values.petOrFarmAnimal}
                    error={errors?.petOrFarmAnimal}
                    onChange={handleChange}
                />{
                    values.petOrFarmAnimal === "evet" && <FormInputSelectOne
                        label=""
                        name="petOrFarmAnimalDesc"
                        options={[
                            { value: "içerde", label: "İçerde" },
                            { value: "dışarda", label: "Dışarda" },
                            { value: "hem içerde hem dışarda", label: "Hem içerde hem dışarda" },
                        ]}
                        value={values.petOrFarmAnimalDesc}
                        error={errors?.petOrFarmAnimalDesc}
                        onChange={handleChange}
                    />
                }
            </div>


            {user.Information?.Gender === "Erkek" && <>

                <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start">
                    <h2 className=" text-[18px]">Erkek özel özgeçmiş:</h2>
                </div>

                <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">

                    <FormInputSelectMulti
                        label="Sizin için uygun olanları işaretleyiniz"
                        options={[
                            { value: "Testiste kitle", label: "Testiste kitle" },
                            { value: "Testiste ağrı", label: "Testiste ağrı" },
                            { value: "prostat büyümesi", label: "Prostat büyümesi" },
                            { value: "prostat enfeksiyonu", label: "Prostat enfeksiyonu" },
                            { value: "cinsel işlevde azalma ", label: "Cinsel işlevde azalma" },
                            { value: "sertleşmeme", label: "Sertleşmeme" },
                            { value: "erken boşalma", label: "Erken boşalma" },
                            { value: "ereksiyonda zorluk", label: "Ereksiyonda zorluk" },
                            { value: "ereksiyonu sürdürmede zorluk", label: "Ereksiyonu sürdürmede zorluk" },
                            { value: "idrar kontrolünde zorluk", label: "İdrar kontrolünde zorluk" },
                            { value: "idrara sıkışma/başlatamama/akışta değişiklik", label: "İdrara sıkışma/başlatamama/akışta değişiklik" },
                            { value: "vazektomi", label: "Vazektomi" },
                            { value: "gece idrara çıkma", label: "Gece idrara çıkma" },
                            { value: "cinsel yol ile bulaşan hastalık", label: "Cinsel yol ile bulaşan hastalık" },
                        ]}
                        name="suitablePartsForYou"
                        value={values.suitablePartsForYou}
                        error={errors?.suitablePartsForYou}
                    />
                    {
                        values.suitablePartsForYou?.includes("gece idrara çıkma") &&
                        <FormInput
                            label={`Gecede kere idrara çıkıyorsunuz ?`}
                            value={values.suitablePartsForYouPeeDesc}
                            error={errors.suitablePartsForYouPeeDesc}
                            name="suitablePartsForYouPeeDesc"
                            type="text"
                            onChange={handleChange}
                        />

                        //     values.suitablePartsForYou.includes("cinsel yol ile bulaşan hastalık") && 
                        //     <FormInput
                        //     label={`Cinsel yolla bulaşan hastalığınız nedir ?`}
                        //     value={values.suitablePartsForYouSexualDesc}
                        //     error={errors.suitablePartsForYouSexualDesc}
                        //     name="suitablePartsForYouSexualDesc"
                        //     type="text"
                        //     onChange={handleChange}
                        // />
                    }

                    <FormInputSelectOne
                        label="Hiç PSA testi yaptırdınız mı ?"
                        name="psa"
                        options={EH}
                        value={values.psa}
                        error={errors?.psa}
                        onChange={handleChange}
                    />{
                        values.psa === "evet" && <>
                            <FormInputSelectOne
                                label="PSA Seviyesi ?"
                                name="psaValue"
                                options={[
                                    { value: "0-2", label: "0-2" },
                                    { value: "2-4", label: "2-4" },
                                    { value: "4-10", label: "4-10" },
                                    { value: ">10", label: ">10" },
                                ]}
                                value={values.psaValue}
                                error={errors?.psaValue}
                                onChange={handleChange}
                            />
                            <FormInput
                                label={`Diğer testler/analizler (Ne yapıldı, ne zaman)`}
                                value={values.otherTest}
                                error={errors.otherTest}
                                name="otherTest"
                                type="text"
                                onChange={handleChange}
                            />

                        </>
                    }
                </div>
            </>
            }

            {user.Information?.Gender === "Kadın" && <>

                <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start">
                    <h2 className=" text-[18px]">Kadın özel özgeçmiş:</h2>
                </div>

                <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                    <label htmlFor="">Kadın-doğum Öyküsü (Uygun olanları işaretleyip sayısını yazınız)</label>

                    <FormInputSelectOne
                        label="Gebelik yaşadınız mı ?"
                        name="pregnancy"
                        options={EH}
                        value={values.pregnancy}
                        error={errors?.pregnancy}
                        onChange={handleChange}
                    />{
                        values.pregnancy === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.pregnancyCount}
                                error={errors.pregnancyCount}
                                name="pregnancyCount"
                                type="number"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <FormInputSelectOne
                        label="Düşük yaşadınız mı ?"
                        name="low"
                        options={EH}
                        value={values.low}
                        error={errors?.low}
                        onChange={handleChange}
                    />{
                        values.low === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.lowCount}
                                error={errors.lowCount}
                                name="lowCount"
                                type="number"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <FormInputSelectOne
                        label="Kürtaj Geçirdiniz mi ?"
                        name="abortion"
                        options={EH}
                        value={values.abortion}
                        error={errors?.abortion}
                        onChange={handleChange}
                    />{
                        values.abortion === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.abortionCount}
                                error={errors.abortionCount}
                                name="abortionCount"
                                type="number"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <FormInputSelectOne
                        label="Yaşayan çocuğunuz var mı ?"
                        name="livingChild"
                        options={EH}
                        value={values.livingChild}
                        error={errors?.livingChild}
                        onChange={handleChange}
                    />{
                        values.livingChild === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.livingChildCount}
                                error={errors.livingChildCount}
                                name="livingChildCount"
                                type="number"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <FormInputSelectOne
                        label="Normal doğum yaptınız mı ?"
                        name="naturalChildbirth"
                        options={EH}
                        value={values.naturalChildbirth}
                        error={errors?.naturalChildbirth}
                        onChange={handleChange}
                    />{
                        values.naturalChildbirth === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.naturalChildbirthCount}
                                error={errors.naturalChildbirthCount}
                                name="naturalChildbirthCount"
                                type="number"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <FormInputSelectOne
                        label="Sezaryenla doğum yaptınız mı ?"
                        name="cesareanDelivery"
                        options={EH}
                        value={values.cesareanDelivery}
                        error={errors?.cesareanDelivery}
                        onChange={handleChange}
                    />{
                        values.cesareanDelivery === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.cesareanDeliveryCount}
                                error={errors.cesareanDeliveryCount}
                                name="cesareanDeliveryCount"
                                type="number"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <FormInputSelectOne
                        label="Gününde doğum yaptınız mı ?"
                        name="birthdayOnTheDay"
                        options={EH}
                        value={values.birthdayOnTheDay}
                        error={errors?.birthdayOnTheDay}
                        onChange={handleChange}
                    />{
                        values.birthdayOnTheDay === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.birthdayOnTheDayCount}
                                error={errors.birthdayOnTheDayCount}
                                name="birthdayOnTheDayCount"
                                type="number"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <FormInputSelectOne
                        label="Premature doğum yaptınız mı ?"
                        name="premature"
                        options={EH}
                        value={values.premature}
                        error={errors?.premature}
                        onChange={handleChange}
                    />{
                        values.premature === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.prematureCount}
                                error={errors.prematureCount}
                                name="prematureCount"
                                type="number"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <FormInputSelectOne
                        label="Büyük bebek doğumu yaptınız mı ?"
                        name="bigbaby"
                        options={EH}
                        value={values.bigbaby}
                        error={errors?.bigbaby}
                        onChange={handleChange}
                    />{
                        values.bigbaby === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.bigbabyCount}
                                error={errors.bigbabyCount}
                                name="bigbabyCount"
                                type="number"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <FormInputSelectOne
                        label="Küçük bebek doğumu yaptınız mı ?"
                        name="smallbaby"
                        options={EH}
                        value={values.smallbaby}
                        error={errors?.smallbaby}
                        onChange={handleChange}
                    />{
                        values.smallbaby === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.smallbabyCount}
                                error={errors.smallbabyCount}
                                name="smallbabyCount"
                                type="number"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <FormInputSelectOne
                        label="Gebelikte veya sonrasında problem yaşadınız mı? Örneğin, toksemi (yüksek tansiyon), diyabet, doğum sonrası depresyon, süt verme problemi vb. yaşadınız mı?"
                        name="postPregnancyProblems"
                        options={EH}
                        value={values.postPregnancyProblems}
                        error={errors?.postPregnancyProblems}
                        onChange={handleChange}
                    />{
                        values.postPregnancyProblems === "evet" && <>
                            <FormInput
                                label={`Kaç Adet ?`}
                                value={values.postPregnancyProblemsDesc}
                                error={errors.postPregnancyProblemsDesc}
                                name="postPregnancyProblemsDesc"
                                type="text"
                                onChange={handleChange}
                            />
                        </>
                    }

                    <label htmlFor="">Adet görme öyküsü:</label>
                    <FormInput
                        label={`İlk adet yaşınız ?`}
                        value={values.firstMenstrualAge}
                        error={errors.firstMenstrualAge}
                        name="firstMenstrualAge"
                        type="text"
                        onChange={handleChange}
                    />

                    <FormInput
                        label={`Son adet tarihi ?`}
                        value={values.lastMenstrualAge}
                        error={errors.lastMenstrualAge}
                        name="lastMenstrualAge"
                        type="text"
                        onChange={handleChange}
                    />

                    <FormInput
                        label={`Kaç günde bir adet görürsünüz ?`}
                        value={values.menstruationInterval}
                        error={errors.menstruationInterval}
                        name="menstruationInterval"
                        type="number"
                        onChange={handleChange}
                    />

                    <FormInput
                        label={`Adetiniz kaç gün sürer ?`}
                        value={values.menstrualPeriod}
                        error={errors.menstrualPeriod}
                        name="menstrualPeriod"
                        type="number"
                        onChange={handleChange}
                    />

                    <FormInputSelectOne
                        label="Adet döneminizde kramp olur mu ?"
                        name="menstrualCramp"
                        options={EH}
                        value={values.menstrualCramp}
                        error={errors?.menstrualCramp}
                        onChange={handleChange}
                    />

                    <FormInputSelectOne
                        label="Adet döneminizde ağrı olur mu ?"
                        name="menstrualPain"
                        options={EH}
                        value={values.menstrualPain}
                        error={errors?.menstrualPain}
                        onChange={handleChange}
                    />

                    <FormInputSelectOne
                        label="Adet öncesi problem yaşar mısınız (şişkinlik, memelerde hassasiyet, sinirlilik…)?"
                        name="postPregnancyProblems"
                        options={EH}
                        value={values.menstrualProblems}
                        error={errors?.menstrualProblems}
                        onChange={handleChange}
                    />{
                        values.menstrualProblems === "evet" &&
                        <FormInput
                            label={`Açıklayınız ?`}
                            value={values.menstrualProblemsDesc}
                            error={errors.menstrualProblemsDesc}
                            name="menstrualProblemsDesc"
                            type="text"
                            onChange={handleChange}
                        />
                    }

                    <FormInputSelectOne
                        label="Adet döneminde başka sorunlarınız olur mu (yoğun kanama, düzensizlik, lekelenme…)?"
                        name="lastMenstrualProblems"
                        options={EH}
                        value={values.lastMenstrualProblems}
                        error={errors?.lastMenstrualProblems}
                        onChange={handleChange}
                    />{
                        values.postPregnancyProblems === "evet" &&
                        <FormInput
                            label={`Açıklayınız ?`}
                            value={values.lastMenstrualProblemsDesc}
                            error={errors.lastMenstrualProblemsDesc}
                            name="lastMenstrualProblemsDesc"
                            type="text"
                            onChange={handleChange}
                        />
                    }

                    <FormInputSelectOne
                        label="Hormonal doğum kontrolü ile sorun yaşadınız mı? ?"
                        name="hormonalBirthControl"
                        options={EH}
                        value={values.hormonalBirthControl}
                        error={errors?.hormonalBirthControl}
                        onChange={handleChange}
                    />{
                        values.hormonalBirthControl === "evet" &&
                        <FormInput
                            label={`Açıklayınız ?`}
                            value={values.hormonalBirthControlDesc}
                            error={errors.hormonalBirthControlDesc}
                            name="hormonalBirthControlDesc"
                            type="text"
                            onChange={handleChange}
                        />
                    }

                    <FormInputSelectOne
                        label="Başka yöntem kullanıyor musunuz?"
                        name="anotherMethod"
                        options={EH}
                        value={values.anotherMethod}
                        error={errors?.anotherMethod}
                        onChange={handleChange}
                    />{
                        values.postPregnancyProblems === "evet" &&
                        <FormInputSelectMulti
                            label="Başka yöntem kullanıyor musunuz?"
                            name="anotherMethods"
                            options={[
                                { value: "kondom", label: "Kondom" },
                                { value: "diyafram", label: "Diyafram" },
                                { value: "spiral", label: "Spiral" },
                                { value: "vazektomi", label: "Vazektomi" },
                            ]}
                            value={values.anotherMethods}
                            error={errors?.anotherMethods}
                        />
                    }

                    <FormInputSelectOne
                        label="Menopozda mısınız?"
                        name="IsMenopause"
                        options={EH}
                        value={values.IsMenopause}
                        error={errors?.IsMenopause}
                        onChange={handleChange}
                    />{
                        values.postPregnancyProblems === "evet" && <>
                            <FormInput
                                label={`Son adet yaşı ?`}
                                value={values.MenopauseLastedAge}
                                error={errors.MenopauseLastedAge}
                                name="MenopauseLastedAge"
                                type="number"
                                onChange={handleChange}
                            />

                            <FormInputSelectOne
                                label="Cerrahi menopoz muydu ?"
                                name="surgicalMenopause"
                                options={EH}
                                value={values.surgicalMenopause}
                                error={errors?.surgicalMenopause}
                                onChange={handleChange}
                            />{
                                values.surgicalMenopause === "evet" &&
                                <FormInput
                                    label={`Operasyonu açıklayınız ?`}
                                    value={values.surgicalMenopauseDesc}
                                    error={errors.surgicalMenopauseDesc}
                                    name="surgicalMenopauseDesc"
                                    type="text"
                                    onChange={handleChange}
                                />
                            }
                        </>
                    }


                    <FormInputSelectMulti
                        label="Şu anda menopoza ait şikayetleriniz var mı? (sizde olanları işaretleyiniz)"
                        options={[
                            { value: "ateş basması", label: "Ateş basması" },
                            { value: "duygusal karmaşa", label: "Duygusal karmaşa" },
                            { value: "konsantrasyon/hafıza problemleri", label: "Konsantrasyon/hafıza problemleri" },
                            { value: "başağrısı", label: "Başağrısı" },
                            { value: "eklem ağrısı", label: "Eklem ağrısı" },
                            { value: "vajinal kuruluk", label: "Vajinal kuruluk" },
                            { value: "kilo alma", label: "Kilo alma" },
                            { value: "libidoda azalma", label: "Libidoda azalma" },
                            { value: "idrar kontrolünde azalma", label: "İdrar kontrolünde azalma" },
                            { value: "çarpıntı", label: "Çarpıntı" },
                        ]}
                        name="menopauseComplaints"
                        value={values.menopauseComplaints}
                        error={errors?.menopauseComplaints}
                    />

                    <FormInputSelectOne
                        label="Hormon tedavisi alıyor musunuz?"
                        name="hormoneTherapy"
                        options={EH}
                        value={values.hormoneTherapy}
                        error={errors?.hormoneTherapy}
                        onChange={handleChange}
                    />{
                        values.hormoneTherapy === "evet" &&
                        <FormInput
                            label={`ne kadar süredir, hangi nedenle (ateş basması, kemik erimesinin önlenmesi vb) ?`}
                            value={values.hormoneTherapyDesc}
                            error={errors.hormoneTherapyDesc}
                            name="hormoneTherapyDesc"
                            type="text"
                            onChange={handleChange}
                        />
                    }

                    <FormInputSelectMulti
                        label="Diğer Jinekolojik Semptomlar: (sizde olanları işaretleyiniz)"
                        options={[
                            { value: "endometriyozis", label: "Endometriyozis" },
                            { value: "infertilite", label: "İnfertilite" },
                            { value: "fibrokistik meme", label: "Fibrokistik meme" },
                            { value: "vajinal enfeksiyon", label: "Vajinal enfeksiyon" },
                            { value: "myom", label: "Myom" },
                            { value: "yumurtalık kisti", label: "Yumurtalık kisti" },
                            { value: "pelvik inflamatuvar hastalık", label: "Pelvik inflamatuvar hastalık" },
                            { value: "genital kanser (yumurtalık, rahim, meme, vb)", label: "Genital kanser (yumurtalık, rahim, meme, vb)" },
                            { value: "cinsel yol ile bulaşan hastalık (açıklayınız)", label: "Cinsel yol ile bulaşan hastalık (açıklayınız)" },
                        ]}
                        name="gynecologicalSymptoms"
                        value={values.gynecologicalSymptoms}
                        error={errors?.gynecologicalSymptoms}
                    />{
                        values.gynecologicalSymptoms?.includes("cinsel yol ile bulaşan hastalık (açıklayınız)") &&
                        <FormInput
                            label={``}
                            value={values.gynecologicalSymptomsDesc}
                            error={errors.gynecologicalSymptomsDesc}
                            name="gynecologicalSymptomsDesc"
                            type="text"
                            onChange={handleChange}
                        />
                    }

                    <FormInputSelectOne
                        label="Smear testi yaptırdınız mı?"
                        name="smearTest"
                        options={EH}
                        value={values.smearTest}
                        error={errors?.smearTest}
                        onChange={handleChange}
                    />{
                        values.smearTest === "evet" &&
                        <FormInputSelectOne
                            label="Son testin sonucu ?"
                            name="smearTestResponse"
                            options={[
                                { value: "normal", label: "Normal" },
                                { value: "anormal", label: "Anormal" },
                            ]}
                            value={values.smearTestResponse}
                            error={errors?.smearTestResponse}
                            onChange={handleChange}
                        />
                    }

                    <FormInputSelectOne
                        label="Mamografi yaptırdınız mı?"
                        name="mammographyTest"
                        options={EH}
                        value={values.mammographyTest}
                        error={errors?.mammographyTest}
                        onChange={handleChange}
                    />{
                        values.mammographyTest === "evet" &&
                        <FormInputSelectOne
                            label="Son testin sonucu ?"
                            name="mammographyTestResponse"
                            options={[
                                { value: "normal", label: "Normal" },
                                { value: "anormal", label: "Anormal" },
                            ]}
                            value={values.mammographyTestResponse}
                            error={errors?.mammographyTestResponse}
                            onChange={handleChange}
                        />
                    }

                    <FormInputSelectOne
                        label="kemik dansitesi yaptırdınız mı ?"
                        name="bone"
                        options={EH}
                        value={values.bone}
                        error={errors?.bone}
                        onChange={handleChange}
                    />{
                        values.bone === "evet" &&
                        <FormInputSelectOne
                            label="Son testin sonucu ?"
                            name="boneResponse"
                            options={[
                                { value: "normal", label: "Normal" },
                                { value: "anormal", label: "Anormal" },
                            ]}
                            value={values.boneResponse}
                            error={errors?.boneResponse}
                            onChange={handleChange}
                        />
                    }

                    <FormInputSelectOne
                        label="Başka test yaptırdınız mı ?"
                        name="anotherTest"
                        options={EH}
                        value={values.anotherTest}
                        error={errors?.anotherTest}
                        onChange={handleChange}
                    />{
                        values.anotherTest === "evet" &&
                        <FormInput
                            label={`Diğer testler/girişimler (tarihleri ile yazınız)`}
                            value={values.anotherTestDesc}
                            error={errors.anotherTestDesc}
                            name="anotherTestDesc"
                            type="text"
                            onChange={handleChange}
                        />
                    }

                </div>

            </>
            }
            <div className="w-full flex flex-col  font-nexa-regular h-[900px]">
                <div className="grid grid-cols-14 font-nexa-regular text-[14px]">
                    <p className=" border-2  text-[14px]   h-full text-left">  </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Anne </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Baba </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Kardeş </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Kardeş </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Çocuk </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Çocuk </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Çocuk </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Çocuk </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Anneanne </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Annebaba </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Babaanne </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Dede </p>
                    <p className=" border-2  text-[14px]   h-full text-left"> Diğer </p>


                    <div className=" border-2  text-[14px]  text-left"> (Sağ) Yaşı </div>
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />

                    <div className=" border-2  text-[14px]  text-left"> (Ölü) Ölüm Yaşı </div>
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />
                    <input type="number" min={0} max={130} className=" border-2  text-[14px]   h-full text-left" />


                    {/* KOLONLAR */}
                    <div className=" border-2 w-full text text-[10px] flex flex-col  h-[750px] text-left">
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Kanser</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Kalp hastalığı</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Yüksek tansiyon</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Obezite</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Diyabet</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">İnme</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Otoimmün hastalık</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Artrit</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Böbrek hastalığı</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Tiroid problemleri</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Nöbet / epilepsi</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Psikiyatrik bozukluk</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Anksiyete</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center">Depresyon</p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center"> Astım </p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center"> Alerjiler </p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center"> Egzema </p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center"> Otizm </p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center"> Hassas Bağırsak Sendromu </p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center"> Demans </p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center"> Madde kullanımı </p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center"> Genetik bozukluk </p>
                        <p className="border-b-2 h-[32px] flex items-center justify-center text-center"> Diğer: </p>
                    </div>


                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="ahdh" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="aHastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>
                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="ahdh" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="bHastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>

                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="ahdh" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="k1Hastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>
                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="ahdh" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="k2Hastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>
                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="ahdh" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="c1Hastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>
                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="ahdh" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="c2Hastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>
                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="ahdh" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="c3Hastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>
                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="adhd" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="c4Hastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>
                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="adhd" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="aaHastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>
                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="adhd" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="abHastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>
                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="adhd" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="baHastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>

                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="adhd" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="ddHastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>

                    <div className=" border-2 w-full text text-[10px] flex flex-col items-center  h-[750px] text-left">
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="kanser" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="kalp" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="tansiyon" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="obez" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="inme" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="otoimmun" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="artrit" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="bobrek" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="tiroid" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="nöbet" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="psikiyatrik" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="anksiyete" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="depresyon" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="astım" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="alerji" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="egzema" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="adhd" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="otizm" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="hassas" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="demans" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="madde" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="genetik" type="checkbox" />
                        <Field name="dgHastaliklar" className="h-[32px] w-full" value="diğer" type="checkbox" />
                    </div>

                </div>

            </div>
        </>
    );
}

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

export default function SubStep2Part7({
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
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <label >Sence hayatında işler nasıl gidiyor? (1–10 arası ölçekte işaretleyin, uygun değilse N/A işaretle) (1)Kötü (5) Orta  (10) Çok iyi</label>
                <FormInputSelectOne
                    label="Genel olarak"
                    name="general"
                    options={livePoint}
                    value={values.general}
                    error={errors?.general}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Okulda"
                    name="school"
                    options={livePoint}
                    value={values.school}
                    error={errors?.school}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İş hayatında"
                    name="school"
                    options={livePoint}
                    value={values.businessLife}
                    error={errors?.businessLife}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sosyal yaşamda"
                    name="school"
                    options={livePoint}
                    value={values.socialLife}
                    error={errors?.socialLife}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yakın arkadaşlarla"
                    name="bestFriend"
                    options={livePoint}
                    value={values.bestFriend}
                    error={errors?.bestFriend}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Cinsellik"
                    name="sexuality"
                    options={livePoint}
                    value={values.sexuality}
                    error={errors?.sexuality}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Duruşun, konumun"
                    name="position"
                    options={livePoint}
                    value={values.position}
                    error={errors?.position}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Erkek arkadaş/kız arkadaş ile"
                    name="withBoyFriendAndGirlFriend"
                    options={livePoint}
                    value={values.withBoyFriendAndGirlFriend}
                    error={errors?.withBoyFriendGirlFriend}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çocuklarınız ile"
                    name="children"
                    options={livePoint}
                    value={values.children}
                    error={errors?.children}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ebeveynlerinizle"
                    name="parents"
                    options={livePoint}
                    value={values.parents}
                    error={errors?.parents}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Eşiniz ile"
                    name="partner"
                    options={livePoint}
                    value={values.partner}
                    error={errors?.partner}
                    onChange={handleChange}
                />
            </div>


            <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start">
                <h2 className="font-nexa-regular text-[18px]">Özgeçmiş</h2>
            </div>
            <label htmlFor="">Hastanın doğum/çocukluk öyküsü:</label>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Doğumunuz :"
                    name="birth"
                    options={[
                        { value: "gününde", label: "Gününde" },
                        { value: "premature", label: "Premature" },
                        { value: "Bilmiyorum", label: "Bilmiyorum" },
                    ]}
                    value={values.birth}
                    error={errors?.birth}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Gebelik/doğum komplikasyonu oldu mu? "
                    name="birthComplication"
                    options={EH}
                    value={values.birthComplication}
                    error={errors?.birthComplication}
                    onChange={handleChange}
                />{
                    values.birthComplication === "evet" && <FormInput
                        label={`açıklayınız`}
                        value={values.birthComplicationDesc}
                        error={errors.birthComplicationDesc}
                        name="birthComplicationDesc"
                        type="text"
                        onChange={handleChange}
                    />
                }
            </div>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <label htmlFor="">Başlama yaşı:</label>
                <FormInput
                    label={`Katı gıdalar:`}
                    value={values.solidFoods}
                    error={errors.solidFoods}
                    name="solidFoods"
                    type="number"
                    onChange={handleChange}
                />
                <FormInput
                    label={`Buğday`}
                    value={values.wheat}
                    error={errors.wheat}
                    name="wheat"
                    type="number"
                    onChange={handleChange}
                />
                <FormInput
                    label={`Mandıra`}
                    value={values.dairy}
                    error={errors.dairy}
                    name="dairy"
                    type="number"
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Çocukken sizde semptoma neden olduğundan kaçınılan yiyecekler var mıydı?"
                    name="avoidedFood"
                    options={EH}
                    value={values.avoidedFood}
                    error={errors?.avoidedFood}
                    onChange={handleChange}
                />
                {
                    values.avoidedFood === "evet" && <FormInput
                        label={`Hangi besinler ve hangi semptomlar? (Örnek: süt—gaz ve ishal)`}
                        value={values.avoidedFoodDesc}
                        error={errors.avoidedFoodDesc}
                        name="avoidedFoodDesc"
                        type="text"
                        onChange={handleChange}
                    />
                }
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Çocukken çok fazla şeker veya tatlı yediniz mi?"
                    name="sugarOrSweet"
                    options={EH}
                    value={values.sugarOrSweet}
                    error={errors?.sugarOrSweet}
                    onChange={handleChange}
                />
            </div>
            <label>Diş Sağlığı</label>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <label>Ağzınızda aşağıdakilerden hangisi/hangileri var, kaç adet ise boşluğa yazınız:</label>
                <FormInputSelectOne
                    label="Gümüş rengi civalı dolgu"
                    name="silverMercuryFiller"
                    options={EH}
                    value={values.silverMercuryFiller}
                    error={errors?.silverMercuryFiller}
                    onChange={handleChange}
                />{
                    values.silverMercuryFiller === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.silverMercuryFillerDesc}
                        error={errors.silverMercuryFillerDesc}
                        name="silverMercuryFillerDesc"
                        type="number"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Altın dolgu"
                    name="GoldFiller"
                    options={EH}
                    value={values.GoldFiller}
                    error={errors?.GoldFiller}
                    onChange={handleChange}
                />{
                    values.GoldFiller === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.GoldFillerDesc}
                        error={errors.GoldFillerDesc}
                        name="GoldFillerDesc"
                        type="number"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Kanal tedavisi"
                    name="rootCanalTreatment"
                    options={EH}
                    value={values.rootCanalTreatment}
                    error={errors?.rootCanalTreatment}
                    onChange={handleChange}
                />{
                    values.rootCanalTreatment === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.rootCanalTreatmentDesc}
                        error={errors.rootCanalTreatmentDesc}
                        name="rootCanalTreatmentDesc"
                        type="number"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="İmplant"
                    name="Implant"
                    options={EH}
                    value={values.Implant}
                    error={errors?.Implant}
                    onChange={handleChange}
                />{
                    values.Implant === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.ImplantDesc}
                        error={errors.ImplantDesc}
                        name="ImplantDesc"
                        type="number"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Kaplama/metal"
                    name="platingMetal"
                    options={EH}
                    value={values.platingMetal}
                    error={errors?.platingMetal}
                    onChange={handleChange}
                />{
                    values.platingMetal === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.platingMetalDesc}
                        error={errors.platingMetalDesc}
                        name="platingMetalDesc"
                        type="number"
                        onChange={handleChange}
                    />
                }


                <FormInputSelectOne
                    label="Diş ağrısı"
                    name="toothache"
                    options={EH}
                    value={values.toothache}
                    error={errors?.toothache}
                    onChange={handleChange}
                />{
                    values.toothache === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.toothacheDesc}
                        error={errors.toothacheDesc}
                        name="toothacheDesc"
                        type="number"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Dişeti kanaması"
                    name="bleedingGums"
                    options={EH}
                    value={values.bleedingGums}
                    error={errors?.bleedingGums}
                    onChange={handleChange}
                />{
                    values.bleedingGums === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.bleedingGumsDesc}
                        error={errors.bleedingGumsDesc}
                        name="bleedingGumsDesc"
                        type="number"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Diş Sorunu"
                    name="gumProblem"
                    options={EH}
                    value={values.gumProblem}
                    error={errors?.gumProblem}
                    onChange={handleChange}
                />{
                    values.gumProblem === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.gumProblemDesc}
                        error={errors.gumProblemDesc}
                        name="gumProblemDesc"
                        type="number"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Çiğneme sorunları"
                    name="chewingProblems"
                    options={EH}
                    value={values.chewingProblems}
                    error={errors?.chewingProblems}
                    onChange={handleChange}
                />{
                    values.chewingProblems === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.chewingProblemsDesc}
                        error={errors.chewingProblemsDesc}
                        name="chewingProblemsDesc"
                        type="number"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Diğer diş sorunları (açıklayınız)"
                    name="otherDentalProblems"
                    options={EH}
                    value={values.otherDentalProblems}
                    error={errors?.otherDentalProblems}
                    onChange={handleChange}
                />{
                    values.otherDentalProblems === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.otherDentalProblemsDesc}
                        error={errors.otherDentalProblemsDesc}
                        name="otherDentalProblemsDesc"
                        type="number"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Civalı dolgunuzu çıkarttığınız oldu mu?"
                    name="removingYourMercuryFiller"
                    options={EH}
                    value={values.removingYourMercuryFiller}
                    error={errors?.removingYourMercuryFiller}
                    onChange={handleChange}
                />{
                    values.removingYourMercuryFiller === "evet" && <FormInput
                        label={`Kaç Adet ?`}
                        value={values.removingYourMercuryFillerDesc}
                        error={errors.removingYourMercuryFillerDesc}
                        name="removingYourMercuryFillerDesc"
                        type="text"
                        onChange={handleChange}
                    />
                }

                <FormInput
                    label={`Çocukken kaç tane dolgunuz vardı ?`}
                    value={values.howManyFillersAsAChild}
                    error={errors.howManyFillersAsAChild}
                    name="howManyFillersAsAChild"
                    type="number"
                    onChange={handleChange}
                />

                <FormInputSelectOne
                    label="Dişlerinizi düzenli fırçalar mısınız?"
                    name="brushingTeeth"
                    options={EH}
                    value={values.brushingTeeth}
                    error={errors?.brushingTeeth}
                    onChange={handleChange}
                />

                <FormInputSelectOne
                    label="Düzenli diş ipi kullanır mısınız?"
                    name="floss"
                    options={EH}
                    value={values.floss}
                    error={errors?.floss}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}

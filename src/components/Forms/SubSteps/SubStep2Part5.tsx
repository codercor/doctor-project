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
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
]

export default function SubStep2Part5({
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
            <h3 className="font-nexa-regular text-[22px] mt-8 text-[#4E929D]">Beslenme</h3>
           <label className="font-nexa-bold text-[20px] text-[#4E929D]">Lütfen bir günde neler yediğinizi yazınız:</label>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label={`Kahvaltı`}
                    value={values.breakfast}
                    error={errors.breakfast}
                    name="breakfast"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label={`Öğle`}
                    value={values.lunch}
                    error={errors.lunch}
                    name="lunch"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label={`Akşam`}
                    value={values.dinner}
                    error={errors.dinner}
                    name="dinner"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label={`Atıştırmalar`}
                    value={values.snacks}
                    error={errors.snacks}
                    name="snacks"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label={`İçecekler`}
                    value={values.beverages}
                    error={errors.beverages}
                    name="beverages"
                    type="text"
                    onChange={handleChange}
                />
            </div>

            <label className="font-nexa-bold text-[20px] text-[#4E929D]">Bir haftada aşağıdakilerden kaç porsiyon yersiniz:</label>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Meyve (suyu değil)"
                    name="fruit"
                    type="number"
                    error={errors.fruit}
                    value={values.fruit}
                    onChange={handleChange}
                />

                <FormInput
                    label="Sebze (beyaz patates dışında)"
                    name="vegetable"
                    type="number"
                    error={errors.vegetable}
                    value={values.vegetable}
                    onChange={handleChange}
                />
            </div>

            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Kurubaklagil (fasülye,bezelye vb)"
                    name="legumes"
                    type="number"
                    error={errors.legumes}
                    value={values.legumes}
                    onChange={handleChange}
                />

                <FormInput
                    label="Kırmızı et"
                    name="redMeat"
                    type="number"
                    error={errors.redMeat}
                    value={values.redMeat}
                    onChange={handleChange}
                />
            </div>

            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Balık"
                    name="fish"
                    type="number"
                    error={errors.fish}
                    value={values.fish}
                    onChange={handleChange}
                />

                <FormInput
                    label="Mandıra ürünleri"
                    name="dairyProducts"
                    type="number"
                    error={errors.dairyProducts}
                    value={values.dairyProducts}
                    onChange={handleChange}
                />
            </div>

            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Kuruyemiş&tohum"
                    name="nutsAndSeeds"
                    type="number"
                    error={errors.nutsAndSeeds}
                    value={values.nutsAndSeeds}
                    onChange={handleChange}
                />

                <FormInput
                    label="Yağ"
                    name="oil"
                    type="number"
                    error={errors.oil}
                    value={values.oil}
                    onChange={handleChange}
                />
            </div>

            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Kutu içecek (normal veya diyet)"
                    name="cannedDrink"
                    type="number"
                    error={errors.cannedDrink}
                    value={values.cannedDrink}
                    onChange={handleChange}
                />

                <FormInput
                    label="Tatlı (şeker, kek, bisküvi, dondurma vb.)"
                    name="dessert"
                    type="number"
                    error={errors.dessert}
                    value={values.dessert}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Kafeinli içecek içer misiniz? Evet ise, miktarını işaretleyiniz:"
                    options={EH}
                    name="caffeinatedBeverage"
                    value={values.caffeinatedBeverage}
                    error={errors?.caffeinatedBeverage}
                    onChange={handleChange}
                />
                {
                    values.caffeinatedBeverage === "evet" && (<>
                        <FormInputSelectOne
                            onChange={handleChange}
                            label="Kahve (günde) kaç fincan ?"
                            options={Quantity}
                            value={values.coffeQuantity}
                            error={errors?.coffeQuantity}
                            name="coffeQuantity"
                        />

                        <FormInputSelectOne
                            onChange={handleChange}
                            label="Çay (günde) kaç bardak?"
                            options={Quantity}
                            value={values.teaQuantity}
                            error={errors?.teaQuantity}
                            name="teaQuantity"
                        />

                        <FormInputSelectOne
                            onChange={handleChange}
                            label="Kafeinli gazlı içecek—normal veya diyet (günde) kaç kutu ?"
                            options={Quantity}
                            value={values.carbonatedCoffeeQuantity}
                            error={errors?.carbonatedCoffeeQuantity}
                            name="carbonatedCoffeeQuantity"
                        />
                    </>
                    )
                }
            </div>

            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Kafeine olumsuz reaksiyonunuz var mı? Evet ise açıklayınız:"
                    options={EH}
                    name="caffeineReaction"
                    value={values.caffeineReaction}
                    error={errors?.caffeineReaction}
                    onChange={handleChange}
                />
                {values.caffeineReaction === "evet" && <FormInput
                    label={`Açıklama:`}
                    value={values.caffeineReactionDesc}
                    error={errors.caffeineReactionDesc}
                    name="caffeineReactionDesc"
                    type="text"
                    onChange={handleChange}
                />
                }
            </div>


            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectMulti
                    label="Kafein içtiğinizde bunları hisseder misiniz ?"
                    options={[
                        { value: "sinirli / gergin", label: "Sinirli / Gergin" },
                        { value: "ağrı", label: "Ağrı" },
                    ]}
                    name="caffeineSensation"
                    value={values.caffeineSensation}
                    error={errors?.caffeineSensation}
                />
            </div>
            <h3 className="font-nexa-regular text-[22px] text-[#4E929D]">Sigara</h3>
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Sigara içiyor musunuz ?"
                    options={EH}
                    name="smoke"
                    value={values.smoke}
                    error={errors?.smoke}
                    onChange={handleChange}
                />
                {values.smoke === "evet" && <> <FormInput
                    label={`Günde Kaç Paket:`}
                    value={values.smokeQuantity}
                    error={errors.smokeQuantity}
                    name="smokeQuantity"
                    type="text"
                    onChange={handleChange}
                />
                    <FormInput
                        label={`Kaç Yıldır:`}
                        value={values.smokeYear}
                        error={errors.smokeYear}
                        name="smokeYear"
                        type="text"
                        onChange={handleChange}
                    />
                    <FormInputSelectMulti
                        label="Ne Tür ?"
                        options={[
                            { value: "sigara", label: "Sigara" },
                            { value: "dumansız", label: "Dumansız" },
                            { value: "pipo", label: "Pipo" },
                            { value: "puro", label: "Pura" },
                            { value: "e-sigara", label: "E-Sigara" },
                        ]}
                        name="smokeType"
                        value={values.smokeType}
                        error={errors?.smokeType}
                    />
                    <FormInputSelectOne
                        label="Bırakmayı denediniz mi ?"
                        options={EH}
                        name="smokeBlock"
                        value={values.smokeBlock}
                        error={errors?.smokeBlock}
                        onChange={handleChange}
                    />
                    {values.smokeBlock === "evet" && <FormInput
                        label={`Hangi yöntemleri denediniz ?`}
                        value={values.smokeBlockDesc}
                        error={errors.smokeBlockDesc}
                        name="smokeBlockDesc"
                        type="text"
                        onChange={handleChange}
                    />}
                </>
                }
            </div>

            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Daha önce sigara kullandınız mı ?"
                    options={EH}
                    name="oldSmoke"
                    value={values.oldSmoke}
                    error={errors?.oldSmoke}
                    onChange={handleChange}
                />
                {values.oldSmoke === "evet" && <><FormInput
                    label={`Günde Kaç Paket:`}
                    value={values.oldSmokeQuantity}
                    error={errors.oldSmokeQuantity}
                    name="oldSmokeQuantity"
                    type="text"
                    onChange={handleChange}
                />
                    <FormInput
                        label={`Kaç Yıldır:`}
                        value={values.oldSmokeYear}
                        error={errors.oldSmokeYear}
                        name="oldSmokeYear"
                        type="text"
                        onChange={handleChange}
                    />
                </>
                }
            </div>

            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Düzenli olarak sigara dumanına maruz kaldınız mı?"
                    options={EH}
                    name="cigaretteSmoke"
                    value={values.cigaretteSmoke}
                    error={errors?.cigaretteSmoke}
                    onChange={handleChange}
                />
            </div>


            <h3 className="font-nexa-regular text-[22px] text-[#4E929D]">Alkol</h3>
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Haftada ne kadar alkol alırsınız?(1 içki = 150ml şarap, 360ml bira, 50ml alkollü içki)"
                    options={[
                        { value: "1-3", label: "1-3" },
                        { value: "4-6", label: "4-6" },
                        { value: "7-10", label: "7-10" },
                        { value: ">10", label: ">10" },
                        { value: "içmem", label: "İçmem" },
                    ]}
                    name="alcoholWeek"
                    value={values.alcoholWeek}
                    error={errors?.alcoholWeek}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Daha önce alkol kullandınız mı?"
                    options={[
                        { value: "evet", label: "Evet" },
                        { value: "az", label: "Az" },
                        { value: "orta", label: "Orta" },
                        { value: "çok", label: "Çok" },
                        { value: "Kullanmadım", label: "Kullanmam" },
                    ]}
                    name="oldAlcohol"
                    value={values.oldAlcohol}
                    error={errors?.oldAlcohol}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Daha önce hiç alkol ile probleminiz oldu mu?"
                    options={EH}
                    name="oldAlcoholProblems"
                    value={values.oldAlcoholProblems}
                    error={errors?.oldAlcoholProblems}
                    onChange={handleChange}
                />
                {
                    values.oldAlcoholProblems === "evet" && <><FormInput
                        label={`Ne zaman ? `}
                        value={values.oldAlcoholProblemsWhatTime}
                        error={errors.oldAlcoholProblemsWhatTime}
                        name="oldAlcoholProblemsWhatTime"
                        type="text"
                        onChange={handleChange}
                    />
                        <FormInput
                            label={`Problemi açıklayınız `}
                            value={values.oldAlcoholProblemsDesc}
                            error={errors.oldAlcoholProblemsDesc}
                            name="oldAlcoholProblemsDesc"
                            type="text"
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="İçmeyi bırakmak veya sınırlamak için yardım almayı düşündünüz mü?"
                            options={EH}
                            name="oldAlcoholProblemsHelp"
                            value={values.oldAlcoholProblemsHelp}
                            error={errors?.oldAlcoholProblemsHelp}
                            onChange={handleChange}
                        />
                    </>
                }
            </div>


            <h3 className="font-nexa-regular text-[22px] text-[#4E929D]">Diğer Maddeler</h3>
            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Şu anda keyif verici madde/ilaç kullanıyor musunuz?"
                    options={EH}
                    name="recreationalDrug"
                    value={values.recreationalDrug}
                    error={errors?.recreationalDrug}
                    onChange={handleChange}
                />{
                    values.recreationalDrug === "evet" && <FormInput
                        label={`Ne tür?`}
                        value={values.recreationalDrugDesc}
                        error={errors.recreationalDrugDesc}
                        name="recreationalDrugDesc"
                        type="text"
                        onChange={handleChange}
                    />
                }

                <FormInputSelectOne
                    label="Hiç eğlence amaçlı IV/solunan madde kullandınız mı?"
                    options={EH}
                    name="inhaledSubstance"
                    value={values.inhaledSubstance}
                    error={errors?.inhaledSubstance}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}

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

export default function SubStep2Part4({
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
    /*
     sleepHours: Yup.string().required("Bu alan zorunludur"),
    sleepDifficulty: Yup.string().required("Bu alan zorunludur"),
    sleepQuality: Yup.string().required("Bu alan zorunludur"),
    sleepProblem: Yup.string().required("Bu alan zorunludur"),
    snore: Yup.string().required("Bu alan zorunludur"),
    wakeUp: Yup.string().required("Bu alan zorunludur"),
    sleepPills: Yup.string().required("Bu alan zorunludur"),
    sleepPillsDetail: Yup.string().when("sleepPills", {
      is: (sleepPills: string) => sleepPills === "evet",
      then: Yup.string().required("Bu alan zorunludur"),
    }),
    */
    const { user } = useUser()
    return (
        <>
            <h3 className="font-nexa-regular text-[16px]">Beslenme</h3>
            <label>Lütfen bir günde neler yediğinizi yazınız:</label>
            <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label={`Kahvaltı`}
                    value={values.breakfast}
                    error={errors.breakfast}
                    name="breakfast"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label={`Öğle`}
                    value={values.lunch}
                    error={errors.lunch}
                    name="lunch"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label={`Akşam`}
                    value={values.dinner}
                    error={errors.dinner}
                    name="dinner"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label={`Atıştırmalar`}
                    value={values.snacks}
                    error={errors.snacks}
                    name="snacks"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label={`İçecekler`}
                    value={values.beverages}
                    error={errors.beverages}
                    name="beverages"
                    type="text"
                    onChange={handleChange}
                />
            </div>

            <label>Bir haftada aşağıdakilerden kaç porsiyon yersiniz:</label>
            <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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

            <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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

            <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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

            <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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

            <div className="flex h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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


            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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
            <h3 className="font-nexa-regular text-[16px]">Sigara</h3>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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
                        label={`Kaç Yıldır:`}
                        value={values.smokeBlockDesc}
                        error={errors.smokeBlockDesc}
                        name="smokeBlockDesc"
                        type="text"
                        onChange={handleChange}
                    />}
                </>
                }
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Daha önce sigara kullandını mı ?"
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

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Düzenli olarak sigara dumanına maruz kaldınız mı?"
                    options={EH}
                    name="cigaretteSmoke"
                    value={values.cigaretteSmoke}
                    error={errors?.cigaretteSmoke}
                    onChange={handleChange}
                />
            </div>


            <h3 className="font-nexa-regular text-[16px]">Alkol</h3>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Haftada ne kadar alkol alırsınız?"
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
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
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


            <h3 className="font-nexa-regular text-[16px]">Alkol</h3>
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Şu anda keyif verici madde/ilaç kullanıyor musunuz?"
                    options={EH}
                    name="recreationalDrug"
                    value={values.recreationalDrug}
                    error={errors?.recreationalDrug}
                    onChange={handleChange}
                />{
                    values.recreationalDrug === "evet" && <FormInput
                        label={`Problemi açıklayınız `}
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


            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <label> Aşağıdakilerden her biri günlük ne kadar strese neden olur? (1-10 arası puan verin, 10 en çok)</label>
                <FormInput
                    label={`İş`}
                    value={values.workStress}
                    error={errors.workStress}
                    name="workStress"
                    type="number"
                    onChange={handleChange}
                />
                <FormInput
                    label={`Aile`}
                    value={values.familyStress}
                    error={errors.familyStress}
                    name="familyStress"
                    type="number"
                    onChange={handleChange}
                />
                <FormInput
                    label={`Sağlık`}
                    value={values.healtyStress}
                    error={errors.healtyStress}
                    name="healtyStress"
                    type="number"
                    onChange={handleChange}
                />
                <FormInput
                    label={`Sosyal`}
                    value={values.socialStress}
                    error={errors.socialStress}
                    name="socialStress"
                    type="number"
                    onChange={handleChange}
                />
                <FormInput
                    label={`Maddi`}
                    value={values.materialStress}
                    error={errors.materialStress}
                    name="materialStress"
                    type="number"
                    onChange={handleChange}
                />
                <FormInput
                    label={`Diğer`}
                    value={values.otherStress}
                    error={errors.otherStress}
                    name="otherStress"
                    type="number"
                    onChange={handleChange}
                />

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
                    name="molestation"
                    value={values.molestation}
                    error={errors?.molestation}
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
                        label={`Problemi açıklayınız `}
                        value={values.worshipDesc}
                        error={errors.worshipDesc}
                        name="worshipDesc"
                        type="text"
                        onChange={handleChange}
                    />
                }
            </div>

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
            {/* 
            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <label htmlFor="">Bebekken</label>
                <FormInputSelectOne
                    label="Annesütü/Ne kadar süre ?"
                    name="asABaby"
                    options={[
                        { value: "annesütü", label: "Annesütü" },
                        { value: "mama", label: "Mama" },
                        { value: "bilmiyorum", label: "Bilmiyorum" },
                    ]}
                    value={values.asABaby}
                    error={errors?.asABaby}
                    onChange={handleChange}
                />{
                    values.asABaby === "annesütü" && <FormInput
                        label={`Problemi açıklayınız `}
                        value={values.worshipDesc}
                        error={errors.worshipDesc}
                        name="worshipDesc"
                        type="text"
                        onChange={handleChange}
                    /> 
                    values.asABaby ==="mama" && <FormInput
                    label={`Problemi açıklayınız `}
                    value={values.worshipDesc}
                    error={errors.worshipDesc}
                    name="worshipDesc"
                    type="text"
                    onChange={handleChange}
                />
                values.asABaby ==="bilmiyorum" && <FormInput
                    label={`Problemi açıklayınız `}
                    value={values.worshipDesc}
                    error={errors.worshipDesc}
                    name="worshipDesc"
                    type="text"
                    onChange={handleChange}
                /> 
                }

            </div> */}

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
                    values.affectsYouSignificantly.includes("diğer") &&
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
                    values.exposedToAtWorkOrAtHome.includes("diğer") &&
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
                    <h2 className="font-nexa-regular text-[18px]">Erkek özel özgeçmiş:</h2>
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
                        values.suitablePartsForYou.includes("gece idrara çıkma") &&
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
                    <h2 className="font-nexa-regular text-[18px]">Kadın özel özgeçmiş:</h2>
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
                        type="date"
                        onChange={handleChange}
                    />

                    <FormInput
                        label={`Son adet tarihi ?`}
                        value={values.lastMenstrualAge}
                        error={errors.lastMenstrualAge}
                        name="lastMenstrualAge"
                        type="date"
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
                            type="date"
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
                            type="date"
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
                            type="date"
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
                        values.gynecologicalSymptoms.includes("cinsel yol ile bulaşan hastalık (açıklayınız)") &&
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

            <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start">
                <h2 className="font-nexa-regular text-[18px]">Tıbbi Özgeçmiş: Hastalıklar/Durumlar</h2>
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <label htmlFor="">EVET' i işaretle = Şu anda varsa, ÖNCE' yi işaretle = geçmişte varsa, Hayır' ı işaretle = yok ise.</label>

                <label>sindirim</label>
                <FormInputSelectOne
                    label="Hassas bağırsak sendromu"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Reflü"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Crohn hastalığı/ülseratif kolit"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Peptik ülser"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çölyak hastalığı"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Safrakesesi taşı"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInput
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
                />
                <label>Solunum</label>
                <FormInputSelectOne
                    label="Bronşit"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Astım"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Amfizem"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Zatürre"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sinüzit"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Uyku apnesi"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInput
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
                />

                <label>Boşaltım/Genital</label>
                <FormInputSelectOne
                    label="Böbrek taşı"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gut"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Interstisyel sistit"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sık mantar enfeksiyonu geçirmek"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sık idrar yolu enfeksiyonu geçirmek"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Cinsel işlev bozukluğu"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="UCinsel yol ile bulaşan hastalık"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInput
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
                />


                <label>Endokrin/Metabolik</label>
                <FormInputSelectOne
                    label="Diyabet"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hipotiroidi (Düşük tiroid hormonları)"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hipertiroidi (Yüksek tiroid hormonları)"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kısırlık"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Metabolik sendrom/insulin direnc"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yeme bozukluğu"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hipoglisemi"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInput
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
                />
                <label>Inflamatuvar/İmmün</label>
                <FormInputSelectOne
                    label="Romatoid artrit"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kronik yorgunluk sendromu"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Besin alerjileri"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çevresel alerjiler"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çoklu kimyasal hassasiyeti"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Otoimmün hastalık"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İmmün yetersizlik"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mononükleozis"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hepatiti"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInput
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
                />

                <label>Kasiskelet</label>
                <FormInputSelectOne
                    label="Fibromiyalji"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Osteoartrit"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kronik ağrı"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInput
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
                />

                <label>Deri</label>
                <FormInputSelectOne
                    label="Egzema"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Psoriyazis (sedef)"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Akne (sivilce)"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Deri kanseri"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInput
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
                />
                <label>Kalp-damar</label>
                <FormInputSelectOne
                    label="Göğüs ağrısı"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kalp krizi"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kalp yetmezliği"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hipertansiyon (yüksek kan basıncı)"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İnme"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yüksek kan yağları (kolesterol, trigliserit)"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Romatizmal ateş"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Aritmi (düzensiz kalp hızı)"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Murmur"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mitral kapak prolapsusu"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInput
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
                />

                <label>Nörolojik/Duygusal</label>
                <FormInputSelectOne
                    label="Epilepsi/Nöbet"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="ADD/ADHD (dikkat eksikliği)"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Başağrısı"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Migren"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Depresyon"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Anksiyete"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Otizm"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Multiple skleroz"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Parkinson"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Demans (bunama)"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInput
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
                />
                <label>Kanser</label>
                <FormInputSelectOne
                    label="Akciğer"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Meme"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kalın bağırsak"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Prostat"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Deri"
                    name="anotherTest"
                    options={EOH}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInput
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
                />
            </div>

            <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start">
                <h2 className="font-nexa-regular text-[18px]">Belirtilerin İncelenmesi</h2>
            </div>

            <div className="flex flex-col min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <label htmlFor="">Şu anda veya son 6 ay içinde bulunan şikayetleri ve şiddetini işaretleyin..</label>
                <label>Genel</label>
                <FormInputSelectOne
                    label="Soğuk eller ve ayaklar"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Soğuğa tahammülsüzlük"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gündüz uyuklama"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Uykuya dalmada güçlük"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Erken uyanma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yorgunluk"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ateş"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ateşbasması"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sıcağa tahammülsüzlük"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gece uyanmak"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kabus görmek"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Rüyalarımı hatırlamıyorum"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Düşük vücut sıcaklığı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <label>Baş, gözler ve kulaklar</label>
                <FormInputSelectOne
                    label="Konjuktivit"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Koku almada bozulma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Tat almada bozulma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İşitme kaybı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çınlama/işitme sorunlar"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gözde çapaklanma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gözde ağrı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="üGözkapağı kenarında kızarıklık"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Başağrısı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İşitme kaybı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İşitme problemleri"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Migren"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yüksek seslere hassasiyet"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Görme problemleri"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />

                <label>Kas-iskelet</label>
                <FormInputSelectOne
                    label="Sırt kasında spazm"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bacaklarda kramplar"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Göğüste sıkışma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ayak krampları"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Eklem deformitesi"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Eklem ağrısı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Eklemde kızarıklık"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Eklemde şişlik"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kas ağrısı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kas spazmı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kas şişliği"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kas seyrimes"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gözler çevresinde"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kollar veya bacaklarda"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kas güçsüzlüğü"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Boyun kas spazmı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Tendinit"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gerilim başarısı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çene eklemi uyumsuzluğu"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />


                <label>Duygudurum/Sinirler</label>
                <FormInputSelectOne
                    label="Agorafobi"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Anksiyete"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İşitsel halüsinasyonlar"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bilinç kaybı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Depresyon"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Konsantre olmada(Zorluk)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dengeyi sağlamada(Zorluk)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Düşünmede(Zorluk)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Muhakeme yapmada(Zorluk)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Konuşmada(Zorluk)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hafızada(Zorluk)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Başdönmesi"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bayılma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Korkmak"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gerginlik"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sersemlik"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Uyuşma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diğer fobiler"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Panik atak"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Paranoya"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Nöbet geçirmek"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İntihar düşünces"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karıncalanma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Tremor/titreme"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Görsel halüsinasyonlar"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />


                <label>Kalp-damar</label>
                <FormInputSelectOne
                    label="Anjina/Göğüs ağrısı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Nefes darlığı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kalp krizi"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kalpte üfürüm"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yüksek kan basıncı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ritim bozukluğu"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mitral kapak prolapsusu"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çarpıntı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Flebit"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Şişmişbilekler/ayaklar"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Varis"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />

                <label>İdrar yolları</label>

                <FormInputSelectOne
                    label="Yatağııslatma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İdrarı başlatmada zorluk"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Enfeksiyon"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Böbrek hastalığı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Böbrek taşı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İdrarını tutamama"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ağrı/yanma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                {user.Information?.Gender === "Erkek" && <><FormInputSelectOne
                    label="Prostat büyümes"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />

                    <FormInputSelectOne
                        label="Prostat enfeksiyonu"
                        name="anotherTest"
                        options={HOS}
                        value={values.anotherTest}
                        error={errors?.anotherTest}
                        onChange={handleChange}
                    />
                </>}
                <FormInputSelectOne
                    label="Sıkışma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />

                <label>Sindirim</label>

                <FormInputSelectOne
                    label="Anal spazm"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diş problemleri"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dişeti kanaması"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karnın alt bölümünde(Gaz)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bütün karında(Gaz)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yemekten hemen sonra(Gaz)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dışkıda kan"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Geğirmek"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ülser"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dudakta/ağızda uçuk"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kabızlık"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dudak kenarında çatlak"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dişprotezi/çiğneme sorunu"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İshal"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yutma güçlüğü"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kuru ağız"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gaz çıkarma (rektumdan)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Anüste çatlak"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Reflü"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Göğüste ağrı/yanma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hemoroid"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Laktoz(İntolerans)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mandıra ürünler(İntolerans)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gluten (buğday)(İntolerans)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mısır(İntolerans)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yumurta(İntolerans)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yağlı besinler(İntolerans)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Maya(İntolerans)"
                    name="anotherTest(İntolerans)"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karaciğer hastalığı/sarılık(sarı gözler ve cilt)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karının alt bölümünde ağrı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dışkıda mucus (sümüksü)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bulantı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Diş/dişeti hastalığı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dilde ağrı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kokulu dışkı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dışkıda sindirilmemişbesinler"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Üst karın ağrısı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kusma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />

                <label>Yeme Alışkanlığı</label>
                <FormInputSelectOne
                    label="Çok fazla yemek"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bulimia"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kilo alamama"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kilo verememe"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karbonhidrat özlemi"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Karbonhidrat intoleransı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İştahsızlık"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Tuz/tuzlu aşermek"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sık beslenmek"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Tatlı aşermek"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kafein bağımlılığı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />

                <label>Solunum</label>
                <FormInputSelectOne
                    label="Ağız kokusu"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Burunda kötü koku"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kuru öksürük"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Balgamlı öksürük"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="İlkbahar Nezlesi"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yaz Nezlesi"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sonbahar Nezlesi"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mevsim geçişlerinde"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ses kısıklığı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Burun tıkanıklığı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Burun kanaması"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Geniz akıntısı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sinüslerde dolgunluk"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Sinus enfeksiyonu"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Horlamak"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Boğaz ağrısı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hırıltı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kışın solunum sıkıntısı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />

                <label>Tırnaklar</label>


                <FormInputSelectOne
                    label="Kemirilmiş"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kırılgan"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kıvrılmış"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yıpranmış"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mantar – el parmaklarında"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mantar – ayak parmaklarında"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çukurlaşma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Düzensiz tırnak etleri"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Çizgiler"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yumuşak"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="El tırnakları(Kalınlaşma)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ayak tırnakları(Kalınlaşma)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Beyaz noktalar/çizgiler"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />


                <label>Lenf Bezleri</label>


                <FormInputSelectOne
                    label="Büyümüş/boyunda"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hassas/boyunda"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />


                <label>Deri, Kuruluk</label>


                <FormInputSelectOne
                    label="Gözler"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ayak çatlakları var mı?"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ayakta soyulma var mı?"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Saçta kontrol dışı durum var mı?"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ellerde çatlama var mı ?"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ellerde soyulma var mı ?"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ağız/boğaz"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kafa derisinde kepek var mı?"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Genel olarak cilt"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />


                <label>Deri Problemleri</label>

                <FormInputSelectOne
                    label="Sırtta sivilce"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Göğüste sivilce"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yüzde sivilce"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Omuzlarda sivilce"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Atlet ayağı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Üst kolların arkasında çarpma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Selülit"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Gözlerin altında koyu halka"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kırmızı kulaklar"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kolay morarma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Egzema"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Herpes (uçuk) – genital"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kurdeşen"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kasık mantarı"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Mat deri"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Benlerde değişiklik"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yağlı cilt"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Soluk cilt"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Cilt lekeleri"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Psoriazis (sedef)"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Döküntü"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kırmızı yüz"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Böcek ısırıklıklarına duyarlılık"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Zehirli sarmaşık vb duyarlılık"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Zona"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Deri kanseri"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Deride koyulaşma"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kötükokulu terleme"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Nasır"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Vitiligo"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />


                <label>Deride Kaşıntı</label>

                <FormInputSelectOne
                    label="Anüste"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kollarda"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Dış kulak yolunda"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ayaklarda"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Ellerde"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bacaklarda"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Meme başında"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Burunda"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Genital bölgede"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Damakta"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Kafa derisinde"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Genel olarak deride"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Boğazda"
                    name="anotherTest"
                    options={HOS}
                    value={values.anotherTest}
                    error={errors?.anotherTest}
                    onChange={handleChange}
                />
                {
                    user.Information?.Gender === "Erkek" && <>

                        <label>Erkek Üreme sistemi</label>

                        <FormInputSelectOne
                            label="Penisten boşalma"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="Boşalma problemi"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="Genital ağrı"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="Sertleşme sorunu"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="Enfeksiyon"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />

                        <FormInputSelectOne
                            label="Testiste kitle"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Düşük libido (sex isteğinde azalma)"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                    </>

                }


                {
                    user.Information?.Gender === "Kadın" && <>

                        <label>Kadın üreme</label>

                        <FormInputSelectOne
                            label="Memede kistler"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Memede yumru"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Memelerde hassasiyet"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Yumurtalık kisti"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Düşük Libido (cinsel istekte azalma)"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Endometriyozis"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Myom"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Üreme problemi"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Vajinal akıntı"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Vajinal koku"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Vajinal kaşıntı"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Vajinal ağrı"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi şişkinlik"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi memelerde hassasiyet"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi karbohidrat özlemi"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi çikolata özlemi"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi kabızlık"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi uykusuzluk"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi ishal"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi yorgunluk/tükenmişlik"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi daha çok uyumak"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet öncesi sinirlilik"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet dönemi kramplar"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet dönemi çok kanamalı"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet dönemi düzensiz"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet dönemi adet görmeme"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Adet dönemi kısa adet dönemi"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                        <FormInputSelectOne
                            label="Ara kanama/lekelenme"
                            name="anotherTest"
                            options={HOS}
                            value={values.anotherTest}
                            error={errors?.anotherTest}
                            onChange={handleChange}
                        />
                    </>
                }
            </div>

        </>
    );
}

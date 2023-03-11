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

export default function SubStep2Part11({
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
                <h2 className="font-nexa-regular text-[18px]">Hazırlık Değerlendirmesi ve Sağlık Hedefleri</h2>
            </div>

            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
               <label className="font-nexa-bold text-[20px] text-[#4E929D]">5 (çok istekli) ile 1 (istekli değil) arasında derecelendirin:</label>

               <label className="font-nexa-bold text-[20px] text-[#4E929D]">Sağlığınızı iyileştirmek için bunları yapmaya ne kadar isteklisiniz:</label>

                <FormInputSelectOne
                    label="Beslenmenizi önemli ölçüde değiştirmek"
                    name="anotherTest131"
                    options={[
                        { value: "5", label: "5" },
                        { value: "4", label: "4" },
                        { value: "3", label: "3" },
                        { value: "2", label: "2" },
                        { value: "1", label: "1" },
                    ]}
                    value={values.anotherTest131}
                    error={errors?.anotherTest131}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hergün birkaç besin takviyesi kullanmak"
                    name="anotherTest132"
                    options={[
                        { value: "5", label: "5" },
                        { value: "4", label: "4" },
                        { value: "3", label: "3" },
                        { value: "2", label: "2" },
                        { value: "1", label: "1" },
                    ]}
                    value={values.anotherTest132}
                    error={errors?.anotherTest132}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Hergün yediğiniz herseyini kaydını tutmak"
                    name="anotherTest133"
                    options={[
                        { value: "5", label: "5" },
                        { value: "4", label: "4" },
                        { value: "3", label: "3" },
                        { value: "2", label: "2" },
                        { value: "1", label: "1" },
                    ]}
                    value={values.anotherTest133}
                    error={errors?.anotherTest133}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Yaşamtarzınızı değiştirmek (çalışma temposunu, uyku alışkanlıklarını)"
                    name="anotherTest134"
                    options={[
                        { value: "5", label: "5" },
                        { value: "4", label: "4" },
                        { value: "3", label: "3" },
                        { value: "2", label: "2" },
                        { value: "1", label: "1" },
                    ]}
                    value={values.anotherTest134}
                    error={errors?.anotherTest134}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Bir rahatlama tekniği uygulamak"
                    name="anotherTest135"
                    options={[
                        { value: "5", label: "5" },
                        { value: "4", label: "4" },
                        { value: "3", label: "3" },
                        { value: "2", label: "2" },
                        { value: "1", label: "1" },
                    ]}
                    value={values.anotherTest135}
                    error={errors?.anotherTest135}
                    onChange={handleChange}
                />
                <FormInputSelectOne
                    label="Düzenli egzersiz yapmak"
                    name="anotherTest136"
                    options={[
                        { value: "5", label: "5" },
                        { value: "4", label: "4" },
                        { value: "3", label: "3" },
                        { value: "2", label: "2" },
                        { value: "1", label: "1" },
                    ]}
                    value={values.anotherTest136}
                    error={errors?.anotherTest136}
                    onChange={handleChange}
                />

               <label className="font-nexa-bold text-[20px] text-[#4E929D]">5 (çok emin) ile 1 (hiç emin değilim) arasında bir puan veriniz:</label>
                <FormInputSelectOne
                    label="Yukarıdaki sağlıkla ilgili faaliyetleri organize etmede ve
                    takip etmede kendinize ne kadar güveniyorsunuz?"
                    name="anotherTest137"
                    options={[
                        { value: "5", label: "5" },
                        { value: "4", label: "4" },
                        { value: "3", label: "3" },
                        { value: "2", label: "2" },
                        { value: "1", label: "1" },
                    ]}
                    value={values.anotherTest137}
                    error={errors?.anotherTest137}
                    onChange={handleChange}
                />

                <FormInput
                    label="Eğer kendinize güvenmiyorsanız, kendinizin veya hayatınızın
                    hangi yönlerinin bunu etkilediğini düşünüyorsunuz?"
                    name="anotherTest138"
                    value={values.anotherTest138}
                    error={errors?.anotherTest138}
                    onChange={handleChange}
                />

               <label className="font-nexa-bold text-[20px] text-[#4E929D]">5 (çok destekleyici) ile 1 (çok destekleyici değil) arasında derecelendirin:</label>
                <FormInputSelectOne
                    label="Şu anda, evdekilerin yukarıdaki değişiklikleri uygulamanıza ne
                    kadar destek olacağını düşünüyor sunuz?"
                    name="anotherTest139"
                    options={[
                        { value: "5", label: "5" },
                        { value: "4", label: "4" },
                        { value: "3", label: "3" },
                        { value: "2", label: "2" },
                        { value: "1", label: "1" },
                    ]}
                    value={values.anotherTest139}
                    error={errors?.anotherTest139}
                    onChange={handleChange}
                />

               <label className="font-nexa-bold text-[20px] text-[#4E929D]">5 (çok sık temas) ile 1 (çok seyrek temas) arasında derecelendirin</label>
                <FormInputSelectOne
                    label="Kişisel sağlık programınızı uygularken profesyonel kadromuzdan
                    alacağınız sürekli destek (örneğin telefon görüşmeler, e-mail
                    yazışmaları) size ne kadar yardımcı olacaktır?"
                    name="anotherTest140"
                    options={[
                        { value: "5", label: "5" },
                        { value: "4", label: "4" },
                        { value: "3", label: "3" },
                        { value: "2", label: "2" },
                        { value: "1", label: "1" },
                    ]}
                    value={values.anotherTest140}
                    error={errors?.anotherTest140}
                    onChange={handleChange}
                />

                <FormInput
                    label="Yorumlar"
                    name="anotherTest141"
                    value={values.anotherTest141}
                    error={errors?.anotherTest141}
                    onChange={handleChange}
                />
            </div>


            <div className="h-[60px] w-full pl-[20px] flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-start">
                <h2 className="font-nexa-regular text-[18px]">Sağlık Hedefleri</h2>
            </div>

            <div className="flex flex-col py-4 bg-[#F9F9F9] items-center px-[30px] gap-[30px]  w-[full]">
                <FormInput
                    label="Bizimle yaptığınız görüşmede ne elde etmeyi umuyorsunuz ? "
                    name="anotherTest142"
                    value={values.anotherTest142}
                    error={errors?.anotherTest142}
                    onChange={handleChange}
                />
                <FormInput
                    label="Kendinizi en son ne zaman iyi hissettiniz?"
                    name="anotherTest143"
                    value={values.anotherTest143}
                    error={errors?.anotherTest143}
                    onChange={handleChange}
                />
                <FormInput
                    label="Sağlığınızın etkilenmesine neden olan bir tetikleyici oldu ?"
                    name="anotherTest144"
                    value={values.anotherTest144}
                    error={errors?.anotherTest144}
                    onChange={handleChange}
                />
                <FormInput
                    label="Daha iyi hissetmene ne neden olur?"
                    name="anotherTest145"
                    value={values.anotherTest145}
                    error={errors?.anotherTest145}
                    onChange={handleChange}
                />
                <FormInput
                    label="Daha kötü hissetmene ne neden olur?"
                    name="anotherTest147"
                    value={values.anotherTest147}
                    error={errors?.anotherTest147}
                    onChange={handleChange}
                />
                <FormInput
                    label="Durumun seni nasıl etkiliyor?"
                    name="anotherTest148"
                    value={values.anotherTest148}
                    error={errors?.anotherTest148}
                    onChange={handleChange}
                />
                <FormInput
                    label="Sence sağlığını etkileyen ne ve neden etkiliyor?"
                    name="anotherTest149"
                    value={values.anotherTest149}
                    error={errors?.anotherTest149}
                    onChange={handleChange}
                />

                <FormInput
                    label="İyileşmen için ne olması gerektiğini düşünüyorsun?"
                    name="anotherTest150"
                    value={values.anotherTest150}
                    error={errors?.anotherTest150}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}

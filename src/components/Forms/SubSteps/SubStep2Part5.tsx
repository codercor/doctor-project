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
    return (
        <>
            <div className="min-h-[60px] w-full  pl-[20px] flex-col flex bg-[#E9EDD9]  text-[#5B623D] items-start justify-center">
                <h2 className="font-nexa-regular text-[18px]">Yaşam şeklinin değerlendirilmesi</h2>
            </div>
            <h3 className="font-nexa-regular text-[16px]">Beslenme</h3>
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
                    name="subStep2.x"
                    value={values.subStep2.x}
                />
                {
                    values.subStep2.x.includes("diğer") && (
                        <FormInput
                            label="Diğer ise açıklayınız"

                        />)
                }
            </div>
        </>
    );
}

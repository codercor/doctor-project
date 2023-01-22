import {Add} from "@mui/icons-material";
import React from "react";
import FormInput, {FormInputTextArea} from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";
import FormInputSelectMulti from "../FormInput/FormInputSelectMulti";

const EH = [
    {value: "evet", label: "Evet"},
    {value: "hayır", label: "Hayır"},
]

let diet = [
    {value: "vejetaryan", label: "Vejetaryan"},
    {value: "vegan", label: "Vegan"},
    {value: "alergi", label: "Alerji"},
    {value: "eliminasyon", label: "Eliminasyon"},
    {value: "kan grubu", label: "Kan grubu"},
    {value: "dusuk sodyum", label: "Düşük sodyum"},
    {value: "mandira yok", label: "Mandıra yok"},
    {value: "bugday yok", label: "Buğday yok"},
    {value: "glutensiz", label: "Glutensiz"},
    {value: "dusuk yagli", label: "Düşük yağlı"},
    {value: "dusuk karbonhidratli", label: "Düşük karbonhidratlı"},
    {value: "yuksek proteinli", label: "Yüksek Proteinli"},
    {value: "diğer", label: "Diğer"},
]

export default function SubStep3Part1({
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

    return (
        <>
            <div
                className="min-h-[60px] w-full  pl-[20px] flex-col flex bg-[#E9EDD9]  text-[#5B623D] items-start justify-center">
                <h2 className="font-nexa-regular text-[18px]">Yaşam şeklinin değerlendirilmesi</h2>
            </div>
            <h3 className="font-nexa-regular text-[16px]">Beslenme</h3>
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
                />
                <FormInputSelectOne
                    label="Kesintisiz mi?"
                    options={EH}
                    name="sleepQuality"
                    value={values.sleepQuality}
                    error={errors.sleepQuality}
                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Uykusuzluk sorununuz var mı?"
                    options={EH}
                    name="sleepProblem"
                    value={values.sleepProblem}
                    error={errors.sleepProblem}

                />
                <FormInputSelectOne
                    label="Horlar mısınız?"
                    options={EH}
                    name="snore"
                    value={values.snore}
                    error={errors.snore}

                />
                <FormInputSelectOne
                    label="Dinlenmiş olarak mı uyanırsınız?"
                    options={EH}
                    name="wakeUp"
                    value={values.wakeUp}
                    error={errors.wakeUp}

                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <FormInputSelectOne
                    label="Uyku ilacı kullanıyor musunuz?"
                    options={EH}
                    name="sleepPills"
                    value={values.sleepPills}
                    error={errors.sleepPills}

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
                            error={errors.sleepPillsDetail}
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
                />
            </div>
            <div className="flex min-h-[150px] bg-[#F9F9F9] items-center pl-[30px] gap-[30px]  w-[full]">
                <div className="flex flex-col">
                    <FormInputSelectOne
                        label="Egzersiz yapmaya istekli misiniz?"
                        options={[...EH, {value: "biraz", label: "Biraz"}]}
                        name="sleeping"
                    />
                    {
                        //son soru evet ise input açılacak
                        values.sleeping === "evet" && (
                            <FormInput
                                label="Evet ise açıklama"
                            />)
                    }
                </div>
                <div className="flex flex-col">
                    <FormInputSelectOne
                        label="Egzersiz sonrası aşırı yorgunluk ve ağrı hisseder misiniz?"
                        options={[...EH]}
                        name="sleeping"
                        value={values.sleeping}
                    />
                    {
                        values.sleeping === "evet" && (
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
                    name="x"
                    value={values.x}
                />
                {
                    values.x.includes("diğer") && (
                        <FormInput
                            label="Diğer ise açıklayınız"

                        />)
                }
            </div>
        </>
    );
}

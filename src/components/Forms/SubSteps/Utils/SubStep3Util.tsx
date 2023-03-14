import FormInput from "@components/Forms/FormInput/FormInput";

export const getTurkishTitle: any = (symptom: string) => {
    let tr = {
        headAche: "Baş Ağrısı",
        headDizziness: "Baygınlık",
        headNausea: "Başdönmesi",
        headSleeplessness: "Uykusuzluk",
        eyeWatering: "Sulu ve kaşıntılı gözler",
        eyeSwelling: "Şişmiş, kızarmış veya yapışkan göz kapakları",
        eyePuffiness: "Gözaltı torbaları veya koyu halkalar",
        eyeBlurryVision: "Bulanık görme veya net görememe (Yakın veya uzağı görememe dahil değildir)",
        earItching: "Kulakta kaşıntı",
        earPain: "Kulakta ağrı, enfeksiyon",
        earDischarge: "Kulaktan akıntı",
        earRinging: "Çınlama, işitme kaybı",
        noseCongestion: "Burun tıkanıklığı",
        noseSinus: "Sinüs problemleri",
        noseAllergy: "Saman nezlesi",
        noseSneezing: "Hapşırma atakları",
        noseMucus: "Aşırı mukus oluşumu",
        mouthCough: "Kronik öksürük",
        mouthCleaning: "Öğürmek, sık sık boğazı temizleme ihtiyacı",
        mouthPain: "Boğaz ağrısı, ses kısıklığı, sesin çıkmaması",
        mouthSwelling: "Şişmiş veya rengi değişmiş dil, diş etleri, dudaklar",
        mouthCotton: "Pamukçuk",
        skinAcne: "Akne (sivilce)",
        skinRash: "Kurdeşen, kızarıklıklar, kuru cilt",
        skinItching: "Saç kaybı",
        skinBaldness: "Kızarma, sıcak basmaları",
        skinSweating: "Aşırı terleme",
        heartIrregularity: "Düzensiz veya atlamalı kalp atışı",
        heartFast: "Hızlı veya şiddetli kalp atışı",
        heartChestPain: "Göğüs ağrısı",
        lungCongestion: "Göğüste tıkanıklık hissi",
        lungAsthma: "Astım, bronşit",
        lungShortnessOfBreath: "Nefes darlığı",
        lungBreathingDifficulties: "Nefes almada zorluk",
        digestiveNausea: "Bulantı, kusma",
        digestiveDiarrhea: "İshal",
        digestiveConstipation: "Kabızlık",
        digestiveBloating: "Şişkinlik hissi",
        digestiveGas: "Geğirme, gaz çıkarma",
        digestiveBurning: "Göğüste ağrılı yanma",
        digestiveStomachPain: "Bağırsak/mide ağrısı",
        jointsPain: "Eklemlerde ağrı",
        jointsArthritis: "Artrit",
        jointsStiffness: "Eklemlerde sertlik veya hareket kısıtlığı",
        jointsMusclePain: "Kaslarda ağrı",
        jointsFatigue: "Zayıflık veya yorgunluk hissi",
        weightOvereating: "Aşırı yeme/içme",
        weightCraving: "Belirli yiyecekleri özlemek",
        weightObesity: "Aşırı kilo",
        weightImpulseEating: "Dürtüsel yeme",
        weightWaterRetention: "Su tutma",
        weightWeightLoss: "Zayıf (düşük kilolu)",
        energyLethargy: "Yorgunluk halsizlik",
        energyApathy: "Apati, uyuşukluk",
        energyHyperactivity: "Hiperaktivite",
        energyRestlessness: "Huzursuzluk",
        mindMemory: "Zayıf hafıza",
        mindUnderstanding: "Karışıklık, anlamada zayıflık",
        mindConcentration: "Zayıf konsantrasyon",
        mindPhysicalCoordination: "Zayıf fiziksel koordinasyon",
        mindDecisionMaking: "Karar vermede zorluk",
        mindDizziness: "Kekemelik",
        mindSpeech: "Konuşma bozukluğu",
        mindLearning: "Öğrenme güçlüğü",
        emotionalVibration: "Duygusal dalgalanma",
        emotionalObsession: "Anksiyete, korku, gergin",
        emotionalAngry: "Öfke, sinirlilik, saldırganlık",
        emotionalDepression: "Depresyon",
        otherFrequentIllness: "Sık sık hastalanma",
        otherFrequentUrination: "Sık veya acil idrara çıkma",
        otherGenitalItching: "Genital kaşıntı veya akıntı",
    }
    // @ts-ignore
    return (tr[symptom] || "xxxxx")
}
export const getSectionTitle = (symptom: string) => {
    if (symptom.startsWith("head")) return "Baş";
    if (symptom.startsWith("eye")) return "Gözler";
    if (symptom.startsWith("ear")) return "Kulaklar";
    if (symptom.startsWith("nose")) return "Burun";
    if (symptom.startsWith("mouth")) return "Ağız/Boğaz";
    if (symptom.startsWith("skin")) return "Deri";
    if (symptom.startsWith("heart")) return "Kalp";
    if (symptom.startsWith("lung")) return "Akciğerler";
    if (symptom.startsWith("digestive")) return "Sindirim";
    if (symptom.startsWith("joints")) return "Eklemler/Kaslar";
    if (symptom.startsWith("weight")) return "Ağırlık";
    if (symptom.startsWith("energy")) return "Enerji/Aktivite";
    if (symptom.startsWith("mind")) return "Zihin";
    if (symptom.startsWith("emotional")) return "Duygusal";
    if (symptom.startsWith("other")) return "Diğer";
    return "başlıksız";
}


export const Sections = [
    "head",
    "eye",
    "ear",
    "nose",
    "mouth",
    "skin",
    "heart",
    "lung",
    "digestive",
    "joints",
    "weight",
    "energy",
    "mind",
    "emotional",
    "other"
]

export function generateForm(key: string, values: any, errors: any, handleChange: (e: any) => any | void, readOnly: boolean = false) {
    const symptoms = Object.keys(values).filter((s) => s.startsWith(key))

    return (<>
        <h3 className="font-nexa-regular text-[22px] text-[#4E929D]">{getSectionTitle(key)}</h3>
        {
            symptoms.map((symptom, index) => (<>
                <FormInput
                    name={symptom}
                    label={getTurkishTitle(symptom)}
                    type="number"
                    error={errors[symptom]}
                    value={values[symptom]}
                    onChange={(e) => {
                        e.currentTarget.value = Number(e.currentTarget.value).toString()
                        handleChange(e)
                    }}
                    disabled={readOnly}

                />
            </>))

        }
        <h1> Toplam {symptoms.reduce((p, c) => {
            return p + values[c];
        }, 0)} </h1>

    </>)
}
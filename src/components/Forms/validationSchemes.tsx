import * as Yup from "yup";

export const multiSelectValidationSchema = Yup.array()
    .of(Yup.string())
    .required("Zorunlu alan")
    .min(1, "Zorunlu alan");
export const singleSelectValidationSchema =
    Yup.string().required("Zorunlu alan");
export const textValidationSchema = Yup.string().required("Zorunlu alan");


export const flow2FormValidationSchema = Yup.object({
    parrentTolarance: singleSelectValidationSchema,
    motherMilk: singleSelectValidationSchema,
    solidFood: singleSelectValidationSchema,
    babyAllergy: singleSelectValidationSchema,
    childFoodReact: singleSelectValidationSchema,
    childFoodAccess: singleSelectValidationSchema,
    childFoodDisorder: singleSelectValidationSchema,
    foodDisorder: textValidationSchema,
    favoriteFood: textValidationSchema,
    mostEatenFood: textValidationSchema,
    foodPreparedBy: textValidationSchema,
    foodPurchasedBy: textValidationSchema,
    cookingFrequency: textValidationSchema,
    mostNutritiousFood: textValidationSchema,
    leastNutritiousFood: textValidationSchema,
    extraInfo: textValidationSchema,
    purposeOfFinal: textValidationSchema,
});

export const flow1FormValidationSchema = Yup.object({
    //min >= 2 words required
    fullName: Yup.string()
        .required("Zorunlu alan") //min 2 max 3 words
        .matches(
            /^[a-zA-ZşŞıİçÇöÖüÜ]+(?:[\s-][a-zA-ZşŞıİçÇöÖüÜ]+){1,3}$/,
            "Geçerli bir isim giriniz"
        ),
    age: Yup.number().required("Zorunlu alan"),
    gender: Yup.string()
        .required("Zorunlu alan")
        .oneOf(["kadın", "erkek", "diger"], "Cinsiyet seçiniz"),
    email: Yup.string()
        .email("Geçerli bir email giriniz")
        .required("Zorunlu alan"),
    phone: textValidationSchema,
    country: textValidationSchema,
    city: textValidationSchema,
    identifiedDiseases: textValidationSchema,
    currentMedicationsAndTreatments: textValidationSchema,
    usedSupplementsAndTime: textValidationSchema,
    shortStory: textValidationSchema,
    purposeOfMeeting: textValidationSchema,
    meetingType: textValidationSchema,
});

export const flow3FormValidationSchema = Yup.object({
    name: textValidationSchema,
    age: textValidationSchema,
    date: textValidationSchema,
    birthDate: textValidationSchema,
    email: textValidationSchema,
    address: textValidationSchema,
    city: textValidationSchema,
    phoneCell: textValidationSchema,
    geneticHistory: textValidationSchema,
    geneticHistoryOther: Yup.string().when("geneticHistory", {
        is: (geneticHistory: string) => geneticHistory === "Diğer",
        then: Yup.string().required("Bu alan zorunludur"),
    }),
    lastHealt: textValidationSchema,
    emergencyContact: textValidationSchema,
    emergencyContactRelation: textValidationSchema,
    emergencyContactPhoneCell: textValidationSchema,
    whereDidYouHear: textValidationSchema,
    whereDidYouHearOther: Yup.string().when("whereDidYouHear", {
        is: (whereDidYouHear: string) => whereDidYouHear === "Diğer",
        then: Yup.string().required("Bu alan zorunludur"),
    }),
    currentDisease: Yup.array().of(
        Yup.object().shape({
            problem: Yup.string().required("Zorunlu"),
            severity: Yup.string().required("Zorunlu"),
            treatment: Yup.string().required("Zorunlu"),
            success: Yup.string().required("Zorunlu"),
        })
    ),
    allergies: Yup.array().of(
        Yup.object().shape({
            food: Yup.string().required("Zorunlu"),
            reaction: Yup.string().required("Zorunlu"),
        })
    ),
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
    diet: Yup.array().of(
        Yup.string().required("Bu alan zorunludur")
    ),
    foodSensitivity: Yup.string().required("Bu alan zorunludur"),
    foodSensitivityDetail: Yup.string().when("foodSensitivity", {
        is: "evet",
        then: Yup.string().required("Bu alan zorunludur")
    }),
    foodAvoid: Yup.string().required("Bu alan zorunludur"),
    foodAvoidDetail: Yup.string().when("foodAvoid", {
        is: "evet",
        then: Yup.string().required("Bu alan zorunludur")
    }),
    foodsReaction: Yup.array().required("Bu alan zorunludur"),
    foodsReactionDetail: Yup.string().when("foodsReaction", {
        is: (val: any) => val.includes("diğer"),
        then: Yup.string().required("Bu alan zorunludur")
    }),
    foodsLike: Yup.string().required("Bu alan zorunludur"),
    foodsLikeDetail: Yup.string().when("foodsLike", {
        is: "evet",
        then: Yup.string().required("Bu alan zorunludur")
    }),
    threeMeal: Yup.string().required("Bu alan zorunludur"),
    threeMealDetail: Yup.string().when("threeMeal", {
        is: "hayır",
        then: Yup.string().required("Bu alan zorunludur")
    }),
    skipMeal: Yup.string().required("Bu alan zorunludur"),
    skipMealDetail: Yup.string().when("skipMeal", {
        is: "evet",
        then: Yup.string().required("Bu alan zorunludur")
    }),
    outsideMeal: Yup.string().required("Bu alan zorunludur"),
})


const form4NumberInputValidation = Yup.number().required("Bu alan zorunludur").min(0, "Minimum 0 giriniz").max(4, "Maximum 4 giriniz")


export const flow4FormValidationSchema = Yup.object({
    headAche: form4NumberInputValidation,
    headDizziness: form4NumberInputValidation,
    headNausea: form4NumberInputValidation,
    headSleeplessness: form4NumberInputValidation,
    eyeWatering: form4NumberInputValidation,
    eyeSwelling: form4NumberInputValidation,
    eyePuffiness: form4NumberInputValidation,
    eyeBlurryVision: form4NumberInputValidation,
    earItching: form4NumberInputValidation,
    earPain: form4NumberInputValidation,
    earDischarge: form4NumberInputValidation,
    earRinging: form4NumberInputValidation,
    noseCongestion: form4NumberInputValidation,
    noseSinus: form4NumberInputValidation,
    noseAllergy: form4NumberInputValidation,
    noseSneezing: form4NumberInputValidation,
    noseMucus: form4NumberInputValidation,
    mouthCough: form4NumberInputValidation,
    mouthCleaning: form4NumberInputValidation,
    mouthPain: form4NumberInputValidation,
    mouthSwelling: form4NumberInputValidation,
    mouthCotton: form4NumberInputValidation,
    skinAcne: form4NumberInputValidation,
    skinRash: form4NumberInputValidation,
    skinItching: form4NumberInputValidation,
    skinBaldness: form4NumberInputValidation,
    skinSweating: form4NumberInputValidation,
    heartIrregularity: form4NumberInputValidation,
    heartFast: form4NumberInputValidation,
    heartChestPain: form4NumberInputValidation,
    lungCongestion: form4NumberInputValidation,
    lungAsthma: form4NumberInputValidation,
    lungShortnessOfBreath: form4NumberInputValidation,
    lungBreathingDifficulties: form4NumberInputValidation,
    digestiveNausea: form4NumberInputValidation,
    digestiveDiarrhea: form4NumberInputValidation,
    digestiveConstipation: form4NumberInputValidation,
    digestiveBloating: form4NumberInputValidation,
    digestiveGas: form4NumberInputValidation,
    digestiveBurning: form4NumberInputValidation,
    digestiveStomachPain: form4NumberInputValidation,
    jointsPain: form4NumberInputValidation,
    jointsArthritis: form4NumberInputValidation,
    jointsStiffness: form4NumberInputValidation,
    jointsMusclePain: form4NumberInputValidation,
    jointsFatigue: form4NumberInputValidation,
    weightOvereating: form4NumberInputValidation,
    weightCraving: form4NumberInputValidation,
    weightObesity: form4NumberInputValidation,
    weightImpulseEating: form4NumberInputValidation,
    weightWaterRetention: form4NumberInputValidation,
    weightWeightLoss: form4NumberInputValidation,
    energyLethargy: form4NumberInputValidation,
    energyApathy: form4NumberInputValidation,
    energyHyperactivity: form4NumberInputValidation,
    energyRestlessness: form4NumberInputValidation,
    mindMemory: form4NumberInputValidation,
    mindUnderstanding: form4NumberInputValidation,
    mindConcentration: form4NumberInputValidation,
    mindPhysicalCoordination: form4NumberInputValidation,
    mindDecisionMaking: form4NumberInputValidation,
    mindDizziness: form4NumberInputValidation,
    mindSpeech: form4NumberInputValidation,
    mindLearning: form4NumberInputValidation,
    emotionalVibration: form4NumberInputValidation,
    emotionalObsession: form4NumberInputValidation,
    emotionalAngry: form4NumberInputValidation,
    emotionalDepression: form4NumberInputValidation,
    otherFrequentIllness: form4NumberInputValidation,
    otherFrequentUrination: form4NumberInputValidation,
    otherGenitalItching: form4NumberInputValidation,
})





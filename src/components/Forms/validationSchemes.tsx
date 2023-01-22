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
        then: textValidationSchema,
    }),
    lastHealt: textValidationSchema,
    emergencyContact: textValidationSchema,
    emergencyContactRelation: textValidationSchema,
    emergencyContactPhoneCell: textValidationSchema,
    whereDidYouHear: textValidationSchema,
    whereDidYouHearOther: Yup.string().when("whereDidYouHear", {
        is: (whereDidYouHear: string) => whereDidYouHear === "Diğer",
        then: textValidationSchema,
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
    sleepHours: textValidationSchema,
    sleepDifficulty: textValidationSchema,
    sleepQuality: textValidationSchema,
    sleepProblem: textValidationSchema,
    snore: textValidationSchema,
    wakeUp: textValidationSchema,
    sleepPills: textValidationSchema,
    sleepPillsDetail: Yup.string().when("sleepPills", {
        is: (sleepPills: string) => sleepPills === "evet",
        then: textValidationSchema,
    }),
    diet: Yup.array().of(
        textValidationSchema
    ),
    foodSensitivity: textValidationSchema,
    foodSensitivityDetail: Yup.string().when("foodSensitivity", {
        is: "evet",
        then: textValidationSchema
    }),
    foodAvoid: textValidationSchema,
    foodAvoidDetail: Yup.string().when("foodAvoid", {
        is: "evet",
        then: textValidationSchema
    }),
    foodsReaction: Yup.array().required("Bu alan zorunludur"),
    foodsReactionDetail: Yup.string().when("foodsReaction", {
        is: (val: any) => val.includes("diğer"),
        then: textValidationSchema
    }),
    foodsLike: textValidationSchema,
    foodsLikeDetail: Yup.string().when("foodsLike", {
        is: "evet",
        then: textValidationSchema
    }),
    threeMeal: textValidationSchema,
    threeMealDetail: Yup.string().when("threeMeal", {
        is: "hayır",
        then: textValidationSchema
    }),
    skipMeal: textValidationSchema,
    skipMealDetail: Yup.string().when("skipMeal", {
        is: "evet",
        then: textValidationSchema
    }),
    outsideMeal: textValidationSchema,

    currentDiet: Yup.array().of(
        textValidationSchema
    ),

    currentDietOther: textValidationSchema,
    otherEgzersiz: textValidationSchema


})
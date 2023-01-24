import { text } from "node:stream/consumers";
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
    exerciseTable:textValidationSchema,
    exerciseRegimen:textValidationSchema,
    exerciseRegimenDesc:textValidationSchema,
    exerciseLater:textValidationSchema,
    exerciseLaterDesc:textValidationSchema,
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
    lifestyleAboutEating: Yup.array().of(
        textValidationSchema
    ),
    currentDiet: Yup.array().of(
        textValidationSchema
    ),

    currentDietOther: textValidationSchema,
    breakfast:textValidationSchema,
    lunch:textValidationSchema,
    dinner:textValidationSchema,
    snacks:textValidationSchema,
    beverages:textValidationSchema,
    fruit:textValidationSchema,
    vegetable: textValidationSchema,
    legumes:textValidationSchema,
    redMeat:textValidationSchema,
    fish:textValidationSchema,
    dairyProducts:textValidationSchema,
    nutsAndSeeds:textValidationSchema,
    oil:textValidationSchema,
    cannedDrink:textValidationSchema,
    dessert:textValidationSchema,
    caffeinatedBeverage:textValidationSchema,
    caffeinatedBeverageYes:textValidationSchema,
    coffeQuantity:textValidationSchema,
    teaQuantity:textValidationSchema,
    carbonatedCoffeeQuantity:textValidationSchema,
    caffeineReaction:textValidationSchema,
    caffeineReactionDesc:textValidationSchema,
    caffeineSensation:Yup.array().of(
        textValidationSchema
    ),
    smoke:textValidationSchema,
    smokeType:Yup.array().of(
        textValidationSchema
    ),
    smokeQuantity:textValidationSchema,
    smokeYear:textValidationSchema,
    smokeBlock:textValidationSchema,
    smokeBlockDesc:textValidationSchema,
    oldSmoke:textValidationSchema,
    oldSmokeQuantity:textValidationSchema,
    oldSmokeYear:textValidationSchema,
    cigaretteSmoke:textValidationSchema,
    alcoholWeek:textValidationSchema,
    oldAlcohol:textValidationSchema,
    oldAlcoholProblems:textValidationSchema,
    oldAlcoholProblemsWhatTime:textValidationSchema,
    oldAlcoholProblemsDesc:textValidationSchema,
    oldAlcoholProblemsHelp:textValidationSchema,
    recreationalDrug:textValidationSchema,
    recreationalDrugDesc:textValidationSchema,
    inhaledSubstance:textValidationSchema,
    stress:textValidationSchema,
    copeWithStress:textValidationSchema,
    relaxationTechniques:textValidationSchema,
    relaxationTechniquesDesc:textValidationSchema,
    techniques:Yup.array().of(
        textValidationSchema
    ),
    techniquesDesc:textValidationSchema,
    consultancy:textValidationSchema,
    therapy:textValidationSchema,
    therapyDesc: textValidationSchema,
    molestation:textValidationSchema,
    maritalStatus:textValidationSchema,
    liveWith:textValidationSchema,
    job:textValidationSchema,
    oldJob:textValidationSchema,
    emotionalSupport:textValidationSchema,
    emotionalSupportSelect: Yup.array().of(
        textValidationSchema
    ),
    emotionalSupportOther:Yup.string().when("emotionalSupportSelect", {
        is: (val: any) => val.includes("diger"),
        then: textValidationSchema
    }),
    general:textValidationSchema,
    school:textValidationSchema,
    businessLife:textValidationSchema,
    socialLife:textValidationSchema,
    bestFriend:textValidationSchema,
    sexuality:textValidationSchema,
    position:textValidationSchema,
    withBoyFriendAndGirlFriend:textValidationSchema,
    children:textValidationSchema,
    parents:textValidationSchema,
    partner:textValidationSchema,
    birth:Yup.array().of(
        textValidationSchema
    ),
    birthComplication:textValidationSchema,
    birthComplicationDesc:textValidationSchema,


    solidFoods:textValidationSchema,
    wheat:textValidationSchema,
    dairy:textValidationSchema,
    avoidedFood:textValidationSchema,
    sugarOrSweet:textValidationSchema,
    silverMercuryFiller:textValidationSchema,
    silverMercuryFillerDesc: textValidationSchema,
    GoldFiller:textValidationSchema,
    GoldFillerDesc:textValidationSchema,
    rootCanalTreatment:textValidationSchema,
    rootCanalTreatmentDesc:textValidationSchema,
    Implant:textValidationSchema,
    ImplantDesc:textValidationSchema,
    platingMetal:textValidationSchema,
    platingMetalDesc:textValidationSchema,
    toothache:textValidationSchema,
    toothacheDesc:textValidationSchema,
    bleedingGums:textValidationSchema,
    bleedingGumsDesc:textValidationSchema,
    gumProblem:textValidationSchema,
    gumProblemDesc:textValidationSchema,
    chewingProblems:textValidationSchema,
    chewingProblemsDesc:textValidationSchema,
    otherDentalProblems:textValidationSchema,
    otherDentalProblemsDesc:textValidationSchema,
    removingYourMercuryFiller:textValidationSchema,
    removingYourMercuryFillerDesc:textValidationSchema,
    howManyFillersAsAChild:textValidationSchema,
    brushingTeeth:textValidationSchema,
    floss:textValidationSchema,
    affectsYouSignificantly:Yup.array().of(
        textValidationSchema
    ),
    affectsYouSignificantlyDesc:textValidationSchema,
    exposedToAtWorkOrAtHome:Yup.array().of(
        textValidationSchema
    ),
    exposedToAtWorkOrAtHomeDesc:textValidationSchema,
    significantExposureToHarmfulChemical:textValidationSchema,
    significantExposureToHarmfulChemicalDesc:textValidationSchema,
    petOrFarmAnimal:textValidationSchema,
    petOrFarmAnimalDesc:textValidationSchema,
    suitablePartsForYou:Yup.array().of(
        textValidationSchema
    ),
    suitablePartsForYouPeeDesc:textValidationSchema,
    suitablePartsForYouSexualDesc:textValidationSchema,
    psa:textValidationSchema,
    psaValue:textValidationSchema,
    otherTest:textValidationSchema,
    pregnancy:textValidationSchema,
    pregnancyCount:textValidationSchema,
    low:textValidationSchema,
    lowCount:textValidationSchema,
    abortion:textValidationSchema,
    abortionCount:textValidationSchema,
    livingChild:textValidationSchema,
    livingChildCount:textValidationSchema,
    naturalChildbirth:textValidationSchema,
    naturalChildbirthCount:textValidationSchema,
    cesareanDelivery:textValidationSchema,
    cesareanDeliveryCount:textValidationSchema,
    birthdayOnTheDay:textValidationSchema,
    birthdayOnTheDayCount:textValidationSchema,
    premature:textValidationSchema,
    prematureCount:textValidationSchema,
    bigbaby:textValidationSchema,
    bigbabyCount:textValidationSchema,
    smallbaby:textValidationSchema,
    smallbabyCount:textValidationSchema,
    postPregnancyProblems:textValidationSchema,
    postPregnancyProblemsDesc:textValidationSchema,

    //date alan
    firstMenstrualAge:textValidationSchema,
    lastMenstrualAge:textValidationSchema,


    menstruationInterval:textValidationSchema,
    menstrualPeriod:textValidationSchema,
    menstrualCramp:textValidationSchema,
    menstrualPain:textValidationSchema,
    menstrualProblems:textValidationSchema,
    menstrualProblemsDesc:textValidationSchema,
    lastMenstrualProblems:textValidationSchema,
    lastMenstrualProblemsDesc:textValidationSchema,
    hormonalBirthControl:textValidationSchema,
    hormonalBirthControlDesc:textValidationSchema,
    anotherMethod:textValidationSchema,
    anotherMethods:Yup.array().of(
        textValidationSchema
    ),
    IsMenopause:textValidationSchema,
    MenopauseLastedAge:textValidationSchema,
    surgicalMenopause:textValidationSchema,
    surgicalMenopauseDesc:textValidationSchema,
    menopauseComplaints:Yup.array().of(
        textValidationSchema
    ),
    hormoneTherapy:textValidationSchema,
    hormoneTherapyDesc:textValidationSchema,
    gynecologicalSymptoms:Yup.array().of(
        textValidationSchema
    ),
    gynecologicalSymptomsDesc:textValidationSchema,
    smearTest:textValidationSchema,
    smearTestResponse:textValidationSchema,
    mammographyTest:textValidationSchema,
    mammographyTestResponse:textValidationSchema,
    bone:textValidationSchema,
    boneResponse:textValidationSchema,
    anotherTest:textValidationSchema,
    anotherTestDesc:textValidationSchema



















})
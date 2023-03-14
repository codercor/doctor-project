"use-client"

import * as Yup from "yup";

const getGender = () => {
    if (typeof window === "undefined") {
        return null;
    }
    const state = localStorage.getItem("persist:root");
    if (state) {
        console.log("state", state);
        const parsedState = JSON.parse(state);
        const user = JSON.parse(parsedState.user);
        console.log("Gender", user.Information.Gender)

        return user.Information.Gender
    }
}


let gender = getGender();


const numberValidationNonRequired = Yup.number().min(0, "Minumum 0 olabilir")

const numberValidationRequired = Yup.number().min(0, "Minumum 0 olabilir").required("Zorunlu alan");

export const multiSelectValidationSchema = Yup.array()
    .of(Yup.string())
    .required("Zorunlu alan")
    .min(1, "Zorunlu alan");
export const singleSelectValidationSchema = Yup.string().required("Zorunlu alan");

export const textValidationSchema = Yup.string().required("Zorunlu alan");

export const freeTextValidationSchema = Yup.string()

const form4NumberInputValidation = Yup.number().required("Bu alan zorunludur").min(0, "Minimum 0 giriniz").max(4, "Maximum 4 giriniz")

export function SelectIsValueValidation(name: string, value: string = "evet") {

    return Yup.string().when(name, {
        is: (val: string) => val === value,
        then: Yup.string().required("Zorunlu alan"),
        otherwise: Yup.string(),
    })
}

export function SelectIsNumberValueValidation(name: string, value: string = "evet") {
    return Yup.number().when(name, {
        is: (val: string) => val === value,
        then:Yup.number().min(0, "Minumum 0 olabilir").required("Zorunlu alan"),
        otherwise: Yup.number().min(0, "Minumum 0 olabilir"),
    })

}


export function SelectIsValueValidationArray(name: string, value: string = "evet") {

    return Yup.array().when(name, {
        is: (val: string) => val === value,
        then: Yup.array().required("Zorunlu alan").min(1, "En az birini seçiniz."),
    })
}


export function SelectIsValueValidationArrayRequired(name: string, value: string = "evet") {

    return Yup.string().when(name, {
        is: (val: string[]) => val.includes(value),
        then: Yup.string().required("Zorunlu alan"),
    })
}



export function SelectValueIncludeValidation(name: string, value: string = "evet") {

    return Yup.string().when(name, {
        is: (val: string[]) => {
            val.includes(value)
        },
        then: Yup.string().required("Zorunlu alan"),
        otherwise: Yup.string(),
    })
}


//düzenlenecek
export function SelectIsValueHOSValidation(name: string, value: string = "") {

    return Yup.string().when(name, {
        is: (name: string) => (name == "hafif" || name == "orta" || name == "şiddetli"),
        then: Yup.string().required("Zorunlu alan"),
        otherwise: Yup.string(),
    })
}

export const flow1FormValidationSchema = Yup.object({

    //min >= 2 words required
    fullName: Yup.string()
        .required("Zorunlu alan") //min 2 max 3 words
        .matches(
            /^[a-zA-ZşŞıİçÇöÖüÜ]+(?:[\s-][a-zA-ZşŞıİçÇöÖüÜ]+){1,3}$/,
            "Geçerli bir isim giriniz"
        ),
    age: Yup.number().min(0, "Minumum 0 olabilir").required("Zorunlu alan"),
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

export const flow2FormValidationSchema = Yup.object({
    parrentTolarance: singleSelectValidationSchema,
    parrentTolaranceDesc: Yup.string().when("parrentTolarance", {
        is: (parrentTolarance: string) => parrentTolarance === "evet",
        then: Yup.string().required("Zorunlu alan"),
        otherwise: Yup.string(),
    }),
    motherMilk: singleSelectValidationSchema,
    motherMilkDesc: Yup.string().when("motherMilk", {
        is: (motherMilk: string) => motherMilk === "anne sutu" || motherMilk === "Anne Sütü ve Formül Mama",
        then: Yup.string().required("Zorunlu alan"),
        otherwise: Yup.string(),
    }),
    motherMilkDesc1: Yup.string().when("motherMilk", {
        is: (motherMilk: string) => motherMilk === "formül mama" || motherMilk === "Anne Sütü ve Formül Mama",
        then: Yup.string().required("Zorunlu alan"),
        otherwise: Yup.string(),
    }),

    solidFood: singleSelectValidationSchema,
    solidFoodDesc: SelectIsValueValidation("solidFood"),
    babyAllergy: singleSelectValidationSchema,
    babyAllergyDesc: SelectIsValueValidation("babyAllergy"),
    childFoodReact: singleSelectValidationSchema,
    childFoodReactDesc: SelectIsValueValidation("childFoodReact"),
    childFoodAccess: singleSelectValidationSchema,
    childFoodDisorder: singleSelectValidationSchema,
    childFoodDisorderDesc: SelectIsValueValidation("childFoodDisorder"),
    foodDisorder: textValidationSchema,
    foodDisorderDesc: SelectIsValueValidation("foodDisorder"),
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

export const flow3FormValidationSchema = Yup.object({
    motherMilk: singleSelectValidationSchema,
    motherMilkDesc: Yup.string().when("motherMilk", {
        is: (motherMilk: string) => motherMilk === "anne sutu" || motherMilk === "Anne Sütü ve Formül Mama",
        then: Yup.string().required("Zorunlu alan"),
    }),
    motherMilkDesc1: Yup.string().when("motherMilk", {
        is: (motherMilk: string) => motherMilk === "formül mama" || motherMilk === "Anne Sütü ve Formül Mama",
        then: Yup.string().required("Zorunlu alan"),
    }),
    //name: textValidationSchema,
    //age: Yup.number().min(0,"Minumum 0 olabilir").required("Zorunlu alan"),
    //birthDate: textValidationSchema,
    //email: Yup.string()
    //.email("Geçerli bir email giriniz")
    //.required("Zorunlu alan"),
    //address: textValidationSchema,
    //city: textValidationSchema,
    //phoneCell: textValidationSchema,
    lastHealt: textValidationSchema,
    emergencyContact: textValidationSchema,
    emergencyContactRelation: textValidationSchema,
    emergencyContactPhoneCell: textValidationSchema,
    whereDidYouHear: textValidationSchema,
    whereDidYouHearOther: SelectIsValueValidation("whereDidYouHear", "Diğer"),
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
    sleepHours: numberValidationNonRequired,
    sleepDifficulty: textValidationSchema,
    sleepQuality: textValidationSchema,
    sleepProblem: textValidationSchema,
    snore: textValidationSchema,
    wakeUp: textValidationSchema,
    sleepPills: textValidationSchema,
    sleepPillsDetail: SelectIsValueValidation("sleepPills"),
    //exercise: textValidationSchema,
    exerciseWant: textValidationSchema,
    exerciseDisability: textValidationSchema,
    exerciseDisabilityDesc: SelectIsValueValidation("exerciseDisability"),
    exerciseLater: textValidationSchema,
    exerciseLaterDesc: freeTextValidationSchema,
    diet: Yup.array().of(
        textValidationSchema
    ),
    dietDesc: Yup.string().when("diet", {
        is: (val: any) => val.includes("diğer"),
        then: textValidationSchema
    }),
    foodSensitivity: textValidationSchema,
    foodSensitivityDetail: SelectIsValueValidation("foodSensitivity"),
    foodAvoid: textValidationSchema,
    foodAvoidDetail: SelectIsValueValidation("foodAvoid"),
    foodsReaction: Yup.array().required("Bu alan zorunludur"),
    foodsReactionDetail: Yup.string().when("foodsReaction", {
        is: (val: any) => val.includes("diğer"),
        then: textValidationSchema
    }),
    foodsLike: textValidationSchema,
    foodsLikeDetail: SelectIsValueValidation("foodsLike"),
    threeMeal: textValidationSchema,
    threeMealDetail: SelectIsValueValidation("threeMeal", "hayır"),
    skipMeal: textValidationSchema,
    skipMealDetail: SelectIsValueValidation("skipMeal"),
    outsideMeal: textValidationSchema,
    lifestyleAboutEating: Yup.array().of(
        textValidationSchema
    ),
    currentDiet: Yup.array().of(
        textValidationSchema
    ),

    //currentDietOther: freeTextValidationSchema,
   
    sy1: numberValidationNonRequired,
    sy2: numberValidationNonRequired,
    sy3: numberValidationNonRequired,
    sy4: numberValidationNonRequired,
    sy5: numberValidationNonRequired,
    sy6: numberValidationNonRequired,
    sy7: numberValidationNonRequired,
    sy8: numberValidationNonRequired,
    sy9: numberValidationNonRequired,
    sy10: numberValidationNonRequired,
    sy11: numberValidationNonRequired,
    sy12: numberValidationNonRequired,
    sy13: numberValidationNonRequired,
    oy1: numberValidationNonRequired,
    oy2: numberValidationNonRequired,
    oy3: numberValidationNonRequired,
    oy4: numberValidationNonRequired,
    oy5: numberValidationNonRequired,
    oy6: numberValidationNonRequired,
    oy7: numberValidationNonRequired,
    oy8: numberValidationNonRequired,
    oy9: numberValidationNonRequired,
    oy10: numberValidationNonRequired,
    oy11: numberValidationNonRequired,
    oy12: numberValidationNonRequired,
    oy13: numberValidationNonRequired,
    breakfast: textValidationSchema,
    lunch: textValidationSchema,
    dinner: textValidationSchema,
    snacks: textValidationSchema,
    beverages: textValidationSchema,
    fruit: numberValidationRequired,
    vegetable: numberValidationRequired,
    legumes: numberValidationRequired,
    redMeat: numberValidationRequired,
    fish: numberValidationRequired,
    dairyProducts: numberValidationRequired,
    nutsAndSeeds: numberValidationRequired,
    oil: numberValidationRequired,
    cannedDrink: numberValidationRequired,
    dessert: numberValidationRequired,
    caffeinatedBeverage: textValidationSchema,
    //caffeinatedBeverageYes: textValidationSchema,
    coffeQuantity: SelectIsValueValidation("caffeinatedBeverage"),
    teaQuantity: SelectIsValueValidation("caffeinatedBeverage"),
    carbonatedCoffeeQuantity: SelectIsValueValidation("caffeinatedBeverage"),
    caffeineReaction: textValidationSchema,
    caffeineReactionDesc: SelectIsValueValidation("caffeineReaction"),
    caffeineSensation: Yup.array().of(
        textValidationSchema
    ),
    smoke: textValidationSchema,
    smokeType: Yup.array().of(
        textValidationSchema
    ),
    smokeQuantity: SelectIsValueValidation("smoke"),
    smokeYear: SelectIsValueValidation("smoke"),
    smokeBlock: SelectIsValueValidation("smoke"),
    smokeBlockDesc: SelectIsValueValidation("smokeBlock"),
    oldSmoke: textValidationSchema,
    oldSmokeQuantity: SelectIsValueValidation("oldSmoke"),
    oldSmokeYear: SelectIsValueValidation("oldSmoke"),
    cigaretteSmoke: textValidationSchema,
    alcoholWeek: textValidationSchema,
    oldAlcohol: textValidationSchema,
    oldAlcoholProblems: textValidationSchema,
    oldAlcoholProblemsWhatTime: SelectIsValueValidation("oldAlcoholProblems"),
    oldAlcoholProblemsDesc: SelectIsValueValidation("oldAlcoholProblems"),
    oldAlcoholProblemsHelp: SelectIsValueValidation("oldAlcoholProblems"),
    recreationalDrug: textValidationSchema,
    recreationalDrugDesc: SelectIsValueValidation("recreationalDrug"),
    inhaledSubstance: textValidationSchema,
    stress: textValidationSchema,
    copeWithStress: textValidationSchema,
    workStress: Yup.number().min(1, "minimum 1").max(10, "maximum 10").required("Zorunlu"),
    familyStress: Yup.number().min(1, "minimum 1").max(10, "maximum 10").required("Zorunlu"),
    healtyStress: Yup.number().min(1, "minimum 1").max(10, "maximum 10").required("Zorunlu"),
    socialStress: Yup.number().min(1, "minimum 1").max(10, "maximum 10").required("Zorunlu"),
    materialStress: Yup.number().min(1, "minimum 1").max(10, "maximum 10").required("Zorunlu"),
    otherStress: Yup.number().min(1, "minimum 1").max(10, "maximum 10").required("Zorunlu"),
    relaxationTechniques: textValidationSchema,
    relaxationTechniquesDesc: SelectIsValueValidation("relaxationTechniques"),
    techniques: Yup.array().of(
        textValidationSchema
    ),
    techniquesDesc: Yup.string().when("techniques", {
        is: (val: any) => val.includes("diğer"),
        then: textValidationSchema
    }),
    consultancy: textValidationSchema,
    therapy: textValidationSchema,
    therapyDesc: SelectIsValueValidation("therapy"),
    molestation: textValidationSchema,
    hobbies: textValidationSchema,
    maritalStatus: textValidationSchema,
    liveWith: textValidationSchema,
    job: textValidationSchema,
    oldJob: textValidationSchema,
    emotionalSupport: textValidationSchema,


    emotionalSupportSelect: Yup.array().when("emotionalSupport", {
        is: (val: any) => val == "evet",
        then: Yup.array().of(
            textValidationSchema
        ).min(1, 'En az birini seçmelisiniz.').required("Bu alan zorunludur.")
    }),


    emotionalSupportOther: SelectValueIncludeValidation("emotionalSupportSelect", "diger"),
    worship: textValidationSchema,
    worshipDesc: SelectIsValueValidation("worship"),
    general: textValidationSchema,
    school: textValidationSchema,
    businessLife: textValidationSchema,
    socialLife: textValidationSchema,
    bestFriend: textValidationSchema,
    sexuality: textValidationSchema,
    position: textValidationSchema,
    withBoyFriendAndGirlFriend: textValidationSchema,
    children: textValidationSchema,
    parents: textValidationSchema,
    partner: textValidationSchema,
    birth: textValidationSchema,
    birthComplication: textValidationSchema,
    birthComplicationDesc: SelectIsValueValidation("birthComplication"),


    solidFoods: numberValidationRequired,
    wheat: numberValidationRequired,
    dairy: numberValidationRequired,
    avoidedFood: textValidationSchema,
    avoidedFoodDesc: SelectIsValueValidation("avoidedFood"),
    sugarOrSweet: textValidationSchema,
    silverMercuryFiller: textValidationSchema,
    silverMercuryFillerDesc: SelectIsNumberValueValidation("silverMercuryFiller"),
    GoldFiller: textValidationSchema,
    GoldFillerDesc: SelectIsNumberValueValidation("GoldFiller"),
    rootCanalTreatment: textValidationSchema,
    rootCanalTreatmentDesc: SelectIsNumberValueValidation("rootCanalTreatment"),
    Implant: textValidationSchema,
    ImplantDesc: SelectIsNumberValueValidation("Implant"),
    platingMetal: textValidationSchema,
    platingMetalDesc: SelectIsNumberValueValidation("platingMetal"),
    toothache: textValidationSchema,
    toothacheDesc: SelectIsNumberValueValidation("toothache"),
    bleedingGums: textValidationSchema,
    bleedingGumsDesc: SelectIsNumberValueValidation("bleedingGums"),
    gumProblem: textValidationSchema,
    gumProblemDesc: SelectIsNumberValueValidation("gumProblem"),
    chewingProblems: textValidationSchema,
    chewingProblemsDesc: SelectIsNumberValueValidation("chewingProblems"),
    otherDentalProblems: textValidationSchema,
    otherDentalProblemsDesc: SelectIsValueValidation("otherDentalProblems"),
    removingYourMercuryFiller: textValidationSchema,
    removingYourMercuryFillerDesc: SelectIsValueValidation("removingYourMercuryFiller"),
    howManyFillersAsAChild: textValidationSchema,
    brushingTeeth: textValidationSchema,
    floss: textValidationSchema,
    //should have at least one
    affectsYouSignificantly: Yup.array().of(
        textValidationSchema
    ).required("Zorunlu").min(1, "En az birini seçmelisiniz"),
    affectsYouSignificantlyDesc: Yup.string().when("affectsYouSignificantly", {
        is: (val: any) => val.includes("diğer"),
        then: textValidationSchema
    }),
    exposedToAtWorkOrAtHome: Yup.array().of(
        textValidationSchema
    ),
    exposedToAtWorkOrAtHomeDesc: Yup.string().when("exposedToAtWorkOrAtHome", {
        is: (val: any) => val.includes("diğer"),
        then: textValidationSchema
    }),
    significantExposureToHarmfulChemical: textValidationSchema,
    significantExposureToHarmfulChemicalDesc: SelectIsValueValidation("significantExposureToHarmfulChemical"),
    petOrFarmAnimal: textValidationSchema,
    petOrFarmAnimalDesc: SelectIsValueValidation("petOrFarmAnimal"),





    //erkek
    anotherTest97: gender == "Erkek" ? textValidationSchema : freeTextValidationSchema,
    anotherTest98: gender == "Erkek" ? textValidationSchema : freeTextValidationSchema,
    anotherTest99: gender == "Erkek" ? textValidationSchema : freeTextValidationSchema,
    anotherTest100: gender == "Erkek" ? textValidationSchema : freeTextValidationSchema,
    anotherTest101: gender == "Erkek" ? textValidationSchema : freeTextValidationSchema,
    anotherTest102: gender == "Erkek" ? textValidationSchema : freeTextValidationSchema,
    anotherTest103: gender == "Erkek" ? textValidationSchema : freeTextValidationSchema,
    examinationOfSymptomsPeeQuestion8: gender == "Erkek" ? textValidationSchema :freeTextValidationSchema,
    examinationOfSymptomsPeeQuestion9:gender == "Erkek" ? textValidationSchema :freeTextValidationSchema,
    suitablePartsForYou:  gender =="Erkek" ? Yup.array().required("Zorunlu alan").min(1, "En az birini seçiniz.") : Yup.array(),



    suitablePartsForYouPeeDesc: gender == "Erkek" ? SelectIsValueValidationArrayRequired("suitablePartsForYou","gece idrara çıkma") : freeTextValidationSchema, // bakılacak
    suitablePartsForYouSexualDesc:  gender == "Erkek" ?  SelectIsValueValidationArrayRequired("suitablePartsForYou","cinsel yol ile bulaşan hastalık"):freeTextValidationSchema, // bakılacak


    psa: gender == "Erkek" ? textValidationSchema :freeTextValidationSchema,
    psaValue: SelectIsValueValidation("psa"),
    otherTest: SelectIsValueValidation("psa"),
    // son

    pillUse1: textValidationSchema,
    pillUse2: textValidationSchema,
    pillUse3: textValidationSchema,
    pillEffect1: textValidationSchema,
    pillEffect1Desc: SelectIsValueValidation("pillEffect1"),
    ABUse1: textValidationSchema,
    ABUse1Desc: SelectIsValueValidation("ABUse1"),
    pregnancy: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    pregnancyCount: gender == "Kadın" ? SelectIsNumberValueValidation("pregnancy") : freeTextValidationSchema,
    low: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    lowCount: gender == "Kadın" ? SelectIsNumberValueValidation("low") : freeTextValidationSchema,
    abortion: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    abortionCount: gender == "Kadın" ? SelectIsNumberValueValidation("abortion") : freeTextValidationSchema,
    livingChild: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    livingChildCount: gender == "Kadın" ? SelectIsNumberValueValidation("livingChild") : freeTextValidationSchema,
    naturalChildbirth: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    naturalChildbirthCount: gender == "Kadın" ? SelectIsNumberValueValidation("naturalChildbirth") : freeTextValidationSchema,
    cesareanDelivery: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    cesareanDeliveryCount: gender == "Kadın" ? SelectIsNumberValueValidation("cesareanDelivery") : freeTextValidationSchema,
    birthdayOnTheDay: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    birthdayOnTheDayCount: gender == "Kadın" ? SelectIsNumberValueValidation("birthdayOnTheDay") : freeTextValidationSchema,
    premature: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    prematureCount: gender == "Kadın" ? SelectIsNumberValueValidation("premature") : freeTextValidationSchema,
    bigbaby: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    bigbabyCount: gender == "Kadın" ? SelectIsNumberValueValidation("bigbaby") : freeTextValidationSchema,
    smallbaby: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    smallbabyCount: gender == "Kadın" ? SelectIsNumberValueValidation("smallbaby") : freeTextValidationSchema,
    postPregnancyProblems: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    postPregnancyProblemsDesc: gender == "Kadın" ? SelectIsNumberValueValidation("postPregnancyProblems") : freeTextValidationSchema,

    //date alan
    firstMenstrualAge: gender == "Kadın" ? numberValidationRequired : freeTextValidationSchema,
    lastMenstrualAge: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    menstruationInterval: gender == "Kadın" ? numberValidationRequired : freeTextValidationSchema,
    menstrualPeriod: gender == "Kadın" ? numberValidationRequired : freeTextValidationSchema,
    menstrualCramp: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    menstrualPain: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    menstrualProblems: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    menstrualProblemsDesc: gender == "Kadın" ? SelectIsValueValidation("menstrualProblems") : freeTextValidationSchema,
    lastMenstrualProblems: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    lastMenstrualProblemsDesc: gender == "Kadın" ? SelectIsValueValidation("lastMenstrualProblems") : freeTextValidationSchema,
    hormonalBirthControl: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    hormonalBirthControlDesc: gender == "Kadın" ? SelectIsValueValidation("hormonalBirthControl") : freeTextValidationSchema,
    anotherMethod: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherMethods: gender == "Kadın" ? SelectIsValueValidationArray("anotherMethod") : Yup.array(),
    IsMenopause: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    MenopauseLastedAge: gender == "Kadın" ? SelectIsValueValidation("IsMenopause") : freeTextValidationSchema,
    surgicalMenopause: gender == "Kadın" ? SelectIsValueValidation("IsMenopause") : freeTextValidationSchema,
    surgicalMenopauseDesc: gender == "Kadın" ? SelectIsValueValidation("surgicalMenopause") : freeTextValidationSchema,
    menopauseComplaints: Yup.array().of(
        freeTextValidationSchema
    ),
    hormoneTherapy: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    hormoneTherapyDesc: gender == "Kadın" ? SelectIsValueValidation("hormoneTherapy") : freeTextValidationSchema,
    gynecologicalSymptoms: gender == "Kadın" ? Yup.array().required("Zorunlu alan").min(1, "En az birini seçiniz.") : Yup.array(),
    gynecologicalSymptomsDesc: SelectIsValueValidationArrayRequired("gynecologicalSymptoms","cinsel yol ile bulaşan hastalık"),// bakılacak
    smearTest: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    smearTestResponse: gender == "Kadın" ? SelectIsValueValidation("smearTest") : freeTextValidationSchema,
    mammographyTest: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    mammographyTestResponse: gender == "Kadın" ? SelectIsValueValidation("mammographyTest") : freeTextValidationSchema,
    bone: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    boneResponse: gender == "Kadın" ? SelectIsValueValidation("bone") : freeTextValidationSchema,
    anotherTest: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTestDesc: gender == "Kadın" ? SelectIsValueValidation("anotherTest") : freeTextValidationSchema,

    medicalResumeDigestionQuestion1: textValidationSchema,
    medicalResumeDigestionQuestion2: textValidationSchema,
    medicalResumeDigestionQuestion3: textValidationSchema,
    medicalResumeDigestionQuestion4: textValidationSchema,
    medicalResumeDigestionQuestion5: textValidationSchema,
    medicalResumeDigestionQuestion6: textValidationSchema,
    medicalResumeBreathingQuestion1: textValidationSchema,
    medicalResumeBreathingQuestion2: textValidationSchema,
    medicalResumeBreathingQuestion3: textValidationSchema,
    medicalResumeBreathingQuestion4: textValidationSchema,
    medicalResumeBreathingQuestion5: textValidationSchema,
    medicalResumeBreathingQuestion6: textValidationSchema,
    medicalResumeBreathingQuestion7: freeTextValidationSchema,
    medicalResumeBreathingQuestion7Desc: freeTextValidationSchema,


    medicalResumeGenitalQuestion1: textValidationSchema,
    medicalResumeGenitalQuestion2: textValidationSchema,
    medicalResumeGenitalQuestion3: textValidationSchema,
    medicalResumeGenitalQuestion4: textValidationSchema,
    medicalResumeGenitalQuestion5: textValidationSchema,
    medicalResumeGenitalQuestion6: textValidationSchema,
    medicalResumeGenitalQuestion7: textValidationSchema,
    medicalResumeGenitalQuestion8: freeTextValidationSchema,
    medicalResumeGenitalQuestion8Desc: freeTextValidationSchema,

    medicalResumeMetabolicQuestion1: textValidationSchema,
    medicalResumeMetabolicQuestion2: textValidationSchema,
    medicalResumeMetabolicQuestion3: textValidationSchema,
    medicalResumeMetabolicQuestion4: textValidationSchema,
    medicalResumeMetabolicQuestion5: textValidationSchema,
    medicalResumeMetabolicQuestion6: textValidationSchema,
    medicalResumeMetabolicQuestion7: textValidationSchema,
    medicalResumeMetabolicQuestion8: freeTextValidationSchema,
    medicalResumeMetabolicQuestion8Desc: freeTextValidationSchema,

    medicalResumeInflammatoryQuestion1: textValidationSchema,
    medicalResumeInflammatoryQuestion2: textValidationSchema,
    medicalResumeInflammatoryQuestion3: textValidationSchema,
    medicalResumeInflammatoryQuestion4: textValidationSchema,
    medicalResumeInflammatoryQuestion5: textValidationSchema,
    medicalResumeInflammatoryQuestion6: textValidationSchema,
    medicalResumeInflammatoryQuestion7: textValidationSchema,
    medicalResumeInflammatoryQuestion8: textValidationSchema,
    medicalResumeInflammatoryQuestion9: textValidationSchema,
    medicalResumeInflammatoryQuestion10: freeTextValidationSchema,
    medicalResumeInflammatoryQuestion10Desc: freeTextValidationSchema,

    medicalResumeMusculoskeletalQuestion1: textValidationSchema,
    medicalResumeMusculoskeletalQuestion2: textValidationSchema,
    medicalResumeMusculoskeletalQuestion3: textValidationSchema,
    medicalResumeMusculoskeletalQuestion4: freeTextValidationSchema,
    medicalResumeMusculoskeletalQuestion4Desc: freeTextValidationSchema,


    medicalResumeLeatherQuestion1: textValidationSchema,
    medicalResumeLeatherQuestion2: textValidationSchema,
    medicalResumeLeatherQuestion3: textValidationSchema,
    medicalResumeLeatherQuestion4: textValidationSchema,
    medicalResumeLeatherQuestion5: freeTextValidationSchema,
    medicalResumeLeatherQuestion5Desc: freeTextValidationSchema,

    medicalResumeHeartQuestion1: textValidationSchema,
    medicalResumeHeartQuestion2: textValidationSchema,
    medicalResumeHeartQuestion3: textValidationSchema,
    medicalResumeHeartQuestion4: textValidationSchema,
    medicalResumeHeartQuestion5: textValidationSchema,
    medicalResumeHeartQuestion6: textValidationSchema,
    medicalResumeHeartQuestion7: textValidationSchema,
    medicalResumeHeartQuestion8: textValidationSchema,
    medicalResumeHeartQuestion9: textValidationSchema,
    medicalResumeHeartQuestion10: textValidationSchema,
    medicalResumeHeartQuestion11: freeTextValidationSchema,
    medicalResumeHeartQuestion11Desc: freeTextValidationSchema,

    medicalResumeNeurologicalQuestion1: textValidationSchema,
    medicalResumeNeurologicalQuestion2: textValidationSchema,
    medicalResumeNeurologicalQuestion3: textValidationSchema,
    medicalResumeNeurologicalQuestion4: textValidationSchema,
    medicalResumeNeurologicalQuestion5: textValidationSchema,
    medicalResumeNeurologicalQuestion6: textValidationSchema,
    medicalResumeNeurologicalQuestion7: textValidationSchema,
    medicalResumeNeurologicalQuestion8: textValidationSchema,
    medicalResumeNeurologicalQuestion9: textValidationSchema,
    medicalResumeNeurologicalQuestion10: textValidationSchema,
    medicalResumeNeurologicalQuestion11: freeTextValidationSchema,
    medicalResumeNeurologicalQuestion11Desc: freeTextValidationSchema,


    medicalResumeCancerQuestion1: textValidationSchema,
    medicalResumeCancerQuestion2: textValidationSchema,
    medicalResumeCancerQuestion3: textValidationSchema,
    medicalResumeCancerQuestion4: textValidationSchema,
    medicalResumeCancerQuestion5: textValidationSchema,
    medicalResumeCancerQuestion6: freeTextValidationSchema,
    medicalResumeCancerQuestion6Desc: freeTextValidationSchema,

    examinationOfSymptomsGeneralQuestion1: textValidationSchema,
    examinationOfSymptomsGeneralQuestion2: textValidationSchema,
    examinationOfSymptomsGeneralQuestion3: textValidationSchema,
    examinationOfSymptomsGeneralQuestion4: textValidationSchema,
    examinationOfSymptomsGeneralQuestion5: textValidationSchema,
    examinationOfSymptomsGeneralQuestion6: textValidationSchema,
    examinationOfSymptomsGeneralQuestion7: textValidationSchema,
    examinationOfSymptomsGeneralQuestion8: textValidationSchema,
    examinationOfSymptomsGeneralQuestion9: textValidationSchema,
    examinationOfSymptomsGeneralQuestion10: textValidationSchema,
    examinationOfSymptomsGeneralQuestion11: textValidationSchema,
    examinationOfSymptomsGeneralQuestion12: textValidationSchema,
    examinationOfSymptomsGeneralQuestion13: textValidationSchema,


    examinationOfSymptomsEyesAndEarQuestion1: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion2: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion3: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion4: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion5: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion6: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion7: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion8: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion9: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion10: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion11: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion12: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion13: textValidationSchema,
    examinationOfSymptomsEyesAndEarQuestion14: textValidationSchema,

    examinationOfSymptomsSkeletonQuestion1: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion2: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion3: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion4: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion5: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion6: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion7: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion8: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion9: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion10: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion11: textValidationSchema,



    examinationOfSymptomsSkeletonQuestion12: textValidationSchema,
    //etkilenenler
    examinationOfSymptomsSkeletonQuestion13: SelectIsValueHOSValidation("examinationOfSymptomsSkeletonQuestion12"),
    examinationOfSymptomsSkeletonQuestion14: SelectIsValueHOSValidation("examinationOfSymptomsSkeletonQuestion12"),


    examinationOfSymptomsSkeletonQuestion15: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion16: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion17: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion18: textValidationSchema,
    examinationOfSymptomsSkeletonQuestion19: textValidationSchema,

    examinationOfSymptomsNervesQuestion1: textValidationSchema,
    examinationOfSymptomsNervesQuestion2: textValidationSchema,
    examinationOfSymptomsNervesQuestion3: textValidationSchema,
    examinationOfSymptomsNervesQuestion4: textValidationSchema,
    examinationOfSymptomsNervesQuestion5: textValidationSchema,

    examinationOfSymptomsNervesQuestion12: textValidationSchema,
    examinationOfSymptomsNervesQuestion13: textValidationSchema,
    examinationOfSymptomsNervesQuestion14: textValidationSchema,
    examinationOfSymptomsNervesQuestion15: textValidationSchema,
    examinationOfSymptomsNervesQuestion16: textValidationSchema,
    examinationOfSymptomsNervesQuestion17: textValidationSchema,
    examinationOfSymptomsNervesQuestion18: textValidationSchema,
    examinationOfSymptomsNervesQuestion19: textValidationSchema,
    examinationOfSymptomsNervesQuestion20: textValidationSchema,
    examinationOfSymptomsNervesQuestion21: textValidationSchema,
    examinationOfSymptomsNervesQuestion22: textValidationSchema,
    examinationOfSymptomsNervesQuestion23: textValidationSchema,
    examinationOfSymptomsNervesQuestion24: textValidationSchema,
    examinationOfSymptomsNervesQuestion25: textValidationSchema,

    examinationOfSymptomsNervesQuestion26: textValidationSchema,
    // etkilenenler
    examinationOfSymptomsNervesQuestion6: SelectIsValueHOSValidation("examinationOfSymptomsNervesQuestion26"),
    examinationOfSymptomsNervesQuestion7: SelectIsValueHOSValidation("examinationOfSymptomsNervesQuestion26"),
    examinationOfSymptomsNervesQuestion8: SelectIsValueHOSValidation("examinationOfSymptomsNervesQuestion26"),
    examinationOfSymptomsNervesQuestion9: SelectIsValueHOSValidation("examinationOfSymptomsNervesQuestion26"),
    examinationOfSymptomsNervesQuestion10: SelectIsValueHOSValidation("examinationOfSymptomsNervesQuestion26"),
    examinationOfSymptomsNervesQuestion11: SelectIsValueHOSValidation("examinationOfSymptomsNervesQuestion26"),


    examinationOfSymptomsHeartQuestion1: textValidationSchema,
    examinationOfSymptomsHeartQuestion2: textValidationSchema,
    examinationOfSymptomsHeartQuestion3: textValidationSchema,
    examinationOfSymptomsHeartQuestion4: textValidationSchema,
    examinationOfSymptomsHeartQuestion5: textValidationSchema,
    examinationOfSymptomsHeartQuestion6: textValidationSchema,
    examinationOfSymptomsHeartQuestion7: textValidationSchema,
    examinationOfSymptomsHeartQuestion8: textValidationSchema,
    examinationOfSymptomsHeartQuestion9: textValidationSchema,
    examinationOfSymptomsHeartQuestion10: textValidationSchema,
    examinationOfSymptomsHeartQuestion11: textValidationSchema,

    examinationOfSymptomsPeeQuestion1: textValidationSchema,
    examinationOfSymptomsPeeQuestion2: textValidationSchema,
    examinationOfSymptomsPeeQuestion3: textValidationSchema,
    examinationOfSymptomsPeeQuestion4: textValidationSchema,
    examinationOfSymptomsPeeQuestion5: textValidationSchema,
    examinationOfSymptomsPeeQuestion6: textValidationSchema,
    examinationOfSymptomsPeeQuestion7: textValidationSchema,

    examinationOfSymptomsPeeQuestion10: textValidationSchema,


    examinationOfSymptomsDigestionQuestion1: textValidationSchema,
    examinationOfSymptomsDigestionQuestion2: textValidationSchema,
    examinationOfSymptomsDigestionQuestion3: textValidationSchema,


    examinationOfSymptomsDigestionQuestion7: textValidationSchema,
    examinationOfSymptomsDigestionQuestion8: textValidationSchema,
    examinationOfSymptomsDigestionQuestion9: textValidationSchema,
    examinationOfSymptomsDigestionQuestion10: textValidationSchema,
    examinationOfSymptomsDigestionQuestion11: textValidationSchema,
    examinationOfSymptomsDigestionQuestion12: textValidationSchema,
    examinationOfSymptomsDigestionQuestion13: textValidationSchema,
    examinationOfSymptomsDigestionQuestion14: textValidationSchema,
    examinationOfSymptomsDigestionQuestion15: textValidationSchema,
    examinationOfSymptomsDigestionQuestion16: textValidationSchema,
    examinationOfSymptomsDigestionQuestion17: textValidationSchema,
    examinationOfSymptomsDigestionQuestion18: textValidationSchema,
    examinationOfSymptomsDigestionQuestion19: textValidationSchema,
    examinationOfSymptomsDigestionQuestion20: textValidationSchema,
    examinationOfSymptomsDigestionQuestion21: textValidationSchema,


    examinationOfSymptomsDigestionQuestion30: textValidationSchema,
    examinationOfSymptomsDigestionQuestion31: textValidationSchema,
    examinationOfSymptomsDigestionQuestion32: textValidationSchema,
    examinationOfSymptomsDigestionQuestion33: textValidationSchema,
    examinationOfSymptomsDigestionQuestion34: textValidationSchema,
    examinationOfSymptomsDigestionQuestion35: textValidationSchema,
    examinationOfSymptomsDigestionQuestion36: textValidationSchema,
    examinationOfSymptomsDigestionQuestion37: textValidationSchema,
    examinationOfSymptomsDigestionQuestion38: textValidationSchema,


    examinationOfSymptomsDigestionQuestion39: textValidationSchema,
    //etkilenen
    examinationOfSymptomsDigestionQuestion22: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion39"),
    examinationOfSymptomsDigestionQuestion23: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion39"),
    examinationOfSymptomsDigestionQuestion24: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion39"),
    examinationOfSymptomsDigestionQuestion25: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion39"),
    examinationOfSymptomsDigestionQuestion26: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion39"),
    examinationOfSymptomsDigestionQuestion27: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion39"),
    examinationOfSymptomsDigestionQuestion28: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion39"),


    examinationOfSymptomsDigestionQuestion40: textValidationSchema,
    //etkilenen
    examinationOfSymptomsDigestionQuestion29: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion40"),


    examinationOfSymptomsDigestionQuestion41: textValidationSchema,
    // etkilenen
    examinationOfSymptomsDigestionQuestion4: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion41"),
    examinationOfSymptomsDigestionQuestion5: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion41"),
    examinationOfSymptomsDigestionQuestion6: SelectIsValueHOSValidation("examinationOfSymptomsDigestionQuestion41"),


    //another tests 130
    anotherTest1: textValidationSchema, anotherTest2: textValidationSchema,
    anotherTest3: textValidationSchema, anotherTest4: textValidationSchema,
    anotherTest5: textValidationSchema,
    anotherTest6: textValidationSchema, anotherTest7: textValidationSchema,
    anotherTest8: textValidationSchema, anotherTest9: textValidationSchema,
    anotherTest10: textValidationSchema, anotherTest11: textValidationSchema,
    anotherTest12: textValidationSchema, anotherTest13: textValidationSchema,
    anotherTest14: textValidationSchema, anotherTest15: textValidationSchema,
    anotherTest20: textValidationSchema, anotherTest21: textValidationSchema,
    anotherTest22: textValidationSchema, anotherTest23: textValidationSchema,
    anotherTest24: textValidationSchema, anotherTest25: textValidationSchema,
    anotherTest26: textValidationSchema, anotherTest27: textValidationSchema,
    anotherTest28: textValidationSchema, anotherTest29: textValidationSchema,
    anotherTest30: textValidationSchema, anotherTest31: textValidationSchema,
    anotherTest32: textValidationSchema, anotherTest33: textValidationSchema,
    anotherTest34: textValidationSchema, anotherTest35: textValidationSchema,
    anotherTest36: textValidationSchema, anotherTest37: textValidationSchema,
    anotherTest38: textValidationSchema, anotherTest39: textValidationSchema,
    anotherTest42: textValidationSchema, anotherTest43: textValidationSchema,
    anotherTest44: textValidationSchema, anotherTest45: textValidationSchema,
    anotherTest51: textValidationSchema, anotherTest53: textValidationSchema,
    anotherTest54: textValidationSchema, anotherTest55: textValidationSchema,
    anotherTest56: textValidationSchema, anotherTest57: textValidationSchema,
    anotherTest58: textValidationSchema, anotherTest59: textValidationSchema,
    anotherTest60: textValidationSchema, anotherTest61: textValidationSchema,
    anotherTest62: textValidationSchema, anotherTest63: textValidationSchema,
    anotherTest64: textValidationSchema, anotherTest65: textValidationSchema,
    anotherTest66: textValidationSchema, anotherTest67: textValidationSchema,
    anotherTest68: textValidationSchema, anotherTest69: textValidationSchema,
    anotherTest70: textValidationSchema, anotherTest71: textValidationSchema,
    anotherTest72: textValidationSchema, anotherTest73: textValidationSchema,
    anotherTest74: textValidationSchema, anotherTest75: textValidationSchema,
    anotherTest76: textValidationSchema, anotherTest77: textValidationSchema,
    anotherTest78: textValidationSchema, anotherTest79: textValidationSchema,
    anotherTest80: textValidationSchema, anotherTest81: textValidationSchema,
    anotherTest82: textValidationSchema, anotherTest83: textValidationSchema,
    anotherTest84: textValidationSchema, anotherTest85: textValidationSchema,
    anotherTest86: textValidationSchema, anotherTest87: textValidationSchema,
    anotherTest88: textValidationSchema, anotherTest89: textValidationSchema,
    anotherTest90: textValidationSchema, anotherTest91: textValidationSchema,
    anotherTest92: textValidationSchema, anotherTest93: textValidationSchema,
    anotherTest94: textValidationSchema, anotherTest95: textValidationSchema,
    anotherTest96: textValidationSchema,


    anotherTest104: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,


    //kadın
    anotherTest105: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest106: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest107: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest108: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest109: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest110: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest111: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest112: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest113: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest114: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest130: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,

    anotherTest151: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest152: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    anotherTest153: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    //kadın son


    anotherTest131: Yup.number().required("Bu alan zorunludur").min(1, "En az 1 olmalıdır").max(5, "En fazla 5 olmalıdır"),
    anotherTest132: Yup.number().required("Bu alan zorunludur").min(1, "En az 1 olmalıdır").max(5, "En fazla 5 olmalıdır"),
    anotherTest133: Yup.number().required("Bu alan zorunludur").min(1, "En az 1 olmalıdır").max(5, "En fazla 5 olmalıdır"),
    anotherTest134: Yup.number().required("Bu alan zorunludur").min(1, "En az 1 olmalıdır").max(5, "En fazla 5 olmalıdır"),
    anotherTest135: Yup.number().required("Bu alan zorunludur").min(1, "En az 1 olmalıdır").max(5, "En fazla 5 olmalıdır"),
    anotherTest136: Yup.number().required("Bu alan zorunludur").min(1, "En az 1 olmalıdır").max(5, "En fazla 5 olmalıdır"),
    anotherTest137: Yup.number().required("Bu alan zorunludur").min(1, "En az 1 olmalıdır").max(5, "En fazla 5 olmalıdır"),
    anotherTest138: textValidationSchema,
    anotherTest139: Yup.number().required("Bu alan zorunludur").min(1, "En az 1 olmalıdır").max(5, "En fazla 5 olmalıdır"),
    anotherTest140: Yup.number().required("Bu alan zorunludur").min(1, "En az 1 olmalıdır").max(5, "En fazla 5 olmalıdır"),
    anotherTest141: textValidationSchema,
    anotherTest142: textValidationSchema,
    anotherTest143: textValidationSchema,
    anotherTest144: textValidationSchema,
    anotherTest145: textValidationSchema,
    anotherTest147: textValidationSchema,
    anotherTest148: textValidationSchema,
    anotherTest149: textValidationSchema,
    anotherTest150: textValidationSchema,

    anotherTest161: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    //etkilenenler
    anotherTest115: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest161") : freeTextValidationSchema,
    anotherTest116: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest161") : freeTextValidationSchema,
    anotherTest117: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest161") : freeTextValidationSchema,
    anotherTest118: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest161") : freeTextValidationSchema,
    anotherTest119: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest161") : freeTextValidationSchema,
    anotherTest120: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest161") : freeTextValidationSchema,
    anotherTest121: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest161") : freeTextValidationSchema,
    anotherTest122: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest161") : freeTextValidationSchema,
    anotherTest123: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest161") : freeTextValidationSchema,
    anotherTest124: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest161") : freeTextValidationSchema,


    anotherTest162: gender == "Kadın" ? textValidationSchema : freeTextValidationSchema,
    //etkilenenler
    anotherTest125: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest162") : freeTextValidationSchema,
    anotherTest126: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest162") : freeTextValidationSchema,
    anotherTest127: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest162") : freeTextValidationSchema,
    anotherTest128: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest162") : freeTextValidationSchema,
    anotherTest129: gender == "Kadın" ? SelectIsValueHOSValidation("anotherTest162") : freeTextValidationSchema,


    anotherTest155: textValidationSchema,
    //etkilenenler
    anotherTest48: SelectIsValueHOSValidation("anotherTest155"),


    anotherTest154: textValidationSchema,
    //etkilenenler
    anotherTest46: SelectIsValueHOSValidation("anotherTest154"),
    anotherTest47: SelectIsValueHOSValidation("anotherTest154"),


    anotherTest156: textValidationSchema,
    //etkilenenler
    anotherTest49: SelectIsValueHOSValidation("anotherTest156"),
    anotherTest50: SelectIsValueHOSValidation("anotherTest156"),


    anotherTest157: textValidationSchema,
    //etkilenneler
    anotherTest52: SelectIsValueHOSValidation("anotherTest157"),


    anotherTest159: textValidationSchema,
    //etkilenenler
    anotherTest40: SelectIsValueHOSValidation("anotherTest159"),
    anotherTest41: SelectIsValueHOSValidation("anotherTest159"),


    anotherTest160: textValidationSchema,
    //etkilenenler
    anotherTest16: SelectIsValueHOSValidation("anotherTest160"),
    anotherTest17: SelectIsValueHOSValidation("anotherTest160"),
    anotherTest18: SelectIsValueHOSValidation("anotherTest160"),
    anotherTest19: SelectIsValueHOSValidation("anotherTest160"),
})

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

export const flow5FormValidationSchema = Yup.object({
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
    textLast2Week: textValidationSchema,
    textLifeStyleChange: textValidationSchema,
    textHaveAProblem: textValidationSchema,
    textSomethingElse: textValidationSchema
})
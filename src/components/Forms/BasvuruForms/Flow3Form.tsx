import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import {
    flow3FormValidationSchema
} from "@components/Forms/validationSchemes";
import { flow3FormInitialValues } from "@components/Forms/BasvuruForms/config/initialValues";
import useUser from "../../../hooks/user.hook";
import { useRouter } from "next/router";
import { FormSubSteps } from "@components/Forms/FormSteps/FormSteps";
import { Formik } from "formik";
import request from "@config";
import { toast } from "react-hot-toast";
import SubStep2Part1 from "@components/Forms/SubSteps/SubStep2Part1";
import SubStep2Part2 from "@components/Forms/SubSteps/SubStep2Part2";
import SubStep2Part3 from "@components/Forms/SubSteps/SubStep2Part3";
import SubStep2Part4 from "@components/Forms/SubSteps/SubStep2Part4";
import SubStep2Part5 from "@components/Forms/SubSteps/SubStep2Part5";
import Form2Footer from "@components/Forms/Form2Footer/Form2Footer";
import classNames from "classnames";
import SubstepViever from "@components/Forms/SubSteps/SubStepContainer";
import { PropsCanSelectStep } from "@components/Forms/BasvuruForms/Flow2Form";
import SubStep2Part6 from '../SubSteps/SubStep2Part6';
import SubStep2Part7 from '../SubSteps/SubStep2Part7';
import SubStep2Part8 from '../SubSteps/SubStep2Part8';
import SubStep2Part9 from '../SubSteps/SubStep2Part9';
import SubStep2Part10 from '../SubSteps/SubStep2Part10';
import SubStep2Part11 from '../SubSteps/SubStep2Part11';

const validationSchema = flow3FormValidationSchema;
const initialValues = flow3FormInitialValues;
const ErrorHangling = [
    { Key: "lastHealt", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "emergencyContact", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "emergencyContactRelation", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "emergencyContactPhoneCell", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "whereDidYouHear", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "whereDidYouHearOther", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "currentDisease", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "problem", Page: "1", Error: "Zorunlu Alanları Doldurunuz." }, { Key: "lastHealt", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "severity", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "treatment", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "success", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "allergies", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "food", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "reaction", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "sleepHours", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "sleepDifficulty", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "sleepQuality", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "sleepProblem", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "snore", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "wakeUp", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "sleepPills", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "sleepPillsDetail", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "exerciseWant", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "exerciseDisability", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "exerciseDisabilityDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "exerciseLater", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "exerciseLaterDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "diet", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "dietDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "foodSensitivity", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "foodSensitivityDetail", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "foodAvoid", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "foodAvoidDetail", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "foodsReaction", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "foodsReactionDetail", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "foodsLike", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "foodsLikeDetail", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "threeMeal", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "threeMealDetail", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "skipMeal", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "skipMealDetail", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "outsideMeal", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "lifestyleAboutEating", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "currentDiet", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "breakfast", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "lunch", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "dinner", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "snacks", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "beverages", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "fruit", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "vegetable", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "legumes", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "redMeat", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "fish", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "dairyProducts", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "nutsAndSeeds", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "oil", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "cannedDrink", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "dessert", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "caffeinatedBeverage", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "coffeQuantity", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "teaQuantity", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "carbonatedCoffeeQuantity", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "caffeineReaction", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "caffeineReactionDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "caffeineSensation", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "smoke", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "smokeType", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "smokeQuantity", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "smokeYear", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "smokeBlock", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "smokeBlockDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "oldSmoke", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "oldSmokeQuantity", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "oldSmokeYear", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "cigaretteSmoke", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "alcoholWeek", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "oldAlcohol", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "oldAlcoholProblems", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },

    { Key: "oldAlcoholProblemsWhatTime", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "oldAlcoholProblemsDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "oldAlcoholProblemsHelp", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "recreationalDrug", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "recreationalDrugDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "inhaledSubstance", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "stress", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "copeWithStress", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "workStress", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "familyStress", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "healtyStress", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "socialStress", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "materialStress", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "otherStress", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "relaxationTechniques", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "relaxationTechniquesDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "techniques", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "techniquesDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "consultancy", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "therapy", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "therapyDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "molestation", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "hobbies", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "maritalStatus", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "liveWith", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "job", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "oldJob", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "emotionalSupport", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "emotionalSupportSelect", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "emotionalSupportOther", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "worship", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "worshipDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "general", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "school", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "businessLife", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "socialLife", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "bestFriend", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "sexuality", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "position", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "withBoyFriendAndGirlFriend", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "children", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "parents", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "partner", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "birth", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "birthComplication", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "birthComplicationDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "solidFoods", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "wheat", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "dairy", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "avoidedFood", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "avoidedFoodDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "sugarOrSweet", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "silverMercuryFiller", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "silverMercuryFillerDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "GoldFiller", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "GoldFillerDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "rootCanalTreatment", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "rootCanalTreatmentDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "Implant", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "ImplantDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "platingMetal", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "platingMetalDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "toothache", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "toothacheDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "bleedingGums", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "bleedingGumsDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "gumProblem", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "gumProblemDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "chewingProblems", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "chewingProblemsDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "otherDentalProblems", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "otherDentalProblemsDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "removingYourMercuryFiller", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "removingYourMercuryFillerDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "howManyFillersAsAChild", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "brushingTeeth", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "floss", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "affectsYouSignificantly", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "affectsYouSignificantlyDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "exposedToAtWorkOrAtHome", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "exposedToAtWorkOrAtHomeDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "significantExposureToHarmfulChemical", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "significantExposureToHarmfulChemicalDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "petOrFarmAnimal", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "petOrFarmAnimalDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "anotherTest97", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "anotherTest98", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "anotherTest99", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "anotherTest100", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "anotherTest101", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "anotherTest102", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "anotherTest103", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsPeeQuestion8", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsPeeQuestion9", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "suitablePartsForYou", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "suitablePartsForYouPeeDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "suitablePartsForYouSexualDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "psa", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "psaValue", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "otherTest", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "pillUse1", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "pillUse2", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "pillUse3", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "pillEffect1", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "pillEffect1Desc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "ABUse1", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "ABUse1Desc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "pregnancy", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "pregnancyCount", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "low", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "lowCount", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "abortion", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "abortionCount", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "livingChild", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "livingChildCount", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "naturalChildbirth", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "naturalChildbirthCount", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "cesareanDelivery", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "cesareanDeliveryCount", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "birthdayOnTheDay", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "birthdayOnTheDayCount", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "premature", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "prematureCount", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "bigbaby", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "bigbabyCount", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "smallbaby", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "smallbabyCount", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "postPregnancyProblems", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "postPregnancyProblemsDesc", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "firstMenstrualAge", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "lastMenstrualAge", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "menstruationInterval", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "menstrualPeriod", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "menstrualCramp", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "menstrualPain", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "menstrualProblems", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "menstrualProblemsDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "lastMenstrualProblems", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "lastMenstrualProblemsDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "hormonalBirthControl", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "hormonalBirthControlDesc", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "anotherMethod", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "anotherMethods", Page: "1", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeDigestionQuestion1", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeDigestionQuestion2", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeDigestionQuestion3", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeDigestionQuestion4", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeDigestionQuestion5", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeDigestionQuestion6", Page: "2", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeBreathingQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeBreathingQuestion2", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeBreathingQuestion3", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeBreathingQuestion4", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeBreathingQuestion5", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeBreathingQuestion6", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeGenitalQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeGenitalQuestion2", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeGenitalQuestion3", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeGenitalQuestion4", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeGenitalQuestion5", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeGenitalQuestion6", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeGenitalQuestion7", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeMetabolicQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeMetabolicQuestion2", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeMetabolicQuestion3", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeMetabolicQuestion4", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeMetabolicQuestion5", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeMetabolicQuestion6", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeMetabolicQuestion7", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },

    { Key: "medicalResumeInflammatoryQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeInflammatoryQuestion2", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeInflammatoryQuestion3", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeInflammatoryQuestion4", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeInflammatoryQuestion5", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeInflammatoryQuestion6", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeInflammatoryQuestion7", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeInflammatoryQuestion8", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeInflammatoryQuestion9", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeMusculoskeletalQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeMusculoskeletalQuestion2", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeMusculoskeletalQuestion3", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeLeatherQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeLeatherQuestion2", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeLeatherQuestion3", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeLeatherQuestion4", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeHeartQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeHeartQuestion2", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeHeartQuestion3", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeHeartQuestion4", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeHeartQuestion5", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeHeartQuestion6", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeHeartQuestion7", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeHeartQuestion8", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeHeartQuestion9", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeHeartQuestion10", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeNeurologicalQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeNeurologicalQuestion2", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeNeurologicalQuestion3", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeNeurologicalQuestion4", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeNeurologicalQuestion5", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeNeurologicalQuestion6", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeNeurologicalQuestion7", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeNeurologicalQuestion8", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeNeurologicalQuestion9", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeNeurologicalQuestion10", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeCancerQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeCancerQuestion2", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeCancerQuestion3", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeCancerQuestion4", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "medicalResumeCancerQuestion5", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },

    { Key: "examinationOfSymptomsGeneralQuestion1", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion2", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion3", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion4", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion5", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion6", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion7", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion8", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion9", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion10", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion11", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion12", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    { Key: "examinationOfSymptomsGeneralQuestion13", Page: "3", Error: "Zorunlu Alanları Doldurunuz." },
    
];


function Flow3Form({ setSelectedStep }: PropsCanSelectStep) {
    const { user: { Id: UserId } } = useUser()
    let key = `flow-3-data-${UserId}`;
    const [data, setData] = useState(JSON.parse(localStorage.getItem(key) as string) || initialValues);
    const [part, setPart] = useState(Number(localStorage.getItem("flow-3-part" + UserId)) || 1);
    useEffect(() => {
        localStorage.setItem("flow-3-part" + UserId, part.toString());
    }, [part]);
    const router = useRouter()
    const [isMale, setIsMale] = useState(false);


    return (
        <Formik
            initialValues={data}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("values", values);

                let key = `flow-3-data-${UserId}`;
                localStorage.setItem(key, JSON.stringify(values));
                toast.success("Form kaydedildi. Tıbbi şikayet değerlendirme formuna geçiniz...")
                setSelectedStep(4)
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                errors,
                submitForm,
                setFieldValue
            }) => {
                const subSteps = {
                    1: <SubStep2Part1
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                    />,
                    2: <SubStep2Part2
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    3: <SubStep2Part3
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    4: <SubStep2Part4
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    5: <SubStep2Part5
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    6: <SubStep2Part6
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    7: <SubStep2Part7
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    8: <SubStep2Part8
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    9: <SubStep2Part9
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    10: <SubStep2Part10
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />,
                    11: <SubStep2Part11
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />
                }
                const countOfSubSteps = Object.keys(subSteps).length;
                return (
                    <form onSubmit={handleSubmit}>
                        <div className="w-full flex  flex-col gap-[10px]">
                            {(
                                <SubstepViever subSteps={subSteps} activeSubStep={part} />
                            )}

                        </div>

                        <Form2Footer parts={countOfSubSteps} setter={setPart} active={part} />
                        {
                            part == countOfSubSteps && (<div
                                className="min-h-[112px] my-[10px] w-full px-[40px] rounded-[20px_5px] p-2 flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-center">
                                <button type="button"
                                    onClick={() => {
                                        console.log(errors, "hatalar");
                                        if (Object.keys(errors).length > 0) {
                                            console.log("flow 3 errors", errors);

                                            toast.error("Lütfen tüm alanları doldurunuz.")
                                        } else submitForm()
                                    }}
                                    className="w-[250px] rounded-[20px_5px] text-[white] bg-[#4E929D] h-[50px] border-2"
                                >
                                    Formu Kaydet
                                </button>
                            </div>)
                        }
                    </form>
                );
            }}
        </Formik>
    );
}

export default Flow3Form;
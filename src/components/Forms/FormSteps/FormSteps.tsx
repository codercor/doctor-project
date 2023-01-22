import React, {useEffect, useState} from "react";
import {v4} from "uuid";
import Step, {FormStepType, FormSubStep} from "./Step";
import {getUserFlowAbilibility} from "../../../../pages/dashboard/forms";
import useUser from "../../../hooks/user.hook";

export default function FormSteps({
                                      selectedStep,
                                      setSelectedStep
                                  }: {
    selectedStep: number;
    setSelectedStep: (stepNumber: number) => void;
}) {

    const [steps, setSteps] = useState<FormStepType[]>([
        {
            stepNumber: 1,
            stepName: "Ön Başvuru Formu",
        },
        {
            stepNumber: 2,
            stepName: "Başvuru Formları",
        },
        {
            stepNumber: 5,
            stepName: "MSQ Formu",
        },]);
    const getLockedSteps = (newStep: number) => {
        if (newStep == 2 || newStep == 3 || newStep == 4) {
            return ([1, 5, 6])
        }
        if (newStep == 1) {
            return ([2, 3, 4, 5, 6])
        }
        if (newStep == 5) {
            return ([1, 2, 3, 4, 6])
        }
        if (newStep == 6) {
            return ([1, 2, 3, 4, 5])
        }
        return [];
    }
    useEffect(() => {
        const lockedSteps = getLockedSteps(selectedStep);
        console.log("lockedSteps", lockedSteps)
        getUserFlowAbilibility(UserId).then((ability) => {
            //bekleyen form varsa

            if (ability.IsHaveWaitingForm && ability.LastWaitingDoneStep) {
                setSteps(steps.map((step) => {
                    let currentStep = {...step};
                    //@ts-ignore
                    if (ability.LastWaitingDoneStep >= 2 && ability.LastWaitingDoneStep <= 4 && currentStep.stepNumber >= 2 && currentStep.stepNumber <= 4) {
                        currentStep.status = "pending"
                    }
                    if (currentStep.stepNumber == ability.LastWaitingDoneStep) {
                        currentStep.status = "pending"
                    }

                    if (lockedSteps.includes(currentStep.stepNumber)) {
                        currentStep.isLocked = true
                    }
                    return currentStep;
                }))
            } else {
                setSteps(steps.map((step) => {
                    let currentStep = {...step};
                    if (lockedSteps.includes(currentStep.stepNumber)) {
                        currentStep.isLocked = true
                    }
                    if (ability.LastDoneStep) {
                        if (ability.LastDoneStep == currentStep.stepNumber) {
                            currentStep.status = "confirmed"
                        }
                    }
                    return currentStep;
                }))
            }
        })
    }, [selectedStep]);
    const {user: {Id: UserId}} = useUser()

    const selectStep = (stepNumber: number) => {
        setSelectedStep(stepNumber);
    };
    return (
        <div className="flex h-[100px] w-full">
            {steps.map((step) => {
                let isActive = false;
                if (step.stepNumber == 2) {
                    isActive =
                        selectedStep == 2 || selectedStep == 3 || selectedStep == 4;
                } else if (step.stepNumber == 5 || step.stepNumber == 6) {
                    isActive = selectedStep == 5 || selectedStep == 6;
                } else {
                    isActive = step.stepNumber == selectedStep;
                }
                return (
                    <Step
                        onClick={() => {
                            if (!step.isLocked) {
                                selectStep(step.stepNumber);
                            }
                        }}
                        isActive={isActive}
                        key={v4()}
                        {...step}
                    />
                );
            })}
        </div>
    );
}

export const FormSubSteps = ({
                                 selectedStep,
                                 setSelectedStep,
                             }: {
    selectedStep: number;
    setSelectedStep: (stepNumber: number) => void;
}) => {
    const steps: FormStepType[] = [
        {
            stepNumber: 2,
            stepName: "IFM Beslenme Öyküsü Formu",
        },
        {
            stepNumber: 3,
            stepName: "IFM Değerlendirme Formu",
        },
        {
            stepNumber: 4,
            stepName: "Tıbbi Şikayet Değerlendirme Formu",
        },
    ];

    return (
        <div className="flex h-[70px] w-full">
            {steps.map((step) => {
                return (
                    <FormSubStep
                        onClick={() => {
                            setSelectedStep(step.stepNumber);
                        }}
                        isActive={step.stepNumber == selectedStep}
                        key={v4()}
                        {...step}
                    />
                );
            })}
        </div>
    );
};

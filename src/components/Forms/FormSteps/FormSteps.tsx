import React from "react";
import { v4 } from "uuid";
import Step, { FormStepType, FormSubStep } from "./Step";

export default function FormSteps({
  selectedStep,
  setSelectedStep,
}: {
  selectedStep: number;
  setSelectedStep: (stepNumber: number) => void;
}) {
  const steps: FormStepType[] = [
    {
      status: "confirmed",
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
      isLocked: true,
    },
  ];
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
      stepName: "IFM Değerlendirme Formu",
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

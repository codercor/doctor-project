import React from 'react'
import { v4 } from 'uuid'
import Step, { FormStepType } from './Step'



export default function FormSteps() {
    const steps: FormStepType[] = [
        {
            status: "confirmed",
            stepNumber: 1,
            stepName: "Ön Başvuru Formu"
        },
        {
            stepNumber: 2,
            stepName: "Başvuru Formları"
        },
        {
            stepNumber: 3,
            stepName: "MSQ Formu",
            isLocked: true
        }
    ]
    const [selectedStep, setSelectedStep] = React.useState(2)
    const selectStep = (stepNumber: number) => {
        setSelectedStep(stepNumber)
    }
    return (
        <div className='flex h-[100px] w-full'>
            {steps.map((step) => {
                return <Step onClick={
                    () => {
                        if (!step.isLocked) {
                            selectStep(step.stepNumber)
                        }
                    }
                } isActive={step.stepNumber === selectedStep} key={v4()} {...step} />
            })}
        </div>
    )
}

import ComponentHeading from "@components/BoxHeading/BoxHeading";
import FirstForm from "@components/Forms/BasvuruForms/FirstForm";
import FormAlert from "@components/Forms/FormAlert/FormAlert";
import FormsListTable from "@components/Forms/FormsListTable/FormsListTable";
import FormSteps, { FormSubSteps } from "@components/Forms/FormSteps/FormSteps";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SozlesmeModal from "@components/SozlesmeModal/SozlesmeModal";
import React, { useEffect } from "react";
import { loremIpsum } from "lorem-ipsum";
import Router, { useRouter } from "next/router";
import { v4 } from "uuid";
import SecondForm from "@components/Forms/BasvuruForms/SecondForm/SecondForm";
import Flow2Form from "@components/Forms/BasvuruForms/Flow2Form";
import Flow3Form from "@components/Forms/BasvuruForms/Flow3Form";
import useUser from "../../src/hooks/user.hook";
import { request } from "@config"
import Flow4Form from "@components/Forms/BasvuruForms/Flow4Form";
import Flow5Form from "@components/Forms/BasvuruForms/Flow5Form";
import { toast } from 'react-hot-toast'

export interface UserFlowAbilityData {
    "IsPatient": boolean,
    "IsHavePreApplicationForm": boolean,
    "LastDoneStep": number,
    "IsHaveWaitingForm": boolean,
    "LastWaitingDoneStep": null | number,
    "IsRejected": boolean,
}


export const getUserFlowAbilibility = async (UserId: string) => {
    const isActivePreApplicationFormRequest: any = await request.get(`/appointmentsettings`)
    const isActivePreApplicationForm = isActivePreApplicationFormRequest.data[0].Status
    let formContractsRequest;
    let formContracts;
    try {
        formContractsRequest = await request.get(`/log/check/${UserId}`)
        formContracts = formContractsRequest.data
    } catch (err) {
        formContracts = null;
    }
    const userAbilityRequest: any = await request.get(`/userflows/user/${UserId}`);
    const userAbility: UserFlowAbilityData = userAbilityRequest.data;
    return {
        isActivePreApplicationForm,
        ...userAbility,
        formContracts
    }
}
export default function Forms() {


    const { user: { Id: UserId } } = useUser()
    const key = `selectedStep-${UserId}`
    const [selectedStep, setSelectedStep] = React.useState(Number(localStorage.getItem(key)) || 1);
    const [waitingDoneStep, setWaitingDoneStep] = React.useState<number | null>(null);


    useEffect(() => {
        console.log("key", key)
        localStorage.setItem(key, selectedStep.toString());
        console.log(localStorage.getItem(key))
        // setTheLockedSteps(selectedStep)
    }, [selectedStep]);

    const [forms, setForms] = React.useState([
        {
            step: 1,
            component: () => <FirstForm />
        },
        {
            step: 2,
            component: () => <Flow2Form setSelectedStep={setSelectedStep} />,
        },
        {
            step: 3,
            component: () => <Flow3Form setSelectedStep={setSelectedStep} />,
        },
        {
            step: 4,
            component: () => <Flow4Form />,
        },
        {
            step: 5,
            component: () => <Flow5Form />,
        },
    ]);

    const [isSecondToForthStepIsLocked, setIsSecondToForthStepIsLocked] = React.useState(false);

    useEffect(() => {
        const abilityPromise = getUserFlowAbilibility(UserId);
        abilityPromise.then((ability) => {
            setWaitingDoneStep(ability.LastWaitingDoneStep)
            //ön başvuru aktif değilse
            if (!ability.isActivePreApplicationForm) {
                //ön başvuru formunu doldurmuşsa
                if (ability.IsHavePreApplicationForm) {
                    console.log("ön başvuruyu doldurmuş")
                } else if (!ability.isActivePreApplicationForm && ability.IsHaveWaitingForm) {
                    //başvurular kapalıyken ön başvuru beklemedeyse
                    toast.success("Ön Başvurunuz alınmıştır. Lütfen onaylanmasını bekleyiniz.");
                } else {
                    toast.error("Ön Başvurular kapalıdır lütfen daha sonra tekrar deneyiniz.");
                    Router.push("/dashboard");
                }
                //
            } else {
                console.log("ön başvular açık")
                setSelectedStep(ability.LastDoneStep + 1)
            }
            if (ability.LastDoneStep >= 1) {
                setIsSecondToForthStepIsLocked(true)
            }

        })
    }, [])


    return (
        <DashboardLayout>
            <div className="bg-[white]">
                <FormSteps
                    selectedStep={selectedStep}
                    setSelectedStep={setSelectedStep}
                />
                <div className="mt-[30px]">
                    {!isSecondToForthStepIsLocked && selectedStep >= 2 && selectedStep <= 4 && <FormSubSteps
                        selectedStep={selectedStep}
                        setSelectedStep={setSelectedStep}
                    />}
                    {forms.map((form) => {
                        if (form.step === selectedStep) {
                            if (selectedStep == waitingDoneStep) {
                                // eslint-disable-next-line react/jsx-key
                                return (<FormAlert
                                    text="Göndermiş olduğunuz form onaylanmayı bekliyor"
                                    status="pending"
                                />)
                            }
                            return form.component();
                        }
                    })}
                </div>
            </div>
        </DashboardLayout>
    );
}

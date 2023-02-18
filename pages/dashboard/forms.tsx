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
import { useBreakpoint, useIsDesktop } from "src/hooks/breakpoint";
import Flow6Form from "@components/Forms/BasvuruForms/Flow6Form";

export interface UserFlowAbilityData {
    "IsPatient": boolean,
    "IsHavePreApplicationForm": boolean,
    "LastDoneStep": number,
    "IsHaveWaitingForm": boolean,
    "LastWaitingDoneStep": null | number,
    "IsRejected": boolean,
    "IsFormLocked": boolean,
    "IsFormLockedStep": number,
}

// let ornek  = {
//     lockeds: [2,4,5],
//     pendings: [5],
//     confirmeds:[1,2],
//     active:[6],
// }

export const getUserFlowAbilibility = async (UserId: string) => {
    const isActivePreApplicationFormRequest: any = await request.get(`/appointmentsettings`)
    const isActivePreApplicationForm = isActivePreApplicationFormRequest.data[0].Status
    let formContractsRequest;
    let formContracts;
    try {
        formContractsRequest = await request.post(`/log/check/${UserId}`)
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
    const isDesktop = useIsDesktop();

    const { user: { Id: UserId, IsPatient } } = useUser()
    const key = `selectedStep-${UserId}`
    const [selectedStep, setSelectedStep] = React.useState(Number(localStorage.getItem(key)) || 1);
    const [waitingDoneStep, setWaitingDoneStep] = React.useState<number | null>(null);

    useEffect(() => {
        console.log("key", key)
        localStorage.setItem(key, selectedStep.toString());
        console.log(localStorage.getItem(key))
        // setTheLockedSteps(selectedStep)
        if (!IsPatient) {
            Router.push("/dashboard")
        }
    }, [selectedStep]);
    const [showLastForm, setShowLastForm] = React.useState(true);
    const [showLastFormStep, setShowLastFormStep] = React.useState<null | number>(null);
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
        {
            step: 6,
            component: () => <Flow6Form />,
        },
    ]);

    const [isSecondToForthStepIsLocked, setIsSecondToForthStepIsLocked] = React.useState(false);
    const [done, setDone] = React.useState(false);
    const { user } = useUser()
    useEffect(() => {
        const userGender = user.Information.Gender
        const userFullName = user.Information.Fullname
        if (!userGender || !userFullName) {
            toast.error("Lütfen önce profil bilgilerinizi doldurunuz.")
            Router.push("/dashboard/account");
        }
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
                if (ability.LastDoneStep != 6) {
                    setSelectedStep(ability.LastDoneStep + 1)
                } else {
                    setDone(true)
                }
            }
            if (ability.LastDoneStep >= 1 && [2, 3, 4].includes(ability.LastWaitingDoneStep as number)) {
                alert("okk")
                setIsSecondToForthStepIsLocked(true)
            }
            setShowLastForm(ability.IsFormLocked)
            setShowLastFormStep(ability.IsFormLockedStep)

        })
    }, [])


    return (
        <DashboardLayout>
            {
                !isDesktop ? <div className="w-full h-full items-center justify-center flex p-[30px]">
                    <h1> Bu sayfayı görüntülemek için mobil cihazlar uygun değildir. </h1>
                </div> : <div className="bg-[white]">
                    {/* <h1> step {selectedStep} locked {showLastForm + ""} last step {showLastFormStep + ""} </h1> */}
                    <FormSteps
                        selectedStep={selectedStep}
                        setSelectedStep={setSelectedStep}
                    />
                    <div className="mt-[30px]">
                        {!isSecondToForthStepIsLocked && selectedStep >= 2 && selectedStep <= 4 && <FormSubSteps
                            selectedStep={selectedStep}
                            setSelectedStep={setSelectedStep}
                        />}
                        {((selectedStep == 5 || selectedStep == 6) && !showLastForm && waitingDoneStep != 6) && <>
                            <FormAlert status="inReview" text="MSQ formunu her doldurmanız gerektiğinde mail ile bilgilendirileceksiniz." />
                        </>}
                        {
                            !done ? forms.map((form) => {
                                if (form.step === selectedStep) {
                                    if (selectedStep == waitingDoneStep || [2, 3, 4].includes(waitingDoneStep || 0)) {
                                        // eslint-disable-next-line react/jsx-key
                                        return (<FormAlert
                                            text="Göndermiş olduğunuz form onaylanmayı bekliyor"
                                            status="pending"
                                        />)
                                    }
                                    if (showLastForm) {
                                        if (showLastFormStep != selectedStep) {
                                            return <></>
                                        }
                                    } else {
                                        if (selectedStep == 5 || selectedStep == 6) {
                                            return <></>
                                        }
                                    }
                                    return form.component();
                                }
                            }) : <FormAlert text="Tebrikler tüm formlarınız iletilmiştir" status="inReview" />
                        }
                    </div>
                </div>
            }

        </DashboardLayout>
    );
}

import { useEffect, useState } from "react";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Switch from "@mui/material/Switch";
import SozlesmeModal from "@components/SozlesmeModal/SozlesmeModal";
import { loremIpsum } from "lorem-ipsum";
import { Divider } from "@mui/material";
import useUser from "../../src/hooks/user.hook";
import request from "@config";
import { useRouter } from "next/router";
import PatientContract from "@components/ContractContents/PatientContract";
import PatientIlluminationContract from "@components/ContractContents/PatientIlluminationContract";
import { Info } from "@mui/icons-material";

const PatientAgreements = () => {
    const [patientUserAggrement, setPatientUserAggrement] = useState(false);
    const [patientIlluminationText, setPatientIlluminationText] = useState(false);

    const [modals, setModals] = useState({
        userAgreement: false,
        illuminationText: false
    })

    const [realAgreements, setRealAgreements] = useState({
        userAgreement: false,
        illuminationText: false
    });
    const [loading, setLoading] = useState(true);
    const getAndSetAgreements = async () => {
        return request.post(`/log/check/${UserId}`)
            .then((res) => {
                const { IsPatientIlluminationText, IsPatientUserAgreement } = res.data;
                console.log(IsPatientIlluminationText, IsPatientUserAgreement)
                setLoading(false);
                setPatientIlluminationText(IsPatientIlluminationText);
                setPatientUserAggrement(IsPatientUserAgreement);
                if (IsPatientIlluminationText && IsPatientUserAgreement) {

                    router.push("/dashboard/forms")
                }
            })
    }
    const { user: { Id: UserId } } = useUser();
    const router = useRouter();
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        getAndSetAgreements();
    }, [])

    useEffect(() => {
        if (realAgreements.userAgreement && realAgreements.illuminationText && !updated) {
            request.post(`/log`, {
                "UserId": UserId,
                "IsPatientUserAgreement": true,
                "IsPatientIlluminationText": true
            })
                .then((res) => {
                    setUpdated(true);
                    getAndSetAgreements();

                })
        }
    }, [realAgreements.userAgreement, realAgreements.illuminationText])


    return loading ? <></> : (
        <DashboardLayout>
            <div
                className="flex flex-col items-start justify-top px-[50px] py-[50px] w-full gap-[50px]  bg-[#E7F0F1] bg-opacity-[50%]">
                <h3 className="font-nexa-bold bg-[#95bcc0] flex items-center justify-center gap-[6px] border-[1px] rounded-[4px] border-[#5a7f83] text-[#293b3d] p-[10px] text-[14px]">
                    <Info />
                    <span>
                        Formlara girmeden önce aşağıdaki anlaşmaları kabul etmeniz
                        gerekmektedir
                    </span>
                </h3>
                <div className="flex items-center justify-start w-full h-full">
                    {
                        modals.userAgreement &&
                        <SozlesmeModal closeWithValue={(x) => {
                            setModals({ ...modals, userAgreement: false })
                            setPatientUserAggrement(x)
                            setRealAgreements({ ...realAgreements, userAgreement: x })
                        }}>
                            <PatientContract />
                        </SozlesmeModal>
                    }
                    {
                        modals.illuminationText &&
                        <SozlesmeModal closeWithValue={(x) => {
                            setModals({ ...modals, illuminationText: false })
                            setPatientIlluminationText(x)
                            setRealAgreements({ ...realAgreements, illuminationText: x })
                        }}>
                            <PatientIlluminationContract />
                        </SozlesmeModal>
                    }
                    <div className="flex flex-col gap-[20px] w-[50%]">
                        <div className="flex gap-[10px]">
                            <input onClick={(e) => {
                                e.preventDefault();
                                setModals({ ...modals, userAgreement: true })
                            }} checked={patientUserAggrement}
                                className="h-[24px]  appearance-none w-[24px] bg-primary-flat checked:accent-black-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-[black] checked:after:content-['✓']"
                                type="checkbox" />
                            <p className="font-nexa-regular">
                                Hasta Kullanıcı Sözleşmesi
                            </p>
                        </div>
                        <div className="flex gap-[10px]">
                            <input onClick={(e) => {
                                e.preventDefault();
                                setModals({ ...modals, illuminationText: true })
                            }} checked={patientIlluminationText}
                                className="h-[24px] appearance-none w-[24px] bg-primary-flat checked:accent-black-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-[black] checked:after:content-['✓']"
                                type="checkbox" />
                            <p className="font-nexa-regular">
                                Aydınlatma Metni
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default PatientAgreements;
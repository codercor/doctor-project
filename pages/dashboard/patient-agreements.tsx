import {useEffect, useState} from "react";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Switch from "@mui/material/Switch";
import SozlesmeModal from "@components/SozlesmeModal/SozlesmeModal";
import {loremIpsum} from "lorem-ipsum";
import {Divider} from "@mui/material";
import useUser from "../../src/hooks/user.hook";
import request from "@config";
import {useRouter} from "next/router";

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
                const {IsPatientIlluminationText, IsPatientUserAgreement} = res.data;
                console.log(IsPatientIlluminationText, IsPatientUserAgreement)
                setLoading(false);
                setPatientIlluminationText(IsPatientIlluminationText);
                setPatientUserAggrement(IsPatientUserAgreement);
                if (IsPatientIlluminationText && IsPatientUserAgreement) {

                    router.push("/dashboard/forms")
                }
            })
    }
    const {user: {Id: UserId}} = useUser();
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
                className="flex flex-col items-center justify-top py-[50px] w-full gap-[50px]  bg-[#0043] bg-opacity-[50%]">
                <h3 className="font-nexa-bold text-[14px]"> Formlara girmeden önce aşağıdaki anlaşmaları kabul etmeniz
                    gerekmektedir </h3>
                <div className="flex items-center justify-center w-full h-full">
                    {
                        modals.userAgreement &&
                        <SozlesmeModal content={loremIpsum({count: 500})} closeWithValue={(x) => {
                            setModals({...modals, userAgreement: false})
                            setPatientUserAggrement(x)
                            setRealAgreements({...realAgreements, userAgreement: x})
                        }}/>
                    }
                    {
                        modals.illuminationText &&
                        <SozlesmeModal content={loremIpsum({count: 400})} closeWithValue={(x) => {
                            setModals({...modals, illuminationText: false})
                            setPatientIlluminationText(x)
                            setRealAgreements({...realAgreements, illuminationText: x})
                        }}/>
                    }
                    <div className="flex flex-col w-[50%]">
                        <p className="font-nexa-regular">
                            Hasta Kullanıcı Sözleşmesi
                        </p>
                        <input onClick={(e) => {
                            e.preventDefault();
                            setModals({...modals, userAgreement: true})
                        }} checked={patientUserAggrement}
                               className="h-[24px]  appearance-none w-[24px] bg-primary-flat checked:accent-black-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-[black] checked:after:content-['✓']"
                               type="checkbox"/>
                        <Divider/>
                        <p className="font-nexa-regular">
                            Aydınlatma Metni
                        </p>
                        <input onClick={(e) => {
                            e.preventDefault();
                            setModals({...modals, illuminationText: true})
                        }} checked={patientIlluminationText}
                               className="h-[24px] appearance-none w-[24px] bg-primary-flat checked:accent-black-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-[black] checked:after:content-['✓']"
                               type="checkbox"/>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default PatientAgreements;
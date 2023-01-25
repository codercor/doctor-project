import {Check, Close} from "@mui/icons-material";
import React from "react";
import classNames from "classnames";
import {request} from "@config";
import toast from "react-hot-toast";
import FormAlert from "@components/Forms/FormAlert/FormAlert";
import CircularProgress from "@mui/material/CircularProgress";

const SelectStatus = ({value, onChange}: {
    value: string;
    onChange: (value: string) => void;
}) => {
    return <>
        <div className="flex items-center justify-center gap-[10px]">
            <div onClick={() => onChange("Acil")}
                 className={classNames("bg-[#D4E5E8] text-[#4E929D] flex items-center justify-center  border-none h-[48px] w-[48px] rounded-[5px_20px]")}>
                {value == "Acil" && <Check/>}
            </div>
            <p className="text-[black] text-[16px] font-nexa-bold"> Acil </p>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
            <div onClick={() => onChange("Randevulu")}
                 className={classNames("bg-[#D4E5E8] text-[#4E929D] flex items-center justify-center  border-none h-[48px] w-[48px] rounded-[5px_20px]")}>
                {value == "Randevulu" && <Check/>}
            </div>
            <p className="text-[black] text-[16px] font-nexa-bold"> Randevulu </p>
        </div>
    </>
}

interface Iprops {
    finish: () => void;
    UserId: string;
}

export const CreateAppointmentModal = ({finish, UserId}: Iprops) => {

    const [tempStatus, setTempStatus] = React.useState<string>("Acil")
    const [tempDate, setTempDate] = React.useState<string>("")
    const [loading, setLoading] = React.useState<boolean>(false)
    const createAppointment = async () => {
        setLoading(true);
        request.post(`/userappointments`, {
            UserId,
            Date: tempDate,
            Status: tempStatus
        }).then(() => {
            toast.success("Randevu oluşturuldu");
            setLoading(false);
            finish();
        }).catch((e) => {
            toast.error("Randevu oluşturulamadı");
            setLoading(false);
            finish();
        });
    }
    if (!UserId) return <FormAlert status="rejected" text={"User yok"}/>
    return (
        <div onClick={(e) => {
            e.stopPropagation();
            finish()
        }} className='fixed top-0 z-[2] grid place-content-center left-0 w-screen h-screen bg-opacity-50 bg-black-100'>

            <div onClick={(e) => {
                e.stopPropagation()
            }} className="w-[904px] relative h-[356px] px-[32px] py-[40px] bg-[white] rounded-[10px] flex flex-col">
                <h1 className="text-[#4E929D] !text-[24px] font-nexa-bold">Randevu Oluştur</h1>
                <p className='text-[#5C5C5C] text-[16px]'> Hastaya ait randevu ekleyin.</p>
                <div className="flex flex-col mt-[45px]">
                    <h3 className='text-[#4E929D] !text-[14px] font-nexa-bold'>
                        Hasta Durumu
                    </h3>
                    <div className='flex gap-[50px] '>
                        <SelectStatus value={tempStatus} onChange={(v) => {
                            setTempStatus(v)
                        }}/>

                        <div className="flex ml-auto flex-col w-[400px] items-start justify-center gap-[10px]">
                            <h3 className='text-[#4E929D] !text-[14px] font-nexa-bold'>
                                Randevu Tarihi
                            </h3>
                            <input value={tempDate} onChange={
                                (e) => setTempDate(e.currentTarget.value)
                            } type="datetime-local"
                                   className='w-full border-none rounded-[5px_20px_0_20px] bg-[#f3f3f3]'/>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    createAppointment()
                }}
                        disabled={loading || !tempDate}
                        className='text-[white] mt-auto rounded-[20px_5px] font-nexa-bold bg-[#4E929D] w-[252px] h-[50px] disabled:opacity-[50%]'>
                    {loading ?  <CircularProgress sx={{color:'white'}} size="24px" />:'Oluştur' }

                </button>
                <button onClick={() => {
                    finish()
                }}
                        className='w-[50px] right-[20px] top-[20px] absolute text-[white] h-[50px] hover:bg-[#df7676] hover:shadow-deepgreen-100 duration-200 grid place-content-center hover:animate-spin transition-all hover:shadow-inner bg-[#4E929D] rounded-full'>
                    <Close/>
                </button>
            </div>

        </div>


    )
};
import Button from "@components/Button";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";
import styled from "@emotion/styled";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useEffect, useState } from "react";
import useUser from "src/hooks/user.hook";
import { request } from '@config'
import { toast } from "react-hot-toast";
const Settings = () => {
    const [checked, setChecked] = useState(false);
    const [Id, setId] = useState(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        request.put("/appointmentsettings/" + Id, {
            Status: event.target.checked
        }).then(()=>{
            toast.success("Başarıyla Güncellendi")
        }).catch(()=>{
            toast.error("Çok sık güncelleme yapıldı daha sonra tekrar deneyin")
        })
    };

    useEffect(() => {
        if (!Id) {
            request.get("/appointmentsettings").then(({ data }) => {
                setId(data[0].Id)
                setChecked(data[0].Status)
            })
        }
    }, []);



    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[#F9FBFC] p-[32px] flex flex-col rounded-[20px_5px_20px_5px] w-2/3 h-full">
                    <div><Text>Başvuru Kontrol Alanı</Text></div>
                    <div className=" w-full mt-4 gap-[12px] flex justify-between">
                        <p className="text-[black]">Başvurularınızı Kontrol Edin</p>
                        <div onClick={() => setChecked(!checked)} className=" flex">
                            {checked ? <p className="text-[black]">Açık</p> : <p className="text-[black]">Kapalı</p>}
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                readOnly={false}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                    </div>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default Settings;
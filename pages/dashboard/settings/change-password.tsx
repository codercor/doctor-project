import Button from "@components/Button";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SettingsSubLayout from "@components/Layouts/SettingsSubLayout";
import Text from "@components/Text";
import { useEffect, useState } from "react";
import useAuth from "src/hooks/auth.hook";
import useUser from "src/hooks/user.hook";

const Settings = () => {
    const { updateUserPassword } = useUser();
    const { logout } = useAuth()
    const [newPassword, setNewPassword] = useState("");

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*?&.]).{8,}$/gm.test(newPassword)) {
            setIsValid(true);
        }
        else {
            setIsValid(false);
            //errors.Password = 'Şifreniz en az 8 karakterden oluşmalı, en az bir büyük harf, bir küçük harf ve bir sayı içermelidir.';
        }
    }, [newPassword]);


    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="bg-[#F9FBFC] p-[32px] flex flex-col rounded-[20px_5px_20px_5px] w-full md:w-2/3 h-full">
                    <div> <Text>Şifre Güncelleme</Text> </div>
                    <div className="flex flex-col w-full gap-[12px]">
                        {/* <Input text="Mevcut Şifreniz" type="password" /> */}
                        <Input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} text="Yeni Şifreniz" type="password" />
                        {isValid && <Text className="text-green-500">Şifreniz güvenli</Text>}
                        {!isValid && <Text className="text-red-500">Şifreniz en az 8 karakterden oluşmalı, en az bir büyük harf, bir küçük harf ve bir sayı içermelidir.</Text>}
                    </div>
                    <Button
                        disabled={!isValid}
                        onClick={() => {
                            updateUserPassword(newPassword).then(() => {
                                logout()
                            })
                        }} type="tertiary-flat" className="text-center mt-5" >Kaydet</Button>
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    );
}

export default Settings;
import { forgotPasswordRequest } from "@app/User/user.utils";
import Button from "@components/Button";
import Input from "@components/Input/Input";
import AuthLayout from "@components/Layouts/AuthLayout";
import Text from "@components/Text";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UserCredentials } from "src/app/User/user.types";
import useAuth from "src/hooks/auth.hook";


const Login = () => {
    const [credentials, setCredentials] = useState<{ Email: string }>({
        Email: 'nurettin@gmail.com',
    });
    const submitForgot = () => {
        forgotPasswordRequest(credentials.Email);
    }

    return (
        <AuthLayout>
            <div className="md:w-[1440px] md:h-full h-[500px] w-[340px] flex justify-center items-center rounded-[30px_5px]">
                <div className=" w-[380px] h-[402px] flex flex-col items-center md:mr-[102px]">
                    <Text type="h3" className="text-white !text-[34px]">Şifremi unuttum</Text>
                    <Input value={credentials.Email}
                        onChange={(e) => setCredentials({ ...credentials, Email: e.target.value })}
                        text="E-posta" type="email" />
                    <Button onClick={submitForgot} type="secondary" className="w-full mt-[20px] h-[48px] leading-none flex items-center justify-center">
                        <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Sıfırla</Text>
                    </Button>
                </div>
                <div className="bg-[url(/images/png/login.png)] hidden md:grid place-content-center bg-cover bg-no-repeat w-[610px] h-[620px]">
                    <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.</Text>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Login;
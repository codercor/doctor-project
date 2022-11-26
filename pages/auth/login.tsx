import Button from "@components/Button";
import Input from "@components/Input/Input";
import AuthLayout from "@components/Layouts/AuthLayout";
import Text from "@components/Text";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UserCredentials } from "src/app/User/user.types";
import useAuth from "src/hooks/auth.hook";


const Login = () => {
    const router = useRouter();
    const [credentials, setCredentials] = useState<UserCredentials>({
        Email: 'nurettin@gmail.com',
        Password: '159753@Bbng'
    });
    const { user, login, error } = useAuth();
    const submitLogin = () => {
        login(credentials);
    }
    useEffect(() => {
        if (user.IsAuthenticated) router.push('/dashboard');
    }, [user])

    return (
        <AuthLayout>
            <div className="md:w-[1440px] md:h-full h-[500px] w-[340px] flex justify-center items-center rounded-[30px_5px]">
                <div className=" w-[380px] h-[402px] flex flex-col items-center md:mr-[102px]">
                    <Text type="h3" className="text-white !text-[34px]">Giriş Yap</Text>
                    {error.IsError && <Text type="paragraph" className="text-red-500 !text-[14px]">{error.ErrorMessage}</Text>}
                    <Input value={credentials.Email}
                        onChange={(e) => setCredentials({ ...credentials, Email: e.target.value })}
                        text="E-posta" type="email" />
                    <Input
                        value={credentials.Password}
                        onChange={(e) => setCredentials({ ...credentials, Password: e.target.value })}
                        text="Şifre" type="password" />
                    <div className="mt-[20px] flex justify-between w-full">
                        <div className="flex items-center leading-none gap-2">
                            <input className="h-[24px] appearance-none w-[24px] bg-primary-flat checked:accent-white-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-primary-flat checked:after:content-['✓']" type="checkbox" />
                            <Text type="h4" className="!text-[14px] !py-[10px]">Beni Hatırla</Text>
                        </div>
                        <div onClick={()=>{
                            router.push('/auth/forgot-password')
                        }} > <Text type="h4" className="!text-[14px] font-nexa-light  !py-[10px]">Şifremi Unuttum</Text></div>
                    </div>
                    <Button onClick={submitLogin} type="secondary" className="w-full mt-[20px] h-[48px] leading-none flex items-center justify-center">
                        <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Giriş Yap</Text>
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
import { forgotPasswordRequest } from "@app/User/user.utils";
import Button from "@components/Button";
import Input from "@components/Input/Input";
import AuthLayout from "@components/Layouts/AuthLayout";
import Text from "@components/Text";
import Head from "next/dist/shared/lib/head";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UserCredentials } from "src/app/User/user.types";
import useAuth from "src/hooks/auth.hook";
import { ValidationErrors } from "./pre-register";


const Login = () => {
    const [credentials, setCredentials] = useState<{ Email: string }>({
        Email: '',
    });
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
        Email: null,
    });
    const submitForgot = () => {
        forgotPasswordRequest(credentials.Email);
    }
    const registerValidation = () => {
        let errors: ValidationErrors = {
            Email: null,
        }
        // if (credentials.Email === '' || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(credentials.Email) === false) {
            if (credentials.Email === '' || /^([_a-z0-9]+[\._a-z0-9]*)(\+[a-z0-9]+)?@(([a-z0-9-]+\.)*[a-z]{2,3})$/.test(credentials.Email) === false) {
            errors.Email = 'Geçerli bir eposta giriniz';
        } else {
            errors.Email = null;
        }
        
        setValidationErrors(errors);
    }

    useEffect(() => {
        if (credentials.Email) {
            registerValidation()
        }
    }, [credentials.Email])
    return (
        <AuthLayout>
            <Head>
                <title> Şifremi Unuttum | Nazan Uysal Harzadın </title>
            </Head>
            <div className="md:h-full h-[500px] w-[340px] md:w-full lg:w-[340px]  flex justify-center items-center rounded-[30px_5px]">
                <div className="w-[380px] md:min-w-full 2xl:w-full h-[402px] flex flex-col items-center lg:mr-[62px]">
                    <Text type="h3" className="text-white cursor-pointer !text-[34px]">Şifremi unuttum</Text>
                    <Input value={credentials.Email}
                        onChange={(e) => {
                            registerValidation()
                            setCredentials({ ...credentials, Email: e.target.value })
                        }}
                        text="E-posta" type="email" />
                    {(typeof validationErrors.Email) &&
                        <Text type="paragraph" className="text-red-500 text-[12px]">{validationErrors.Email}</Text>}
                    <Button disabled={
                        (!credentials.Email || !!validationErrors.Email?.length)
                    } onClick={submitForgot} type="secondary" className="w-full mt-[20px] diabled:opacity-80 h-[48px] leading-none flex items-center justify-center">
                        <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Sıfırla</Text>
                    </Button>
                </div>
                <div className="bg-[url(/images/png/login.png)] hidden lg:grid place-content-center bg-cover bg-center bg-no-repeat md:min-w-[410px] lg:min-w-[610px] h-[620px]">
                    <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.</Text>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Login;
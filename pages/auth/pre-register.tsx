import { UserRegisterCredentials } from "@app/User/user.types";
import Button from "@components/Button";
import Input from "@components/Input/Input";
import AuthLayout from "@components/Layouts/AuthLayout";
import Text from "@components/Text";
import { useEffect, useState } from "react";
import useAuth from "src/hooks/auth.hook";
import { Router, useRouter } from "next/router";
import SozlesmeModal from "@components/SozlesmeModal/SozlesmeModal";
import toast from "react-hot-toast";
import { ErrorOutlined } from "@mui/icons-material";
import axios from "axios";
import UserContract from "@components/ContractContents/UserContract";
import UserIlluminationContract from "@components/ContractContents/UserIlluminationContract";
import request from "@config";
import Head from "next/dist/shared/lib/head";
import Script from "next/dist/client/script";

const Register = () => <><RegisterForm /></>

export default Register;
export type ValidationErrors = {
    Email: string | null,
}

const RegisterForm = () => {
    const [credentials, setCredentials] = useState<{ Email: string }>({
        Email: '',
    });
    const router = useRouter();
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const { user, register, error } = useAuth();


    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
        Email: null,
    });

    useEffect(() => {
        console.log("validationErrors", validationErrors);
    }, [validationErrors])
    const submitRegister = () => {
        if (validationErrors.Email) return;
        setDisabledButton(true);
        request.post("/auth/preregistration", { Email: credentials.Email }).then((res) => {
            toast.success("Kayıt başarılı, lütfen e-posta adresinize gelen linke tıklayarak kaydınızı tamamlayınız", {
                duration: 10000,
            })
            setTimeout(() => {
                router.push("/auth/login")
            }, 1000)

        }).catch((err) => {
            toast.error(err.response.data.Message, {
                duration: 10000,
            })
            setDisabledButton(false);

        })
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
    const checkUserInformationCompleted = () => {
        if (!user) return false
        if (!user.Information?.Fullname || !user.Information?.BirthDate || !user.Information?.Phone || !user.Information?.Gender) return false
        return true
    }
    useEffect(() => {
        if (user.IsAuthenticated) {
            if (!checkUserInformationCompleted() && user.IsAdmin === false) {
                router.push("/dashboard/account").then(() => {
                    toast.error("Lütfen önce tüm bilgilerinizi tamamlayınız", {
                        duration: 4000,
                        icon: <ErrorOutlined />,
                        className: "w-full text-center"
                    })
                })
            } else router.push('/dashboard');
        }
    }, [user])

    useEffect(() => {
        if (credentials.Email) {
            registerValidation()
        }
    }, [credentials.Email])

    return (
        <AuthLayout>
            <Head>
                <title> Kayıt Ol | Nazan Uysal Harzadın </title>
                <Script id="g-tag-1" async src="https://www.googletagmanager.com/gtag/js?id=G-D0HTKY3R5J"></Script>
                <Script id="g-tag-2" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-D0HTKY3R5J');`}
                </Script>
            </Head>

            <div
                className="md:h-full h-[500px] w-[340px] md:w-full lg:w-[340px]  flex justify-center items-center rounded-[30px_5px]">
                <div className="w-[380px] md:min-w-full 2xl:w-full h-[402px] flex flex-col items-center lg:mr-[62px]">
                    <Text type="h3" className="text-white !text-[34px]">Üye Ol</Text>
                    {error.IsError &&
                        <Text type="paragraph" className="text-red-500 !text-[14px]">{error.ErrorMessage}</Text>}
                    <Input onBlur={() => registerValidation()} text="E-posta" value={credentials.Email} type="email"
                        onChange={(e) => {
                            setCredentials({ ...credentials, Email: e.target.value })
                        }} />
                    {(typeof validationErrors.Email) &&
                        <Text type="paragraph" className="text-red-500 text-[12px]">{validationErrors.Email}</Text>}
                    <Button disabled={disabledButton} onClick={submitRegister} type="secondary"
                        className="w-full mt-[20px] h-[48px] !disabled:opacity-5 leading-none flex items-center justify-center">
                        <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Üye ol</Text>
                    </Button>
                </div>
                <div
                    className="bg-[url(/images/png/nazanlogin.jpeg)] hidden lg:grid place-content-center bg-center bg-cover bg-no-repeat md:min-w-[410px] lg:min-w-[610px] h-[620px]" >
                    <Text type="paragraph" className="text-[25px] backdrop-brightness-75  text-center text-[white] h-[186px] w-[448px]">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir
                        hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza
                        başlayın.</Text>
                </div>
            </div>
        </AuthLayout>
    );
}
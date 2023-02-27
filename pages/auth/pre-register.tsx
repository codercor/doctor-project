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

const Register = () => <><RegisterForm /></>

export default Register;


const RegisterForm = () => {
    const [credentials, setCredentials] = useState<{ Email: string }>({
        Email: 'corxjs@gmail.com',
    });
    const router = useRouter();
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const { user, register, error } = useAuth();
    const submitRegister = () => {
        setDisabledButton(true);
        request.post("/auth/preregistration", { Email: credentials.Email }).then((res) => {
            toast.success("Kayıt başarılı, lütfen e-posta adresinize gelen linke tıklayarak kaydınızı tamamlayınız", {
                duration: 10000,
            })
        }).catch((err) => {
            toast.error(err.response.data.message, {
                duration: 10000,
            })
            setDisabledButton(false);
        })
    }

    type ValidationErrors = {
        Email: string | null,
    }
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
        Email: null,
    });

    useEffect(() => {
        console.log("validationErrors", validationErrors);
    }, [validationErrors])



    const registerValidation = () => {
        let errors: ValidationErrors = {
            Email: null,
        }
        if (credentials.Email === '' || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(credentials.Email) === false) {
            console.log("Email is not valid");
            errors.Email = 'Email is not valid';
        } else {
            console.log("Email is valid");
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

    return (
        <AuthLayout>
            <Head>
                <title> Kayıt Ol | Nazan Uysal Harzadın </title>
            </Head>
            <div
                className="md:w-[1440px] md:h-full h-[500px] w-[340px] flex justify-center items-center rounded-[30px_5px]">
                <div className=" w-[380px] h-[402px] flex flex-col items-center md:mr-[102px]">
                    <Text type="h3" className="text-white !text-[34px]">Üye Ol</Text>
                    {error.IsError &&
                        <Text type="paragraph" className="text-red-500 !text-[14px]">{error.ErrorMessage}</Text>}
                    <Input onBlur={() => registerValidation()} text="E-posta" value={credentials.Email} type="email"
                        onChange={(e) => setCredentials({ ...credentials, Email: e.target.value })} />
                    {(typeof validationErrors.Email) &&
                        <Text type="paragraph" className="text-red-500 text-[12px]">{validationErrors.Email}</Text>}
                    <Button disabled={disabledButton} onClick={submitRegister} type="secondary"
                        className="w-full mt-[20px] h-[48px] !disabled:opacity-5 leading-none flex items-center justify-center">
                        <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Üye ol</Text>
                    </Button>
                </div>
                <div
                    className="bg-[url(/images/png/register.png)] hidden md:grid place-content-center bg-cover bg-no-repeat w-[610px] h-[620px]">
                    <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir
                        hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza
                        başlayın.</Text>
                </div>
            </div>
        </AuthLayout>
    );
}
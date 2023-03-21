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


const RegisterForm = () => {
    const [credentials, setCredentials] = useState<UserRegisterCredentials>({
        Email: '',
        Password: '',
        ConfirmPassword: ''
    });
    const router = useRouter();
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const { user, register, error } = useAuth();
    const submitRegister = () => {
        setDisabledButton(true);
        register(credentials).then(() => {
            setDisabledButton(false);
        }).catch(() => {
            setDisabledButton(false);
        })
    }

    useEffect(() => {
        if (router.query.id) {
            request.post("/auth/checkpreregistration", {
                Id: router.query.id
            }).then((res) => {
                setCredentials({
                    ...credentials,
                    Email: res.data.Email
                })
            }).catch((err) => {
                toast.error(err.response.data.message, {
                    duration: 4000,
                })
                router.push("/auth/pre-register");
            })
        }
    }, [router.query.id])

    type ValidationErrors = {
        Email: string | null,
        Password: string | null,
        ConfirmPassword: string | null
    }
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
        Email: null,
        Password: null,
        ConfirmPassword: null,
    });

    useEffect(() => {
        console.log("validationErrors", validationErrors);
    }, [validationErrors])

    const [sozlesmeler, setSozlesmeler] = useState<{
        kullanici: {
            value: boolean,
            modal: boolean
        }
        aydinlatma: {
            value: boolean,
            modal: boolean
        }
    }>({
        kullanici: { value: false, modal: false },
        aydinlatma: { value: false, modal: false }
    });


    const registerValidation = () => {
        let errors: ValidationErrors = {
            Email: null,
            Password: null,
            ConfirmPassword: null,
        }
        if (credentials.Email === '' || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(credentials.Email) === false) {
            console.log("Email is not valid");
            errors.Email = 'Email is not valid';
        } else {
            console.log("Email is valid");
            errors.Email = null;
        }

        if (credentials.Password === '' || credentials.Password.length < 6) {
            errors.Password = 'Şifre uygun değil.';

        } else {
            errors.Password = null;
        }

        if (credentials.ConfirmPassword === '' || credentials.ConfirmPassword !== credentials.Password) {
            errors.ConfirmPassword = 'Şifreler uygun değil';
        } else {
            errors.ConfirmPassword = null;
        }

        if (/^(?=.{8,20}$).*/gm.test(credentials.Password)) {
            errors.Password = null;
        }
        else {
            errors.Password = 'Şifreniz en az 8, en fazla 20 karakterden oluşmalı.';
        }

        setValidationErrors(errors);
    }
    const [renderCount, setRenderCount] = useState(0);
    useEffect(() => {
        if (renderCount != 0) {
            registerValidation()
            setRenderCount(renderCount + 1);
        }
    }, [credentials.ConfirmPassword, credentials.Email, credentials.Password])

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
                <title> Kayıt Tamamla | Nazan Uysal Harzadın </title>
                <Script id="g-tag-1" async src="https://www.googletagmanager.com/gtag/js?id=G-D0HTKY3R5J"></Script>
                <Script id="g-tag-2" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-D0HTKY3R5J');`}
                </Script>
            </Head>
            {
                sozlesmeler.kullanici.modal &&
                <SozlesmeModal closeWithValue={(x) => {
                    setSozlesmeler({ ...sozlesmeler, kullanici: { value: x, modal: false } })
                }} >
                    <UserContract />
                </SozlesmeModal>
            }
            {
                sozlesmeler.aydinlatma.modal &&
                <SozlesmeModal closeWithValue={(x) => {
                    setSozlesmeler({ ...sozlesmeler, aydinlatma: { value: x, modal: false } })
                }} >
                    <UserIlluminationContract />
                </SozlesmeModal>
            }
            <div
                className="md:h-full  min-h-[500px] w-[340px] md:w-full lg:w-[340px]  flex justify-center items-center rounded-[30px_5px]">
                <div className="w-[380px] md:min-w-full 2xl:w-full min-h-[402px] flex flex-col items-center lg:mr-[62px]">
                    <Text type="h3" className="text-white !text-[34px]">Üye Ol</Text>
                    {error.IsError &&
                        <Text type="paragraph" className="text-red-500  !text-[14px]">{error.ErrorMessage}</Text>}
                    <Input inputClassName="disabled:!bg-primary-flat disabled:opacity-80 cursor-not-allowed disabled:!rounded-[5px_20px_0_20px] duration-500 transition-all" disabled={true} onBlur={() => registerValidation()} text="E-posta" value={credentials.Email} type="email"
                        onChange={(e) => setCredentials({ ...credentials, Email: e.target.value })} />
                    {(typeof validationErrors.Email) &&
                        <Text type="paragraph" className="text-red-500 text-[12px]">{validationErrors.Email}</Text>}
                    <Input onBlur={() => registerValidation()} text="Şifre" value={credentials.Password} type="password"
                        onChange={(e) => {
                            setCredentials({ ...credentials, Password: e.target.value })
                        }} />
                    {(typeof validationErrors.Password) &&
                        <Text type="paragraph" className="text-red-500 text-[12px]">{validationErrors.Password}</Text>}
                    <Input onBlur={() => registerValidation()} text="Şifre Tekrar" value={credentials.ConfirmPassword}
                        type="password"
                        onKeyUp={(e) => registerValidation()}
                        onChange={(e) => setCredentials({ ...credentials, ConfirmPassword: e.target.value })} />
                    {(typeof validationErrors.ConfirmPassword) && <Text type="paragraph"
                        className="text-red-500 text-[12px]">{validationErrors.ConfirmPassword}</Text>}

                    <div className="mt-[20px] w-full">
                        <div className="flex items-center leading-none gap-2">
                            <input onClick={(e) => {
                                e.preventDefault();
                                setSozlesmeler({ ...sozlesmeler, kullanici: { ...sozlesmeler.kullanici, modal: true } })
                            }} checked={sozlesmeler.kullanici.value}
                                className="h-[24px] appearance-none w-[24px] bg-primary-flat checked:accent-white-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-[black] checked:after:content-['✓']"
                                type="checkbox" />
                            <Text type="h4" className="!text-[14px] font-nexa-light !py-[10px]"><span onClick={() => {
                                window.open('/sozlesmeler/kullanici-sozlesmesi', '_blank')
                            }} className="text-secondary cursor-pointer">Kullanıcı Sözleşmesi</span>’ni okudum anladım.</Text>
                        </div>
                        <div className="flex items-center leading-none gap-2">
                            <input onClick={(e) => {
                                e.preventDefault();
                                setSozlesmeler({ ...sozlesmeler, aydinlatma: { ...sozlesmeler.aydinlatma, modal: true } })
                            }} checked={sozlesmeler.aydinlatma.value}
                                className="h-[24px] appearance-none w-[24px] bg-primary-flat checked:accent-black-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-[black] checked:after:content-['✓']"
                                type="checkbox" />
                            <Text type="h4" className="!text-[14px] font-nexa-light !py-[10px]"><span onClick={() => {
                                window.open('/sozlesmeler/aydinlatma-metni', '_blank')
                            }} className="text-secondary cursor-pointer">Aydınlatma Metni</span>’ni okudum
                                anladım.</Text>
                        </div>
                    </div>
                    <Button disabled={
                        !sozlesmeler.kullanici.value ||
                        !sozlesmeler.aydinlatma.value ||
                        validationErrors.Email != null ||
                        validationErrors.Password != null ||
                        validationErrors.ConfirmPassword != null  ||
                        disabledButton
                    } onClick={submitRegister} type="secondary"
                        className="w-full mt-[20px] h-[48px] leading-none flex items-center justify-center">
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
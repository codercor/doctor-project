import { UserRegisterCredentials } from "@app/User/user.types";
import Button from "@components/Button";
import Input from "@components/Input/Input";
import AuthLayout from "@components/Layouts/AuthLayout";
import Text from "@components/Text";
import { useEffect, useState } from "react";
import useAuth from "src/hooks/auth.hook";
import { Router, useRouter } from "next/router";
const Register = () => <><RegisterForm /></>

export default Register;


const RegisterForm = () => {
    const [credentials, setCredentials] = useState<UserRegisterCredentials>({
        Email: 'corxjs@gmail.com',
        Password: '159753@Bbng',
        ConfirmPassword: '159753@Bbng'
    });
    const router = useRouter();

    const { user, register, error } = useAuth();
    const submitRegister = () => {
        register(credentials);
    }

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
            errors.Password = 'Password is not valid';

        } else {
            errors.Password = null;
        }
        if (credentials.ConfirmPassword === '' || credentials.ConfirmPassword !== credentials.Password) {
            errors.ConfirmPassword = 'Confirm password is not valid';
        } else {
            errors.ConfirmPassword = null;
        }
        setValidationErrors(errors);
    }
    useEffect(() => {
        if (user.IsAuthenticated) router.push('/dashboard');
    }, [user])

    return (
        <AuthLayout>
            <div className="md:w-[1440px] md:h-full h-[500px] w-[340px] flex justify-center items-center rounded-[30px_5px]">
                <div className=" w-[380px] h-[402px] flex flex-col items-center md:mr-[102px]">
                    <Text type="h3" className="text-white !text-[34px]">Üye Ol</Text>
                    {error.IsError && <Text type="paragraph" className="text-red-500 !text-[14px]">{error.ErrorMessage}</Text>}
                    <Input onBlur={() => registerValidation()} text="E-posta" value={credentials.Email} type="email" onChange={(e) => setCredentials({ ...credentials, Email: e.target.value })} />
                    {(typeof validationErrors.Email) && <Text type="paragraph" className="text-red-500 text-[12px]">{validationErrors.Email}</Text>}
                    <Input onBlur={() => registerValidation()} text="Şifre" value={credentials.Password} type="password" onChange={(e) => setCredentials({ ...credentials, Password: e.target.value })} />
                    {(typeof validationErrors.Password) && <Text type="paragraph" className="text-red-500 text-[12px]">{validationErrors.Password}</Text>}
                    <Input onBlur={() => registerValidation()} text="Şifre Tekrar" value={credentials.ConfirmPassword} type="password" onChange={(e) => setCredentials({ ...credentials, ConfirmPassword: e.target.value })} />
                    {(typeof validationErrors.ConfirmPassword) && <Text type="paragraph" className="text-red-500 text-[12px]">{validationErrors.ConfirmPassword}</Text>}
                    <div className="mt-[20px] w-full">
                        <div className="flex items-center leading-none gap-2">
                            <input checked disabled={true} className="h-[24px] appearance-none w-[24px] bg-primary-flat checked:accent-white-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-primary-flat checked:after:content-['✓']" type="checkbox" />
                            <Text type="h4" className="!text-[14px] font-nexa-light !py-[10px]"><span className="text-secondary">Kullanıcı Sözleşmesi</span>’ni okudum anladım.</Text>
                        </div>
                        <div className="flex items-center leading-none gap-2">
                            <input checked disabled={true} className="h-[24px] appearance-none w-[24px] bg-primary-flat checked:accent-white-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-primary-flat checked:after:content-['✓']" type="checkbox" />
                            <Text type="h4" className="!text-[14px] font-nexa-light !py-[10px]"><span className="text-secondary">Aydınlatma Metni</span>’ni okudum anladım.</Text>
                        </div>
                    </div>
                    <Button onClick={submitRegister} type="secondary" className="w-full mt-[20px] h-[48px] leading-none flex items-center justify-center">
                        <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Üye ol</Text>
                    </Button>
                </div>
                <div className="bg-[url(/images/png/register.png)] hidden md:grid place-content-center bg-cover bg-no-repeat w-[610px] h-[620px]">
                    <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.</Text>
                </div>
            </div>
        </AuthLayout>
    );
}
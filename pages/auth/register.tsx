import Button from "@components/Button";
import Input from "@components/Input/Input";
import AuthLayout from "@components/Layouts/AuthLayout";
import Text from "@components/Text";

const Register = () => {
    return (
        <AuthLayout>
            <div className="md:w-[1440px] md:h-full h-[500px] w-[340px] flex justify-center items-center rounded-[30px_5px]">
                <div className=" w-[380px] h-[402px] flex flex-col items-center md:mr-[102px]">
                    <Text type="h3" className="text-white !text-[34px]">Üye Ol</Text>
                    <Input text="E-posta" type="email" />
                    <Input text="Şifre" type="password" />
                    <Input text="Şifre Tekrar" type="password" />
                    <div className="mt-[20px] w-full">
                        <div className="flex items-center leading-none gap-2">
                            <input className="h-[24px] appearance-none w-[24px] bg-primary-flat checked:accent-white-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-primary-flat checked:after:content-['✓']" type="checkbox" />
                            <Text type="h4" className="!text-[14px] font-nexa-light !py-[10px]"><span className="text-secondary">Kullanıcı Sözleşmesi</span>’ni okudum anladım.</Text>
                        </div>
                        <div className="flex items-center leading-none gap-2">
                            <input className="h-[24px] appearance-none w-[24px] bg-primary-flat checked:accent-white-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-primary-flat checked:after:content-['✓']" type="checkbox" />
                            <Text type="h4" className="!text-[14px] font-nexa-light !py-[10px]"><span className="text-secondary">Aydınlatma Metni</span>’ni okudum anladım.</Text>
                        </div>
                    </div>
                    <Button type="secondary" className="w-full mt-[20px] h-[48px] leading-none flex items-center justify-center">
                        <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Üye ol</Text>
                    </Button>
                </div>
                <div className="bg-[url(/images/png/register.png)] grid place-content-center bg-cover bg-no-repeat w-[610px] h-[620px]">
                    <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">
                        İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.</Text>
                </div>
            </div>
        </AuthLayout>
    );
}

    export default Register;
import Container from "@components/Container";
import LandingLayout from "@components/Layouts/LandingLayout";
import Text from "@components/Text";

const Login = () => {
    return (
        <LandingLayout>
            <Container className="h-[170px] .bg-[url(/images/png/kara-uzum.png)] bg-tertiary-flat bg-no-repeat bg-cover !min-w-full">
            </Container>
            <Container className="md:h-[1100px] h-[550px] grid place-content-center bg-tertiary-flat bg-no-repeat bg-cover !min-w-full">
                <div className="md:w-[1440px] md:h-[900px] h-[500px] w-[340px] flex justify-center items-center rounded-[30px_5px] bg-secondary-light">
                    <div className="border-2 border-red-500 w-[380px] h-[402px] flex flex-col items-center">
                        <Text type="h3" className="text-white !text-[34px]">Giriş Yap</Text>
                        <div className="flex flex-col w-full leading-none">
                            <Text type="h4" className="text-deepgreen-100 !text-[14px]  !py-[10px]">E-posta</Text>
                            <input className="h-[48px] bg-white-100 rounded-[5px_20px_0_20px]" type="email" />
                        </div>
                        <div className="flex flex-col w-full  leading-none">
                            <Text type="h4" className="text-deepgreen-100 !text-[14px]  !py-[10px]">Şifre,</Text>
                            <input className="h-[48px] bg-white-100 rounded-[5px_20px_0_20px]" type="email" />
                        </div>
                        <div>
                            <input className="h-[20px] appearance-none w-[20px] bg-white-100 checked:accent-white-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[0px] checked:after:h-[20px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:after:bg-[#D2D5C2] checked:after:content-['✓']" type="checkbox" />
                        </div>
                    </div>
                    <div className="bg-green-500 w-[610px] h-[620px]">
                        x
                    </div>
                </div>
            </Container>
        </LandingLayout>
    );
}

export default Login;